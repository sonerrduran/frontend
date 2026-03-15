import React, { useState, useEffect } from 'react';

interface SignPair {
    id: number;
    emoji: string;
    name: string;
}

const signPairs: SignPair[] = [
    { id: 1, emoji: '🛑', name: 'DUR' },
    { id: 2, emoji: '⛔', name: 'GİRİLMEZ' },
    { id: 3, emoji: '🚸', name: 'YAYA GEÇİDİ' },
    { id: 4, emoji: '🏫', name: 'OKUL BÖLGESİ' },
    { id: 5, emoji: '⚠️', name: 'TEHLİKE' },
    { id: 6, emoji: '🅿️', name: 'PARK YASAK' },
];

interface Card {
    id: number;
    content: string;
    type: 'emoji' | 'text';
    pairId: number;
    isFlipped: boolean;
    isMatched: boolean;
}

interface Props {
    onExit: () => void;
}

const TrafficSignMatch: React.FC<Props> = ({ onExit }) => {
    const [cards, setCards] = useState<Card[]>([]);
    const [flippedCards, setFlippedCards] = useState<number[]>([]);
    const [moves, setMoves] = useState(0);
    const [matches, setMatches] = useState(0);
    const [gameComplete, setGameComplete] = useState(false);
    const [time, setTime] = useState(0);

    useEffect(() => {
        initializeGame();
    }, []);

    useEffect(() => {
        if (matches > 0 && matches === signPairs.length) {
            setGameComplete(true);
        }
    }, [matches]);

    useEffect(() => {
        if (!gameComplete) {
            const timer = setInterval(() => setTime(t => t + 1), 1000);
            return () => clearInterval(timer);
        }
    }, [gameComplete]);

    const initializeGame = () => {
        const gameCards: Card[] = [];
        signPairs.forEach((pair, index) => {
            gameCards.push({
                id: index * 2,
                content: pair.emoji,
                type: 'emoji',
                pairId: pair.id,
                isFlipped: false,
                isMatched: false
            });
            gameCards.push({
                id: index * 2 + 1,
                content: pair.name,
                type: 'text',
                pairId: pair.id,
                isFlipped: false,
                isMatched: false
            });
        });
        
        // Shuffle cards
        const shuffled = gameCards.sort(() => Math.random() - 0.5);
        setCards(shuffled);
        setFlippedCards([]);
        setMoves(0);
        setMatches(0);
        setGameComplete(false);
        setTime(0);
    };

    const handleCardClick = (cardId: number) => {
        if (flippedCards.length === 2) return;
        
        const card = cards.find(c => c.id === cardId);
        if (!card || card.isFlipped || card.isMatched) return;

        const newCards = cards.map(c => 
            c.id === cardId ? { ...c, isFlipped: true } : c
        );
        setCards(newCards);

        const newFlipped = [...flippedCards, cardId];
        setFlippedCards(newFlipped);

        if (newFlipped.length === 2) {
            setMoves(moves + 1);
            const [first, second] = newFlipped;
            const firstCard = newCards.find(c => c.id === first);
            const secondCard = newCards.find(c => c.id === second);

            if (firstCard && secondCard && firstCard.pairId === secondCard.pairId) {
                // Match found
                setTimeout(() => {
                    setCards(cards.map(c => 
                        c.id === first || c.id === second ? { ...c, isMatched: true } : c
                    ));
                    setMatches(matches + 1);
                    setFlippedCards([]);
                }, 500);
            } else {
                // No match
                setTimeout(() => {
                    setCards(cards.map(c => 
                        c.id === first || c.id === second ? { ...c, isFlipped: false } : c
                    ));
                    setFlippedCards([]);
                }, 1000);
            }
        }
    };

    if (gameComplete) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-fuchsia-900 text-white p-4 flex items-center justify-center">
                <div className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/20 max-w-2xl w-full text-center">
                    <div className="text-8xl mb-6">🏆</div>
                    <h2 className="text-4xl font-black mb-4">Tebrikler!</h2>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-white/5 p-4 rounded-xl">
                            <div className="text-3xl font-black text-yellow-400">{moves}</div>
                            <p className="text-sm text-white/60">Hamle</p>
                        </div>
                        <div className="bg-white/5 p-4 rounded-xl">
                            <div className="text-3xl font-black text-cyan-400">{time}s</div>
                            <p className="text-sm text-white/60">Süre</p>
                        </div>
                    </div>
                    <div className="flex gap-4 justify-center">
                        <button onClick={initializeGame} className="bg-gradient-to-r from-purple-500 to-fuchsia-600 px-8 py-4 rounded-xl font-black hover:scale-105 transition-all">
                            🔄 YENİDEN OYNA
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
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-fuchsia-900 text-white p-4">
            <div className="w-full max-w-5xl mx-auto">
                <div className="flex justify-between items-center mb-6">
                    <button onClick={onExit} className="bg-white/10 hover:bg-white/20 px-6 py-3 rounded-xl border border-white/10 transition-all font-bold">
                        ⬅ GERİ
                    </button>
                    <h2 className="text-2xl md:text-4xl font-black">🎯 LEVHA EŞLEŞTİR</h2>
                    <div className="flex gap-4">
                        <div className="bg-white/10 px-4 py-2 rounded-xl">
                            <span className="font-black">{moves}</span> Hamle
                        </div>
                        <div className="bg-white/10 px-4 py-2 rounded-xl">
                            <span className="font-black">{time}s</span>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
                    {cards.map(card => (
                        <button
                            key={card.id}
                            onClick={() => handleCardClick(card.id)}
                            disabled={card.isMatched || card.isFlipped}
                            className={`aspect-square rounded-2xl font-bold text-lg transition-all ${
                                card.isMatched
                                    ? 'bg-green-500/20 border-2 border-green-500 scale-95'
                                    : card.isFlipped
                                    ? 'bg-white/20 border-2 border-white/50'
                                    : 'bg-white/10 hover:bg-white/20 hover:scale-105'
                            }`}
                        >
                            {card.isFlipped || card.isMatched ? (
                                card.type === 'emoji' ? (
                                    <div className="text-5xl">{card.content}</div>
                                ) : (
                                    <div className="text-sm px-2">{card.content}</div>
                                )
                            ) : (
                                <div className="text-5xl">❓</div>
                            )}
                        </button>
                    ))}
                </div>

                <div className="mt-6 text-center">
                    <p className="text-white/60">Levhaları anlamlarıyla eşleştir!</p>
                </div>
            </div>
        </div>
    );
};

export default TrafficSignMatch;
