import React from 'react';
import { GameMode } from '../../types';
import GameCard from '../core/GameCard';

interface TrafficMenuProps {
    onNavigate: (mode: GameMode) => void;
    onExit: () => void;
}

const TrafficMenu: React.FC<TrafficMenuProps> = ({ onNavigate, onExit }) => {
    return (
        <div className="w-full max-w-6xl mx-auto px-2 bounce-in">
            <div className="text-center mb-12">
                <button onClick={onExit} className="mb-8 px-6 py-2 bg-white/5 text-white rounded-full font-bold border border-white/20 hover:bg-white/10 transition-all text-sm relative z-50">⬅ GERİ DÖN</button>
                <h2 className="text-4xl md:text-7xl font-black text-white drop-shadow-2xl mb-4 uppercase">TRAFİK EĞİTİMİ</h2>
                <p className="text-white/80 font-medium max-w-2xl mx-auto text-sm md:text-base mb-6">
                    Trafik kurallarını öğren, güvenli sürücü ol! Eğlenceli oyunlar ve simülasyonlarla trafik bilincini geliştir.
                </p>
                <div className="flex justify-center gap-3 flex-wrap">
                    <span className="bg-red-500/20 text-red-300 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">GÜVENLİK ÖNCELİKLİDİR! 🚸</span>
                    <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">EHLİYET HAZIRLIK 🎓</span>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto pb-32">
                <GameCard
                    title="Trafik Levhaları"
                    icon="🚫"
                    color="bg-gradient-to-br from-red-600 to-rose-800"
                    description="Tüm trafik levhalarını öğren! Yasaklayıcı, uyarı ve bilgilendirici levhalar."
                    onClick={() => onNavigate(GameMode.TRAFFIC_SIGNS_LEARN)}
                />
                <GameCard
                    title="Test Çöz"
                    icon="📝"
                    color="bg-gradient-to-br from-blue-600 to-indigo-800"
                    description="Ehliyet sınavına hazırlan! Çoktan seçmeli ve görsel testler."
                    onClick={() => onNavigate(GameMode.TRAFFIC_QUIZ)}
                />
                <GameCard
                    title="Sürüş Simülasyonu"
                    icon="🚗"
                    color="bg-gradient-to-br from-green-600 to-emerald-800"
                    description="Sanal araç sür! Gerçek trafik senaryolarında karar ver."
                    onClick={() => onNavigate(GameMode.TRAFFIC_SIMULATOR)}
                />
                <GameCard
                    title="Trafik Şehri"
                    icon="🏙️"
                    color="bg-gradient-to-br from-purple-600 to-fuchsia-800"
                    description="Şehirde dolaş ve kurallara uy! 3D şehir simülasyonu."
                    onClick={() => onNavigate(GameMode.TRAFFIC_CITY)}
                />
                <GameCard
                    title="Mini Oyunlar"
                    icon="🎮"
                    color="bg-gradient-to-br from-orange-600 to-amber-800"
                    description="Eğlenceli trafik oyunları! Levha eşleştir, yaya geçir."
                    onClick={() => onNavigate(GameMode.TRAFFIC_GAMES)}
                />
                <GameCard
                    title="İstatistiklerim"
                    icon="📊"
                    color="bg-gradient-to-br from-cyan-600 to-blue-800"
                    description="İlerleme raporun! Puanlar, rozetler ve başarılar."
                    onClick={() => onNavigate(GameMode.TRAFFIC_DASHBOARD)}
                />
            </div>
        </div>
    );
};

export default TrafficMenu;
