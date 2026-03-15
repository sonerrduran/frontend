import React, { useState } from 'react';

interface TrafficSign {
    id: number;
    name: string;
    category: string;
    emoji: string;
    description: string;
    example: string;
}

const trafficSigns: TrafficSign[] = [
    // Yasaklayıcı Levhalar
    { id: 1, name: 'DUR', category: '🚫 Yasaklayıcı', emoji: '🛑', description: 'Bu levha görüldüğünde araç tamamen durmalıdır. Kavşağa girmeden önce tam duruş yapılır.', example: 'Kavşaklarda, yol birleşme noktalarında' },
    { id: 2, name: 'Girilmez', category: '🚫 Yasaklayıcı', emoji: '⛔', description: 'Bu yola giriş yasaktır. Tek yönlü yolların ters tarafında bulunur.', example: 'Tek yönlü sokakların girişinde' },
    { id: 3, name: 'Park Yasak', category: '🚫 Yasaklayıcı', emoji: '🅿️', description: 'Bu bölgede park etmek yasaktır. Araç durdurulabilir ama park edilemez.', example: 'Okul önleri, hastane girişleri' },
    { id: 4, name: 'Sollama Yasak', category: '🚫 Yasaklayıcı', emoji: '🚷', description: 'Bu bölgede sollama yapılamaz. Güvenlik nedeniyle konulmuştur.', example: 'Virajlı yollar, tepe üstleri' },
    { id: 5, name: 'Dönüş Yasak', category: '🚫 Yasaklayıcı', emoji: '↩️', description: 'U dönüşü yapılamaz. Geri dönmek için başka yol aranmalıdır.', example: 'Otoyollar, ana caddeler' },
    
    // Tehlike Uyarı Levhaları
    { id: 6, name: 'Yol Ver', category: '⚠️ Uyarı', emoji: '🔻', description: 'Diğer araçlara yol verilmelidir. Kavşakta öncelik karşı taraftadır.', example: 'Tali yolların ana yola bağlandığı noktalar' },
    { id: 7, name: 'Viraj', category: '⚠️ Uyarı', emoji: '↪️', description: 'İleride keskin viraj var. Hız azaltılmalıdır.', example: 'Dağ yolları, kıvrımlı yollar' },
    { id: 8, name: 'Yaya Geçidi', category: '⚠️ Uyarı', emoji: '🚸', description: 'İleride yaya geçidi var. Yayalara öncelik verilmelidir.', example: 'Okul bölgeleri, alışveriş merkezleri' },
    { id: 9, name: 'Kaygan Yol', category: '⚠️ Uyarı', emoji: '⚡', description: 'Yol kaygan olabilir. Dikkatli sürülmelidir.', example: 'Yağmurlu havada, buzlu yollarda' },
    { id: 10, name: 'Okul Bölgesi', category: '⚠️ Uyarı', emoji: '🏫', description: 'Okul bölgesi, çocuklar olabilir. Hız düşürülmeli, dikkatli olunmalı.', example: 'Okul girişleri ve çevreleri' },
    
    // Bilgilendirici Levhalar
    { id: 11, name: 'Hastane', category: 'ℹ️ Bilgi', emoji: '🏥', description: 'İleride hastane var. Gürültü yapılmamalı, dikkatli sürülmeli.', example: 'Hastane yakınları' },
    { id: 12, name: 'Benzin İstasyonu', category: 'ℹ️ Bilgi', emoji: '⛽', description: 'İleride benzin istasyonu bulunmaktadır.', example: 'Otoyol kenarları' },
    { id: 13, name: 'Park Yeri', category: 'ℹ️ Bilgi', emoji: '🅿️', description: 'Park yapılabilecek alan. Güvenli park bölgesi.', example: 'Alışveriş merkezleri, otopark girişleri' },
    { id: 14, name: 'Tuvalet', category: 'ℹ️ Bilgi', emoji: '🚻', description: 'İleride tuvalet tesisi bulunmaktadır.', example: 'Dinlenme tesisleri' },
    { id: 15, name: 'Yemek', category: 'ℹ️ Bilgi', emoji: '🍴', description: 'İleride yemek yeme yeri var.', example: 'Otoyol dinlenme tesisleri' },
    
    // Yön Levhaları
    { id: 16, name: 'Sağa Dön', category: '➡️ Yön', emoji: '➡️', description: 'Sadece sağa dönülebilir.', example: 'Kavşaklar' },
    { id: 17, name: 'Sola Dön', category: '➡️ Yön', emoji: '⬅️', description: 'Sadece sola dönülebilir.', example: 'Kavşaklar' },
    { id: 18, name: 'Düz Git', category: '➡️ Yön', emoji: '⬆️', description: 'Sadece düz gidilebilir.', example: 'Kavşaklar' },
    { id: 19, name: 'Otoyol', category: '➡️ Yön', emoji: '🛣️', description: 'Otoyol girişi. Yüksek hız limiti.', example: 'Otoyol giriş rampası' },
    { id: 20, name: 'Şehir Merkezi', category: '➡️ Yön', emoji: '🏙️', description: 'Şehir merkezine giden yol.', example: 'Ana yollar' },
];

interface Props {
    onExit: () => void;
}

const TrafficSignsLearn: React.FC<Props> = ({ onExit }) => {
    const [selectedCategory, setSelectedCategory] = useState<string>('Tümü');
    const [selectedSign, setSelectedSign] = useState<TrafficSign | null>(null);

    const categories = ['Tümü', '🚫 Yasaklayıcı', '⚠️ Uyarı', 'ℹ️ Bilgi', '➡️ Yön'];
    
    const filteredSigns = selectedCategory === 'Tümü' 
        ? trafficSigns 
        : trafficSigns.filter(sign => sign.category === selectedCategory);

    return (
        <div className="min-h-screen text-white p-4">
            <div className="w-full max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-6">
                    <button onClick={onExit} className="bg-white/10 hover:bg-white/20 px-6 py-3 rounded-xl border border-white/10 transition-all font-bold">
                        ⬅ GERİ
                    </button>
                    <h2 className="text-3xl md:text-5xl font-black text-white">
                        TRAFİK LEVHALARI
                    </h2>
                    <div className="w-24"></div>
                </div>

                {/* Category Filter */}
                <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`px-4 py-2 rounded-xl font-bold text-sm whitespace-nowrap transition-all ${
                                selectedCategory === cat
                                    ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white scale-105'
                                    : 'bg-white/10 hover:bg-white/20'
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Signs Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-8">
                    {filteredSigns.map(sign => (
                        <button
                            key={sign.id}
                            onClick={() => setSelectedSign(sign)}
                            className="bg-white/10 backdrop-blur-xl p-6 rounded-2xl border border-white/20 hover:border-red-500/50 hover:scale-105 transition-all group"
                        >
                            <div className="text-6xl mb-3 group-hover:scale-110 transition-transform">{sign.emoji}</div>
                            <h3 className="font-black text-sm mb-1">{sign.name}</h3>
                            <p className="text-xs text-white/60">{sign.category}</p>
                        </button>
                    ))}
                </div>

                {/* Sign Detail Modal */}
                {selectedSign && (
                    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={() => setSelectedSign(null)}>
                        <div className="bg-gradient-to-br from-slate-900 to-blue-900 p-8 rounded-3xl border-2 border-red-500/50 max-w-2xl w-full shadow-2xl" onClick={e => e.stopPropagation()}>
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <span className="text-sm font-bold text-red-400 mb-2 block">{selectedSign.category}</span>
                                    <h3 className="text-4xl font-black mb-2">{selectedSign.name}</h3>
                                </div>
                                <button onClick={() => setSelectedSign(null)} className="text-4xl hover:scale-110 transition-transform">✕</button>
                            </div>
                            
                            <div className="text-9xl text-center mb-6">{selectedSign.emoji}</div>
                            
                            <div className="bg-white/5 p-6 rounded-2xl mb-4">
                                <h4 className="font-bold text-yellow-400 mb-2">📖 Açıklama:</h4>
                                <p className="text-white/90 leading-relaxed">{selectedSign.description}</p>
                            </div>
                            
                            <div className="bg-white/5 p-6 rounded-2xl">
                                <h4 className="font-bold text-green-400 mb-2">💡 Örnek Kullanım:</h4>
                                <p className="text-white/90">{selectedSign.example}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TrafficSignsLearn;
