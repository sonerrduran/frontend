import GameCard from '../../core/GameCard';
import React, { useState } from 'react';
import TrafficLessons from './TrafficLessons';
import TrafficTests from './TrafficTests';
import TrafficScenarios from './TrafficScenarios';
import TrafficGames from './TrafficGames';

interface TrafficSafetyMenuProps {
  gradeLevel: number;
  onSelectActivity: (activity: string) => void;
  onExit: () => void;
}

const TrafficSafetyMenu: React.FC<TrafficSafetyMenuProps> = ({ gradeLevel, onSelectActivity, onExit }) => {
  const [selectedActivity, setSelectedActivity] = useState<string | null>(null);

  const activities = [
    { id: 'lesson', title: 'Dersler', icon: '📚', desc: 'Trafik güvenliği dersleri', color: 'from-red-500 via-orange-500 to-red-600' },
    { id: 'test', title: 'Testler', icon: '📝', desc: 'Trafik bilgisi testleri', color: 'from-orange-500 via-amber-500 to-orange-600' },
    { id: 'scenario', title: 'Senaryolar', icon: '🎬', desc: 'Gerçek trafik durumları', color: 'from-amber-500 via-yellow-500 to-amber-600' },
    { id: 'game', title: 'Oyunlar', icon: '🎮', desc: 'Eğlenceli trafik oyunları', color: 'from-yellow-500 via-orange-500 to-yellow-600' }
  ];

  // Render selected activity
  if (selectedActivity === 'lesson') {
    return <TrafficLessons gradeLevel={gradeLevel} onExit={() => setSelectedActivity(null)} />;
  }
  if (selectedActivity === 'test') {
    return <TrafficTests gradeLevel={gradeLevel} onExit={() => setSelectedActivity(null)} />;
  }
  if (selectedActivity === 'scenario') {
    return <TrafficScenarios gradeLevel={gradeLevel} onExit={() => setSelectedActivity(null)} />;
  }
  if (selectedActivity === 'game') {
    return <TrafficGames gradeLevel={gradeLevel} onExit={() => setSelectedActivity(null)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900 p-4">
      <div className="w-full max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <button onClick={onExit} className="mb-6 px-6 py-2 bg-white/5 text-white rounded-full font-bold border border-white/20 hover:bg-white/10 transition-all text-sm">
            ⬅ GERİ DÖN
          </button>
          <h2 className="text-4xl md:text-7xl font-black text-white drop-shadow-2xl mb-4 uppercase">Trafik ve Yol Güvenliği</h2>
          <p className="text-white/80 text-sm md:text-base font-semibold mb-6 max-w-2xl mx-auto">Güvenli trafik için öğren!</p>
          <div className="flex justify-center gap-3">
            <span className="bg-red-500/20 text-red-300 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">{gradeLevel}. SINIF</span>
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

export default TrafficSafetyMenu;
