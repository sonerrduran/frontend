# 🚀 Eğitim Galaksisi v3 - Özel Edirne Koleji Eğitim Platformu

Modern, ölçeklenebilir ve kapsamlı bir eğitim platformu. 100.000+ kullanıcı ve 10.000+ oyun kapasitesine sahip, web, mobil ve masaüstü platformlarında çalışır.

## 📋 İçindekiler

- [Özellikler](#-özellikler)
- [Teknoloji Stack](#-teknoloji-stack)
- [Kurulum](#-kurulum)
- [Kullanım](#-kullanım)
- [Proje Yapısı](#-proje-yapısı)
- [Geliştirme](#-geliştirme)
- [Dokümantasyon](#-dokümantasyon)

## ✨ Özellikler

### 🎮 300+ Eğitici Oyun
- **Matematik**: 200+ oyun (Okul öncesi - 8. Sınıf)
- **Türkçe**: 30+ dil oyunu
- **Mantık Oyunları**: 115+ puzzle ve strateji oyunu
- **Hızlı Okuma**: 20+ egzersiz
- **Dikkat ve Odaklanma**: 6 oyun
- **Öğrenme Teknikleri**: 11 araç
- **Yaşam Becerileri**: 9 kategori

### 👥 Çoklu Kullanıcı Rolleri
- **Öğrenci**: Oyun oynama, ilerleme takibi, rozetler
- **Öğretmen**: Sınıf yönetimi, ödev atama, analitik
- **Veli**: Çocuk takibi, performans raporları
- **Okul Yöneticisi**: Okul yönetimi, raporlama
- **Sistem Yöneticisi**: Tam sistem kontrolü

### 🎯 Gamification
- Yıldız ve XP sistemi
- Seviye sistemi
- Avatar sistemi
- Rozet sistemi
- Liderlik tablosu
- Günlük hedefler

### 📊 Analitik ve Raporlama
- Öğrenci performans takibi
- Sınıf analizleri
- Okul geneli raporlar
- İlerleme grafikleri

## 🛠 Teknoloji Stack

### Frontend
- **React 19.2.3** - UI Framework
- **TypeScript 5.8.2** - Type Safety
- **Vite 6.2.0** - Build Tool
- **Zustand 5.0.2** - State Management
- **React Router 7.13.1** - Routing
- **Framer Motion 11.0.0** - Animations
- **Tailwind CSS** - Styling

### Backend (Microservices)
- **NestJS** - Backend Framework
- **PostgreSQL** - İlişkisel Veritabanı
- **Prisma** - ORM
- **Redis** - Cache & Session
- **JWT** - Authentication

### Desktop & Mobile
- **Electron** - Desktop App
- **PWA** - Progressive Web App

## 🚀 Kurulum

### Gereksinimler
- Node.js 18+ 
- npm veya yarn
- Git

### Frontend Kurulumu (Mock Mode)

```bash
# Repository'yi klonla
git clone https://github.com/sonerrduran/egitimgalaksisiv3.git
cd egitimgalaksisiv3

# Bağımlılıkları yükle
npm install --legacy-peer-deps

# Development modunda çalıştır (Mock data ile)
npm run dev
```

Frontend http://localhost:5173 adresinde çalışacak.

### Backend Kurulumu (Opsiyonel)

Backend'i çalıştırmak için:

```bash
# Docker ile PostgreSQL ve Redis başlat
cd backend
docker-compose up -d

# Her servis için bağımlılıkları yükle
cd apps/api-gateway && npm install
cd ../auth-service && npm install
cd ../user-service && npm install
cd ../game-service && npm install

# Prisma migration
cd ../../libs/database
npx prisma generate
npx prisma db push
npx prisma db seed

# Servisleri başlat (her biri ayrı terminal'de)
cd ../../apps/api-gateway && npm run start:dev
cd ../auth-service && npm run start:dev
cd ../user-service && npm run start:dev
cd ../game-service && npm run start:dev
```

## 🎮 Kullanım

### Mock Mode (Backend'siz Geliştirme)

`.env.development` dosyası:
```env
VITE_USE_MOCK=true
VITE_API_URL=http://localhost:3000
```

Mock mode'da:
- Giriş: Herhangi bir email/şifre ile giriş yapabilirsiniz
- Test kullanıcıları:
  - `student@test.com` - Öğrenci
  - `teacher@test.com` - Öğretmen
  - `admin@test.com` - Admin

### Production Mode (Gerçek API)

`.env.production` dosyası:
```env
VITE_USE_MOCK=false
VITE_API_URL=https://api.yourdomain.com
```

## 📁 Proje Yapısı

```
├── components/          # Oyun bileşenleri (300+ oyun)
│   ├── math/           # Matematik oyunları
│   ├── turkish/        # Türkçe oyunları
│   ├── logic-games/    # Mantık oyunları
│   ├── fast-reading/   # Hızlı okuma
│   └── ...
├── features/           # Feature modülleri
│   ├── auth/          # Giriş/Kayıt
│   ├── dashboard/     # Dashboard'lar
│   ├── games/         # Oyun tarayıcı
│   └── ...
├── stores/            # Zustand state management
├── services/          # API servisleri
│   ├── api.ts        # API client
│   └── mockData.ts   # Mock data
├── backend/           # Backend microservices
│   ├── apps/         # Servisler
│   └── libs/         # Ortak kütüphaneler
└── docs/             # Dokümantasyon
```

## 🔧 Geliştirme

### Frontend Geliştirme

```bash
# Development server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

### Desktop App

```bash
# Electron development
npm run electron:dev

# Electron build
npm run electron:build
```

### Yeni Oyun Ekleme

1. `components/` altında oyun kategorisine uygun klasörde component oluştur
2. `App.tsx` veya `AppRouter.tsx` içinde route ekle
3. `services/mockData.ts` içinde oyun verisini ekle

## 📚 Dokümantasyon

- [Frontend Mimarisi](./FRONTEND_ARCHITECTURE.md) - Detaylı frontend yapısı
- [Production Migration Plan](./PRODUCTION_MIGRATION_PLAN.md) - Backend migration planı
- [API Dokümantasyonu](./docs/API.md) - API endpoint'leri

## 🎯 Roadmap

### Faz 1: Frontend Geliştirme (Tamamlandı ✅)
- [x] 300+ oyun bileşeni
- [x] Dashboard'lar
- [x] State management
- [x] Mock data servisleri

### Faz 2: UI/UX İyileştirme (Devam Ediyor 🚧)
- [ ] Responsive tasarım optimizasyonu
- [ ] Dark/Light tema
- [ ] Animasyon iyileştirmeleri
- [ ] Accessibility

### Faz 3: Backend Entegrasyonu (Planlı 📋)
- [ ] NestJS microservices
- [ ] Real-time features
- [ ] WebSocket entegrasyonu
- [ ] Push notifications

### Faz 4: Mobil Uygulama (Planlı 📋)
- [ ] React Native app
- [ ] iOS build
- [ ] Android build

## 🤝 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit yapın (`git commit -m 'feat: Add amazing feature'`)
4. Push yapın (`git push origin feature/amazing-feature`)
5. Pull Request açın

## 📝 Lisans

Bu proje Özel Edirne Koleji için geliştirilmiştir.

## 👨‍💻 Geliştirici

**Soner Duran**
- GitHub: [@sonerrduran](https://github.com/sonerrduran)

## 🙏 Teşekkürler

Bu projeyi geliştirmemde yardımcı olan herkese teşekkürler!

---

**Not**: Bu proje aktif geliştirme aşamasındadır. Önerileriniz ve katkılarınız için issue açabilirsiniz.
