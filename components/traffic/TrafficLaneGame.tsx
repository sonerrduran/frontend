import React, { useState, useEffect } from 'react';

interface Props {
    onExit: () => void;
}

const TrafficLaneGame: React.FC<Props> = ({ onExit }) => {
    const [carLane, setCarLane] = useState(1); // 0, 1, 2
    const [obstacles, setObstacles] = useState<{ id: number; lane: number; position: number; type: string }[]>([]);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    const [speed, setSpeed] = useState(5);
    const [nextId, setNextId] = useState(0);

    useEffect(() => {
        if (gameOver) return;

        // Spawn obstacles
        const spawnInterval = setInterval(() => {
            const lane = Math.floor(Math.random() * 3);
            const types = ['🚧', '⚠️', '🛑', '🚗'];
            const type = types[Math.floor(Math.random() * types.length)];
            
            setObstacles(prev => [...prev, {
                id: nextId,
                lane,
                position: 0,
                type
            }]);
            setNextId(n => n + 1);
        }, 1500);

        return () => clearInterval(spawnInterval);
    }, [gameOver, nextId]);

    useEffect(() => {
        if (gameOver) return;

        const gameLoop = setInterval(() => {
            setObstacles(prev => {
                const updated = prev.map(obs => ({
                    ...obs,
                    position: obs.position + speed
                }));

                // Check collisions
                updated.forEach(obs => {
                    if (obs.position > 85 && obs.position < 95 && obs.lane === carLane) {
                        setGameOver(true);
                    }
                });

                // Remove off-screen obstacles and add score
                const filtered = updated.filter(obs => {
                    if (obs.position >= 100) {
                        setScore(s => s + 10);
                        return false;
                    }
                    return true;
                });

                return filtered;
            });

            // Increase speed gradually
            setSpeed(s => Math.min(s + 0.01, 15));
        }, 50);

        return () => clearInterval(gameLoop);
    }, [gameOver, carLane, speed]);

    const changeLane = (direction: 'left' | 'right') => {
        if (direction === 'left' && carLane > 0) {
            setCarLane(carLane - 1);
        } else if (direction === 'right' && carLane < 2) {
            setCarLane(carLane + 1);
        }
    };

    useEffect(() => {
        const handleKeyPress = (e: KeyboardEvent) => {
            if (e.key === 'ArrowLeft' || e.key === 'a') {
                changeLane('left');
            } else if (e.key === 'ArrowRight' || e.key === 'd') {
                changeLane('right');
            }
        };

        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [carLane]);

    if (gameOver) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-emerald-900 text-white p-4 flex items-center justify-center">
                <div className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/20 max-w-2xl w-full text-center">
                    <div className="text-8xl mb-6">💥</div>
                    <h2 className="text-4xl font-black mb-4">Çarpıştın!</h2>
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
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-emerald-900 text-white p-4">
            <div className="w-full max-w-4xl mx-auto">
                <div className="flex justify-between items-center mb-6">
                    <button onClick={onExit} className="bg-white/10 hover:bg-white/20 px-6 py-3 rounded-xl border border-white/10 transition-all font-bold">
                        ⬅ GERİ
                    </button>
                    <h2 className="text-2xl md:text-4xl font-black">🛣️ DOĞRU ŞERİT</h2>
                    <div className="bg-green-500/20 px-6 py-3 rounded-xl border border-green-500">
                        <span className="font-black text-2xl">{score}</span>
                    </div>
                </div>

                {/* Game Area */}
                <div className="bg-white/10 backdrop-blur-xl p-6 rounded-3xl border border-white/20 mb-6">
                    <div className="relative h-[600px] bg-gray-800 rounded-2xl overflow-hidden">
                        {/* Road lanes */}
                        <div className="absolute inset-0 flex">
                            <div className="flex-1 bg-gray-700 border-r-4 border-yellow-400"></div>
                            <div className="flex-1 bg-gray-700 border-r-4 border-yellow-400"></div>
                            <div className="flex-1 bg-gray-700"></div>
                        </div>

                        {/* Lane markers animation */}
                        <div className="absolute inset-0 flex">
                            {[0, 1, 2].map(lane => (
                                <div key={lane} className="flex-1 flex flex-col justify-around">
                                    {Array.from({ length: 10 }).map((_, i) => (
                                        <div key={i} className="w-2 h-12 bg-white/30 mx-auto"></div>
                                    ))}
                                </div>
                            ))}
                        </div>

                        {/* Obstacles */}
                        {obstacles.map(obs => (
                            <div
                                key={obs.id}
                                className="absolute text-5xl transition-all"
                                style={{
                                    left: `${obs.lane * 33.33 + 16.66}%`,
                                    top: `${obs.position}%`,
                                    transform: 'translate(-50%, -50%)'
                                }}
                            >
                                {obs.type}
                            </div>
                        ))}

                        {/* Player car */}
                        <div
                            className="absolute text-6xl transition-all duration-200"
                            style={{
                                left: `${carLane * 33.33 + 16.66}%`,
                                bottom: '10%',
                                transform: 'translateX(-50%)'
                            }}
                        >
                            🚗
                        </div>
                    </div>
                </div>

                {/* Controls */}
                <div className="grid grid-cols-2 gap-4 max-w-md mx-auto mb-4">
                    <button
                        onClick={() => changeLane('left')}
                        className="bg-white/10 hover:bg-white/20 py-6 rounded-xl font-black text-2xl transition-all active:scale-95"
                    >
                        ⬅️ SOLA
                    </button>
                    <button
                        onClick={() => changeLane('right')}
                        className="bg-white/10 hover:bg-white/20 py-6 rounded-xl font-black text-2xl transition-all active:scale-95"
                    >
                        SAĞA ➡️
                    </button>
                </div>

                <div className="text-center text-white/60 text-sm">
                    <p>Ok tuşları veya A/D ile şerit değiştir</p>
                    <p className="mt-2">Engellerden kaçın!</p>
                </div>
            </div>
        </div>
    );
};

export default TrafficLaneGame;
