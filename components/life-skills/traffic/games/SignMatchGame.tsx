import React, { useState, useEffect } from 'react';
import GameWrapper from '../../../common/GameWrapper';
import RulesOverlay from '../../../common/RulesOverlay';
import GameOverOverlay from '../../../common/GameOverOverlay';

interface SignMatchGameProps {
  onExit: () => void;
}

interface Sign {
  id: number;
  icon: string;
  name: string;
  meaning: string;
}

const trafficSigns: Sign[] = [
  { id: 1, icon: '🛑', name: 'Dur', meaning: 'Durmalısın' },
  { id: 2, icon: '⚠️', name: 'Dikkat', meaning: 'Tehlike var' },
  { id: 3, icon: '🚸', name: 'Okul Geçidi', meaning: 'Çocuklar geçebilir' },
  { id: 4, icon: '🚫', name: 'Girilmez', meaning: 'Buradan giremezsin' },
  { id: 5, icon: '➡️', name: 'Sağa Dön', meaning: 'Sağa dönmelisin' },
  { id: 6, icon: '⬅️', name: 'Sola Dön', meaning: 'Sola dönmelisin' },
  { id: 7, icon: '🅿️', name: 'Park Yeri', meaning: 'Buraya park edebilirsin' },
  { id: 8, icon: '🚲', name: 'Bisiklet Yolu', meaning: 'Bisikletler için' }
];

export default function SignMatchGame({ onExit }: SignMatchGameProps) {
  const [score, setScore] = useState(0);
  const [currentSign, setCurrentSign] = useState<Sign | null>(null);
  const [options, setOptions] = useState<Sign[]>([]);
  const [feedback, setFeedback] = useState('');
  const [showFeedback, setShowFeedback] = useState(false);
  const [round, setRound] = useState(1);
  const [gameOver, setGameOver] = useState(false);
  const [showRules, setShowRules] = useState(true);
  const [timeLeft, setTimeLeft] = useState(120);
  const [mistakes, setMistakes] = useState(0);

  const maxMistakes = 3;
  const maxRounds = 10;

  // Timer
  useEffect(() => {
    if (gameOver || showRules || showFeedback || timeLeft === 0) return;
    const timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [gameOver, showRules, showFeedback, timeLeft]);

  // Süre bitince oyun biter
  useEffect(() => {
    if (timeLeft === 0 && !gameOver) {
      setGameOver(true);
    }
  }, [timeLeft, gameOver]);

  useEffect(() => {
    generateRound();
  }, []);

  const generateRound = () => {
    const randomSign = trafficSigns[Math.floor(Math.random() * trafficSigns.length)];
    setCurrentSign(randomSign);

    const wrongOptions = trafficSigns.filter(s => s.id !== randomSign.id);
    const shuffled = [...wrongOptions].sort(() => Math.random() - 0.5).slice(0, 3);
    const allOptions = [...shuffled, randomSign].sort(() => Math.random() - 0.5);
    
    setOptions(allOptions);
    setShowFeedback(false);
    setFeedback('');
  };

  const handleAnswer = (selectedSign: Sign) => {
    if (showFeedback) return;

    setShowFeedback(true);
    if (selectedSign.id === currentSign?.id) {
      setScore(score + 10);
      setFeedback('✅ Doğru! Harika!');
    } else {
      setMistakes(mistakes + 1);
      setFeedback(`❌ Yanlış! Doğru cevap: ${currentSign?.name}`);
      
      if (mistakes + 1 >= maxMistakes) {
        setTimeout(() => setGameOver(true), 2000);
        return;
      }
    }

    setTimeout(() => {
      if (round >= maxRounds) {
        setGameOver(true);
      } else {
        setRound(round + 1);
        generateRound();
      }
    }, 2000);
  };

  const resetGame = () => {
    setScore(0);
    setRound(1);
    setGameOver(false);
    setMistakes(0);
    setTimeLeft(120);
    generateRound();
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
    'Ekranda bir trafik işareti gösterilecek.',
    'İşaretin doğru anlamını seç.',
    'Her doğru cevap 10 puan kazandırır.',
    '3 yanlış hakkın var. Dikkatli düşün!',
    '10 tur tamamla ve yüksek skor al!'
  ];

  return (
    <>
      <GameWrapper
        title="İşaret Eşleştirme"
        emoji="🔺"
        subtitle={`Tur: ${round}/${maxRounds}`}
        gradientFrom="from-green-600/40"
        gradientVia="via-emerald-600/40"
        gradientTo="to-green-700/40"
        onExit={onExit}
        onShowRules={() => setShowRules(true)}
        infoCard={
          <>
            <div className="px-6 py-3 bg-slate-700/50 backdrop-blur-sm rounded-xl border border-white/10">
              <span className="text-white font-bold">Hata: {mistakes}/{maxMistakes}</span>
            </div>
            <div className={`px-6 py-3 rounded-xl border-2 font-bold ${timeLeft <= 30 ? 'border-red-500 text-red-500 bg-red-500/10 animate-pulse' : 'border-green-400 text-green-400 bg-green-500/10'}`}>
              ⏱️ {formatTime(timeLeft)}
            </div>
          </>
        }
      >
        <div className="flex flex-col items-center">
          {/* Soru */}
          <div className="bg-slate-900/50 rounded-2xl p-8 mb-8 w-full max-w-2xl">
            <div className="text-center">
              <p className="text-xl text-white mb-6 font-bold">Bu işaretin anlamı nedir?</p>
              <div className="text-9xl mb-4">{currentSign?.icon}</div>
            </div>
          </div>

          {/* Seçenekler */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 w-full max-w-2xl">
            {options.map((sign) => (
              <button
                key={sign.id}
                onClick={() => handleAnswer(sign)}
                disabled={showFeedback}
                className={`p-6 rounded-xl font-bold text-lg transition-all transform hover:scale-105 ${
                  showFeedback && sign.id === currentSign?.id
                    ? 'bg-green-600 border-2 border-green-300 text-white scale-105'
                    : showFeedback
                    ? 'bg-slate-700/50 border-2 border-slate-600 text-slate-400'
                    : 'bg-slate-700/50 border-2 border-green-400/50 hover:bg-slate-600/50 text-white'
                } ${showFeedback ? 'cursor-not-allowed' : 'cursor-pointer'}`}
              >
                <div className="text-5xl mb-3">{sign.icon}</div>
                <div className="text-xl mb-1">{sign.name}</div>
                <div className="text-sm text-white/70">{sign.meaning}</div>
              </button>
            ))}
          </div>

          {/* Geri Bildirim */}
          {showFeedback && (
            <div className={`p-5 rounded-xl text-center font-bold text-xl mb-6 w-full max-w-2xl ${
              feedback.includes('✅') ? 'bg-green-600 border-2 border-green-300 text-white' : 'bg-red-600 border-2 border-red-300 text-white'
            }`}>
              {feedback}
            </div>
          )}

          {/* Puan */}
          <div className="bg-slate-900/50 rounded-2xl p-4 text-center">
            <p className="text-white text-xl font-bold">Puan: ⭐ {score}/100</p>
          </div>
        </div>
      </GameWrapper>

      <RulesOverlay
        show={showRules}
        onClose={() => setShowRules(false)}
        title="İşaret Eşleştirme"
        emoji="🔺"
        rules={gameRules}
        accentColor="green"
      />

      <GameOverOverlay
        show={gameOver}
        won={mistakes < maxMistakes && timeLeft > 0 && round > maxRounds}
        score={calculateStars()}
        onRestart={resetGame}
        onExit={() => onExit()}
        accentColor="green"
        winTitle="BAŞARDIN!"
        loseTitle={timeLeft === 0 ? 'SÜRE BİTTİ' : 'ÇOK HATA!'}
        timeUp={timeLeft === 0}
      />
    </>
  );
}
