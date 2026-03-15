import React, { useState, useEffect } from 'react';

interface Scenario {
    id: number;
    title: string;
    description: string;
    emoji: string;
    situation: string;
    options: { text: string; correct: boolean; feedback: string }[];
}

const scenarios: Scenario[] = [
    {
        id: 1,
        title: 'Kırmızı Işık',
        description: 'Kavşağa yaklaşıyorsunuz',
        emoji: '🚦',
        situation: 'Trafik ışığı kırmızı yanıyor. Ne yapmalısınız?',
        options: [
            { text: '🛑 Dur', correct: true, feedback: 'Doğru! Kırmızı ışıkta tamamen durmalısınız.' },
            { text: '⚡ Hızlan ve geç', correct: false, feedback: 'Yanlış! Bu çok tehlikeli ve yasalara aykırıdır.' },
            { text: '🐌 Yavaşla ve geç', correct: false, feedback: 'Yanlış! Kırmızı ışıkta geçmek yasaktır.' }
        ]
    },
    {
        id: 2,
        title: 'Yaya Geçidi',
        description: 'Yaya geçidine yaklaşıyorsunuz',
        emoji: '🚸',
        situation: 'Yaya geçidinde bir çocuk karşıya geçmek istiyor. Ne yapmalısınız?',
        options: [
            { text: '🛑 Dur ve yayaya yol ver', correct: true, feedback: 'Mükemmel! Yayalara her zaman öncelik verilmelidir.' },
            { text: '📯 Korna çal', correct: false, feedback: 'Yanlış! Korna çalmak yayayı korkutabilir.' },
            { text: '⚡ Hızlan ve geç', correct: false, feedback: 'Çok tehlikeli! Yayaya çarpabilirsiniz.' }
        ]
    },
    {
        id: 3,
        title: 'Kavşak',
        description: 'Işıksız kavşağa geldiniz',
        emoji: '🚗',
        situation: 'Sağınızdan bir araç geliyor. Ne yapmalısınız?',
        options: [
            { text: '🛑 Yol ver', correct: true, feedback: 'Doğru! Sağdan gelen araca yol verilir.' },
            { text: '⚡ Hızlan ve geç', correct: false, feedback: 'Yanlış! Kaza yapabilirsiniz.' },
            { text: '📯 Korna çal', correct: false, feedback: 'Yanlış! Yol verme kuralı değişmez.' }
        ]
    },
    {
        id: 4,
        title: 'Okul Bölgesi',
        description: 'Okul bölgesine giriyorsunuz',
        emoji: '🏫',
        situation: 'Okul bölgesi levhası gördünüz. Ne yapmalısınız?',
        options: [
            { text: '🐌 Yavaşla ve dikkatli ol', correct: true, feedback: 'Doğru! Okul bölgesinde çocuklar olabilir.' },
            { text: '⚡ Normal hızda devam et', correct: false, feedback: 'Yanlış! Okul bölgesinde yavaşlamalısınız.' },
            { text: '📯 Korna çal', correct: false, feedback: 'Yanlış! Okul bölgesinde gürültü yapmamalısınız.' }
        ]
    },
    {
        id: 5,
        title: 'Hız Sınırı',
        description: '50 km/h hız sınırı var',
        emoji: '⚠️',
        situation: 'Hız sınırı 50 km/h. Siz 70 km/h gidiyorsunuz. Ne yapmalısınız?',
        options: [
            { text: '🐌 Yavaşla', correct: true, feedback: 'Doğru! Hız sınırına uymalısınız.' },
            { text: '⚡ Devam et', correct: false, feedback: 'Yanlış! Hız sınırını aşmak yasaktır.' },
            { text: '🚗 Daha da hızlan', correct: false, feedback: 'Çok yanlış! Kaza riski artar.' }
        ]
    },
    {
        id: 6,
        title: 'Ambulans',
        description: 'Arkadan ambulans geliyor',
        emoji: '🚑',
        situation: 'Sirenli ambulans arkadan geliyor. Ne yapmalısınız?',
        options: [
            { text: '➡️ Sağa çekil ve yol ver', correct: true, feedback: 'Mükemmel! Acil araçlara yol verilmelidir.' },
            { text: '⚡ Hızlan', correct: false, feedback: 'Yanlış! Ambulansa yol vermelisiniz.' },
            { text: '🛑 Dur', correct: false, feedback: 'Kısmen doğru ama sağa çekilmek daha iyi.' }
        ]
    },
    {
        id: 7,
        title: 'Yağmurlu Hava',
        description: 'Yoğun yağmur yağıyor',
        emoji: '🌧️',
        situation: 'Yol kaygan ve görüş mesafesi düşük. Ne yapmalısınız?',
        options: [
            { text: '🐌 Yavaşla ve dikkatli sür', correct: true, feedback: 'Doğru! Kötü havada dikkatli olunmalı.' },
            { text: '⚡ Normal hızda git', correct: false, feedback: 'Tehlikeli! Kayabilirsiniz.' },
            { text: '🚗 Hızlan', correct: false, feedback: 'Çok tehlikeli! Kontrol kaybedebilirsiniz.' }
        ]
    },
    {
        id: 8,
        title: 'Park Etme',
        description: 'Park yeri arıyorsunuz',
        emoji: '🅿️',
        situation: 'Park yasak levhası var. Ne yapmalısınız?',
        options: [
            { text: '🚗 Başka yer ara', correct: true, feedback: 'Doğru! Park yasak olan yere park edilmez.' },
            { text: '🅿️ Kısa süre park et', correct: false, feedback: 'Yanlış! Park yasağı her zaman geçerlidir.' },
            { text: '🚗 Park et', correct: false, feedback: 'Yanlış! Ceza alabilirsiniz.' }
        ]
    }
];

interface Props {
    onExit: () => void;
}

const TrafficSimulator: React.FC<Props> = ({ onExit }) => {
    const [currentScenario, setCurrentScenario] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [showFeedback, setShowFeedback] = useState(false);
    const [simulationComplete, setSimulationComplete] = useState(false);

    const scenario = scenarios[currentScenario];

    const handleChoice = (index: number) => {
        setSelectedOption(index);
        setShowFeedback(true);
        
        if (scenario.options[index].correct) {
            setScore(score + 10);
        }
    };

    const handleNext = () => {
        if (currentScenario < scenarios.length - 1) {
            setCurrentScenario(currentScenario + 1);
            setSelectedOption(null);
            setShowFeedback(false);
        } else {
            setSimulationComplete(true);
        }
    };

    const restart = () => {
        setCurrentScenario(0);
        setScore(0);
        setSelectedOption(null);
        setShowFeedback(false);
        setSimulationComplete(false);
    };

    if (simulationComplete) {
        const percentage = (score / (scenarios.length * 10)) * 100;
        return (
            <div className="min-h-screen text-white p-4 flex items-center justify-center">
                <div className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/20 max-w-2xl w-full text-center">
                    <div className="text-8xl mb-6">
                        {percentage >= 80 ? '🏆' : percentage >= 60 ? '🚗' : '📚'}
                    </div>
                    <h2 className="text-4xl font-black mb-4">Simülasyon Tamamlandı!</h2>
                    <div className="text-6xl font-black text-green-400 mb-4">{score} / {scenarios.length * 10}</div>
                    <p className="text-2xl mb-8">Başarı: %{percentage.toFixed(0)}</p>
                    
                    <div className="bg-white/5 p-6 rounded-2xl mb-6">
                        {percentage >= 80 && <p className="text-green-400 font-bold">🎊 Harika! Güvenli sürücü olabilirsin!</p>}
                        {percentage >= 60 && percentage < 80 && <p className="text-yellow-400 font-bold">👍 İyi! Biraz daha pratik yap.</p>}
                        {percentage < 60 && <p className="text-red-400 font-bold">📖 Daha fazla öğrenmelisin.</p>}
                    </div>

                    <div className="flex gap-4 justify-center">
                        <button onClick={restart} className="bg-gradient-to-r from-green-500 to-emerald-600 px-8 py-4 rounded-xl font-black hover:scale-105 transition-all">
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

    return (
        <div className="min-h-screen text-white p-4">
            <div className="w-full max-w-5xl mx-auto">
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                    <button onClick={onExit} className="bg-white/10 hover:bg-white/20 px-6 py-3 rounded-xl border border-white/10 transition-all font-bold">
                        ⬅ GERİ
                    </button>
                    <div className="text-center">
                        <h2 className="text-2xl md:text-4xl font-black">🚗 SÜRÜŞ SİMÜLASYONU</h2>
                        <p className="text-sm text-white/60">Senaryo {currentScenario + 1} / {scenarios.length}</p>
                    </div>
                    <div className="text-right">
                        <div className="text-3xl font-black text-green-400">{score}</div>
                        <p className="text-xs text-white/60">PUAN</p>
                    </div>
                </div>

                {/* Progress */}
                <div className="bg-white/10 rounded-full h-3 mb-8 overflow-hidden">
                    <div 
                        className="bg-gradient-to-r from-green-500 to-emerald-500 h-full transition-all duration-300"
                        style={{ width: `${((currentScenario + 1) / scenarios.length) * 100}%` }}
                    ></div>
                </div>

                {/* Scenario Card */}
                <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 overflow-hidden mb-6">
                    {/* Road View */}
                    <div className="bg-gradient-to-b from-sky-600 to-gray-700 p-12 relative">
                        <div className="text-9xl text-center mb-4">{scenario.emoji}</div>
                        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gray-800">
                            <div className="h-full flex items-center justify-center">
                                <div className="w-2 h-16 bg-yellow-400 mx-4"></div>
                                <div className="w-2 h-16 bg-yellow-400 mx-4"></div>
                                <div className="w-2 h-16 bg-yellow-400 mx-4"></div>
                                <div className="w-2 h-16 bg-yellow-400 mx-4"></div>
                            </div>
                        </div>
                    </div>

                    {/* Scenario Info */}
                    <div className="p-8">
                        <h3 className="text-3xl font-black mb-2">{scenario.title}</h3>
                        <p className="text-white/60 mb-6">{scenario.description}</p>
                        <div className="bg-yellow-500/20 border-2 border-yellow-500 p-4 rounded-xl mb-6">
                            <p className="font-bold text-lg">{scenario.situation}</p>
                        </div>

                        {/* Options */}
                        <div className="grid gap-4">
                            {scenario.options.map((option, index) => (
                                <button
                                    key={index}
                                    onClick={() => !showFeedback && handleChoice(index)}
                                    disabled={showFeedback}
                                    className={`p-6 rounded-2xl font-bold text-lg text-left transition-all ${
                                        showFeedback
                                            ? option.correct
                                                ? 'bg-green-500 text-white scale-105'
                                                : index === selectedOption
                                                ? 'bg-red-500 text-white'
                                                : 'bg-white/5 text-white/40'
                                            : 'bg-white/10 hover:bg-white/20 hover:scale-105'
                                    }`}
                                >
                                    {option.text}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Feedback */}
                {showFeedback && selectedOption !== null && (
                    <div className={`p-6 rounded-2xl mb-6 ${
                        scenario.options[selectedOption].correct 
                            ? 'bg-green-500/20 border-2 border-green-500' 
                            : 'bg-red-500/20 border-2 border-red-500'
                    }`}>
                        <div className="flex items-center gap-3 mb-3">
                            <span className="text-4xl">{scenario.options[selectedOption].correct ? '✅' : '❌'}</span>
                            <h4 className="text-2xl font-black">
                                {scenario.options[selectedOption].correct ? 'Doğru Karar!' : 'Yanlış Karar!'}
                            </h4>
                        </div>
                        <p className="text-white/90 text-lg">{scenario.options[selectedOption].feedback}</p>
                    </div>
                )}

                {/* Next Button */}
                {showFeedback && (
                    <button
                        onClick={handleNext}
                        className="w-full bg-gradient-to-r from-green-500 to-emerald-500 py-4 rounded-2xl font-black text-xl hover:scale-105 transition-all"
                    >
                        {currentScenario < scenarios.length - 1 ? 'SONRAKİ SENARYO ➡️' : 'SİMÜLASYONU BİTİR 🏁'}
                    </button>
                )}
            </div>
        </div>
    );
};

export default TrafficSimulator;
