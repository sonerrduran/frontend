import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, BookOpen, PenTool, Sparkles, FileText } from 'lucide-react';

const gradeData: Record<string, {
  title: string;
  color: string;
  categories: Array<{
    name: string;
    icon: any;
    games: Array<{ name: string; path: string }>;
  }>;
}> = {
  '1': {
    title: '1. SINIF',
    color: 'from-green-400 to-emerald-500',
    categories: [
      {
        name: 'Harfler',
        icon: BookOpen,
        games: [
          { name: 'Harf Eşleştirme', path: '/turkish/grade1/letters/match' },
          { name: 'Sesli-Sessiz Harf', path: '/turkish/grade1/letters/vowel-consonant' },
          { name: 'Harf Tanıma', path: '/turkish/grade1/letters/recognition' },
          { name: 'Büyük-Küçük Harf', path: '/turkish/grade1/letters/uppercase-lowercase' }
        ]
      },
      {
        name: 'Heceler',
        icon: PenTool,
        games: [
          { name: 'Hece Oluşturma', path: '/turkish/grade1/syllables/builder' },
          { name: 'Hece Ayırma', path: '/turkish/grade1/syllables/separation' }
        ]
      },
      {
        name: 'Kelimeler',
        icon: Sparkles,
        games: [
          { name: 'Hece Sayma', path: '/turkish/grade1/words/syllable-count' }
        ]
      },
      {
        name: 'Okuma',
        icon: FileText,
        games: [
          { name: 'Kelime Yapma', path: '/turkish/grade1/reading/word-making' },
          { name: 'Hikaye Anlama', path: '/turkish/grade1/reading/story-comprehension' }
        ]
      }
    ]
  },
  '2': {
    title: '2. SINIF',
    color: 'from-blue-400 to-indigo-500',
    categories: [
      {
        name: 'Okuma',
        icon: BookOpen,
        games: [
          { name: 'Okuduğunu Anlama', path: '/turkish/grade2/reading/comprehension' },
          { name: 'Noktalama İşaretleri', path: '/turkish/grade2/reading/punctuation' }
        ]
      },
      {
        name: 'Yazma',
        icon: PenTool,
        games: [
          { name: 'Cümle Kurma', path: '/turkish/grade2/writing/sentence-builder' },
          { name: 'Paragraf Yazma', path: '/turkish/grade2/writing/paragraph' }
        ]
      }
    ]
  },
  '3': {
    title: '3. SINIF',
    color: 'from-orange-400 to-red-500',
    categories: [
      {
        name: 'Deyimler',
        icon: Sparkles,
        games: [
          { name: 'Benzetmeler', path: '/turkish/grade3/expressions/metaphor' }
        ]
      },
      {
        name: 'Dilbilgisi',
        icon: BookOpen,
        games: [
          { name: 'Ekler', path: '/turkish/grade3/grammar/suffix' }
        ]
      }
    ]
  },
  '4': {
    title: '4. SINIF',
    color: 'from-pink-400 to-purple-500',
    categories: [
      {
        name: 'Metin Türleri',
        icon: FileText,
        games: [
          { name: 'Anlatım', path: '/turkish/grade4/composition/story-writing' }
        ]
      }
    ]
  },
  '5': {
    title: '5. SINIF',
    color: 'from-cyan-400 to-blue-500',
    categories: [
      {
        name: 'Edebiyat',
        icon: BookOpen,
        games: [
          { name: 'Edebi Türler', path: '/turkish/grade5/literature/genre' }
        ]
      }
    ]
  },
  '6': {
    title: '6. SINIF',
    color: 'from-teal-400 to-green-500',
    categories: [
      {
        name: 'Kompozisyon',
        icon: PenTool,
        games: [
          { name: 'Metin Analizi', path: '/turkish/grade6/analysis/text-analysis' }
        ]
      }
    ]
  },
  '7': {
    title: '7. SINIF',
    color: 'from-violet-400 to-purple-500',
    categories: [
      {
        name: 'Edebi Sanatlar',
        icon: Sparkles,
        games: [
          { name: 'Söz Sanatları', path: '/turkish/grade7/rhetoric/figures-of-speech' }
        ]
      }
    ]
  },
  '8': {
    title: '8. SINIF',
    color: 'from-emerald-400 to-teal-500',
    categories: [
      {
        name: 'Kompozisyon',
        icon: FileText,
        games: [
          { name: 'Kompozisyon Yazma', path: '/turkish/grade8/composition/essay-writing' }
        ]
      }
    ]
  }
};

export default function TurkishGradeMenu() {
  const navigate = useNavigate();
  const { grade } = useParams<{ grade: string }>();
  
  const data = grade ? gradeData[grade] : null;

  console.log('🎮 TurkishGradeMenu Debug:');
  console.log('Grade param:', grade);
  console.log('Data found:', data ? 'YES' : 'NO');
  console.log('Categories count:', data?.categories?.length || 0);

  if (!data) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Sınıf bulunamadı</h1>
          <p className="text-gray-600 mb-6">Aradığınız sınıf ({grade}) bulunamadı.</p>
          <button
            onClick={() => navigate('/tu-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Geri Dön
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-8">
      <button
        onClick={() => navigate('/turkish')}
        className="mb-6 flex items-center gap-2 text-gray-700 hover:text-gray-900"
      >
        <ArrowLeft size={20} />
        Geri Dön
      </button>

      <div className="max-w-6xl mx-auto">
        <div className={`bg-gradient-to-r ${data.color} rounded-2xl shadow-xl p-8 mb-8`}>
          <h1 className="text-4xl font-bold text-white text-center">{data.title}</h1>
          <p className="text-white text-center mt-2">Sınıfını seç, oyunlarla Türkçe öğren ve eğlen!</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="text-indigo-500" size={28} />
                  <h2 className="text-xl font-bold text-gray-800">{category.name}</h2>
                </div>
                <div className="space-y-2">
                  {category.games.map((game, gameIndex) => (
                    <button
                      key={gameIndex}
                      onClick={() => navigate(game.path)}
                      className="w-full p-3 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-lg hover:from-indigo-200 hover:to-purple-200 transition-all text-left"
                    >
                      <span className="text-gray-800 font-medium">{game.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
