import React from 'react';
import { GameMode } from '../../types';
import GameCard from '../core/GameCard';

interface FirstAidMenuProps {
    onNavigate: (mode: GameMode) => void;
    onExit: () => void;
    gradeLevel: number;
}

const FirstAidMenu: React.FC<FirstAidMenuProps> = ({ onNavigate, onExit, gradeLevel }) => {
    // Sınıf seviyesine göre içerik belirleme
    const getGradeInfo = () => {
        if (gradeLevel <= 2) return { level: '🟢 Temel Güvenlik', color: 'from-green-500 to-emerald-600' };
        if (gradeLevel <= 4) return { level: '🟡 Temel İlk Yardım', color: 'from-yellow-500 to-amber-600' };
        if (gradeLevel <= 6) return { level: '🟠 İlk Yardım Temelleri', color: 'from-orange-500 to-red-600' };
        return { level: '🔴 Gelişmiş İlk Yardım', color: 'from-red-500 to-rose-600' };
    };

    const gradeInfo = getGradeInfo();

    return (
        <div className="w-full max-w-6xl mx-auto px-2 bounce-in">
            <div className="text-center mb-12">
                <button 
                    onClick={onExit} 
                    className="mb-8 px-6 py-2 bg-white/5 text-white rounded-full font-bold border border-white/20 hover:bg-white/10 transition-all text-sm relative z-50"
                >
                    ⬅ GERİ DÖN
                </button>
                
                <h2 className="text-4xl md:text-7xl font-black text-white drop-shadow-2xl mb-4 uppercase">
                    ⛑️ İLK YARDIM EĞİTİMİ
                </h2>
                
                <p className="text-white/80 font-medium max-w-2xl mx-auto text-sm md:text-base mb-6">
                    Hayat kurtaran bilgiler öğren! Acil durumlarda doğru müdahale yap.
                </p>
                
                <div className="flex justify-center gap-3 flex-wrap mb-6">
                    <span className={`bg-gradient-to-r ${gradeInfo.color} text-white px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest shadow-lg`}>
                        {gradeInfo.level}
                    </span>
                    <span className="bg-red-500/20 text-red-300 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                        HAYAT KURTARICI BİLGİLER! 🚑
                    </span>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto pb-32">
                <GameCard
                    title="İlk Yardım Dersleri"
                    icon="📚"
                    color="bg-gradient-to-br from-blue-600 to-indigo-800"
                    description="Sınıf seviyene uygun ilk yardım bilgilerini öğren!"
                    onClick={() => onNavigate(GameMode.FIRST_AID_LESSONS)}
                />
                
                <GameCard
                    title="Senaryo Simülasyonları"
                    icon="🎭"
                    color="bg-gradient-to-br from-purple-600 to-fuchsia-800"
                    description="Gerçek hayat senaryolarında doğru kararları ver!"
                    onClick={() => onNavigate(GameMode.FIRST_AID_SCENARIOS)}
                />
                
                <GameCard
                    title="Mini Oyunlar"
                    icon="🎮"
                    color="bg-gradient-to-br from-green-600 to-emerald-800"
                    description="Eğlenceli oyunlarla ilk yardım bilgini pekiştir!"
                    onClick={() => onNavigate(GameMode.FIRST_AID_MINI_GAMES)}
                />
                
                <GameCard
                    title="Testler"
                    icon="📝"
                    color="bg-gradient-to-br from-orange-600 to-amber-800"
                    description="Bilgini test et, rozetler kazan!"
                    onClick={() => onNavigate(GameMode.FIRST_AID_TESTS)}
                />
                
                <GameCard
                    title="Rozetlerim"
                    icon="🏅"
                    color="bg-gradient-to-br from-yellow-500 to-orange-600"
                    description="Kazandığın rozetleri ve başarılarını gör!"
                    onClick={() => onNavigate(GameMode.FIRST_AID_BADGES)}
                />
                
                <GameCard
                    title="İlerleme Raporun"
                    icon="📊"
                    color="bg-gradient-to-br from-cyan-600 to-blue-800"
                    description="İlk yardım eğitimindeki gelişimini takip et!"
                    onClick={() => onNavigate(GameMode.FIRST_AID_DASHBOARD)}
                />
            </div>

            {/* Acil Durum Numarası Hatırlatması */}
            <div className="fixed bottom-8 right-8 bg-red-600 text-white px-6 py-4 rounded-2xl shadow-2xl border-4 border-white/20 animate-pulse">
                <div className="text-xs font-bold mb-1">ACİL DURUM</div>
                <div className="text-3xl font-black">📞 112</div>
            </div>
        </div>
    );
};

export default FirstAidMenu;
