import GameCard from '../../core/GameCard';
import React from 'react';

interface LawMenuProps {
  gradeLevel: number;
  onSelectActivity: (activity: string) => void;
  onExit: () => void;
}

const LawMenu: React.FC<LawMenuProps> = ({ gradeLevel, onSelectActivity, onExit }) => {
  const activities = [
    { id: 'lesson', title: 'Dersler', icon: '📚', desc: 'Temel hukuk ve haklar dersleri', color: 'from-slate-600 to-gray-700' },
    { id: 'test', title: 'Testler', icon: '📝', desc: 'Çocuk hakları quiz\'i', color: 'from-slate-600 to-gray-700' },
    { id: 'scenario', title: 'Senaryolar', icon: '🎬', desc: 'Hak ihlali senaryosu', color: 'from-slate-600 to-gray-700' },
    { id: 'game', title: 'Oyunlar', icon: '🎮', desc: 'Haklar kart oyunu, mini mahkeme oyunu', color: 'from-slate-600 to-gray-700' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 p-4">
      <div className="w-full max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <button onClick={onExit} className="mb-6 px-6 py-2 bg-white/5 text-white rounded-full font-bold border border-white/20 hover:bg-white/10 transition-all text-sm">
            ⬅ GERİ DÖN
          </button>
          <h2 className="text-4xl md:text-7xl font-black text-white drop-shadow-2xl mb-4 uppercase">Temel Hukuk ve Haklar</h2>
          <p className="text-white/80 text-sm md:text-base font-semibold mb-6 max-w-2xl mx-auto">Haklarını öğren, sorumluluklarını bil!</p>
          <div className="flex justify-center gap-3">
            <span className="bg-slate-500/20 text-slate-300 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">{gradeLevel}. SINIF</span>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto pb-32">
          {activities.map((activity) => (
            <GameCard key={activity.id} title={activity.title} icon={activity.icon} color={`bg-gradient-to-br ${activity.color}`} description={activity.desc} onClick={() => onSelectActivity(activity.id)} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LawMenu;
