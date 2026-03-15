import React, { useState, useEffect } from 'react';
import GameWrapper from '../../../common/GameWrapper';
import RulesOverlay from '../../../common/RulesOverlay';
import GameOverOverlay from '../../../common/GameOverOverlay';

interface TrafficLightGameProps {
  onExit: () => void;
}

type LightColor = 'red' | 'yellow' | 'green';

export default function TrafficLightGame({ onExit }: TrafficLightGameProps) {
  const [currentLight, setCurrentLight] = useState<LightColor>('red');
  const [score, setScore] = useState(0);
  const [mistakes, setMistakes] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [message, setMessage] = useState('Işık değişecek, hazır ol!');
  const [canMove, setCanMove] = useState(false);
  const [showRules, setShowRules] = useState(true);
  const [timeLeft, setTimeLeft] = useState(120); // 2 dakika
  const [round, setRound] = useState(1);

  const maxMistakes = 3;
  const maxRounds = 10;

  // Timer
  useEffect(() => {
    if (gameOver || showRules || timeLeft === 0) return;
    const timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [gameOver, showRules, timeLeft]);

  // Süre bitince oyun biter
  useEffect(() => {
    if (timeLeft === 0 && !gameOver) {
      setGameOver(true);
    }
  }, [timeLeft, gameOver]);

  // Işık değiştirme
  useEffect(() => {
    if (gameOver || mistakes >= maxMistakes || showRules) return;

    const interval = setInterval(() => {
      const lights: LightColor[] = ['red', 'yellow', 'green'];
      const randomLight = lights[Math.floor(Math.random() * lights.length)];
      setCurrentLight(randomLight);
      setCanMove(false);
      setMessage(
        randomLight === 'green' ? 'YEŞİL IŞIK! GEÇ!' : 
        randomLight === 'red' ? 'KIRMIZI IŞIK! DUR!' : 
        'SARI IŞIK! DİKKAT!'
      );
    }, 2500);

    return () => clearInterval(interval);
  }, [gameOver, mistakes, showRules]);

  const handleAction = (action: 'go' | 'wait') => {
    if (canMove || gameOver) return;
    setCanMove(true);

    let correct = false;
    if (currentLight === 'green' && action === 'go') {
      setScore(score + 10);
      setMessage('✅ Doğru! Yeşil ışıkta geçilir!');
      correct = true;
    } else if (currentLight === 'red' && action === 'wait') {
      setScore(score + 10);
      setMessage('✅ Doğru! Kırmızı ışıkta durulur!');
      correct = true;
    } else if (currentLight === 'yellow' && action === 'wait') {
      setScore(score + 5);
      setMessage('✅ İyi! Sarı ışıkta dikkatli ol!');
      correct = true;
    } else {
      setMistakes(mistakes + 1);
      setMessage('❌ Yanlış! Dikkatli ol!');
      if (mistakes + 1 >= maxMistakes) {
        setGameOver(true);
      }
    }

    if (correct && round < maxRounds) {
      setRound(round + 1);
    } else if (correct && round >= maxRounds) {
      setGameOver(true);
    }
  };

  const resetGame = () => {
    setScore(0);
    setMistakes(0);
    setGameOver(false);
    setCurrentLight('red');
    setMessage('Işık değişecek, hazır ol!');
    setCanMove(false);
    setTimeLeft(120);
    setRound(1);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const calculateStars = () => {
    if (mistakes >= maxMistakes || timeLeft === 0) return 1;
    if (score >= 90) return 5;
    if (score >= 70) return 4;
    if (score >= 50) return 3;
    if (score >= 30) return 2;
    return 1;
  };

  const gameRules = [
    'Trafik ışığı değiştiğinde doğru hareketi seç.',
    'Yeşil ışıkta "GEÇ" butonuna bas.',
    'Kırmızı ışıkta "DUR" butonuna bas.',
    'Sarı ışıkta dikkatli ol ve "DUR" butonuna bas.',
    '3 hata hakkın var. Dikkatli ol!'
  ];

  return (
    <>
      <GameWrapper
        title="Trafik Işığı Oyunu"
        emoji="🚦"
        subtitle={`Tur: ${round}/${maxRounds}`}
        gradientFrom="from-red-600/40"
        gradientVia="via-yellow-600/40"
        gradientTo="to-green-600/40"
        onExit={onExit}
        onShowRules={() => setShowRules(true)}
        infoCard={
          <>
            <div className="px-6 py-3 bg-slate-700/50 backdrop-blur-sm rounded-xl border border-white/10">
              <span className="text-white font-bold">Hata: {mistakes}/{maxMistakes}</span>
            </div>
            <div className={`px-6 py-3 rounded-xl border-2 font-bold ${timeLeft <= 30 ? 'border-red-500 text-red-500 bg-red-500/10 animate-pulse' : 'border-yellow-400 text-yellow-400 bg-yellow-500/10'}`}>
              ⏱️ {formatTime(timeLeft)}
            </div>
          </>
        }
      >
        <div className="flex flex-col items-center">
          {/* Trafik Işığı */}
          <div className="flex justify-center mb-8">
            <div className="bg-slate-900/80 rounded-3xl p-6 border-4 border-slate-700 shadow-2xl">
              <div className={`w-24 h-24 rounded-full mb-4 transition-all duration-300 ${currentLight === 'red' ? 'bg-red-500 shadow-[0_0_30px_rgba(239,68,68,0.8)]' : 'bg-red-900/30'}`}></div>
              <div className={`w-24 h-24 rounded-full mb-4 transition-all duration-300 ${currentLight === 'yellow' ? 'bg-yellow-500 shadow-[0_0_30px_rgba(234,179,8,0.8)]' : 'bg-yellow-900/30'}`}></div>
              <div className={`w-24 h-24 rounded-full transition-all duration-300 ${currentLight === 'green' ? 'bg-green-500 shadow-[0_0_30px_rgba(34,197,94,0.8)]' : 'bg-green-900/30'}`}></div>
            </div>
          </div>

          {/* Mesaj */}
          <div className="text-center mb-8 bg-slate-900/50 rounded-2xl p-6 min-h-[80px] flex items-center justify-center">
            <p className="text-2xl md:text-3xl font-black text-white">{message}</p>
          </div>

          {/* Butonlar */}
          <div className="flex gap-4 justify-center mb-6">
            <button
              onClick={() => handleAction('go')}
              disabled={canMove}
              className="px-8 py-6 bg-green-600 hover:bg-green-500 text-white rounded-2xl font-black text-2xl disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-105 shadow-lg"
            >
              🚶 GEÇ
            </button>
            <button
              onClick={() => handleAction('wait')}
              disabled={canMove}
              className="px-8 py-6 bg-red-600 hover:bg-red-500 text-white rounded-2xl font-black text-2xl disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-105 shadow-lg"
            >
              ✋ DUR
            </button>
          </div>

          {/* Puan Göstergesi */}
          <div className="bg-slate-900/50 rounded-2xl p-4 text-center">
            <p className="text-white text-xl font-bold">Puan: ⭐ {score}</p>
          </div>
        </div>
      </GameWrapper>

      <RulesOverlay
        show={showRules}
        onClose={() => setShowRules(false)}
        title="Trafik Işığı Oyunu"
        emoji="🚦"
        rules={gameRules}
        accentColor="red"
      />

      <GameOverOverlay
        show={gameOver}
        won={mistakes < maxMistakes && timeLeft > 0}
        score={calculateStars()}
        onRestart={resetGame}
        onExit={() => onExit()}
        accentColor="red"
        winTitle="BAŞARDIN!"
        loseTitle={timeLeft === 0 ? 'SÜRE BİTTİ' : 'ÇOK HATA!'}
        timeUp={timeLeft === 0}
      />
    </>
  );
}
