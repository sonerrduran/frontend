import GameCard from '../core/GameCard';
import React from 'react';
import { GameMode } from '../../types';

interface Props {
    onNavigate: (mode: GameMode) => void;
    onExit: () => void;
}

const TrafficGames: React.FC<Props> = ({ onNavigate, onExit }) => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-fuchsia-900 text-white p-4">
            <div className="w-full max-w-6xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <button onClick={onExit} className="bg-white/10 hover:bg-white/20 px-6 py-3 rounded-xl border border-white/10 transition-all font-bold">
                        ⬅ GERİ
                    </button>
                    <h2 className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                        🎮 TRAFİK OYUNLARI
                    </h2>
                    <div className="w-24"></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto pb-32">
                    {/* Sign Matching Game */}
                    <GameCard title="Levha Eşleştir" icon="🎯" color="bg-gradient-to-br from-red-600 to-rose-800 p-8 rounded-3xl border border-white/20 hover:scale-105 transition-all group" description="Trafik levhalarını anlamlarıyla eşleştir!" onClick={() => onNavigate(GameMode.TRAFFIC_SIGN_MATCH)} />

                    {/* Traffic City Game */}
                    <GameCard title="Trafik Şehri" icon="🏙️" color="bg-gradient-to-br from-blue-600 to-cyan-800 p-8 rounded-3xl border border-white/20 hover:scale-105 transition-all group" description="Şehirde dolaş ve kurallara uy!" onClick={() => onNavigate(GameMode.TRAFFIC_CITY)} />

                    {/* Lane Game */}
                    <GameCard title="Doğru Şerit" icon="🛣️" color="bg-gradient-to-br from-green-600 to-emerald-800 p-8 rounded-3xl border border-white/20 hover:scale-105 transition-all group" description="Arabayı doğru şeride yönlendir!" onClick={() => onNavigate(GameMode.TRAFFIC_LANE_GAME)} />

                    {/* Pedestrian Game */}
                    <GameCard title="Yaya Geçidi" icon="🚸" color="bg-gradient-to-br from-yellow-600 to-orange-800 p-8 rounded-3xl border border-white/20 hover:scale-105 transition-all group" description="Arabaları durdur, yayaları geçir!" onClick={() => onNavigate(GameMode.TRAFFIC_PEDESTRIAN)} />

                    {/* Coming Soon Games */}
                    <div className="bg-white/5 p-8 rounded-3xl border border-white/10 opacity-60">
                        <div className="text-7xl mb-4">🚦</div>
                        <h3 className="text-2xl font-black mb-3">Işık Kontrolü</h3>
                        <p className="text-white/60 text-sm">Trafik ışıklarını yönet!</p>
                        <div className="mt-4 bg-white/10 px-4 py-2 rounded-full text-xs font-bold">YAKINDA</div>
                    </div>

                    <div className="bg-white/5 p-8 rounded-3xl border border-white/10 opacity-60">
                        <div className="text-7xl mb-4">🅿️</div>
                        <h3 className="text-2xl font-black mb-3">Park Ustası</h3>
                        <p className="text-white/60 text-sm">Arabayı park et!</p>
                        <div className="mt-4 bg-white/10 px-4 py-2 rounded-full text-xs font-bold">YAKINDA</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrafficGames;
