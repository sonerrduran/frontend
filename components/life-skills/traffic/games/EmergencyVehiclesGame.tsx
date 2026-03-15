import React, { useState, useEffect } from 'react';

interface EmergencyVehiclesGameProps {
  onExit: () => void;
}

interface Vehicle {
  id: number;
  type: 'ambulance' | 'fire' | 'police' | 'car' | 'bus';
  icon: string;
  isEmergency: boolean;
  position: number;
}

export default function EmergencyVehiclesGame({ onExit }: EmergencyVehiclesGameProps) {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [score, setScore] = useState(0);
  const [mistakes, setMistakes] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [message, setMessage] = useState('Acil durum araçlarına yol ver!');
  const [nextId, setNextId] = useState(0);

  const vehicleTypes = [
    { type: 'ambulance' as const, icon: '🚑', isEmergency: true, name: 'Ambulans' },
    { type: 'fire' as const, icon: '🚒', isEmergency: true, name: 'İtfaiye' },
    { type: 'police' as const, icon: '🚓', isEmergency: true, name: 'Polis' },
    { type: 'car' as const, icon: '🚗', isEmergency: false, name: 'Araba' },
    { type: 'bus' as const, icon: '🚌', isEmergency: false, name: 'Otobüs' }
  ];

  useEffect(() => {
    if (gameOver) return;

    const interval = setInterval(() => {
      // Yeni araç ekle
      if (Math.random() > 0.6) {
        const randomVehicle = vehicleTypes[Math.floor(Math.random() * vehicleTypes.length)];
        setVehicles(prev => [...prev, {
          id: nextId,
          type: randomVehicle.type,
          icon: randomVehicle.icon,
          isEmergency: randomVehicle.isEmergency,
          position: 0
        }]);
        setNextId(nextId + 1);
      }

      // Araçları hareket ettir
      setVehicles(prev => prev.map(v => ({ ...v, position: v.position + 1 })).filter(v => v.position < 100));
    }, 1000);

    return () => clearInterval(interval);
  }, [gameOver, nextId]);

  const handleVehicleClick = (vehicle: Vehicle) => {
    if (vehicle.isEmergency) {
      setScore(score + 10);
      setMessage(`✅ Doğru! ${vehicleTypes.find(v => v.type === vehicle.type)?.name} acil durum aracıdır!`);
      setVehicles(prev => prev.filter(v => v.id !== vehicle.id));
    } else {
      setMistakes(mistakes + 1);
      setMessage(`❌ Yanlış! Bu acil durum aracı değil!`);
      
      if (mistakes + 1 >= 3) {
        setGameOver(true);
      }
    }
  };

  if (gameOver) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-4 flex items-center justify-center">
        <div className="bg-slate-800/80 backdrop-blur-xl rounded-3xl border border-slate-700 p-8 max-w-md text-center">
          <div className="text-6xl mb-4">🏁</div>
          <h2 className="text-4xl font-black text-white mb-4">Oyun Bitti!</h2>
          <p className="text-2xl text-white mb-2">Toplam Puan: ⭐ {score}</p>
          <p className="text-lg text-slate-400 mb-6">
            {score >= 50 ? '🌟 Harika! Acil araçları iyi tanıyorsun!' : 
             score >= 30 ? '👍 İyi! Biraz daha pratik yap!' : 
             '📚 Daha fazla öğrenmelisin!'}
          </p>
          <div className="flex gap-4 justify-center">
            <button onClick={() => { setScore(0); setMistakes(0); setVehicles([]); setGameOver(false); setMessage('Acil durum araçlarına yol ver!'); }} className="px-6 py-3 bg-red-500 hover:bg-red-400 text-white rounded-xl font-bold transition-all">
              Tekrar Oyna
            </button>
            <button onClick={onExit} className="px-6 py-3 bg-slate-600 hover:bg-slate-500 text-white rounded-xl font-bold transition-all">
              Çıkış
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <button onClick={onExit} className="px-6 py-3 bg-red-600/90 hover:bg-red-500/90 text-white rounded-xl font-bold transition-all">
            ← Çıkış
          </button>
          
          <div className="flex gap-4">
            <div className="px-6 py-3 bg-slate-800/80 rounded-xl">
              <span className="text-white font-black">Hata: {mistakes}/3</span>
            </div>
            <div className="px-6 py-3 bg-slate-800/80 rounded-xl">
              <span className="text-white font-black">⭐ {score}</span>
            </div>
          </div>
        </div>

        {/* Başlık */}
        <div className="text-center mb-8">
          <h1 className="text-white text-4xl md:text-5xl font-black">🚑 Acil Durum Araçları</h1>
          <p className="text-slate-400 text-lg mt-2">Puan: {score}</p>
        </div>

        {/* Dış Kart - Lacivert */}
        <div className="bg-slate-800/80 backdrop-blur-xl rounded-3xl border border-slate-700 p-8 mb-6">
          {/* İç Kart - Oyun Rengi */}
          <div className="bg-gradient-to-br from-red-500 via-rose-500 to-red-600 rounded-2xl p-8 md:p-12 mb-8">
            {/* Mesaj */}
            <div className="text-center mb-6">
              <p className="text-xl font-bold text-white">{message}</p>
            </div>

            {/* Talimat */}
            <div className="bg-red-700/40 border-2 border-rose-400 rounded-xl p-4 mb-6 text-center">
              <p className="text-white font-bold">Acil durum araçlarına tıkla! (Ambulans, İtfaiye, Polis)</p>
            </div>

            {/* Oyun Alanı */}
            <div className="bg-slate-900/80 rounded-2xl p-6 min-h-[400px] border-2 border-rose-400 relative overflow-hidden">
              {/* Yol çizgileri */}
              <div className="absolute inset-0 flex flex-col justify-around opacity-20">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="h-2 bg-white/50"></div>
                ))}
              </div>

              {/* Araçlar */}
              <div className="relative">
                {vehicles.map((vehicle) => (
                  <button
                    key={vehicle.id}
                    onClick={() => handleVehicleClick(vehicle)}
                    className={`absolute text-6xl transition-all duration-1000 hover:scale-110 ${
                      vehicle.isEmergency ? 'animate-pulse' : ''
                    }`}
                    style={{
                      left: `${vehicle.position}%`,
                      top: `${(vehicle.id % 4) * 100}px`,
                      transform: 'translateX(-50%)'
                    }}
                  >
                    {vehicle.icon}
                  </button>
                ))}
              </div>

              {/* Boş alan mesajı */}
              {vehicles.length === 0 && (
                <div className="flex items-center justify-center h-full">
                  <p className="text-white/50 text-xl">Araçlar geliyor...</p>
                </div>
              )}
            </div>
          </div>

          {/* Araç Bilgileri */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-red-700/40 border-2 border-rose-400 rounded-xl p-4 text-center">
              <div className="text-4xl mb-2">🚑</div>
              <p className="text-white font-bold text-sm">Ambulans</p>
              <p className="text-white/80 text-xs">Acil Durum</p>
            </div>
            <div className="bg-red-700/40 border-2 border-rose-400 rounded-xl p-4 text-center">
              <div className="text-4xl mb-2">🚒</div>
              <p className="text-white font-bold text-sm">İtfaiye</p>
              <p className="text-white/80 text-xs">Acil Durum</p>
            </div>
            <div className="bg-red-700/40 border-2 border-rose-400 rounded-xl p-4 text-center">
              <div className="text-4xl mb-2">🚓</div>
              <p className="text-white font-bold text-sm">Polis</p>
              <p className="text-white/80 text-xs">Acil Durum</p>
            </div>
          </div>

          {/* Kurallar */}
          <div className="bg-red-700/40 border-2 border-rose-400 rounded-2xl p-6 text-white">
            <h3 className="font-bold text-lg mb-2">📚 Kurallar:</h3>
            <ul className="space-y-1 text-sm">
              <li>🚑 Ambulans, itfaiye ve polis acil durum araçlarıdır</li>
              <li>🚗 Normal araçlara tıklama</li>
              <li>✅ Sadece acil durum araçlarına tıkla</li>
              <li>⚠️ 3 hata hakkın var</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
