import GameCard from '../../core/GameCard';
import React from 'react';

interface SocialMenuProps {
  gradeLevel: number;
  onSelectActivity: (activity: string) => void;
  onExit: () => void;
}

const SocialMenu: React.FC<SocialMenuProps> = ({ gradeLevel, onSelectActivity, onExit }) => {
  const getContent = () => {
    if (gradeLevel <= 2) {
      return {
        title: "Sosyal ve Duygusal Beceri",
        subtitle: "Duygu tanıma ve arkadaşlık",
        activities: [
          { id: 'lesson', title: 'Dersler', icon: '📚', desc: 'Temel sosyal beceri dersleri', color: 'from-pink-500 to-rose-600' },
          { id: 'test', title: 'Testler', icon: '📝', desc: 'Duygu tanıma testi', color: 'from-pink-500 to-rose-600' },
          { id: 'scenario', title: 'Senaryolar', icon: '🎬', desc: 'Arkadaşlık ve paylaşım senaryosu', color: 'from-pink-500 to-rose-600' },
          { id: 'game', title: 'Oyunlar', icon: '🎮', desc: 'Duygu eşleştirme oyunu', color: 'from-pink-500 to-rose-600' }
        ]
      };
    } else if (gradeLevel <= 4) {
      return {
        title: "Sosyal ve Duygusal Beceri",
        subtitle: "İşbirliği ve empati",
        activities: [
          { id: 'lesson', title: 'Dersler', icon: '📚', desc: 'Sosyal beceri eğitimi', color: 'from-pink-500 to-rose-600' },
          { id: 'test', title: 'Testler', icon: '📝', desc: 'Empati ve paylaşım testi', color: 'from-pink-500 to-rose-600' },
          { id: 'scenario', title: 'Senaryolar', icon: '🎬', desc: 'Grup çatışması simülasyonu', color: 'from-pink-500 to-rose-600' },
          { id: 'game', title: 'Oyunlar', icon: '🎮', desc: 'İşbirliği oyunu', color: 'from-pink-500 to-rose-600' }
        ]
      };
    } else if (gradeLevel <= 6) {
      return {
        title: "Sosyal ve Duygusal Beceri",
        subtitle: "Takım çalışması ve problem çözme",
        activities: [
          { id: 'lesson', title: 'Dersler', icon: '📚', desc: 'Problem çözme ve sorumluluk', color: 'from-pink-500 to-rose-600' },
          { id: 'test', title: 'Testler', icon: '📝', desc: 'Çatışma çözme quiz\'i', color: 'from-pink-500 to-rose-600' },
          { id: 'scenario', title: 'Senaryolar', icon: '🎬', desc: 'Grup problem çözme simülasyonu', color: 'from-pink-500 to-rose-600' },
          { id: 'game', title: 'Oyunlar', icon: '🎮', desc: 'Takım çalışması oyunu', color: 'from-pink-500 to-rose-600' }
        ]
      };
    } else {
      return {
        title: "Sosyal ve Duygusal Beceri",
        subtitle: "Girişimcilik ve toplumsal farkındalık",
        activities: [
          { id: 'lesson', title: 'Dersler', icon: '📚', desc: 'Girişimcilik ve toplumsal farkındalık', color: 'from-pink-500 to-rose-600' },
          { id: 'test', title: 'Testler', icon: '📝', desc: 'Sosyal farkındalık testi', color: 'from-pink-500 to-rose-600' },
          { id: 'scenario', title: 'Senaryolar', icon: '🎬', desc: 'Toplumsal problem çözme simülasyonu', color: 'from-pink-500 to-rose-600' },
          { id: 'game', title: 'Oyunlar', icon: '🎮', desc: 'Girişimcilik oyunları', color: 'from-pink-500 to-rose-600' }
        ]
      };
    }
  };

  const content = getContent();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-pink-900 to-slate-900 p-4">
      <div className="w-full max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <button onClick={onExit} className="mb-6 px-6 py-2 bg-white/5 text-white rounded-full font-bold border border-white/20 hover:bg-white/10 transition-all text-sm">
            ⬅ GERİ DÖN
          </button>
          <h2 className="text-4xl md:text-7xl font-black text-white drop-shadow-2xl mb-4 uppercase">{content.title}</h2>
          <p className="text-white/80 text-sm md:text-base font-semibold mb-6 max-w-2xl mx-auto">{content.subtitle}</p>
          <div className="flex justify-center gap-3">
            <span className="bg-pink-500/20 text-pink-300 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">{gradeLevel}. SINIF</span>
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

export default SocialMenu;
