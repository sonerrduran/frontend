import GameCard from '../../core/GameCard';
import React from 'react';

interface DigitalHealthMenuProps {
  gradeLevel: number;
  onSelectActivity: (activity: string) => void;
  onExit: () => void;
}

const DigitalHealthMenu: React.FC<DigitalHealthMenuProps> = ({ gradeLevel, onSelectActivity, onExit }) => {
  const getContent = () => {
    if (gradeLevel <= 2) {
      return {
        title: "Dijital Sağlık ve Teknoloji Kullanımı",
        subtitle: "Ekran süresi dengesi",
        activities: [
          { id: 'lesson', title: 'Dersler', icon: '📚', desc: 'Telefon ve tabletleri güvenli ve sınırlı kullanma', color: 'from-indigo-600 to-violet-700' },
          { id: 'test', title: 'Testler', icon: '📝', desc: 'Basit ekran süresi farkındalık testi', color: 'from-indigo-600 to-violet-700' },
          { id: 'scenario', title: 'Senaryolar', icon: '🎬', desc: 'Sanal bir gün planlama (okul, oyun, ekran dengesi)', color: 'from-indigo-600 to-violet-700' },
          { id: 'game', title: 'Oyunlar', icon: '🎮', desc: 'Ekran süresi dengesi oyunu', color: 'from-indigo-600 to-violet-700' }
        ]
      };
    } else if (gradeLevel <= 4) {
      return {
        title: "Dijital Sağlık ve Teknoloji Kullanımı",
        subtitle: "Ekran zamanı yönetimi",
        activities: [
          { id: 'lesson', title: 'Dersler', icon: '📚', desc: 'Teknoloji kullanımında sınır koyma ve sorumluluk', color: 'from-indigo-600 to-violet-700' },
          { id: 'test', title: 'Testler', icon: '📝', desc: 'Günlük ekran kullanım testi', color: 'from-indigo-600 to-violet-700' },
          { id: 'scenario', title: 'Senaryolar', icon: '🎬', desc: 'Ekran bağımlılığı olan karakteri kurtarma', color: 'from-indigo-600 to-violet-700' },
          { id: 'game', title: 'Oyunlar', icon: '🎮', desc: 'Ekran zamanı yönetimi kart oyunu', color: 'from-indigo-600 to-violet-700' }
        ]
      };
    } else if (gradeLevel <= 6) {
      return {
        title: "Dijital Sağlık ve Teknoloji Kullanımı",
        subtitle: "Teknoloji bağımlılığı farkındalığı",
        activities: [
          { id: 'lesson', title: 'Dersler', icon: '📚', desc: 'Teknoloji bağımlılığı ve verimli kullanım', color: 'from-indigo-600 to-violet-700' },
          { id: 'test', title: 'Testler', icon: '📝', desc: 'Bağımlılık farkındalık anketi', color: 'from-indigo-600 to-violet-700' },
          { id: 'scenario', title: 'Senaryolar', icon: '🎬', desc: 'Sosyal medya veya oyun bağımlılığı senaryosu', color: 'from-indigo-600 to-violet-700' },
          { id: 'game', title: 'Oyunlar', icon: '🎮', desc: 'Telefon/Tablet molası oyunu', color: 'from-indigo-600 to-violet-700' }
        ]
      };
    } else {
      return {
        title: "Dijital Sağlık ve Teknoloji Kullanımı",
        subtitle: "Dijital detoks ve sağlıklı kullanım",
        activities: [
          { id: 'lesson', title: 'Dersler', icon: '📚', desc: 'Dijital sağlık, sosyal medya dengesi ve bağımlılık önleme', color: 'from-indigo-600 to-violet-700' },
          { id: 'test', title: 'Testler', icon: '📝', desc: 'Ekran kullanım alışkanlığı testi', color: 'from-indigo-600 to-violet-700' },
          { id: 'scenario', title: 'Senaryolar', icon: '🎬', desc: 'Telefon ve bilgisayar bağımlılığı yönetimi', color: 'from-indigo-600 to-violet-700' },
          { id: 'game', title: 'Oyunlar', icon: '🎮', desc: 'Dijital detoks challenge', color: 'from-indigo-600 to-violet-700' }
        ]
      };
    }
  };

  const content = getContent();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 p-4">
      <div className="w-full max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <button onClick={onExit} className="mb-6 px-6 py-2 bg-white/5 text-white rounded-full font-bold border border-white/20 hover:bg-white/10 transition-all text-sm">
            ⬅ GERİ DÖN
          </button>
          <h2 className="text-4xl md:text-7xl font-black text-white drop-shadow-2xl mb-4 uppercase">{content.title}</h2>
          <p className="text-white/80 text-sm md:text-base font-semibold mb-6 max-w-2xl mx-auto">{content.subtitle}</p>
          <div className="flex justify-center gap-3">
            <span className="bg-indigo-500/20 text-indigo-300 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">{gradeLevel}. SINIF</span>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto pb-32">
          {content.activities.map((activity) => (
            <GameCard key={activity.id} title={activity.title} icon={activity.icon} color={`bg-gradient-to-br ${activity.color}`} description={activity.desc} onClick={() => onSelectActivity(activity.id)} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DigitalHealthMenu;
