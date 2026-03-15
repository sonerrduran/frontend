import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const grades = [
  { number: 1, title: '1. SINIF', subtitle: 'Harfler, Sesler, Kelimeler', color: 'from-green-400 to-emerald-500' },
  { number: 2, title: '2. SINIF', subtitle: 'Okuma, Yazma, Hikaye', color: 'from-blue-400 to-indigo-500' },
  { number: 3, title: '3. SINIF', subtitle: 'Deyimler, Atasözleri', color: 'from-orange-400 to-red-500' },
  { number: 4, title: '4. SINIF', subtitle: 'Metin Türleri, Anlatım', color: 'from-pink-400 to-purple-500' },
  { number: 5, title: '5. SINIF', subtitle: 'Edebiyat, Türler, Cümle', color: 'from-cyan-400 to-blue-500' },
  { number: 6, title: '6. SINIF', subtitle: 'Kompozisyon, Eleştiri', color: 'from-teal-400 to-green-500' },
  { number: 7, title: '7. SINIF', subtitle: 'Edebi Sanatlar, Şiir, Roman', color: 'from-violet-400 to-purple-500' },
  { number: 8, title: '8. SINIF', subtitle: 'Kompozisyon, Eleşiri', color: 'from-emerald-400 to-teal-500' }
];

export default function TurkishMenu() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-8">
      <button
        onClick={() => navigate('/')}
        className="mb-6 flex items-center gap-2 text-gray-700 hover:text-gray-900"
      >
        <ArrowLeft size={20} />
        Ana Menü
      </button>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">TÜRKÇE OYUNLARI</h1>
          <p className="text-xl text-gray-600">Sınıfını seç, oyunlarla Türkçe öğren ve eğlen!</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {grades.map((grade) => (
            <button
              key={grade.number}
              onClick={() => navigate(`/turkish/grade/${grade.number}`)}
              className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
            >
              <div className={`bg-gradient-to-br ${grade.color} p-8 text-white`}>
                <div className="text-6xl font-bold mb-2">{grade.number}</div>
                <h2 className="text-2xl font-bold mb-2">{grade.title}</h2>
                <p className="text-sm opacity-90">{grade.subtitle}</p>
              </div>
              <div className="absolute top-4 right-4 text-white opacity-20 group-hover:opacity-40 transition-opacity">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
                </svg>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
