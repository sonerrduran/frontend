import React, { useState, useEffect } from 'react';

interface Props {
    onExit: () => void;
}

const TrafficCity: React.FC<Props> = ({ onExit }) => {
    const [carPosition, setCarPosition] = useState({ x: 5, y: 5 });
    const [score, setScore] = useState(0);
    const [violations, setViolations] = useState(0);
    const [currentSign, setCurrentSign] = useState<string | null>(null);
    const [gameMessage, setGameMessage] = useState('Şehirde dolaş ve kurallara uy!');

    const gridSize = 10;

    // Traffic signs positions
    const signs = [
        { x: 3, y: 2, type: '🛑', rule: 'Dur!' },
        { x: 7, y: 4, type: '🚸', rule: 'Yaya geçidi!' },
        { x: 5, y: 7, type: '⚠️', rule: 'Dikkat!' },
        { x: 2, y: 8, type: '🏫', rule: 'Okul bölgesi!' },
    ];

    const handleMove = (direction: string) => {
        let newX = carPosition.x;
        let newY = carPosition.y;

        switch (direction) {
            case 'up':
                newY = Math.max(0, carPosition.y - 1);
                break;
            case 'down':
                newY = Math.min(gridSize - 1, carPosition.y + 1);
                break;
            case 'left':
                newX = Math.max(0, carPosition.x - 1);
                break;
            case 'right':
                newX = Math.min(gridSize - 1, carPosition.x + 1);
                break;
        }

        setCarPosition({ x: newX, y: newY });

        // Check if car is on a sign
        const signAtPosition = signs.find(s => s.x === newX && s.y === newY);
        if (signAtPosition) {
            setCurrentSign(signAtPosition.type);
            setGameMessage(signAtPosition.rule);
            setScore(score + 10);
        } else {
            setCurrentSign(null);
            setGameMessage('Şehirde dolaş ve kurallara uy!');
        }
    };

    useEffect(() => {
        const handleKeyPress = (e: KeyboardEvent) => {
            switch (e.key) {
                case 'ArrowUp':
                case 'w':
                    handleMove('up');
                    break;
                case 'ArrowDown':
                case 's':
                    handleMove('down');
                    break;
                case 'ArrowLeft':
                case 'a':
                    handleMove('left');
                    break;
                case 'ArrowRight':
                case 'd':
                    handleMove('right');
                    break;
            }
        };

        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [carPosition]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900 text-white p-4">
            <div className="w-full max-w-5xl mx-auto">
                <div className="flex justify-between items-center mb-6">
                    <button onClick={onExit} className="bg-white/10 hover:bg-white/20 px-6 py-3 rounded-xl border border-white/10 transition-all font-bold">
                        ⬅ GERİ
                    </button>
                    <h2 className="text-2xl md:text-4xl font-black">🏙️ TRAFİK ŞEHRİ</h2>
                    <div className="flex gap-4">
                        <div className="bg-green-500/20 px-4 py-2 rounded-xl border border-green-500">
                            <span className="font-black">{score}</span> Puan
                        </div>
                        <div className="bg-red-500/20 px-4 py-2 rounded-xl border border-red-500">
                            <span className="font-black">{violations}</span> İhlal
                        </div>
                    </div>
                </div>

                {/* Game Message */}
                <div className="bg-yellow-500/20 border-2 border-yellow-500 p-4 rounded-xl mb-6 text-center">
                    <p className="font-bold text-xl">{gameMessage}</p>
                </div>

                {/* City Grid */}
                <div className="bg-white/10 backdrop-blur-xl p-6 rounded-3xl border border-white/20 mb-6">
                    <div className="grid gap-2" style={{ gridTemplateColumns: `repeat(${gridSize}, 1fr)` }}>
                        {Array.from({ length: gridSize * gridSize }).map((_, index) => {
                            const x = index % gridSize;
                            const y = Math.floor(index / gridSize);
                            const isCar = carPosition.x === x && carPosition.y === y;
                            const sign = signs.find(s => s.x === x && s.y === y);
                            const isRoad = (x + y) % 2 === 0;

                            return (
                                <div
                                    key={index}
                                    className={`aspect-square rounded-lg flex items-center justify-center text-3xl transition-all ${
                                        isCar
                                            ? 'bg-blue-500 scale-110'
                                            : sign
                                            ? 'bg-yellow-500/30'
                                            : isRoad
                                            ? 'bg-gray-700'
                                            : 'bg-green-700/30'
                                    }`}
                                >
                                    {isCar ? '🚗' : sign ? sign.type : ''}
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Controls */}
                <div className="grid grid-cols-3 gap-4 max-w-md mx-auto mb-6">
                    <div></div>
                    <button
                        onClick={() => handleMove('up')}
                        className="bg-white/10 hover:bg-white/20 p-6 rounded-xl font-black text-2xl transition-all active:scale-95"
                    >
                        ⬆️
                    </button>
                    <div></div>
                    <button
                        onClick={() => handleMove('left')}
                        className="bg-white/10 hover:bg-white/20 p-6 rounded-xl font-black text-2xl transition-all active:scale-95"
                    >
                        ⬅️
                    </button>
                    <button
                        onClick={() => handleMove('down')}
                        className="bg-white/10 hover:bg-white/20 p-6 rounded-xl font-black text-2xl transition-all active:scale-95"
                    >
                        ⬇️
                    </button>
                    <button
                        onClick={() => handleMove('right')}
                        className="bg-white/10 hover:bg-white/20 p-6 rounded-xl font-black text-2xl transition-all active:scale-95"
                    >
                        ➡️
                    </button>
                </div>

                <div className="text-center text-white/60 text-sm">
                    <p>Ok tuşları veya WASD ile hareket et</p>
                    <p className="mt-2">Trafik levhalarını bul ve puan kazan!</p>
                </div>
            </div>
        </div>
    );
};

export default TrafficCity;
