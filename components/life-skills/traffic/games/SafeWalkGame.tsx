import React, { useState, useEffect } from 'react';

interface SafeWalkGameProps {
  onExit: () => void;
}

type Position = 'sidewalk' | 'road';

export default function SafeWalkGame({ onExit }: SafeWalkGameProps) {
  const [position, setPosition] = useState<Position>('sidewalk');
  const [obstacles, setObstacles] = useState<{ id: number; position: Position; x: number }[]>([]);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [gameOver, setGameOver] = useState(false);
  const [nextId, setNextId] = useState(0);

  useEffect(() => {
    if (gameOver) return;

    const interval = setInterval(() => {
      if (Math.random() > 0.5) {
        const obstaclePosition: Position = Math.random() > 0.5 ? 'sidewalk' : 'road';
        setObstacles(prev => [...prev, { id: nextId, position: obstaclePosition, x: 100 }]);
        setNextId(nextId + 1);
      }

      setObstacles(prev => prev.map(obs => ({ ...obs, x: obs.x - 2 })).filter(obs => obs.x > -10));
      
      setScore(s => s + 1);
    }, 100);

    return () => clearInterval(interval);
  }, [gameOver, nextId]);

  useEffect(() => {
    obstacles.forEach(obs => {
      if (obs.x < 20 && obs.x > 10 && obs.position === position) {
        setLives(l => {
          const newLives = l - 1;
          if (newLives === 0) setGameOver(true);
          return newLives;
        });
        setObstacles(prev => prev.filter(o => o.id !== obs.id));
      }
    });
  }, [obstacles, position]);

  if (gameOver) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-4 flex items-center justify-center">
        <div className="bg-slate-800/80 backdrop-blur-xl rounded-3xl border border-slate-700 p-8 max-w-md text-center">
          <div className="text-6xl mb-4">🏁</div>
          <h2 className="text-4xl font-black text-white mb-4">Oyun Bitti!</h2>
          <p className="text-2xl text-white mb-6">Mesafe: ⭐ {score}m</p>
          <div className="flex gap-4 justify-center">
            <button onClick={() => { setScore(0); setLives(3); setGameOver(false); setObstacles([]); setPosition('sidewalk'); }} className="px-6 py-3 bg-purple-500 hover:bg-purple-400 text-white rounded-xl font-bold transition-all">
              Tekrar Oyna
            </button>
            <button onClick={onExit} className="px-6 py-3 bg-slate-600 hover:bg-slate-500 text-white rounded-xl font-bold transition-all">
              Çıkış
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <button onClick={onExit} className="px-6 py-3 bg-red-600/90 hover:bg-red-500/90 text-white rounded-xl font-bold transition-all">
            ← Çıkış
          </button>
          
          <div className="flex gap-4">
            <div className="px-6 py-3 bg-slate-800/80 rounded-xl">
              <span className="text-white font-black">Can: {'❤️'.repeat(lives)}</span>
            </div>
            <div className="px-6 py-3 bg-slate-800/80 rounded-xl">
              <span className="text-white font-black">⭐ {score}m</span>
            </div>
          </div>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-white text-4xl md:text-5xl font-black">👣 Güvenli Yürüyüş</h1>
          <p className="text-slate-400 text-lg mt-2">Kaldırımda güvenle yürü!</p>
        </div>

        <div className="bg-slate-800/80 backdrop-blur-xl rounded-3xl border border-slate-700 p-8">
          <div className="bg-gradient-to-br from-purple-500 via-pink-500 to-purple-600 rounded-2xl p-8 md:p-12 mb-8">
            <div className="bg-slate-900/80 rounded-2xl p-4 border-2 border-purple-400 relative overflow-hidden" style={{ height: '400px' }}>
              {/* Kaldırım */}
              <div className="absolute top-0 left-0 right-0 h-1/2 bg-gray-600 border-b-4 border-white">
                <div className="absolute top-2 left-2 text-white text-sm font-bold">KALDIRI M</div>
                {position === 'sidewalk' && (
                  <div className="absolute left-10 top-1/2 transform -translate-y-1/2 text-6xl">
                    🚶
                  </div>
                )}
                {obstacles.filter(o => o.position === 'sidewalk').map(obs => (
                  <div key={obs.id} className="absolute top-1/2 transform -translate-y-1/2 text-4xl transition-all" style={{ left: `${obs.x}%` }}>
                    🚧
                  </div>
                ))}
              </div>

              {/* Yol */}
              <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gray-800">
                <div className="absolute top-2 left-2 text-white text-sm font-bold">YOL</div>
                <div className="absolute inset-0 flex justify-around items-center opacity-30">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-2 h-full bg-white"></div>
                  ))}
                </div>
                {position === 'road' && (
                  <div className="absolute left-10 top-1/2 transform -translate-y-1/2 text-6xl">
                    🚶
                  </div>
                )}
                {obstacles.filter(o => o.position === 'road').map(obs => (
                  <div key={obs.id} className="absolute top-1/2 transform -translate-y-1/2 text-4xl transition-all" style={{ left: `${obs.x}%` }}>
                    🚗
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex gap-4 justify-center mb-6">
            <button
              onClick={() => setPosition('sidewalk')}
              className={`px-8 py-4 rounded-xl font-black text-xl transition-all ${
                position === 'sidewalk' ? 'bg-purple-500 text-white' : 'bg-purple-700/40 border-2 border-purple-400 text-white hover:bg-purple-600/40'
              }`}
            >
              ⬆️ KALDIRI M
            </button>
            <button
              onClick={() => setPosition('road')}
              className={`px-8 py-4 rounded-xl font-black text-xl transition-all ${
                position === 'road' ? 'bg-purple-500 text-white' : 'bg-purple-700/40 border-2 border-purple-400 text-white hover:bg-purple-600/40'
              }`}
            >
              ⬇️ YOL
            </button>
          </div>

          <div className="bg-purple-700/40 border-2 border-pink-400 rounded-2xl p-6 text-white">
            <h3 className="font-bold text-lg mb-2">📚 Kurallar:</h3>
            <ul className="space-y-1 text-sm">
              <li>👣 Kaldırımda yürü, yolda yürüme</li>
              <li>🚧 Engellere çarpma</li>
              <li>🚗 Arabalara dikkat et</li>
              <li>⬆️⬇️ Ok tuşlarıyla hareket et</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
