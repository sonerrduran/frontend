import React, { useState, useEffect } from 'react';

interface StopGoGameProps {
  onExit: () => void;
}

export default function StopGoGame({ onExit }: StopGoGameProps) {
  const [command, setCommand] = useState<'DUR' | 'GEÇ' | null>(null);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [gameOver, setGameOver] = useState(false);
  const [reactionTime, setReactionTime] = useState<number | null>(null);
  const [startTime, setStartTime] = useState<number | null>(null);

  useEffect(() => {
    if (gameOver || lives === 0) return;

    const interval = setInterval(() => {
      const commands: ('DUR' | 'GEÇ')[] = ['DUR', 'GEÇ'];
      const randomCommand = commands[Math.floor(Math.random() * commands.length)];
      setCommand(randomCommand);
      setStartTime(Date.now());
      setReactionTime(null);
    }, 3000);

    return () => clearInterval(interval);
  }, [gameOver, lives]);

  const handleAction = (action: 'stop' | 'go') => {
    if (!command || reactionTime !== null) return;

    const endTime = Date.now();
    const reaction = startTime ? endTime - startTime : 0;
    setReactionTime(reaction);

    const isCorrect = (command === 'DUR' && action === 'stop') || (command === 'GEÇ' && action === 'go');

    if (isCorrect) {
      const points = reaction < 1000 ? 15 : reaction < 2000 ? 10 : 5;
      setScore(score + points);
    } else {
      setLives(lives - 1);
      if (lives - 1 === 0) {
        setGameOver(true);
      }
    }
  };

  if (gameOver) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-4 flex items-center justify-center">
        <div className="bg-slate-800/80 backdrop-blur-xl rounded-3xl border border-slate-700 p-8 max-w-md text-center">
          <div className="text-6xl mb-4">🏁</div>
          <h2 className="text-4xl font-black text-white mb-4">Oyun Bitti!</h2>
          <p className="text-2xl text-white mb-6">Toplam Puan: ⭐ {score}</p>
          <div className="flex gap-4 justify-center">
            <button onClick={() => { setScore(0); setLives(3); setGameOver(false); setCommand(null); }} className="px-6 py-3 bg-orange-500 hover:bg-orange-400 text-white rounded-xl font-bold transition-all">
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
              <span className="text-white font-black">⭐ {score}</span>
            </div>
          </div>
        </div>

        <div className="text-center mb-8">
          <h1 className="text-white text-4xl md:text-5xl font-black">✋ Dur-Geç Oyunu</h1>
          <p className="text-slate-400 text-lg mt-2">Reflekslerini test et!</p>
        </div>

        <div className="bg-slate-800/80 backdrop-blur-xl rounded-3xl border border-slate-700 p-8">
          <div className="bg-gradient-to-br from-orange-500 via-red-500 to-orange-600 rounded-2xl p-8 md:p-12 mb-8">
            <div className="text-center mb-8">
              {command ? (
                <>
                  <div className={`text-9xl mb-6 ${command === 'DUR' ? 'animate-pulse' : ''}`}>
                    {command === 'DUR' ? '🛑' : '✅'}
                  </div>
                  <h2 className={`text-6xl font-black mb-4 ${command === 'DUR' ? 'text-red-200' : 'text-green-200'}`}>
                    {command}!
                  </h2>
                  {reactionTime && (
                    <p className="text-white text-xl">Tepki Süresi: {reactionTime}ms</p>
                  )}
                </>
              ) : (
                <>
                  <div className="text-9xl mb-6">⏳</div>
                  <h2 className="text-4xl font-black text-white">Hazır ol...</h2>
                </>
              )}
            </div>
          </div>

          <div className="flex gap-4 justify-center mb-6">
            <button
              onClick={() => handleAction('stop')}
              disabled={!command || reactionTime !== null}
              className="px-12 py-6 bg-red-500 hover:bg-red-400 text-white rounded-xl font-black text-2xl disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              🛑 DUR
            </button>
            <button
              onClick={() => handleAction('go')}
              disabled={!command || reactionTime !== null}
              className="px-12 py-6 bg-green-500 hover:bg-green-400 text-white rounded-xl font-black text-2xl disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              ✅ GEÇ
            </button>
          </div>

          <div className="bg-orange-700/40 border-2 border-red-400 rounded-2xl p-6 text-white">
            <h3 className="font-bold text-lg mb-2">📚 Nasıl Oynanır:</h3>
            <ul className="space-y-1 text-sm">
              <li>🛑 "DUR" yazısı çıkarsa DUR butonuna bas</li>
              <li>✅ "GEÇ" yazısı çıkarsa GEÇ butonuna bas</li>
              <li>⚡ Hızlı tepki ver, daha fazla puan kazan!</li>
              <li>❤️ 3 hata hakkın var</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
