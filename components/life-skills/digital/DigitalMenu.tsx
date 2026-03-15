import GameCard from '../../core/GameCard';
import React, { useState } from 'react';
import DigitalLessons from './DigitalLessons';
import DigitalTests from './DigitalTests';
import DigitalScenarios from './DigitalScenarios';
import DigitalGames from './DigitalGames';

interface DigitalMenuProps {
  gradeLevel: number;
  onSelectActivity: (activity: string) => void;
  onExit: () => void;
}

const DigitalMenu: React.FC<DigitalMenuProps> = ({ gradeLevel, onSelectActivity, onExit }) => {
  const [selectedActivity, setSelectedActivity] = useState<string | null>(null);

  const handleActivitySelect = (activity: string) => {
    setSelectedActivity(activity);
  };

  // Render selected activity component
  if (selectedActivity === 'lesson') {
    return <DigitalLessons gradeLevel={gradeLevel} onExit={() => setSelectedActivity(null)} />;
  }
  if (selectedActivity === 'test') {
    return <DigitalTests gradeLevel={gradeLevel} onExit={() => setSelectedActivity(null)} />;
  }
  if (selectedActivity === 'scenario') {
    return <DigitalScenarios gradeLevel={gradeLevel} onExit={() => setSelectedActivity(null)} />;
  }
  if (selectedActivity === 'game') {
    return <DigitalGames gradeLevel={gradeLevel} onExit={() => setSelectedActivity(null)} />;
  }

  const getContent = () => {
    if (gradeLevel <= 2) {
      return {
        title: "Dijital Güvenlik ve İnternet Kullanımı",
        subtitle: "Güvenli site kullanımı",
        activities: [
          { id: 'lesson', title: 'Dersler', icon: '📚', desc: 'Temel internet güvenliği', color: 'from-purple-600 to-indigo-700' },
          { id: 'test', title: 'Testler', icon: '📝', desc: 'Basit internet kuralları testi', color: 'from-purple-600 to-indigo-700' },
          { id: 'scenario', title: 'Senaryolar', icon: '🎬', desc: 'Güvenli siteleri kullanma senaryosu', color: 'from-purple-600 to-indigo-700' },
          { id: 'game', title: 'Oyunlar', icon: '🎮', desc: 'Güvenli site bulma oyunu', color: 'from-purple-600 to-indigo-700' }
        ]
      };
    } else if (gradeLevel <= 4) {
      return {
        title: "Dijital Güvenlik ve İnternet Kullanımı",
        subtitle: "Şifre güvenliği ve bilinmeyen kişiler",
        activities: [
          { id: 'lesson', title: 'Dersler', icon: '📚', desc: 'İnternet güvenliği dersleri', color: 'from-purple-600 to-indigo-700' },
          { id: 'test', title: 'Testler', icon: '📝', desc: 'Şifre güvenliği quiz\'i', color: 'from-purple-600 to-indigo-700' },
          { id: 'scenario', title: 'Senaryolar', icon: '🎬', desc: 'Bilinmeyen kişi iletişim simülasyonu', color: 'from-purple-600 to-indigo-700' },
          { id: 'game', title: 'Oyunlar', icon: '🎮', desc: 'Şifre oluşturma oyunu', color: 'from-purple-600 to-indigo-700' }
        ]
      };
    } else if (gradeLevel <= 6) {
      return {
        title: "Dijital Güvenlik ve İnternet Kullanımı",
        subtitle: "Siber zorbalık ve dijital ayak izi",
        activities: [
          { id: 'lesson', title: 'Dersler', icon: '📚', desc: 'Dijital güvenlik eğitimi', color: 'from-purple-600 to-indigo-700' },
          { id: 'test', title: 'Testler', icon: '📝', desc: 'Dijital ayak izi testi', color: 'from-purple-600 to-indigo-700' },
          { id: 'scenario', title: 'Senaryolar', icon: '🎬', desc: 'Sosyal medya güvenli senaryosu', color: 'from-purple-600 to-indigo-700' },
          { id: 'game', title: 'Oyunlar', icon: '🎮', desc: 'Siber zorbalık tespit oyunu', color: 'from-purple-600 to-indigo-700' }
        ]
      };
    } else {
      return {
        title: "Dijital Güvenlik ve İnternet Kullanımı",
        subtitle: "Sosyal medya sorumluluğu",
        activities: [
          { id: 'lesson', title: 'Dersler', icon: '📚', desc: 'Dijital okuryazarlık ve sorumluluk', color: 'from-purple-600 to-indigo-700' },
          { id: 'test', title: 'Testler', icon: '📝', desc: 'Siber zorbalık ve mahremiyet testi', color: 'from-purple-600 to-indigo-700' },
          { id: 'scenario', title: 'Senaryolar', icon: '🎬', desc: 'Yanlış paylaşım ve sonuç simülasyonu', color: 'from-purple-600 to-indigo-700' },
          { id: 'game', title: 'Oyunlar', icon: '🎮', desc: 'Sosyal medya sorumluluk oyunu', color: 'from-purple-600 to-indigo-700' }
        ]
      };
    }
  };

  const content = getContent();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4">
      <div className="w-full max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <button onClick={onExit} className="mb-6 px-6 py-2 bg-white/5 text-white rounded-full font-bold border border-white/20 hover:bg-white/10 transition-all text-sm">
            ⬅ GERİ DÖN
          </button>
          <h2 className="text-4xl md:text-7xl font-black text-white drop-shadow-2xl mb-4 uppercase">{content.title}</h2>
          <p className="text-white/80 text-sm md:text-base font-semibold mb-6 max-w-2xl mx-auto">{content.subtitle}</p>
          <div className="flex justify-center gap-3">
            <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">{gradeLevel}. SINIF</span>
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

export default DigitalMenu;
