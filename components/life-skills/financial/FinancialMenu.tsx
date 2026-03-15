import GameCard from '../../core/GameCard';
import React, { useState } from 'react';
import FinancialLessons from './FinancialLessons';
import FinancialTests from './FinancialTests';
import FinancialScenarios from './FinancialScenarios';
import FinancialGames from './FinancialGames';

interface FinancialMenuProps {
  gradeLevel: number;
  onSelectActivity: (activity: string) => void;
  onExit: () => void;
}

const FinancialMenu: React.FC<FinancialMenuProps> = ({ gradeLevel, onSelectActivity, onExit }) => {
  const [selectedActivity, setSelectedActivity] = useState<string | null>(null);

  const handleActivitySelect = (activity: string) => {
    setSelectedActivity(activity);
  };

  // Render selected activity component
  if (selectedActivity === 'lesson') {
    return <FinancialLessons gradeLevel={gradeLevel} onExit={() => setSelectedActivity(null)} />;
  }
  if (selectedActivity === 'test') {
    return <FinancialTests gradeLevel={gradeLevel} onExit={() => setSelectedActivity(null)} />;
  }
  if (selectedActivity === 'scenario') {
    return <FinancialScenarios gradeLevel={gradeLevel} onExit={() => setSelectedActivity(null)} />;
  }
  if (selectedActivity === 'game') {
    return <FinancialGames gradeLevel={gradeLevel} onExit={() => setSelectedActivity(null)} />;
  }

  const getContent = () => {
    if (gradeLevel <= 4) {
      return {
        title: "Finansal Okuryazarlık",
        subtitle: "Temel para bilgisi ve harçlık yönetimi",
        activities: [
          { id: 'lesson', title: 'Dersler', icon: '📚', desc: 'Temel para bilgisi', color: 'from-green-600 to-emerald-700' },
          { id: 'test', title: 'Testler', icon: '📝', desc: 'Harçlık yönetimi testi', color: 'from-green-600 to-emerald-700' },
          { id: 'scenario', title: 'Senaryolar', icon: '🎬', desc: 'Basit alışveriş senaryosu', color: 'from-green-600 to-emerald-700' },
          { id: 'game', title: 'Oyunlar', icon: '🎮', desc: 'Sanal market oyunu', color: 'from-green-600 to-emerald-700' }
        ]
      };
    } else if (gradeLevel <= 6) {
      return {
        title: "Finansal Okuryazarlık",
        subtitle: "Bütçe ve tasarruf",
        activities: [
          { id: 'lesson', title: 'Dersler', icon: '📚', desc: 'Bütçe ve tasarruf dersleri', color: 'from-green-600 to-emerald-700' },
          { id: 'test', title: 'Testler', icon: '📝', desc: 'Bütçe planlama quiz\'i', color: 'from-green-600 to-emerald-700' },
          { id: 'scenario', title: 'Senaryolar', icon: '🎬', desc: 'Alışveriş ve tasarruf simülasyonu', color: 'from-green-600 to-emerald-700' },
          { id: 'game', title: 'Oyunlar', icon: '🎮', desc: 'Para biriktirme oyunu', color: 'from-green-600 to-emerald-700' }
        ]
      };
    } else {
      return {
        title: "Finansal Okuryazarlık",
        subtitle: "Yatırım ve finansal planlama",
        activities: [
          { id: 'lesson', title: 'Dersler', icon: '📚', desc: 'Finansal okuryazarlık dersleri', color: 'from-green-600 to-emerald-700' },
          { id: 'test', title: 'Testler', icon: '📝', desc: 'Harçlık yönetimi testi', color: 'from-green-600 to-emerald-700' },
          { id: 'scenario', title: 'Senaryolar', icon: '🎬', desc: 'Basit yatırım ve birikim simülasyonu', color: 'from-green-600 to-emerald-700' },
          { id: 'game', title: 'Oyunlar', icon: '🎮', desc: 'Yatırım ve tasarruf oyunu', color: 'from-green-600 to-emerald-700' }
        ]
      };
    }
  };

  const content = getContent();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900 p-4">
      <div className="w-full max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <button onClick={onExit} className="mb-6 px-6 py-2 bg-white/5 text-white rounded-full font-bold border border-white/20 hover:bg-white/10 transition-all text-sm">
            ⬅ GERİ DÖN
          </button>
          <h2 className="text-4xl md:text-7xl font-black text-white drop-shadow-2xl mb-4 uppercase">{content.title}</h2>
          <p className="text-white/80 text-sm md:text-base font-semibold mb-6 max-w-2xl mx-auto">{content.subtitle}</p>
          <div className="flex justify-center gap-3">
            <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">{gradeLevel}. SINIF</span>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto pb-32">
          {content.activities.map((activity) => (
            <GameCard key={activity.id} title={activity.title} icon={activity.icon} color={`bg-gradient-to-br ${activity.color}`} description={activity.desc} onClick={() => handleActivitySelect(activity.id)} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FinancialMenu;
