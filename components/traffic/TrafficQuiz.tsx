import React, { useState, useEffect } from 'react';

interface QuizQuestion {
    id: number;
    question: string;
    emoji: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
    type: 'text' | 'visual' | 'scenario';
}

const quizQuestions: QuizQuestion[] = [
    {
        id: 1,
        question: 'Bu levha neyi ifade eder?',
        emoji: '🛑',
        options: ['Yol Ver', 'Dur', 'Park Yasak', 'Hız Sınırı'],
        correctAnswer: 1,
        explanation: 'DUR levhası görüldüğünde araç tamamen durmalıdır.',
        type: 'visual'
    },
    {
        id: 2,
        question: 'Kırmızı ışıkta ne yapmalısınız?',
        emoji: '🚦',
        options: ['Hızlanmalı', 'Durmalı', 'Yavaşlamalı', 'Devam etmeli'],
        correctAnswer: 1,
        explanation: 'Kırmızı ışık yanıyorsa araç tamamen durmalıdır.',
        type: 'scenario'
    },
    {
        id: 3,
        question: 'Yaya geçidinde öncelik kimdedir?',
        emoji: '🚸',
        options: ['Arabada', 'Yayada', 'Hızlı olanda', 'Sağdan gelende'],
        correctAnswer: 1,
        explanation: 'Yaya geçidinde öncelik her zaman yayadır.',
        type: 'text'
    },
    {
        id: 4,
        question: 'Bu levha ne anlama gelir?',
        emoji: '⛔',
        options: ['Dur', 'Girilmez', 'Yol Ver', 'Park Yasak'],
        correctAnswer: 1,
        explanation: 'Girilmez levhası, o yola girişin yasak olduğunu gösterir.',
        type: 'visual'
    },
    {
        id: 5,
        question: 'Okul bölgesinde ne yapmalısınız?',
        emoji: '🏫',
        options: ['Hızlanmalı', 'Normal sürmeli', 'Yavaşlamalı', 'Kornaya basmalı'],
        correctAnswer: 2,
        explanation: 'Okul bölgesinde hız düşürülmeli ve dikkatli olunmalıdır.',
        type: 'scenario'
    },
    {
        id: 6,
        question: 'Kavşakta sağdan araç geliyorsa ne yapmalısınız?',
        emoji: '🚗',
        options: ['Hızlanmalı', 'Yol vermeli', 'Kornaya basmalı', 'Devam etmeli'],
        correctAnswer: 1,
        explanation: 'Sağdan gelen araca yol verilmelidir.',
        type: 'scenario'
    },
    {
        id: 7,
        question: 'Bu levha neyi gösterir?',
        emoji: '↪️',
        options: ['Düz git', 'Viraj', 'Dönüş yasak', 'Yol ver'],
        correctAnswer: 1,
        explanation: 'Viraj levhası, ileride keskin viraj olduğunu gösterir.',
        type: 'visual'
    },
    {
        id: 8,
        question: 'Emniyet kemeri ne zaman takılmalıdır?',
        emoji: '🔒',
        options: ['Otoyolda', 'Şehir içinde', 'Her zaman', 'Hızlı giderken'],
        correctAnswer: 2,
        explanation: 'Emniyet kemeri her zaman takılmalıdır.',
        type: 'text'
    },
    {
        id: 9,
        question: 'Sarı ışıkta ne yapmalısınız?',
        emoji: '🟡',
        options: ['Hızlanmalı', 'Durmalı', 'Devam etmeli', 'Kornaya basmalı'],
        correctAnswer: 1,
        explanation: 'Sarı ışık yanıyorsa durmaya hazırlanılmalıdır.',
        type: 'scenario'
    },
    {
        id: 10,
        question: 'Park yasak levhası hangisidir?',
        emoji: '🅿️',
        options: ['Mavi P', 'Kırmızı P', 'Yeşil P', 'Sarı P'],
        correctAnswer: 1,
        explanation: 'Kırmızı çizgili P levhası park yasağını gösterir.',
        type: 'visual'
    }
];

interface Props {
    onExit: () => void;
}

const TrafficQuiz: React.FC<Props> = ({ onExit }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [showExplanation, setShowExplanation] = useState(false);
    const [quizCompleted, setQuizCompleted] = useState(false);
    const [timeLeft, setTimeLeft] = useState(30);

    useEffect(() => {
        if (timeLeft > 0 && !showExplanation && !quizCompleted) {
            const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
            return () => clearTimeout(timer);
        } else if (timeLeft === 0 && !showExplanation) {
            handleAnswer(-1);
        }
    }, [timeLeft, showExplanation, quizCompleted]);

    const handleAnswer = (answerIndex: number) => {
        setSelectedAnswer(answerIndex);
        setShowExplanation(true);
        
        if (answerIndex === quizQuestions[currentQuestion].correctAnswer) {
            setScore(score + 10);
        }
    };

    const handleNext = () => {
        if (currentQuestion < quizQuestions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setSelectedAnswer(null);
            setShowExplanation(false);
            setTimeLeft(30);
        } else {
            setQuizCompleted(true);
        }
    };

    const restartQuiz = () => {
        setCurrentQuestion(0);
        setScore(0);
        setSelectedAnswer(null);
        setShowExplanation(false);
        setQuizCompleted(false);
        setTimeLeft(30);
    };

    if (quizCompleted) {
        const percentage = (score / (quizQuestions.length * 10)) * 100;
        return (
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white p-4 flex items-center justify-center">
                <div className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/20 max-w-2xl w-full text-center">
                    <div className="text-8xl mb-6">
                        {percentage >= 80 ? '🏆' : percentage >= 60 ? '🎉' : '📚'}
                    </div>
                    <h2 className="text-4xl font-black mb-4">Test Tamamlandı!</h2>
                    <div className="text-6xl font-black text-yellow-400 mb-4">{score} / {quizQuestions.length * 10}</div>
                    <p className="text-2xl mb-8">Başarı Oranı: %{percentage.toFixed(0)}</p>
                    
                    <div className="bg-white/5 p-6 rounded-2xl mb-6">
                        {percentage >= 80 && <p className="text-green-400 font-bold">🎊 Mükemmel! Trafik kurallarını çok iyi biliyorsun!</p>}
                        {percentage >= 60 && percentage < 80 && <p className="text-yellow-400 font-bold">👍 İyi! Biraz daha çalışmalısın.</p>}
                        {percentage < 60 && <p className="text-red-400 font-bold">📖 Daha fazla çalışman gerekiyor.</p>}
                    </div>

                    <div className="flex gap-4 justify-center">
                        <button onClick={restartQuiz} className="bg-gradient-to-r from-green-500 to-emerald-600 px-8 py-4 rounded-xl font-black hover:scale-105 transition-all">
                            🔄 TEKRAR DENE
                        </button>
                        <button onClick={onExit} className="bg-white/10 hover:bg-white/20 px-8 py-4 rounded-xl font-black transition-all">
                            ⬅ MENÜYE DÖN
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    const question = quizQuestions[currentQuestion];
    const isCorrect = selectedAnswer === question.correctAnswer;

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white p-4">
            <div className="w-full max-w-4xl mx-auto">
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                    <button onClick={onExit} className="bg-white/10 hover:bg-white/20 px-6 py-3 rounded-xl border border-white/10 transition-all font-bold">
                        ⬅ GERİ
                    </button>
                    <div className="text-center">
                        <h2 className="text-2xl md:text-4xl font-black">📝 TRAFİK TESTİ</h2>
                        <p className="text-sm text-white/60">Soru {currentQuestion + 1} / {quizQuestions.length}</p>
                    </div>
                    <div className="text-right">
                        <div className="text-3xl font-black text-yellow-400">{score}</div>
                        <p className="text-xs text-white/60">PUAN</p>
                    </div>
                </div>

                {/* Progress Bar */}
                <div className="bg-white/10 rounded-full h-3 mb-6 overflow-hidden">
                    <div 
                        className="bg-gradient-to-r from-blue-500 to-cyan-500 h-full transition-all duration-300"
                        style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
                    ></div>
                </div>

                {/* Timer */}
                <div className="text-center mb-6">
                    <div className={`inline-block px-6 py-3 rounded-full font-black text-2xl ${
                        timeLeft <= 10 ? 'bg-red-500/20 text-red-400 animate-pulse' : 'bg-white/10'
                    }`}>
                        ⏱️ {timeLeft}s
                    </div>
                </div>

                {/* Question Card */}
                <div className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/20 mb-6">
                    <div className="text-8xl text-center mb-6">{question.emoji}</div>
                    <h3 className="text-2xl md:text-3xl font-black text-center mb-8">{question.question}</h3>

                    {/* Options */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {question.options.map((option, index) => (
                            <button
                                key={index}
                                onClick={() => !showExplanation && handleAnswer(index)}
                                disabled={showExplanation}
                                className={`p-6 rounded-2xl font-bold text-lg transition-all ${
                                    showExplanation
                                        ? index === question.correctAnswer
                                            ? 'bg-green-500 text-white scale-105'
                                            : index === selectedAnswer
                                            ? 'bg-red-500 text-white'
                                            : 'bg-white/5 text-white/40'
                                        : 'bg-white/10 hover:bg-white/20 hover:scale-105'
                                }`}
                            >
                                <span className="mr-3">{String.fromCharCode(65 + index)})</span>
                                {option}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Explanation */}
                {showExplanation && (
                    <div className={`p-6 rounded-2xl mb-6 ${isCorrect ? 'bg-green-500/20 border-2 border-green-500' : 'bg-red-500/20 border-2 border-red-500'}`}>
                        <div className="flex items-center gap-3 mb-3">
                            <span className="text-4xl">{isCorrect ? '✅' : '❌'}</span>
                            <h4 className="text-2xl font-black">{isCorrect ? 'Doğru!' : 'Yanlış!'}</h4>
                        </div>
                        <p className="text-white/90">{question.explanation}</p>
                    </div>
                )}

                {/* Next Button */}
                {showExplanation && (
                    <button
                        onClick={handleNext}
                        className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 py-4 rounded-2xl font-black text-xl hover:scale-105 transition-all"
                    >
                        {currentQuestion < quizQuestions.length - 1 ? 'SONRAKİ SORU ➡️' : 'TESTİ BİTİR 🏁'}
                    </button>
                )}
            </div>
        </div>
    );
};

export default TrafficQuiz;
