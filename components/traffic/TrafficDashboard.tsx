import React, { useState, useEffect } from 'react';

interface TrafficStats {
    totalTests: number;
    passedTests: number;
    totalScore: number;
    signsLearned: number;
    simulationsCompleted: number;
    badges: string[];
    level: number;
    experience: number;
}

interface Props {
    onExit: () => void;
}

const TrafficDashboard: React.FC<Props> = ({ onExit }) => {
    const [stats, setStats] = useState<TrafficStats>({
        totalTests: 12,
        passedTests: 9,
        totalScore: 850,
        signsLearned: 18,
        simulationsCompleted: 6,
        badges: ['🏆', '🚗', '🎯', '⭐'],
        level: 3,
        experience: 750
    });

    const badges = [
        { emoji: '🏆', name: 'Trafik Ustası', description: '10 test geç', unlocked: true },
        { emoji: '🚗', name: 'Güvenli Sürücü', description: '5 simülasyon tamamla', unlocked: true },
        { emoji: '🎯', name: 'Levha Uzmanı', description: '20 levha öğren', unlocked: false },
        { emoji: '⭐', name: 'Hızlı Öğrenen', description: 'İlk testi geç', unlocked: true },
        { emoji: '🎓', name: 'Ehliyet Adayı', description: 'Seviye 5\'e ulaş', unlocked: false },
        { emoji: '🚸', name: 'Yaya Dostu', description: 'Yaya oyununu bitir', unlocked: false },
    ];

    const nextLevelXP = stats.level * 300;
    const progressPercentage = (stats.experience / nextLevelXP) * 100;

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 text-white p-4">
            <div className="w-full max-w-6xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <button onClick={onExit} className="bg-white/10 hover:bg-white/20 px-6 py-3 rounded-xl border border-white/10 transition-all font-bold">
                        ⬅ GERİ
                    </button>
                    <h2 className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                        📊 İSTATİSTİKLERİM
                    </h2>
                    <div className="w-24"></div>
                </div>

                {/* Level Card */}
                <div className="bg-gradient-to-br from-yellow-500 to-orange-600 p-8 rounded-3xl border border-white/20 mb-6 text-center">
                    <div className="text-6xl mb-4">🏅</div>
                    <h3 className="text-4xl font-black mb-2">SEVİYE {stats.level}</h3>
                    <p className="text-white/90 mb-4">Trafik Öğrencisi</p>
                    <div className="bg-white/20 rounded-full h-4 overflow-hidden mb-2">
                        <div 
                            className="bg-white h-full transition-all duration-500"
                            style={{ width: `${progressPercentage}%` }}
                        ></div>
                    </div>
                    <p className="text-sm">{stats.experience} / {nextLevelXP} XP</p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div className="bg-white/10 backdrop-blur-xl p-6 rounded-2xl border border-white/20 text-center">
                        <div className="text-4xl mb-2">📝</div>
                        <div className="text-3xl font-black text-blue-400">{stats.totalTests}</div>
                        <p className="text-sm text-white/60">Toplam Test</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-xl p-6 rounded-2xl border border-white/20 text-center">
                        <div className="text-4xl mb-2">✅</div>
                        <div className="text-3xl font-black text-green-400">{stats.passedTests}</div>
                        <p className="text-sm text-white/60">Başarılı Test</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-xl p-6 rounded-2xl border border-white/20 text-center">
                        <div className="text-4xl mb-2">🚦</div>
                        <div className="text-3xl font-black text-yellow-400">{stats.signsLearned}</div>
                        <p className="text-sm text-white/60">Öğrenilen Levha</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-xl p-6 rounded-2xl border border-white/20 text-center">
                        <div className="text-4xl mb-2">🚗</div>
                        <div className="text-3xl font-black text-purple-400">{stats.simulationsCompleted}</div>
                        <p className="text-sm text-white/60">Simülasyon</p>
                    </div>
                </div>

                {/* Performance Chart */}
                <div className="bg-white/10 backdrop-blur-xl p-6 rounded-2xl border border-white/20 mb-6">
                    <h3 className="text-2xl font-black mb-4">📈 Performans</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <div className="flex justify-between mb-2">
                                <span>Test Başarı Oranı</span>
                                <span className="font-black">{Math.round((stats.passedTests / stats.totalTests) * 100)}%</span>
                            </div>
                            <div className="bg-white/10 rounded-full h-3 overflow-hidden">
                                <div 
                                    className="bg-gradient-to-r from-green-500 to-emerald-500 h-full"
                                    style={{ width: `${(stats.passedTests / stats.totalTests) * 100}%` }}
                                ></div>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between mb-2">
                                <span>Levha Bilgisi</span>
                                <span className="font-black">{Math.round((stats.signsLearned / 20) * 100)}%</span>
                            </div>
                            <div className="bg-white/10 rounded-full h-3 overflow-hidden">
                                <div 
                                    className="bg-gradient-to-r from-blue-500 to-cyan-500 h-full"
                                    style={{ width: `${(stats.signsLearned / 20) * 100}%` }}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Badges */}
                <div className="bg-white/10 backdrop-blur-xl p-6 rounded-2xl border border-white/20">
                    <h3 className="text-2xl font-black mb-4">🏆 ROZETLER</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {badges.map((badge, index) => (
                            <div
                                key={index}
                                className={`p-4 rounded-xl text-center transition-all ${
                                    badge.unlocked
                                        ? 'bg-gradient-to-br from-yellow-500 to-orange-600 scale-105'
                                        : 'bg-white/5 opacity-40'
                                }`}
                            >
                                <div className="text-5xl mb-2">{badge.emoji}</div>
                                <h4 className="font-bold text-xs mb-1">{badge.name}</h4>
                                <p className="text-[10px] text-white/60">{badge.description}</p>
                                {badge.unlocked && (
                                    <div className="mt-2 text-xs bg-white/20 px-2 py-1 rounded-full">✓ Kazanıldı</div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-white/10 backdrop-blur-xl p-6 rounded-2xl border border-white/20 mt-6">
                    <h3 className="text-2xl font-black mb-4">📅 Son Aktiviteler</h3>
                    <div className="space-y-3">
                        <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl">
                            <div className="text-3xl">✅</div>
                            <div className="flex-1">
                                <p className="font-bold">Trafik Testi Tamamlandı</p>
                                <p className="text-sm text-white/60">Puan: 90/100</p>
                            </div>
                            <span className="text-xs text-white/40">2 saat önce</span>
                        </div>
                        <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl">
                            <div className="text-3xl">🚗</div>
                            <div className="flex-1">
                                <p className="font-bold">Simülasyon Tamamlandı</p>
                                <p className="text-sm text-white/60">Başarı: %85</p>
                            </div>
                            <span className="text-xs text-white/40">5 saat önce</span>
                        </div>
                        <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl">
                            <div className="text-3xl">🏆</div>
                            <div className="flex-1">
                                <p className="font-bold">Yeni Rozet Kazanıldı</p>
                                <p className="text-sm text-white/60">Güvenli Sürücü</p>
                            </div>
                            <span className="text-xs text-white/40">1 gün önce</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrafficDashboard;
