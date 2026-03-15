import GameCard from '../../core/GameCard';
import React, { useState } from 'react';
import HygieneLessons from './HygieneLessons';
import HygieneTests from './HygieneTests';
import HygieneScenarios from './HygieneScenarios';
import HygieneGames from './HygieneGames';

interface HygieneMenuProps {
  gradeLevel: number;
  onSelectActivity: (activity: string) => void;
  onExit: () => void;
}

const HygieneMenu: React.FC<HygieneMenuProps> = ({ gradeLevel, onSelectActivity, onExit }) => {
  const [selectedActivity, setSelectedActivity] = useState<string | null>(null);

  const activities = [
    { id: 'lesson', title: 'Dersler', icon: '📚', desc: 'Hijyen ve sağlık dersleri', color: 'from-blue-500 via-cyan-500 to-blue-600' },
    { id: 'test', title: 'Testler', icon: '📝', desc: 'Hijyen bilgisi testleri', color: 'from-cyan-500 via-teal-500 to-cyan-600' },
    { id: 'scenario', title: 'Senaryolar', icon: '🎬', desc: 'Gerçek hijyen durumları', color: 'from-teal-500 via-emerald-500 to-teal-600' },
    { id: 'game', title: 'Oyunlar', icon: '🎮', desc: 'Eğlenceli hijyen oyunları', color: 'from-emerald-500 via-green-500 to-emerald-600' }
  ];

  // Render selected activity
  if (selectedActivity === 'lesson') {
    return <HygieneLessons gradeLevel={gradeLevel} onExit={() => setSelectedActivity(null)} />;
  }
  if (selectedActivity === 'test') {
    return <HygieneTests gradeLevel={gradeLevel} onExit={() => setSelectedActivity(null)} />;
  }
  if (selectedActivity === 'scenario') {
    return <HygieneScenarios gradeLevel={gradeLevel} onExit={() => setSelectedActivity(null)} />;
  }
  if (selectedActivity === 'game') {
    return <HygieneGames gradeLevel={gradeLevel} onExit={() => setSelectedActivity(null)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 p-4">
      <div className="w-full max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <button onClick={onExit} className="mb-6 px-6 py-2 bg-white/5 text-white rounded-full font-bold border border-white/20 hover:bg-white/10 transition-all text-sm">
            ⬅ GERİ DÖN
          </button>
          <h2 className="text-4xl md:text-7xl font-black text-white drop-shadow-2xl mb-4 uppercase">Kişisel Hijyen ve Sağlık</h2>
          <p className="text-white/80 text-sm md:text-base font-semibold mb-6 max-w-2xl mx-auto">Sağlıklı yaşam için öğren!</p>
          <div className="flex justify-center gap-3">
            <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">{gradeLevel}. SINIF</span>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto pb-32">
          {activities.map((activity) => (
            <GameCard 
              key={activity.id} 
              title={activity.title} 
              icon={activity.icon} 
              color={`bg-gradient-to-br ${activity.color}`} 
              description={activity.desc} 
              onClick={() => setSelectedActivity(activity.id)} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HygieneMenu;
