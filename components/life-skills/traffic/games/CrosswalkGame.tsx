import React, { useState, useEffect } from 'react';
import GameWrapper from '../../../common/GameWrapper';
import RulesOverlay from '../../../common/RulesOverlay';
import GameOverOverlay from '../../../common/GameOverOverlay';

interface CrosswalkGameProps {
  onExit: () => void;
}

export default function CrosswalkGame({ onExit }: CrosswalkGameProps) {
  const [position, setPosition] = useState(0); // 0-10 arası pozisyon
  const [cars, setCars] = useState<number[]>([]);
  const [score, setScore] = useState(0);
  const [mistakes, setMistakes] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [isMoving, setIsMoving] = useState(false);
  const [message, setMessage] = useState('Yaya geçidinden güvenle karşıya geç!');
  const [showRules, setShowRules] = useState(true);
  const [timeLeft, setTimeLeft] = useState(120); // 2 dakika
  const [successfulCrosses, setSuccessfulCrosses] = useState(0);

  const maxMistakes = 3;
  const targetCrosses = 5;

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

  // Araba hareketi
  useEffect(() => {
    if (gameOver || showRules) return;

    const interval = setInterval(() => {
      // Rastgele araba ekle
      if (Math.random() > 0.7) {
        setCars(prev => [...prev, 0]);
      }

      // Arabaları hareket ettir
      setCars(prev => prev.map(car => car + 1).filter(car => car < 12));
    }, 500);

    return () => clearInterval(interval);
  }, [gameOver, showRules]);

  // Çarpışma kontrolü
  useEffect(() => {
    if (isMoving && cars.some(car => car >= 4 && car <= 6 && position > 0 && position < 10)) {
      setMistakes(mistakes + 1);
      setMessage('❌ Arabaya çarptın! Dikkatli ol!');
      setPosition(0);
      setIsMoving(false);
      
      if (mistakes + 1 >= maxMistakes) {
        setGameOver(true);
      }
    }
  }, [cars, position, isMoving, mistakes]);

  // Hedef kontrolü
  useEffect(() => {
    if (successfulCrosses >= targetCrosses && !gameOver) {
      setGameOver(true);
    }
  }, [successfulCrosses, gameOver]);

  const moveForward = () => {
    if (position >= 10 || gameOver) return;
    
    setIsMoving(true);
    setPosition(position + 1);

    if (position + 1 === 10) {
      setScore(score + 20);
      setSuccessfulCrosses(successfulCrosses + 1);
      setMessage('✅ Harika! Güvenle karşıya geçtin!');
      setTimeout(() => {
        setPosition(0);
        setIsMoving(false);
        if (successfulCrosses + 1 < targetCrosses) {
          setMessage('Tekrar dene!');
        }
      }, 1000);
    }
  };

  const wait = () => {
    if (gameOver) return;
    setMessage('⏸️ Bekliyorsun... Güvenli olduğunda geç!');
  };

  const resetGame = () => {
    setScore(0);
    setMistakes(0);
    setPosition(0);
    setGameOver(false);
    setCars([]);
    setMessage('Yaya geçidinden güvenle karşıya geç!');
    setIsMoving(false);
    setTimeLeft(120);
    setSuccessfulCrosses(0);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const calculateStars = () => {
    if (mistakes >= maxMistakes || timeLeft === 0) return 1;
    if (successfulCrosses >= targetCrosses) return 5;
    if (score >= 60) return 4;
    if (score >= 40) return 3;
    if (score >= 20) return 2;
    return 1;
  };

  const gameRules = [
    'Yaya geçidinden güvenle karşıya geçmelisin.',
    'Arabalara dikkat et! Çarparsan can kaybedersin.',
    'Gerekirse bekle, güvenli olduğunda geç.',
    '5 kez başarıyla karşıya geçmeyi hedefle.',
    '3 hata hakkın var. Dikkatli ol!'
  ];

  return (
    <>
      <GameWrapper
        title="Yaya Geçidi Yarışı"
        emoji="🚶"
        subtitle={`Geçiş: ${successfulCrosses}/${targetCrosses}`}
        gradientFrom="from-blue-600/40"
        gradientVia="via-cyan-600/40"
        gradientTo="to-blue-700/40"
        onExit={onExit}
        onShowRules={() => setShowRules(true)}
        infoCard={
          <>
            <div className="px-6 py-3 bg-slate-700/50 backdrop-blur-sm rounded-xl border border-white/10">
              <span className="text-white font-bold">Hata: {mistakes}/{maxMistakes}</span>
            </div>
            <div className={`px-6 py-3 rounded-xl border-2 font-bold ${timeLeft <= 30 ? 'border-red-500 text-red-500 bg-red-500/10 animate-pulse' : 'border-blue-400 text-blue-400 bg-blue-500/10'}`}>
              ⏱️ {formatTime(timeLeft)}
            </div>
          </>
        }
      >
        <div className="flex flex-col items-center">
          {/* Mesaj */}
          <div className="bg-slate-900/50 rounded-2xl p-4 mb-6 w-full text-center">
            <p className="text-xl font-bold text-white">{message}</p>
          </div>

          {/* Oyun Alanı */}
          <div className="bg-slate-900/80 rounded-2xl p-4 border-4 border-slate-700 relative overflow-hidden mb-6 w-full max-w-2xl" style={{ height: '400px' }}>
            {/* Yol */}
            <div className="absolute inset-0 flex">
              {/* Sol kaldırım */}
              <div className="w-1/6 bg-gray-600"></div>
              
              {/* Yol */}
              <div className="flex-1 bg-gray-700 relative">
                {/* Yol çizgileri */}
                <div className="absolute inset-0 flex justify-around items-center">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-2 h-full bg-white/30 flex flex-col justify-around">
                      {[...Array(8)].map((_, j) => (
                        <div key={j} className="h-8 bg-white"></div>
                      ))}
                    </div>
                  ))}
                </div>

                {/* Yaya geçidi */}
                <div className="absolute left-0 right-0 flex justify-around" style={{ top: '40%', height: '20%' }}>
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className="w-12 h-full bg-white"></div>
                  ))}
                </div>

                {/* Arabalar */}
                {cars.map((car, index) => (
                  <div
                    key={index}
                    className="absolute text-4xl transition-all duration-500"
                    style={{ 
                      left: `${car * 8.33}%`,
                      top: '30%'
                    }}
                  >
                    🚗
                  </div>
                ))}

                {/* Oyuncu */}
                <div
                  className="absolute text-4xl transition-all duration-300"
                  style={{ 
                    left: '50%',
                    transform: 'translateX(-50%)',
                    bottom: `${position * 10}%`
                  }}
                >
                  🚶
                </div>
              </div>

              {/* Sağ kaldırım */}
              <div className="w-1/6 bg-gray-600"></div>
            </div>
          </div>

          {/* Kontroller */}
          <div className="flex gap-4 justify-center mb-6">
            <button
              onClick={moveForward}
              disabled={position >= 10}
              className="px-8 py-6 bg-green-600 hover:bg-green-500 text-white rounded-2xl font-black text-2xl disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-105 shadow-lg"
            >
              ⬆️ İLERLE
            </button>
            <button
              onClick={wait}
              className="px-8 py-6 bg-yellow-600 hover:bg-yellow-500 text-white rounded-2xl font-black text-2xl transition-all transform hover:scale-105 shadow-lg"
            >
              ⏸️ BEKLE
            </button>
          </div>

          {/* Puan */}
          <div className="bg-slate-900/50 rounded-2xl p-4 text-center">
            <p className="text-white text-xl font-bold">Puan: ⭐ {score}</p>
          </div>
        </div>
      </GameWrapper>

      <RulesOverlay
        show={showRules}
        onClose={() => setShowRules(false)}
        title="Yaya Geçidi Yarışı"
        emoji="🚶"
        rules={gameRules}
        accentColor="blue"
      />

      <GameOverOverlay
        show={gameOver}
        won={mistakes < maxMistakes && timeLeft > 0 && successfulCrosses >= targetCrosses}
        score={calculateStars()}
        onRestart={resetGame}
        onExit={() => onExit()}
        accentColor="blue"
        winTitle="BAŞARDIN!"
        loseTitle={timeLeft === 0 ? 'SÜRE BİTTİ' : 'ÇOK HATA!'}
        timeUp={timeLeft === 0}
      />
    </>
  );
}
