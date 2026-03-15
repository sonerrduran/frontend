import React, { useEffect, useState } from 'react';
import { useAuthStore } from '../../stores/authStore';
import { userAPI, badgeAPI, curriculumAPI, assignmentAPI, examAPI, messageAPI } from '../../services/api';
import LegacyApp from '../../App';

// Ders adı → App.tsx GameMode eşleşmeleri
const SUBJECT_MODES: Record<string, string> = {
    'Matematik': 'MATH_MENU',
    'Türkçe': 'TURKISH_MENU',
    'Fen Bilgisi': 'SCIENCE_MENU',
    'Sosyal Bilgiler': 'SOCIAL_STUDIES',
    'İngilizce': 'ENGLISH_MENU',
    'Bilişim': 'INFORMATICS',
    'Görsel Sanatlar': 'ART_MENU',
    'Müzik': 'MUSIC',
    'Beden Eğitimi': 'PE_MENU',
    'Din': 'RELIGION_MENU',
    'Hayat Bilgisi': 'LIFE_SCIENCE_MENU',
    'Okul Öncesi': 'PRESCHOOL_MENU',
};

export default function StudentDashboard() {
    const { user, logout } = useAuthStore();
    const [dashData, setDashData] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [subjects, setSubjects] = useState<any[]>([]);
    // null = dashboard, 'games' = oyun alanı, 'MATH_MENU' vs = ders modu
    const [activeView, setActiveView] = useState<string | null>(null);
    const [assignments, setAssignments] = useState<any[]>([]);
    const [exams, setExams] = useState<any[]>([]);
    const [teachers, setTeachers] = useState<any[]>([]);
    const [messages, setMessages] = useState<any[]>([]);
    const [selectedTeacher, setSelectedTeacher] = useState<any>(null);
    const [newMsg, setNewMsg] = useState('');
    const [msgThread, setMsgThread] = useState<any[]>([]);

    useEffect(() => { loadDashboard(); }, []);

    const loadDashboard = async () => {
        try {
            const [dashRes, subjectsRes] = await Promise.all([
                userAPI.getDashboard(),
                curriculumAPI.subjects(user?.gradeLevel),
            ]);
            setDashData((dashRes as any).data);
            setSubjects((subjectsRes as any).data || []);
            await badgeAPI.check();
            // Ödev ve sınav yükle
            try { const ar: any = await assignmentAPI.list(); setAssignments(ar.data || []); } catch { }
            try { const er: any = await examAPI.list(); setExams(er.data || []); } catch { }
            try { const tr: any = await messageAPI.teachers(); setTeachers((tr.data || []).filter((t: any) => t.id !== user?.id)); } catch { }
        } catch (e) {
            console.error('Dashboard load error:', e);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] flex items-center justify-center">
                <div className="text-center">
                    <div className="text-6xl animate-bounce">🚀</div>
                    <p className="text-white/50 mt-4 text-lg">Yükleniyor...</p>
                </div>
            </div>
        );
    }

    // ── Inline içerik (ders veya oyun alanı) ─────────────────
    if (activeView) {
        // GameMode'u URL param olarak ver → LegacyApp okur
        const originalSearch = window.location.search;
        // LegacyApp ?mode= parametresini okur, biz window.history ile set ediyoruz
        const url = new URL(window.location.href);
        url.searchParams.set('mode', activeView);
        window.history.replaceState({}, '', url.toString());

        return (
            <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] flex flex-col">
                {/* Inline Başlık Çubuğu */}
                <div className="bg-[#1a1a2e]/90 backdrop-blur-lg border-b border-white/10 sticky top-0 z-50 flex items-center justify-between px-4 py-3">
                    <div className="flex items-center gap-3">
                        <span className="text-2xl">🚀</span>
                        <h1 className="text-lg font-bold text-white">Eğitim Galaksisi</h1>
                    </div>
                    <button
                        onClick={() => {
                            // URL'den mode parametresini temizle
                            const url = new URL(window.location.href);
                            url.searchParams.delete('mode');
                            window.history.replaceState({}, '', url.toString());
                            setActiveView(null);
                        }}
                        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/15 text-white/70 hover:text-white transition-all text-sm font-medium border border-white/10"
                    >
                        ← Panele Dön
                    </button>
                </div>
                {/* LegacyApp (App.tsx) doğrudan embed */}
                <div className="flex-1 overflow-auto">
                    <LegacyApp />
                </div>
            </div>
        );
    }

    const u = dashData?.user || user;
    const xpProgress = ((u?.xp || 0) % 100);

    const defaultSubjects = [
        { icon: '🧮', name: 'Matematik', color: 'from-indigo-600 to-blue-700', description: 'Sayılar, geometri ve problem çözme' },
        { icon: '📚', name: 'Türkçe', color: 'from-red-500 to-orange-600', description: 'Okuma, yazma ve dilbilgisi' },
        { icon: '🧪', name: 'Fen Bilgisi', color: 'from-emerald-500 to-teal-700', description: 'Doğa, bilim ve deneyler' },
        { icon: '🌍', name: 'Sosyal Bilgiler', color: 'from-amber-500 to-yellow-600', description: 'Tarih, coğrafya ve vatandaşlık' },
        { icon: '🛰️', name: 'İngilizce', color: 'from-violet-600 to-fuchsia-800', description: 'Kelimeler ve gramer' },
        { icon: '🤖', name: 'Bilişim', color: 'from-cyan-500 to-blue-600', description: 'Kodlama ve teknoloji' },
        { icon: '🎨', name: 'Görsel Sanatlar', color: 'from-fuchsia-500 to-purple-700', description: 'Resim ve yaratıcılık' },
        { icon: '🎵', name: 'Müzik', color: 'from-indigo-500 to-purple-600', description: 'Notalar ve ritimler' },
    ];

    const displaySubjects = subjects.length > 0 ? subjects : defaultSubjects;

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e]">
            {/* Header */}
            <header className="bg-[#1a1a2e]/80 backdrop-blur-lg border-b border-white/10 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <span className="text-3xl">🚀</span>
                        <h1 className="text-xl font-bold text-white">Eğitim Galaksisi</h1>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 bg-yellow-500/10 px-3 py-1.5 rounded-full">
                            <span>⭐</span>
                            <span className="text-yellow-300 font-bold">{u?.stars || 0}</span>
                        </div>
                        <div className="flex items-center gap-2 bg-purple-500/10 px-3 py-1.5 rounded-full">
                            <span>🔮</span>
                            <span className="text-purple-300 font-bold">Lv.{u?.level || 1}</span>
                        </div>
                        <div className="flex items-center gap-2 bg-orange-500/10 px-3 py-1.5 rounded-full">
                            <span>🔥</span>
                            <span className="text-orange-300 font-bold">{u?.streakDays || 0} gün</span>
                        </div>
                        <div className="flex items-center gap-3 ml-2 pl-4 border-l border-white/10">
                            <span className="text-2xl">{u?.avatar || '👨‍🚀'}</span>
                            <div>
                                <div className="text-white text-sm font-medium">{u?.name}</div>
                                <div className="text-white/40 text-xs">{u?.gradeLevel}. Sınıf</div>
                            </div>
                            <button onClick={logout}
                                className="ml-2 p-2 rounded-lg hover:bg-white/5 text-white/40 hover:text-white transition-colors" title="Çıkış">
                                🚪
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 py-8">
                {/* Welcome + XP */}
                <div className="mb-8">
                    <h2 className="text-3xl font-bold text-white mb-2">Merhaba, {u?.name?.split(' ')[0]}! 👋</h2>
                    <p className="text-white/50">Bugün hangi dersi keşfetmek istersin?</p>
                    <div className="mt-4 bg-white/5 rounded-xl p-4 border border-white/10">
                        <div className="flex justify-between text-sm mb-2">
                            <span className="text-purple-300">Level {u?.level}</span>
                            <span className="text-white/40">{xpProgress}/100 XP</span>
                            <span className="text-purple-300">Level {(u?.level || 1) + 1}</span>
                        </div>
                        <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full transition-all duration-500"
                                style={{ width: `${xpProgress}%` }} />
                        </div>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    {[
                        { icon: '⭐', label: 'Toplam Yıldız', value: u?.stars || 0, color: 'yellow' },
                        { icon: '✅', label: 'Çözülen Soru', value: u?.solvedProblems || 0, color: 'green' },
                        { icon: '🔥', label: 'Gün Serisi', value: `${u?.streakDays || 0} gün`, color: 'orange' },
                        { icon: '🏆', label: 'Rozetler', value: dashData?.badges?.length || 0, color: 'blue' },
                    ].map((stat, i) => (
                        <div key={i} className={`bg-${stat.color}-500/10 border border-${stat.color}-500/20 rounded-xl p-5 text-center`}>
                            <div className="text-3xl mb-2">{stat.icon}</div>
                            <div className="text-2xl font-bold text-white">{stat.value}</div>
                            <div className="text-white/40 text-sm mt-1">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* 📚 Derslerim — Inline açılır */}
                <div className="mb-8">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                        📚 <span>Derslerim</span>
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {displaySubjects.map((subject: any, i: number) => {
                            const mode = SUBJECT_MODES[subject.name] || 'HOME';
                            return (
                                <button
                                    key={i}
                                    onClick={() => setActiveView(mode)}
                                    className={`bg-gradient-to-br ${subject.color || 'from-indigo-500 to-purple-700'} rounded-2xl p-5 text-center hover:scale-[1.03] hover:shadow-xl transition-all duration-300 cursor-pointer group relative overflow-hidden`}
                                >
                                    <div className="absolute -bottom-6 -right-6 text-7xl opacity-10 group-hover:opacity-20 transition-opacity">
                                        {subject.icon}
                                    </div>
                                    <div className="relative z-10">
                                        <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{subject.icon}</div>
                                        <div className="text-white font-bold text-sm">{subject.name}</div>
                                        <div className="text-white/60 text-xs mt-1">{subject.description || ''}</div>
                                    </div>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* 🎓 Akademik Dersler — Yeni Yapı */}
                <div className="mb-8">
                    <button
                        onClick={() => window.location.href = '/academic'}
                        className="block w-full bg-gradient-to-r from-blue-500/20 to-indigo-500/20 border border-blue-500/30 rounded-2xl p-6 hover:from-blue-500/30 hover:to-indigo-500/30 transition-all group cursor-pointer text-left"
                    >
                        <div className="flex items-center gap-5">
                            <div className="text-5xl group-hover:scale-110 transition-transform">🎓</div>
                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-white">Akademik Dersler</h3>
                                <p className="text-white/50 text-sm">13 farklı ders, sınıf bazlı içerikler ve eğlenceli oyunlar!</p>
                            </div>
                            <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-3 rounded-xl font-bold text-sm shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-all">
                                Keşfet →
                            </div>
                        </div>
                    </button>
                </div>

                {/* 🎮 Oyun Alanı — Inline açılır */}
                <div className="mb-8">
                    <button
                        onClick={() => setActiveView('PLAYGROUND')}
                        className="block w-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/30 rounded-2xl p-6 hover:from-pink-500/30 hover:to-purple-500/30 transition-all group cursor-pointer text-left"
                    >
                        <div className="flex items-center gap-5">
                            <div className="text-5xl group-hover:scale-110 transition-transform">🎮</div>
                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-white">Oyun Alanı</h3>
                                <p className="text-white/50 text-sm">Zeka oyunları, bulmacalar ve eğlenceli aktiviteler seni bekliyor!</p>
                            </div>
                            <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-xl font-bold text-sm shadow-lg shadow-pink-500/20 group-hover:shadow-pink-500/40 transition-all">
                                Hemen Oyna →
                            </div>
                        </div>
                    </button>
                </div>

                {/* 📝 Ödevlerim */}
                {assignments.length > 0 && (
                    <div className="mb-8">
                        <h3 className="text-xl font-bold text-white mb-4">📝 Ödevlerim</h3>
                        <div className="space-y-3">
                            {assignments.map((a: any) => {
                                const submitted = a.submissions?.[0];
                                return (
                                    <div key={a.id} className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center justify-between">
                                        <div>
                                            <h4 className="text-white font-bold">{a.title}</h4>
                                            <div className="flex gap-3 text-xs text-white/40 mt-1">
                                                <span>📚 {a.classroom?.name}</span>
                                                <span>🎮 {a.gameMode}</span>
                                                {a.dueDate && <span className="text-amber-400">📅 {new Date(a.dueDate).toLocaleDateString('tr-TR')}</span>}
                                            </div>
                                        </div>
                                        {submitted ? (
                                            <div className="text-right">
                                                <div className="text-emerald-400 font-bold text-sm">✅ Teslim Edildi</div>
                                                <div className="text-white/40 text-xs">{submitted.correctAnswers}/{submitted.totalQuestions} doğru</div>
                                            </div>
                                        ) : (
                                            <button onClick={() => setActiveView(a.gameMode || 'HOME')}
                                                className="bg-amber-500 hover:bg-amber-400 text-white px-4 py-2 rounded-xl text-sm font-bold transition-all">
                                                Başla →
                                            </button>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}

                {/* 📄 Sınavlarım */}
                {exams.length > 0 && (
                    <div className="mb-8">
                        <h3 className="text-xl font-bold text-white mb-4">📄 Sınavlarım</h3>
                        <div className="space-y-3">
                            {exams.map((e: any) => {
                                const submitted = e.submissions?.[0];
                                return (
                                    <div key={e.id} className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center justify-between">
                                        <div>
                                            <h4 className="text-white font-bold">{e.title}</h4>
                                            <div className="flex gap-3 text-xs text-white/40 mt-1">
                                                <span>⏱️ {e.durationMin} dk</span>
                                                <span>❓ {e.questionIds?.length || 0} soru</span>
                                                {e.dueDate && <span className="text-amber-400">📅 {new Date(e.dueDate).toLocaleDateString('tr-TR')}</span>}
                                            </div>
                                        </div>
                                        {submitted?.submittedAt ? (
                                            <div className="text-right">
                                                <div className={`font-bold text-sm ${(submitted.score / submitted.totalPoints) * 100 >= 70 ? 'text-emerald-400' : 'text-amber-400'}`}>
                                                    {submitted.score}/{submitted.totalPoints} puan
                                                </div>
                                                <div className="text-white/40 text-xs">%{submitted.totalPoints ? Math.round(submitted.score / submitted.totalPoints * 100) : 0}</div>
                                            </div>
                                        ) : (
                                            <button onClick={() => { examAPI.start(e.id); setActiveView('EXAM_' + e.id); }}
                                                className="bg-violet-600 hover:bg-violet-500 text-white px-4 py-2 rounded-xl text-sm font-bold transition-all">
                                                Sınava Gir →
                                            </button>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}

                {/* 💬 Öğretmenim ile Mesajlaş */}
                {teachers.length > 0 && (
                    <div className="mb-8">
                        <h3 className="text-xl font-bold text-white mb-4">💬 Öğretmenimle Mesajlaş</h3>
                        <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
                            <div className="flex h-72">
                                <div className="w-52 border-r border-white/10 overflow-y-auto">
                                    {teachers.map((t: any) => (
                                        <button key={t.id} onClick={async () => {
                                            setSelectedTeacher(t);
                                            try { const r: any = await messageAPI.getThread(t.id); setMsgThread(r.data?.messages || []); } catch { setMsgThread([]); }
                                        }} className={`w-full flex items-center gap-2 p-3 text-left hover:bg-white/5 transition-all ${selectedTeacher?.id === t.id ? 'bg-white/10' : ''}`}>
                                            <span className="text-xl">{t.avatar || '👤'}</span>
                                            <div>
                                                <div className="text-white text-xs font-medium">{t.name}</div>
                                                <div className="text-white/30 text-xs">{t.role}</div>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                                <div className="flex-1 flex flex-col">
                                    {selectedTeacher ? (
                                        <>
                                            <div className="flex-1 overflow-y-auto p-3 space-y-2">
                                                {msgThread.length === 0 && <div className="text-white/30 text-sm text-center mt-8">Henüz mesaj yok</div>}
                                                {msgThread.map((m: any) => (
                                                    <div key={m.id} className={`flex ${m.senderId === user?.id ? 'justify-end' : 'justify-start'}`}>
                                                        <div className={`max-w-[200px] text-xs px-3 py-2 rounded-2xl ${m.senderId === user?.id ? 'bg-blue-600 text-white' : 'bg-white/10 text-white'}`}>{m.content}</div>
                                                    </div>
                                                ))}
                                            </div>
                                            <div className="p-3 border-t border-white/10 flex gap-2">
                                                <input value={newMsg} onChange={e => setNewMsg(e.target.value)}
                                                    onKeyDown={async (e) => { if (e.key === 'Enter' && newMsg.trim()) { try { const r: any = await messageAPI.send(selectedTeacher.id, newMsg.trim()); setMsgThread(p => [...p, r.data]); setNewMsg(''); } catch { } } }}
                                                    placeholder="Mesaj yaz..." className="flex-1 bg-white/5 border border-white/10 rounded-lg px-2 py-1.5 text-white text-xs outline-none" />
                                                <button onClick={async () => { if (!newMsg.trim()) return; try { const r: any = await messageAPI.send(selectedTeacher.id, newMsg.trim()); setMsgThread(p => [...p, r.data]); setNewMsg(''); } catch { } }}
                                                    className="bg-blue-600 hover:bg-blue-500 text-white px-3 py-1.5 rounded-lg text-xs font-bold">↗</button>
                                            </div>
                                        </>
                                    ) : (
                                        <div className="flex-1 flex items-center justify-center text-white/30 text-sm">Sol taraftan öğretmen seçin</div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Son Aktiviteler */}
                {dashData?.recentSessions?.length > 0 && (
                    <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                        <h3 className="text-lg font-semibold text-white mb-4">📊 Son Aktiviteler</h3>
                        <div className="space-y-3">
                            {dashData.recentSessions.map((session: any, i: number) => (
                                <div key={i} className="flex items-center justify-between bg-white/5 rounded-lg p-3">
                                    <div>
                                        <span className="text-white font-medium">{session.gameMode}</span>
                                        <span className="text-white/30 text-sm ml-2">{session.difficulty}</span>
                                    </div>
                                    <div className="flex items-center gap-4 text-sm">
                                        <span className="text-green-400">{session.correctAnswers}/{session.totalQuestions}</span>
                                        <span className="text-yellow-400">⭐ {session.starsEarned}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Rozetler */}
                {dashData?.badges?.length > 0 && (
                    <div className="mt-6 bg-white/5 border border-white/10 rounded-xl p-6">
                        <h3 className="text-lg font-semibold text-white mb-4">🏅 Kazanılan Rozetler</h3>
                        <div className="flex gap-4 flex-wrap">
                            {dashData.badges.map((badge: any, i: number) => (
                                <div key={i} className="bg-white/5 rounded-xl p-4 text-center min-w-[100px]">
                                    <div className="text-3xl mb-1">{badge.icon}</div>
                                    <div className="text-white text-xs font-medium">{badge.name}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
}
