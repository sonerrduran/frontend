import GameCard from '../../core/GameCard';
import React, { useState } from 'react';
import EnvironmentLessons from './EnvironmentLessons';
import EnvironmentTests from './EnvironmentTests';
import EnvironmentScenarios from './EnvironmentScenarios';
import EnvironmentGames from './EnvironmentGames';

interface EnvironmentMenuProps {
  gradeLevel: number;
  onSelectActivity: (activity: string) => void;
  onExit: () => void;
}

const EnvironmentMenu: React.FC<EnvironmentMenuProps> = ({ gradeLevel, onSelectActivity, onExit }) => {
  const [selectedActivity, setSelectedActivity] = useState<string | null>(null);

  if (selectedActivity === 'lesson') {
    return <EnvironmentLessons gradeLevel={gradeLevel} onExit={() => setSelectedActivity(null)} />;
  }
  if (selectedActivity === 'test') {
    return <EnvironmentTests gradeLevel={gradeLevel} onExit={() => setSelectedActivity(null)} />;
  }
  if (selectedActivity === 'scenario') {
    return <EnvironmentScenarios gradeLevel={gradeLevel} onExit={() => setSelectedActivity(null)} />;
  }
  if (selectedActivity === 'game') {
    return <EnvironmentGames gradeLevel={gradeLevel} onExit={() => setSelectedActivity(null)} />;
  }

  const getContent = () => {
    if (gradeLevel <= 2) {
      return {
        title: "Çevre ve Toplum Bilinci",
        subtitle: "Çöp toplama ve doğa sevgisi",
        activities: [
          { id: 'lesson', title: 'Dersler', icon: '📚', desc: 'Temel çevre bilinci', color: 'from-teal-500 to-cyan-600' },
          { id: 'test', title: 'Testler', icon: '📝', desc: 'Doğa ve çevre testi', color: 'from-teal-500 to-cyan-600' },
          { id: 'scenario', title: 'Senaryolar', icon: '🎬', desc: 'Evde enerji tasarrufu simülasyonu', color: 'from-teal-500 to-cyan-600' },
          { id: 'game', title: 'Oyunlar', icon: '🎮', desc: 'Çöp toplama oyunu', color: 'from-teal-500 to-cyan-600' }
        ]
      };
    } else if (gradeLevel <= 4) {
      return {
        title: "Çevre ve Toplum Bilinci",
        subtitle: "Geri dönüşüm ve çevre koruma",
        activities: [
          { id: 'lesson', title: 'Dersler', icon: '📚', desc: 'Çevre koruma dersleri', color: 'from-teal-500 to-cyan-600' },
          { id: 'test', title: 'Testler', icon: '📝', desc: 'Çevre farkındalığı quiz\'i', color: 'from-teal-500 to-cyan-600' },
          { id: 'scenario', title: 'Senaryolar', icon: '🎬', desc: 'Sürdürülebilir ev simülasyonu', color: 'from-teal-500 to-cyan-600' },
          { id: 'game', title: 'Oyunlar', icon: '🎮', desc: 'Geri dönüşüm oyunu', color: 'from-teal-500 to-cyan-600' }
        ]
      };
    } else if (gradeLevel <= 6) {
      return {
        title: "Çevre ve Toplum Bilinci",
        subtitle: "Enerji tasarrufu ve hayvan hakları",
        activities: [
          { id: 'lesson', title: 'Dersler', icon: '📚', desc: 'Sürdürülebilir yaşam dersleri', color: 'from-teal-500 to-cyan-600' },
          { id: 'test', title: 'Testler', icon: '📝', desc: 'Hayvan hakları testi', color: 'from-teal-500 to-cyan-600' },
          { id: 'scenario', title: 'Senaryolar', icon: '🎬', desc: 'Çevre koruma proje simülasyonu', color: 'from-teal-500 to-cyan-600' },
          { id: 'game', title: 'Oyunlar', icon: '🎮', desc: 'Enerji tasarrufu oyunu', color: 'from-teal-500 to-cyan-600' }
        ]
      };
    } else {
      return {
        title: "Çevre ve Toplum Bilinci",
        subtitle: "Gönüllülük ve toplumsal sorumluluk",
        activities: [
          { id: 'lesson', title: 'Dersler', icon: '📚', desc: 'Toplum bilinci ve çevre dersleri', color: 'from-teal-500 to-cyan-600' },
          { id: 'test', title: 'Testler', icon: '📝', desc: 'Sürdürülebilirlik testi', color: 'from-teal-500 to-cyan-600' },
          { id: 'scenario', title: 'Senaryolar', icon: '🎬', desc: 'Toplum hizmeti ve gönüllülük simülasyonu', color: 'from-teal-500 to-cyan-600' },
          { id: 'game', title: 'Oyunlar', icon: '🎮', desc: 'Gönüllülük ve toplumsal oyun', color: 'from-teal-500 to-cyan-600' }
        ]
      };
    }
  };

  const content = getContent();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900 p-4">
      <div className="w-full max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <button onClick={onExit} className="mb-6 px-6 py-2 bg-white/5 text-white rounded-full font-bold border border-white/20 hover:bg-white/10 transition-all text-sm">
            ⬅ GERİ DÖN
          </button>
          <h2 className="text-4xl md:text-7xl font-black text-white drop-shadow-2xl mb-4 uppercase">{content.title}</h2>
          <p className="text-white/80 text-sm md:text-base font-semibold mb-6 max-w-2xl mx-auto">{content.subtitle}</p>
          <div className="flex justify-center gap-3">
            <span className="bg-teal-500/20 text-teal-300 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">{gradeLevel}. SINIF</span>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto pb-32">
          {content.activities.map((activity) => (
            <GameCard key={activity.id} title={activity.title} icon={activity.icon} color={`bg-gradient-to-br ${activity.color}`} description={activity.desc} onClick={() => setSelectedActivity(activity.id)} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EnvironmentMenu;
