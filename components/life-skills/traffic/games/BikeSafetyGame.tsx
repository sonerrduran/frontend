import React, { useState, useEffect } from 'react';
import GameWrapper from '../../../common/GameWrapper';
import RulesOverlay from '../../../common/RulesOverlay';
import GameOverOverlay from '../../../common/GameOverOverlay';

interface BikeSafetyGameProps {
  onExit: () => void;
}

interface Question {
  id: number;
  question: string;
  image: string;
  options: { text: string; correct: boolean; feedback: string }[];
}

const questions: Question[] = [
  {
    id: 1,
    question: 'Bisiklete binerken mutlaka ne takmalısın?',
    image: '🚲',
    options: [
      { text: 'Kask', correct: true, feedback: '✅ Doğru! Kask başını korur.' },
      { text: 'Şapka', correct: false, feedback: '❌ Hayır! Şapka koruma sağlamaz.' },
      { text: 'Gözlük', correct: false, feedback: '❌ Gözlük iyi ama kask şart!' },
      { text: 'Hiçbiri', correct: false, feedback: '❌ Kask olmadan bisiklet sürme!' }
    ]
  },
  {
    id: 2,
    question: 'Bisikletle nerede sürmelisin?',
    image: '🛣️',
    options: [
      { text: 'Bisiklet yolunda', correct: true, feedback: '✅ Mükemmel! En güvenli yer burası.' },
      { text: 'Kaldırımda', correct: false, feedback: '❌ Kaldırım yayalar içindir.' },
      { text: 'Yolun ortasında', correct: false, feedback: '❌ Çok tehlikeli!' },
      { text: 'Otobanda', correct: false, feedback: '❌ Asla! Çok tehlikeli!' }
    ]
  },
  {
    id: 3,
    question: 'Dönüş yaparken ne yapmalısın?',
    image: '↩️',
    options: [
      { text: 'El işareti vermeliyim', correct: true, feedback: '✅ Doğru! Arkadan gelenleri uyar.' },
      { text: 'Hiçbir şey', correct: false, feedback: '❌ Uyarı vermek önemli!' },
      { text: 'Bağırmalıyım', correct: false, feedback: '❌ El işareti daha etkili.' },
      { text: 'Aniden dönmeliyim', correct: false, feedback: '❌ Çok tehlikeli!' }
    ]
  },
  {
    id: 4,
    question: 'Karanlıkta bisiklet sürerken ne kullanmalısın?',
    image: '🌙',
    options: [
      { text: 'Işık ve reflektör', correct: true, feedback: '✅ Harika! Görünür olmalısın.' },
      { text: 'Hiçbir şey', correct: false, feedback: '❌ Seni göremezler!' },
      { text: 'Sadece fener', correct: false, feedback: '❌ Reflektör de gerekli.' },
      { text: 'Koyu renkli kıyafet', correct: false, feedback: '❌ Açık renkli olmalı!' }
    ]
  },
  {
    id: 5,
    question: 'Yağmurlu havada bisiklet sürerken ne yapmalısın?',
    image: '🌧️',
    options: [
      { text: 'Yavaş ve dikkatli sürmeliyim', correct: true, feedback: '✅ Doğru! Yol kaygan olur.' },
      { text: 'Hızlı sürmeliyim', correct: false, feedback: '❌ Çok tehlikeli!' },
      { text: 'Normal hızda gidebilirim', correct: false, feedback: '❌ Yavaşlamalısın!' },
      { text: 'Bisiklet sürmem', correct: false, feedback: '❌ Dikkatli olursan sürebilirsin.' }
    ]
  }
];

export default function BikeSafetyGame({ onExit }: BikeSafetyGameProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [showRules, setShowRules] = useState(true);
  const [timeLeft, setTimeLeft] = useState(180); // 3 dakika
  const [mistakes, setMistakes] = useState(0);

  const maxMistakes = 2;

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

  const handleAnswer = (index: number) => {
    if (showFeedback) return;
    
    setSelectedAnswer(index);
    setShowFeedback(true);
    
    if (questions[currentQuestion].options[index].correct) {
      setScore(score + 20);
    } else {
      setMistakes(mistakes + 1);
      if (mistakes + 1 >= maxMistakes) {
        setTimeout(() => setGameOver(true), 2000);
        return;
      }
    }
    
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setShowFeedback(false);
      } else {
        setGameOver(true);
      }
    }, 2000);
  };

  const resetGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setGameOver(false);
    setSelectedAnswer(null);
    setShowFeedback(false);
    setTimeLeft(180);
    setMistakes(0);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const calculateStars = () => {
    if (mistakes >= maxMistakes || timeLeft === 0) return 1;
    if (score === 100) return 5;
    if (score >= 80) return 4;
    if (score >= 60) return 3;
    if (score >= 40) return 2;
    return 1;
  };

  const question = questions[currentQuestion];

  const gameRules = [
    'Her soruda bisiklet güvenliği ile ilgili bir soru sorulacak.',
    'Doğru cevabı seç ve bisiklet güvenliği bilgini test et.',
    'Her doğru cevap 20 puan kazandırır.',
    '2 yanlış hakkın var. Dikkatli düşün!',
    'Süren bitirmeden tüm soruları cevapla.'
  ];

  return (
    <>
      <GameWrapper
        title="Bisiklet Güvenliği"
        emoji="🚲"
        subtitle={`Soru ${currentQuestion + 1}/${questions.length}`}
        gradientFrom="from-cyan-600/40"
        gradientVia="via-blue-600/40"
        gradientTo="to-cyan-700/40"
        onExit={onExit}
        onShowRules={() => setShowRules(true)}
        infoCard={
          <>
            <div className="px-6 py-3 bg-slate-700/50 backdrop-blur-sm rounded-xl border border-white/10">
              <span className="text-white font-bold">Hata: {mistakes}/{maxMistakes}</span>
            </div>
            <div className={`px-6 py-3 rounded-xl border-2 font-bold ${timeLeft <= 30 ? 'border-red-500 text-red-500 bg-red-500/10 animate-pulse' : 'border-cyan-400 text-cyan-400 bg-cyan-500/10'}`}>
              ⏱️ {formatTime(timeLeft)}
            </div>
          </>
        }
      >
        <div className="flex flex-col items-center">
          {/* Soru Kartı */}
          <div className="bg-slate-900/50 rounded-2xl p-8 mb-8 w-full max-w-2xl">
            <div className="text-center mb-6">
              <div className="text-8xl mb-4">{question.image}</div>
              <h3 className="text-2xl md:text-3xl font-bold text-white">{question.question}</h3>
            </div>
          </div>

          {/* Seçenekler */}
          <div className="space-y-4 w-full max-w-2xl mb-6">
            {question.options.map((option, index) => {
              const isSelected = selectedAnswer === index;
              const isCorrect = option.correct;
              const showResult = showFeedback && isSelected;

              return (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  disabled={showFeedback}
                  className={`w-full p-5 rounded-xl text-left transition-all font-bold text-lg ${
                    showResult
                      ? isCorrect
                        ? 'bg-green-600 border-2 border-green-300 text-white scale-105'
                        : 'bg-red-600 border-2 border-red-300 text-white'
                      : showFeedback && isCorrect
                      ? 'bg-green-600 border-2 border-green-300 text-white scale-105'
                      : 'bg-slate-700/50 border-2 border-cyan-400/50 hover:bg-slate-600/50 text-white hover:scale-102'
                  } ${showFeedback ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center font-black text-xl">
                      {String.fromCharCode(65 + index)}
                    </div>
                    <span>{option.text}</span>
                  </div>
                  {showResult && (
                    <div className="mt-3 pt-3 border-t border-white/20">
                      <p className="text-base">{option.feedback}</p>
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Puan */}
          <div className="bg-slate-900/50 rounded-2xl p-4 text-center">
            <p className="text-white text-xl font-bold">Puan: ⭐ {score}/100</p>
          </div>
        </div>
      </GameWrapper>

      <RulesOverlay
        show={showRules}
        onClose={() => setShowRules(false)}
        title="Bisiklet Güvenliği"
        emoji="🚲"
        rules={gameRules}
        accentColor="cyan"
      />

      <GameOverOverlay
        show={gameOver}
        won={mistakes < maxMistakes && timeLeft > 0 && currentQuestion >= questions.length - 1}
        score={calculateStars()}
        onRestart={resetGame}
        onExit={() => onExit()}
        accentColor="cyan"
        winTitle="BAŞARDIN!"
        loseTitle={timeLeft === 0 ? 'SÜRE BİTTİ' : 'ÇOK HATA!'}
        timeUp={timeLeft === 0}
      />
    </>
  );
}
