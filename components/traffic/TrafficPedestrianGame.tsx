import React, { useState, useEffect } from 'react';

interface Props {
    onExit: () => void;
}

const TrafficPedestrianGame: React.FC<Props> = ({ onExit }) => {
    const [score, setScore] = useState(0);
    const [lives, setLives] = useState(3);
    const [pedestrians, setPedestrians] = useState<{ id: number; position: number; speed: number }[]>([]);
    const [cars, setCars] = useState<{ id: number; lane: number; position: number }[]>([]);
    const [isGreenLight, setIsGreenLight] = useState(false);
    const [gameOver, setGameOver] = useState(false);
    const [nextId, setNextId] = useState(0);

    useEffect(() => {
        if (gameOver) return;

        // Spawn pedestrians
        const pedestrianInterval = setInterval(() => {
            if (Math.random() > 0.7) {
                setPedestrians(prev => [...prev, {
                    id: nextId,
                    position: 0,
                    speed: 1 + Math.random()
                }]);
                setNextId(n => n + 1);
            }
        }, 2000);

        // Spawn cars
        const carInterval = setInterval(() => {
            if (Math.random() > 0.6) {
                setCars(prev => [...prev, {
                    id: nextId + 1000,
                    lane: Math.floor(Math.random() * 3),
                    position: 0
                }]);
                setNextId(n => n + 1);
            }
        }, 3000);

        return () => {
            clearInterval(pedestrianInterval);
            clearInterval(carInterval);
        };
    }, [gameOver, nextId]);

    useEffect(() => {
        if (gameOver) return;

        const gameLoop = setInterval(() => {
            // Move pedestrians
            setPedestrians(prev => {
                const updated = prev.map(p => ({
                    ...p,
                    position: p.position + p.speed
                })).filter(p => p.position < 100);

                // Check if pedestrian crossed safely
                updated.forEach(p => {
                    if (p.position >= 50 && p.position < 55) {
                        // Check if hit by car
                        const hit = cars.some(c => 
                            c.position > 40 && c.position < 60 && !isGreenLight
                        );
                        if (hit) {
                            setLives(l => l - 1);
                        } else if (p.position >= 50) {
                            setScore(s => s + 10);
                        }
                    }
                });

                return updated;
            });

            // Move cars
            setCars(prev => prev.map(c => ({
                ...c,
                position: isGreenLight ? c.position : c.position + 2
            })).filter(c => c.position < 100));

        }, 100);

        return () => clearInterval(gameLoop);
    }, [isGreenLight, cars, gameOver]);

    useEffect(() => {
        if (lives <= 0) {
            setGameOver(true);
        }
    }, [lives]);

    const toggleLight = () => {
        setIsGreenLight(!isGreenLight);
    };

    if (gameOver) {
        return (
            <div className="min-h-screen text-white p-4 flex items-center justify-center">
                <div className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/20 max-w-2xl w-full text-center">
                    <div className="text-8xl mb-6">🚸</div>
                    <h2 className="text-4xl font-black mb-4">Oyun Bitti!</h2>
                    <div className="text-6xl font-black text-yellow-400 mb-4">{score}</div>
                    <p className="text-2xl mb-8">Puan</p>
                    <div className="flex gap-4 justify-center">
                        <button onClick={() => window.location.reload()} className="bg-gradient-to-r from-green-500 to-emerald-600 px-8 py-4 rounded-xl font-black hover:scale-105 transition-all">
                            🔄 TEKRAR OYNA
                        </button>
                        <button onClick={onExit} className="bg-white/10 hover:bg-white/20 px-8 py-4 rounded-xl font-black transition-all">
                            ⬅ GERİ
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen text-white p-4">
            <div className="w-full max-w-5xl mx-auto">
                <div className="flex justify-between items-center mb-6">
                    <button onClick={onExit} className="bg-white/10 hover:bg-white/20 px-6 py-3 rounded-xl border border-white/10 transition-all font-bold">
                        ⬅ GERİ
                    </button>
                    <h2 className="text-2xl md:text-4xl font-black">🚸 YAYA GEÇİDİ</h2>
                    <div className="flex gap-4">
                        <div className="bg-green-500/20 px-4 py-2 rounded-xl border border-green-500">
                            <span className="font-black">{score}</span> Puan
                        </div>
                        <div className="bg-red-500/20 px-4 py-2 rounded-xl border border-red-500">
                            <span className="font-black">{lives}</span> ❤️
                        </div>
                    </div>
                </div>

                {/* Game Area */}
                <div className="bg-white/10 backdrop-blur-xl p-6 rounded-3xl border border-white/20 mb-6">
                    <div className="relative h-96 bg-gray-800 rounded-2xl overflow-hidden">
                        {/* Road */}
                        <div className="absolute inset-0 flex">
                            <div className="flex-1 bg-gray-700 border-r-4 border-yellow-400"></div>
                            <div className="flex-1 bg-gray-700 border-r-4 border-yellow-400"></div>
                            <div className="flex-1 bg-gray-700"></div>
                        </div>

                        {/* Crosswalk */}
                        <div className="absolute top-1/2 left-0 right-0 h-20 -translate-y-1/2 bg-white/20 flex items-center justify-around">
                            {Array.from({ length: 10 }).map((_, i) => (
                                <div key={i} className="w-12 h-full bg-white"></div>
                            ))}
                        </div>

                        {/* Pedestrians */}
                        {pedestrians.map(p => (
                            <div
                                key={p.id}
                                className="absolute text-4xl transition-all"
                                style={{
                                    left: '50%',
                                    top: `${p.position}%`,
                                    transform: 'translateX(-50%)'
                                }}
                            >
                                🚶
                            </div>
                        ))}

                        {/* Cars */}
                        {cars.map(c => (
                            <div
                                key={c.id}
                                className="absolute text-4xl transition-all"
                                style={{
                                    left: `${c.lane * 33 + 16}%`,
                                    top: `${c.position}%`
                                }}
                            >
                                🚗
                            </div>
                        ))}
                    </div>
                </div>

                {/* Traffic Light Control */}
                <button
                    onClick={toggleLight}
                    className={`w-full py-8 rounded-2xl font-black text-3xl transition-all ${
                        isGreenLight
                            ? 'bg-green-500 hover:bg-green-600'
                            : 'bg-red-500 hover:bg-red-600'
                    }`}
                >
                    {isGreenLight ? '🟢 YEŞİL IŞIK - ARAÇLAR DURDU' : '🔴 KIRMIZI IŞIK - ARAÇLAR GEÇİYOR'}
                </button>

                <div className="mt-4 text-center text-white/60">
                    <p>Işığı kontrol ederek yayaları güvenle karşıya geçir!</p>
                </div>
            </div>
        </div>
    );
};

export default TrafficPedestrianGame;
