import GameCard from '../../core/GameCard';
import React, { useState } from 'react';
import NutritionLessons from './NutritionLessons';
import NutritionTests from './NutritionTests';
import NutritionScenarios from './NutritionScenarios';
import NutritionGames from './NutritionGames';

interface NutritionMenuProps {
  gradeLevel: number;
  onSelectActivity: (activity: string) => void;
  onExit: () => void;
}

const NutritionMenu: React.FC<NutritionMenuProps> = ({ gradeLevel, onSelectActivity, onExit }) => {
  const [selectedActivity, setSelectedActivity] = useState<string | null>(null);

  if (selectedActivity === 'lesson') {
    return <NutritionLessons gradeLevel={gradeLevel} onExit={() => setSelectedActivity(null)} />;
  }
  if (selectedActivity === 'test') {
    return <NutritionTests gradeLevel={gradeLevel} onExit={() => setSelectedActivity(null)} />;
  }
  if (selectedActivity === 'scenario') {
    return <NutritionScenarios gradeLevel={gradeLevel} onExit={() => setSelectedActivity(null)} />;
  }
  if (selectedActivity === 'game') {
    return <NutritionGames gradeLevel={gradeLevel} onExit={() => setSelectedActivity(null)} />;
  }

  const getContent = () => {
    if (gradeLevel <= 2) {
      return {
        title: "Sağlıklı Beslenme ve Yaşam",
        subtitle: "Meyve-sebze ve besin grupları",
        activities: [
          { id: 'lesson', title: 'Dersler', icon: '📚', desc: 'Temel beslenme dersleri', color: 'from-lime-500 to-green-600' },
          { id: 'test', title: 'Testler', icon: '📝', desc: 'Besin grupları testi', color: 'from-lime-500 to-green-600' },
          { id: 'scenario', title: 'Senaryolar', icon: '🎬', desc: 'Günlük yemek seçimi simülasyonu', color: 'from-lime-500 to-green-600' },
          { id: 'game', title: 'Oyunlar', icon: '🎮', desc: 'Meyve-seçme oyunu', color: 'from-lime-500 to-green-600' }
        ]
      };
    } else if (gradeLevel <= 4) {
      return {
        title: "Sağlıklı Beslenme ve Yaşam",
        subtitle: "Hareket ve egzersiz",
        activities: [
          { id: 'lesson', title: 'Dersler', icon: '📚', desc: 'Sağlıklı yaşam dersleri', color: 'from-lime-500 to-green-600' },
          { id: 'test', title: 'Testler', icon: '📝', desc: 'Beslenme alışkanlıkları quiz\'i', color: 'from-lime-500 to-green-600' },
          { id: 'scenario', title: 'Senaryolar', icon: '🎬', desc: 'Sanal yemek tabağı simülasyonu', color: 'from-lime-500 to-green-600' },
          { id: 'game', title: 'Oyunlar', icon: '🎮', desc: 'Hareket ve egzersiz oyunu', color: 'from-lime-500 to-green-600' }
        ]
      };
    } else if (gradeLevel <= 6) {
      return {
        title: "Sağlıklı Beslenme ve Yaşam",
        subtitle: "Spor ve aktivite",
        activities: [
          { id: 'lesson', title: 'Dersler', icon: '📚', desc: 'Dengeli beslenme ve spor', color: 'from-lime-500 to-green-600' },
          { id: 'test', title: 'Testler', icon: '📝', desc: 'Günlük aktivite testi', color: 'from-lime-500 to-green-600' },
          { id: 'scenario', title: 'Senaryolar', icon: '🎬', desc: 'Egzersiz ve diyet planlama simülasyonu', color: 'from-lime-500 to-green-600' },
          { id: 'game', title: 'Oyunlar', icon: '🎮', desc: 'Spor ve aktivite oyunu', color: 'from-lime-500 to-green-600' }
        ]
      };
    } else {
      return {
        title: "Sağlıklı Beslenme ve Yaşam",
        subtitle: "Sağlıklı yaşam planlama",
        activities: [
          { id: 'lesson', title: 'Dersler', icon: '📚', desc: 'Spor, beslenme ve stres yönetimi', color: 'from-lime-500 to-green-600' },
          { id: 'test', title: 'Testler', icon: '📝', desc: 'Beslenme ve uyku testi', color: 'from-lime-500 to-green-600' },
          { id: 'scenario', title: 'Senaryolar', icon: '🎬', desc: 'Spor ve diyet yönetimi simülasyonu', color: 'from-lime-500 to-green-600' },
          { id: 'game', title: 'Oyunlar', icon: '🎮', desc: 'Sağlıklı yaşam planlama oyunu', color: 'from-lime-500 to-green-600' }
        ]
      };
    }
  };

  const content = getContent();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-lime-900 to-slate-900 p-4">
      <div className="w-full max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <button onClick={onExit} className="mb-6 px-6 py-2 bg-white/5 text-white rounded-full font-bold border border-white/20 hover:bg-white/10 transition-all text-sm">
            ⬅ GERİ DÖN
          </button>
          <h2 className="text-4xl md:text-7xl font-black text-white drop-shadow-2xl mb-4 uppercase">{content.title}</h2>
          <p className="text-white/80 text-sm md:text-base font-semibold mb-6 max-w-2xl mx-auto">{content.subtitle}</p>
          <div className="flex justify-center gap-3">
            <span className="bg-lime-500/20 text-lime-300 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">{gradeLevel}. SINIF</span>
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

export default NutritionMenu;
