# Tasarım Dokümanı: Monorepo Mimari Dönüşümü

## Genel Bakış

Bu tasarım dokümanı, Eğitim Galaksisi uygulamasının mevcut monolitik yapıdan modern monorepo mimarisine dönüşümünü detaylandırır. Dönüşüm, uygulamanın ölçeklenebilirliğini, bakım kolaylığını ve kod yeniden kullanılabilirliğini artırmayı hedeflerken, mevcut tasarım, renkler ve kullanıcı deneyimini koruyacaktır.

### Mevcut Durum Analizi

**Sorunlar:**
- App.tsx dosyası 6000+ satır ve yönetilemez durumda
- Tüm oyun ve bileşen importları tek bir dosyada
- Dev switch-case yapısı ile oyun seçimi
- Derin iç içe klasör yapısı (components/)
- Tutarsız isimlendirme ve kod tekrarı
- Backend yokluğu - tüm veriler hardcoded
- Gereksiz kod ve karmaşıklık

**Hedefler:**
- Monorepo yapısı ile workspace bazlı organizasyon
- Feature-based modül yapısı
- Paylaşılan paketler (UI, Game Engine)
- Mock data yapısı ve API contract'ları
- App.tsx'in parçalanması
- Temiz ve sürdürülebilir kod tabanı

## Mimari

### Monorepo Yapısı

```
egitim-galaksisi/
├── apps/
│   ├── web/                    # Ana öğrenci uygulaması
│   │   ├── src/
│   │   │   ├── features/       # Feature modülleri
│   │   │   ├── pages/          # Sayfa bileşenleri
│   │   │   ├── routes/         # Routing yapılandırması
│   │   │   ├── stores/         # Zustand stores
│   │   │   ├── App.tsx         # Ana uygulama (sadece routing)
│   │   │   └── main.tsx        # Entry point
│   │   ├── package.json
│   │   └── vite.config.ts
│   │
│   ├── teacher/                # Öğretmen paneli
│   │   ├── src/
│   │   │   ├── features/
│   │   │   ├── pages/
│   │   │   └── App.tsx
│   │   └── package.json
│   │
│   └── admin/                  # Yönetici paneli
│       ├── src/
│       │   ├── features/
│       │   ├── pages/
│       │   └── App.tsx
│       └── package.json
│
├── packages/
│   ├── ui/                     # Tasarım sistemi
│   │   ├── src/
│   │   │   ├── components/     # UI bileşenleri
│   │   │   ├── theme/          # Tema ve renkler
│   │   │   ├── styles/         # Global stiller
│   │   │   └── index.ts        # Barrel export
│   │   └── package.json
│   │
│   ├── game-engine/            # Oyun motoru
│   │   ├── src/
│   │   │   ├── components/     # Oyun bileşenleri
│   │   │   ├── hooks/          # Oyun hooks
│   │   │   ├── utils/          # Oyun utilities
│   │   │   ├── types/          # Oyun tipleri
│   │   │   └── index.ts
│   │   └── package.json
│   │
│   ├── shared/                 # Paylaşılan utilities
│   │   ├── src/
│   │   │   ├── utils/
│   │   │   ├── types/
│   │   │   ├── constants/
│   │   │   └── index.ts
│   │   └── package.json
│   │
│   └── mock-data/              # Mock data ve API contracts
│       ├── src/
│       │   ├── data/           # Mock veriler
│       │   ├── contracts/      # API interface'leri
│       │   ├── generators/     # Veri üreticileri
│       │   └── index.ts
│       └── package.json
│
├── package.json                # Root package.json (workspaces)
├── tsconfig.json               # Root TypeScript config
├── vite.config.ts              # Root Vite config
└── turbo.json                  # Turborepo config (opsiyonel)
```

### Feature Modül Organizasyonu

Her feature modülü kendi içinde bağımsız ve organize edilmiştir:

```
apps/web/src/features/
├── games/
│   ├── math-games/
│   │   ├── grade1/
│   │   ├── grade2/
│   │   ├── ...
│   │   └── index.ts
│   ├── logic-games/
│   │   ├── sudoku/
│   │   ├── puzzle/
│   │   ├── two-player/
│   │   └── index.ts
│   ├── language-games/
│   │   ├── turkish/
│   │   ├── english/
│   │   └── index.ts
│   ├── components/             # Oyun ortak bileşenleri
│   ├── hooks/                  # Oyun hooks
│   ├── types/                  # Oyun tipleri
│   ├── GameBrowser.tsx         # Oyun tarayıcı
│   ├── GamePlayer.tsx          # Oyun oynatıcı
│   └── index.ts
│
├── lessons/
│   ├── math/
│   ├── turkish/
│   ├── science/
│   ├── components/
│   └── index.ts
│
├── fast-reading/
│   ├── exercises/
│   ├── measurements/
│   ├── brain-games/
│   └── index.ts
│
├── focus/
│   ├── exercises/
│   ├── timer/
│   └── index.ts
│
├── learning/
│   ├── flashcards/
│   ├── mind-maps/
│   ├── mnemonics/
│   └── index.ts
│
├── life-skills/
│   ├── traffic/
│   ├── first-aid/
│   ├── hygiene/
│   ├── digital/
│   ├── financial/
│   └── index.ts
│
├── teacher-tools/
│   ├── whiteboard/
│   ├── timer/
│   ├── random-picker/
│   └── index.ts
│
├── stories/
│   ├── StoryBook.tsx
│   └── index.ts
│
├── auth/
│   ├── LoginPage.tsx
│   ├── RegisterPage.tsx
│   └── index.ts
│
├── dashboard/
│   ├── StudentDashboard.tsx
│   ├── TeacherDashboard.tsx
│   ├── AdminDashboard.tsx
│   ├── ParentDashboard.tsx
│   └── index.ts
│
├── profile/
│   ├── ProfilePage.tsx
│   ├── components/
│   └── index.ts
│
└── leaderboard/
    ├── LeaderboardPage.tsx
    ├── components/
    └── index.ts
```

## Bileşenler ve Arayüzler

### packages/ui - Tasarım Sistemi

Tasarım sistemi, tüm uygulamalarda kullanılacak tutarlı UI bileşenlerini sağlar.

**Bileşen Yapısı:**

```typescript
// packages/ui/src/components/Button/Button.tsx
export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'danger' | 'success';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  disabled = false,
  className = '',
}) => {
  // Implementation
};
```

**Tema Yapısı:**

```typescript
// packages/ui/src/theme/gameTheme.ts
export const gameTheme = {
  background: 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900',
  outerCard: 'bg-slate-800/80 backdrop-blur-xl rounded-3xl border border-slate-700',
  exitButton: 'bg-red-600/90 hover:bg-red-500/90',
  header: {
    container: 'bg-slate-800/80 backdrop-blur-md rounded-xl border border-slate-700',
    text: 'text-white font-black',
  },
  text: {
    primary: 'text-white',
    secondary: 'text-slate-400',
    heading: 'text-white',
  },
  feedback: {
    correct: 'bg-green-500/90 border-2 border-green-300 text-white',
    incorrect: 'bg-red-500/90 border-2 border-red-300 text-white',
  },
};

export const colorSchemes = {
  green: {
    innerCard: 'bg-gradient-to-br from-green-500 via-emerald-500 to-green-600',
    button: 'bg-green-500 hover:bg-green-400',
    box: 'bg-green-700/40 border-2 border-green-400',
  },
  // ... diğer renkler
};
```

**Ana Bileşenler:**

1. **Button** - Tüm buton varyasyonları
2. **Card** - Kart bileşenleri (GameCard, InfoCard, etc.)
3. **Modal** - Modal ve overlay bileşenleri
4. **Input** - Form input bileşenleri
5. **Layout** - Layout bileşenleri (Header, Footer, Sidebar)
6. **GameTemplate** - Oyun şablonu bileşeni
7. **LoadingSpinner** - Yükleme göstergesi
8. **ErrorBoundary** - Hata yakalama bileşeni

### packages/game-engine - Oyun Motoru

Oyun motoru, tüm oyunlarda kullanılacak ortak mantığı sağlar.

**Temel Yapı:**

```typescript
// packages/game-engine/src/components/GameTemplate.tsx
export interface GameTemplateProps {
  title: string;
  emoji?: string;
  level: number;
  maxLevel?: number;
  score: number;
  onExit: () => void;
  children: React.ReactNode;
  colorScheme?: ColorScheme;
}

export const GameTemplate: React.FC<GameTemplateProps> = (props) => {
  // Implementation
};
```

**Hooks:**

```typescript
// packages/game-engine/src/hooks/useGameState.ts
export interface GameState {
  level: number;
  score: number;
  lives: number;
  isPlaying: boolean;
  isPaused: boolean;
}

export const useGameState = (initialState?: Partial<GameState>) => {
  const [state, setState] = useState<GameState>({
    level: 1,
    score: 0,
    lives: 3,
    isPlaying: false,
    isPaused: false,
    ...initialState,
  });

  const incrementScore = (points: number) => {
    setState(prev => ({ ...prev, score: prev.score + points }));
  };

  const nextLevel = () => {
    setState(prev => ({ ...prev, level: prev.level + 1 }));
  };

  const loseLife = () => {
    setState(prev => ({ ...prev, lives: Math.max(0, prev.lives - 1) }));
  };

  const startGame = () => {
    setState(prev => ({ ...prev, isPlaying: true, isPaused: false }));
  };

  const pauseGame = () => {
    setState(prev => ({ ...prev, isPaused: true }));
  };

  const resumeGame = () => {
    setState(prev => ({ ...prev, isPaused: false }));
  };

  const resetGame = () => {
    setState({
      level: 1,
      score: 0,
      lives: 3,
      isPlaying: false,
      isPaused: false,
    });
  };

  return {
    state,
    incrementScore,
    nextLevel,
    loseLife,
    startGame,
    pauseGame,
    resumeGame,
    resetGame,
  };
};
```

**Utilities:**

```typescript
// packages/game-engine/src/utils/scoring.ts
export const calculateScore = (
  correctAnswers: number,
  totalQuestions: number,
  timeBonus: number = 0,
  difficultyMultiplier: number = 1
): number => {
  const baseScore = (correctAnswers / totalQuestions) * 100;
  return Math.round((baseScore + timeBonus) * difficultyMultiplier);
};

export const calculateStars = (score: number): number => {
  if (score >= 90) return 3;
  if (score >= 70) return 2;
  if (score >= 50) return 1;
  return 0;
};
```

### packages/mock-data - Mock Data ve API Contracts

Backend yokluğunda kullanılacak mock data yapısı.

**API Contract Interface'leri:**

```typescript
// packages/mock-data/src/contracts/game.ts
export interface GameCategory {
  id: string;
  name: string;
  code: string;
  icon: string;
  color: string;
  description?: string;
  sortOrder: number;
  isActive: boolean;
}

export interface Game {
  id: string;
  name: string;
  code: string;
  categoryId: string;
  description?: string;
  icon: string;
  gradeMin: number;
  gradeMax: number;
  difficulty: 'EASY' | 'MEDIUM' | 'HARD';
  component: string;
  path?: string;
  tags: string[];
  isActive: boolean;
  isFeatured: boolean;
  sortOrder: number;
  playCount: number;
  avgRating: number;
}

export interface GameContent {
  id: string;
  gameId: string;
  type: 'QUESTION' | 'LEVEL' | 'STORY';
  content: any;
  metadata?: any;
}
```

**Mock Data:**

```typescript
// packages/mock-data/src/data/games.ts
export const mockGameCategories: GameCategory[] = [
  {
    id: '1',
    name: 'Matematik Oyunları',
    code: 'MATH',
    icon: '🔢',
    color: 'blue',
    description: 'Matematik becerilerini geliştiren oyunlar',
    sortOrder: 1,
    isActive: true,
  },
  {
    id: '2',
    name: 'Mantık Oyunları',
    code: 'LOGIC',
    icon: '🧩',
    color: 'purple',
    description: 'Mantık ve problem çözme oyunları',
    sortOrder: 2,
    isActive: true,
  },
  // ... diğer kategoriler
];

export const mockGames: Game[] = [
  {
    id: 'math-addition-1',
    name: 'Meyve Toplama',
    code: 'FRUIT_ADDITION',
    categoryId: '1',
    description: 'Meyvelerle toplama işlemi öğren',
    icon: '🍎',
    gradeMin: 1,
    gradeMax: 2,
    difficulty: 'EASY',
    component: 'FruitAdditionGame',
    path: '/games/math/fruit-addition',
    tags: ['toplama', 'temel matematik', '1. sınıf'],
    isActive: true,
    isFeatured: true,
    sortOrder: 1,
    playCount: 1250,
    avgRating: 4.8,
  },
  // ... diğer oyunlar
];
```

**Data Generators:**

```typescript
// packages/mock-data/src/generators/userGenerator.ts
export const generateMockUser = (overrides?: Partial<User>): User => {
  return {
    id: faker.string.uuid(),
    email: faker.internet.email(),
    name: faker.person.fullName(),
    role: 'STUDENT',
    gradeLevel: faker.number.int({ min: 1, max: 8 }),
    stars: faker.number.int({ min: 0, max: 5000 }),
    xp: faker.number.int({ min: 0, max: 10000 }),
    level: faker.number.int({ min: 1, max: 50 }),
    avatar: faker.helpers.arrayElement(['👨‍🚀', '🤖', '👽', '👩‍🚀']),
    solvedProblems: faker.number.int({ min: 0, max: 1000 }),
    streakDays: faker.number.int({ min: 0, max: 365 }),
    ...overrides,
  };
};
```

### App.tsx Parçalanması

Mevcut 6000+ satırlık App.tsx dosyası şu şekilde parçalanacak:

**Yeni App.tsx (Sadece Routing):**

```typescript
// apps/web/src/App.tsx
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes';
import { ErrorBoundary } from '@egitim-galaksisi/ui';

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ErrorBoundary>
  );
};

export default App;
```

**Routing Yapısı:**

```typescript
// apps/web/src/routes/index.tsx
import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { LoadingSpinner } from '@egitim-galaksisi/ui';
import { ProtectedRoute } from './ProtectedRoute';
import { DashboardRouter } from './DashboardRouter';

// Lazy load pages
const LoginPage = lazy(() => import('../features/auth/LoginPage'));
const RegisterPage = lazy(() => import('../features/auth/RegisterPage'));

// Lazy load feature routes
const GameRoutes = lazy(() => import('../features/games/routes'));
const LessonRoutes = lazy(() => import('../features/lessons/routes'));
const ProfileRoutes = lazy(() => import('../features/profile/routes'));
const LeaderboardRoutes = lazy(() => import('../features/leaderboard/routes'));

export const AppRoutes: React.FC = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Dashboard */}
        <Route path="/" element={<ProtectedRoute><DashboardRouter /></ProtectedRoute>} />

        {/* Feature Routes */}
        <Route path="/games/*" element={<ProtectedRoute><GameRoutes /></ProtectedRoute>} />
        <Route path="/lessons/*" element={<ProtectedRoute><LessonRoutes /></ProtectedRoute>} />
        <Route path="/profile/*" element={<ProtectedRoute><ProfileRoutes /></ProtectedRoute>} />
        <Route path="/leaderboard/*" element={<ProtectedRoute><LeaderboardRoutes /></ProtectedRoute>} />

        {/* Catch all */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  );
};
```

**Feature Routes:**

```typescript
// apps/web/src/features/games/routes.tsx
import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const GameBrowser = lazy(() => import('./GameBrowser'));
const GamePlayer = lazy(() => import('./GamePlayer'));

// Math Games
const MathGameRoutes = lazy(() => import('./math-games/routes'));

// Logic Games
const LogicGameRoutes = lazy(() => import('./logic-games/routes'));

// Language Games
const LanguageGameRoutes = lazy(() => import('./language-games/routes'));

const GameRoutes: React.FC = () => {
  return (
    <Routes>
      <Route index element={<GameBrowser />} />
      <Route path=":gameId" element={<GamePlayer />} />
      
      {/* Category Routes */}
      <Route path="math/*" element={<MathGameRoutes />} />
      <Route path="logic/*" element={<LogicGameRoutes />} />
      <Route path="language/*" element={<LanguageGameRoutes />} />
    </Routes>
  );
};

export default GameRoutes;
```

## Veri Modelleri

### User Model

```typescript
export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  gradeLevel: number;
  stars: number;
  xp: number;
  level: number;
  avatar: string;
  solvedProblems: number;
  streakDays: number;
  schoolId?: string | null;
  school?: School | null;
  createdAt: Date;
  updatedAt: Date;
}

export type UserRole = 'SUPER_ADMIN' | 'SCHOOL_ADMIN' | 'TEACHER' | 'STUDENT' | 'PARENT';
```

### Game Models

```typescript
export interface GameCategory {
  id: string;
  name: string;
  code: string;
  icon: string;
  color: string;
  description?: string;
  sortOrder: number;
  isActive: boolean;
  games?: Game[];
}

export interface Game {
  id: string;
  name: string;
  code: string;
  categoryId: string;
  description?: string;
  icon: string;
  gradeMin: number;
  gradeMax: number;
  difficulty: GameDifficulty;
  component: string;
  path?: string;
  tags: string[];
  isActive: boolean;
  isFeatured: boolean;
  sortOrder: number;
  playCount: number;
  avgRating: number;
  category?: GameCategory;
}

export type GameDifficulty = 'EASY' | 'MEDIUM' | 'HARD';

export interface GameSession {
  id: string;
  userId: string;
  gameId: string;
  score: number;
  stars: number;
  correctAnswers: number;
  totalQuestions: number;
  timeSpent: number;
  completedAt: Date;
}
```

### Lesson Models

```typescript
export interface Subject {
  id: string;
  name: string;
  code: string;
  icon: string;
  color: string;
  gradeLevel: number;
  sortOrder: number;
  isActive: boolean;
}

export interface Topic {
  id: string;
  subjectId: string;
  name: string;
  description?: string;
  sortOrder: number;
  isActive: boolean;
}

export interface Lesson {
  id: string;
  topicId: string;
  name: string;
  content: any;
  type: 'VIDEO' | 'TEXT' | 'INTERACTIVE';
  duration: number;
  sortOrder: number;
  isActive: boolean;
}
```

### Leaderboard Models

```typescript
export interface LeaderboardEntry {
  rank: number;
  userId: string;
  userName: string;
  avatar: string;
  stars: number;
  xp: number;
  level: number;
  solvedProblems: number;
  streakDays: number;
}

export interface LeaderboardFilter {
  scope: 'GLOBAL' | 'SCHOOL' | 'CLASSROOM';
  period: 'ALL_TIME' | 'WEEKLY' | 'MONTHLY';
  gradeLevel?: number;
  gameId?: string;
}
```


## Doğruluk Özellikleri (Correctness Properties)

*Bir özellik (property), bir sistemin tüm geçerli yürütmelerinde doğru olması gereken bir karakteristik veya davranıştır - esasen, sistemin ne yapması gerektiği hakkında resmi bir ifadedir. Özellikler, insan tarafından okunabilir spesifikasyonlar ile makine tarafından doğrulanabilir doğruluk garantileri arasında köprü görevi görür.*


### Özellik Yansıması (Property Reflection)

Prework analizini gözden geçirerek, aşağıdaki redundancy'leri tespit ettim:

**Birleştirilebilir Özellikler:**

1. **Workspace Oluşturma (1.1-1.4)**: Tüm workspace'lerin oluşturulması tek bir özellikte birleştirilebilir
2. **Feature Modül Oluşturma (2.1-2.4)**: Tüm feature modüllerinin oluşturulması tek bir özellikte birleştirilebilir
3. **Modül Koruma (11.1-11.12)**: Tüm modül bileşenlerinin korunması tek bir özellikte birleştirilebilir
4. **Tasarım Koruma (6.1, 6.2, 6.4, 6.6, 6.7)**: Tüm tasarım öğelerinin korunması tek bir özellikte birleştirilebilir
5. **Store Koruma (13.1-13.3, 13.6, 13.7)**: Tüm store fonksiyonalitesinin korunması tek bir özellikte birleştirilebilir
6. **API Service Koruma (14.2-14.4, 14.7)**: Tüm API service'lerin korunması tek bir özellikte birleştirilebilir
7. **Workspace Import (9.3-9.4)**: Paket import'larının çalışması tek bir özellikte birleştirilebilir

**Çıkarılacak Özellikler:**

- Test edilemez özellikler (no): 3.6, 4.6, 5.7, 6.3, 6.5, 7.1-7.4, 8.2, 10.7
- Dokümantasyon ve planlama (example): 8.1, 8.3, 8.5, 8.6, 15.1, 15.8

### Özellik 1: Workspace Yapısı Bütünlüğü

*Her* monorepo workspace'i (apps/web, apps/teacher, apps/admin, packages/ui, packages/game-engine, packages/shared, packages/mock-data) için, workspace oluşturulduktan sonra gerekli tüm dosyalar (package.json, tsconfig.json, src/ dizini) mevcut olmalı ve workspace root package.json'da doğru şekilde yapılandırılmalıdır.

**Doğrular: Gereksinimler 1.1, 1.2, 1.3, 1.4, 1.6, 3.1, 4.1**

### Özellik 2: İşlevsellik Koruma

*Her* mevcut özellik (oyunlar, dersler, dashboard'lar, profil, leaderboard) için, migrasyon sonrası özellik aynı input'larla aynı output'u üretmelidir.

**Doğrular: Gereksinimler 1.5, 5.4**

### Özellik 3: TypeScript Path Alias Çözümleme

*Her* workspace arası import için, TypeScript path alias'ları doğru şekilde çözümlenmeli ve derleme hatası oluşmamalıdır.

**Doğrular: Gereksinimler 1.7, 9.7**

### Özellik 4: Barrel Export Tutarlılığı

*Her* feature modülü için, index.ts dosyası mevcut olmalı ve tüm public bileşenler/fonksiyonlar export edilmelidir.

**Doğrular: Gereksinimler 2.5, 2.6**

### Özellik 5: Circular Dependency Yokluğu

*Her* feature modülü ve workspace için, dependency graph'ta circular dependency bulunmamalıdır.

**Doğrular: Gereksinimler 2.7, 9.6**

### Özellik 6: Scoring Tutarlılığı

*Her* oyun için, aynı performans metrikleri (doğru cevap sayısı, süre, zorluk) verildiğinde, scoring fonksiyonu aynı skoru üretmelidir.

**Doğrular: Gereksinimler 3.3**

### Özellik 7: Level Progression Monotonluğu

*Her* oyun için, level progression fonksiyonu monoton artan olmalıdır (level n'den level n+1'e geçiş her zaman daha yüksek bir level numarası üretmelidir).

**Doğrular: Gereksinimler 3.4**

### Özellik 8: Tema Renk Koruma

*Her* renk değeri (gameTheme, colorSchemes) için, migrasyon sonrası değer legacy kod ile aynı olmalıdır.

**Doğrular: Gereksinimler 4.2, 6.1**

### Özellik 9: Component Props Tip Güvenliği

*Her* UI bileşeni için, TypeScript interface tanımlanmış olmalı ve tüm props tip güvenli olmalıdır.

**Doğrular: Gereksinimler 4.8**

### Özellik 10: Tasarım Öğesi Koruma

*Her* CSS class, icon, emoji, responsive breakpoint, font özelliği için, migrasyon sonrası değer legacy kod ile aynı olmalıdır.

**Doğrular: Gereksinimler 6.2, 6.4, 6.6, 6.7**

### Özellik 11: Bağımsız Kategori Import

*Her* oyun kategorisi (math-games, logic-games, language-games) için, kategori bağımsız olarak import edilebilmeli ve diğer kategorilere bağımlı olmamalıdır.

**Doğrular: Gereksinimler 5.5**

### Özellik 12: Runtime Hata Yokluğu

*Her* kod değişikliği sonrası, uygulama çalıştırıldığında runtime hatası oluşmamalıdır.

**Doğrular: Gereksinimler 7.5**

### Özellik 13: Import Statement Standardizasyonu

*Her* dosya için, import statement'lar alfabetik sırada ve tutarlı formatta (absolute imports önce, relative imports sonra) olmalıdır.

**Doğrular: Gereksinimler 7.6**

### Özellik 14: Production Code Temizliği

*Her* production build için, console.log statement'ları bulunmamalıdır.

**Doğrular: Gereksinimler 7.7**

### Özellik 15: Test Başarı Oranı Koruma

*Her* migrasyon fazı sonrası, tüm mevcut testler çalıştırıldığında başarı oranı %100 olmalıdır.

**Doğrular: Gereksinimler 8.4**

### Özellik 16: Rollback İdempotency

*Her* migrasyon fazı için, rollback mekanizması çalıştırıldığında sistem önceki çalışır duruma dönmeli ve rollback'i tekrar çalıştırmak aynı sonucu üretmelidir.

**Doğrular: Gereksinimler 8.7**

### Özellik 17: Workspace Protocol Kullanımı

*Her* internal package referansı için, package.json'da workspace protocol (workspace:*) kullanılmalıdır.

**Doğrular: Gereksinimler 9.2**

### Özellik 18: Workspace Dependency Çözümleme

*Her* workspace için, build işlemi çalıştırıldığında tüm workspace dependency'leri doğru şekilde çözümlenmeli ve build başarılı olmalıdır.

**Doğrular: Gereksinimler 9.5**

### Özellik 19: Shared Package Import

*Her* uygulama (web, teacher, admin) için, shared package'lar (ui, game-engine) import edilebilmeli ve kullanılabilmelidir.

**Doğrular: Gereksinimler 9.3, 9.4**

### Özellik 20: Hot Module Replacement

*Her* workspace için, development mode'da dosya değişikliği yapıldığında HMR çalışmalı ve sayfa yenilenmeden değişiklik görünmelidir.

**Doğrular: Gereksinimler 10.2**

### Özellik 21: Concurrent Development

*Her* workspace için, dev server concurrent olarak çalıştırılabilmeli ve birbirini etkilememeli.

**Doğrular: Gereksinimler 10.5**

### Özellik 22: Modül Bileşen Koruma

*Her* mevcut modül (Academic, Fast Reading, First Aid, Focus, Language, Learning, Logic Games, Memory, Reading, Stories, Teacher Tools) için, tüm bileşenler migrasyon sonrası mevcut olmalı ve çalışmalıdır.

**Doğrular: Gereksinimler 11.1, 11.2, 11.3, 11.4, 11.5, 11.6, 11.7, 11.8, 11.9, 11.10, 11.12**

### Özellik 23: Grade-Level Yapı Koruma

*Her* modül için, grade-level subdivisions (grade1, grade2, ..., grade8) yapısı korunmalıdır.

**Doğrular: Gereksinimler 11.11**

### Özellik 24: Route Path Koruma

*Her* mevcut route için, migrasyon sonrası aynı path ile erişilebilir olmalıdır.

**Doğrular: Gereksinimler 12.1**

### Özellik 25: Role-Based Routing

*Her* kullanıcı rolü (STUDENT, TEACHER, ADMIN, PARENT) için, sadece yetkili olduğu route'lara erişebilmelidir.

**Doğrular: Gereksinimler 12.2, 12.7**

### Özellik 26: Protected Route Koruma

*Her* protected route için, authentication check çalışmalı ve yetkisiz erişim engellenmelidir.

**Doğrular: Gereksinimler 12.3**

### Özellik 27: Lazy Loading Koruma

*Her* route component için, lazy loading çalışmalı ve component sadece route'a gidildiğinde yüklenmelidir.

**Doğrular: Gereksinimler 12.4**

### Özellik 28: Route Component Eşitliği

*Her* route için, migrasyon sonrası render edilen component legacy kod ile aynı olmalıdır.

**Doğrular: Gereksinimler 12.5**

### Özellik 29: Route Parameter Koruma

*Her* route için, route parametreleri ve query string'ler doğru şekilde parse edilmeli ve component'e iletilmelidir.

**Doğrular: Gereksinimler 12.6**

### Özellik 30: Store Fonksiyonalite Koruma

*Her* store (authStore, gameStore, uiStore) için, tüm action'lar, selector'lar ve persistence logic migrasyon sonrası aynı şekilde çalışmalıdır.

**Doğrular: Gereksinimler 13.1, 13.2, 13.3, 13.6, 13.7**

### Özellik 31: Store Interface Tutarlılığı

*Her* store kullanan component için, store interface migrasyon sonrası legacy kod ile aynı olmalıdır.

**Doğrular: Gereksinimler 13.5**

### Özellik 32: API Service Koruma

*Her* API service fonksiyonu (auth, game, user, leaderboard, vb.) için, migrasyon sonrası aynı input'larla aynı output'u üretmelidir ve error handling/retry logic korunmalıdır.

**Doğrular: Gereksinimler 14.2, 14.3, 14.4, 14.7**

### Özellik 33: Service Interface Tutarlılığı

*Her* API service kullanan component için, service interface migrasyon sonrası legacy kod ile aynı olmalıdır.

**Doğrular: Gereksinimler 14.5**

### Özellik 34: Route Erişilebilirlik

*Her* route için, migrasyon sonrası route erişilebilir olmalı ve 404 hatası dönmemelidir.

**Doğrular: Gereksinimler 15.2**

### Özellik 35: Oyun Oynanabilirlik

*Her* oyun için, migrasyon sonrası oyun başlatılabilmeli, oynanabilmeli ve tamamlanabilmelidir.

**Doğrular: Gereksinimler 15.3**

### Özellik 36: Ders Erişilebilirlik

*Her* ders için, migrasyon sonrası ders erişilebilir olmalı ve içerik görüntülenebilmelidir.

**Doğrular: Gereksinimler 15.4**

### Özellik 37: Responsive Tasarım

*Her* sayfa için, farklı ekran boyutlarında (mobile, tablet, desktop) doğru şekilde render edilmelidir.

**Doğrular: Gereksinimler 15.5**

### Özellik 38: Authentication Çalışması

*Her* authentication işlemi (login, register, logout) için, migrasyon sonrası işlem başarılı olmalı ve kullanıcı durumu doğru şekilde güncellenmelidir.

**Doğrular: Gereksinimler 15.6**

### Özellik 39: API Entegrasyon Çalışması

*Her* API entegrasyonu için, migrasyon sonrası API çağrıları başarılı olmalı ve doğru response dönmelidir.

**Doğrular: Gereksinimler 15.7**

### Özellik 40: Build Size Kontrolü

Migrasyon sonrası build output size, legacy kod build size'ından %20'den fazla büyük olmamalıdır.

**Doğrular: Gereksinimler 15.9**

### Özellik 41: Performans Koruma

*Her* kritik user flow (sayfa yükleme, oyun başlatma, navigation) için, migrasyon sonrası performans legacy kod ile karşılaştırıldığında %10'dan fazla düşmemelidir.

**Doğrular: Gereksinimler 15.10**


## Hata Yönetimi

### Migrasyon Hataları

**Workspace Oluşturma Hataları:**
- **Hata**: Workspace dizini oluşturulamıyor
- **Çözüm**: Dosya sistemi izinlerini kontrol et, gerekirse sudo ile çalıştır
- **Rollback**: Oluşturulan dizinleri sil

**Dependency Çözümleme Hataları:**
- **Hata**: Workspace dependency'leri çözümlenemiyor
- **Çözüm**: package.json'da workspace protocol'ü kontrol et, npm/yarn cache'i temizle
- **Rollback**: package.json'u önceki haline döndür

**TypeScript Derleme Hataları:**
- **Hata**: TypeScript path alias'ları çözümlenemiyor
- **Çözüm**: tsconfig.json'da paths yapılandırmasını kontrol et
- **Rollback**: tsconfig.json'u önceki haline döndür

**Import Path Hataları:**
- **Hata**: Bileşen import'ları çalışmıyor
- **Çözüm**: Barrel export'ları kontrol et, import path'leri güncelle
- **Rollback**: Import path'leri eski haline döndür

### Runtime Hataları

**Component Render Hataları:**
- **Hata**: Component render edilemiyor
- **Çözüm**: ErrorBoundary ile yakala, fallback UI göster
- **Logging**: Sentry/LogRocket ile hata logla

**State Management Hataları:**
- **Hata**: Store action'ları çalışmıyor
- **Çözüm**: Store interface'ini kontrol et, action'ları test et
- **Logging**: Redux DevTools ile state değişikliklerini izle

**API Hataları:**
- **Hata**: API çağrıları başarısız oluyor
- **Çözüm**: Retry logic kullan, fallback data göster
- **Logging**: API response'ları logla

### Build Hataları

**Vite Build Hataları:**
- **Hata**: Build işlemi başarısız oluyor
- **Çözüm**: vite.config.ts'yi kontrol et, dependency'leri güncelle
- **Rollback**: vite.config.ts'yi önceki haline döndür

**TypeScript Compilation Hataları:**
- **Hata**: TypeScript derleme hatası
- **Çözüm**: Tip hatalarını düzelt, any kullanımını azalt
- **Rollback**: Değişiklikleri geri al

### Rollback Stratejisi

Her migrasyon fazı için rollback prosedürü:

1. **Git Checkpoint**: Her faz öncesi git commit oluştur
2. **Backup**: Kritik dosyaları yedekle (package.json, tsconfig.json, vite.config.ts)
3. **Rollback Script**: Otomatik rollback script'i hazırla
4. **Validation**: Rollback sonrası validation testleri çalıştır

**Rollback Komutu:**
```bash
npm run rollback:phase-<N>
```

## Test Stratejisi

### Dual Testing Yaklaşımı

Bu projede hem unit testler hem de property-based testler kullanılacaktır. Her iki yaklaşım da birbirini tamamlar ve kapsamlı test coverage sağlar.

**Unit Testler:**
- Belirli örnekleri test eder
- Edge case'leri test eder
- Entegrasyon noktalarını test eder
- Hata durumlarını test eder

**Property-Based Testler:**
- Evrensel özellikleri test eder
- Geniş input aralığını test eder
- Randomizasyon ile beklenmeyen durumları yakalar
- Minimum 100 iterasyon ile çalışır

### Property-Based Testing Konfigürasyonu

**Kütüphane Seçimi:** fast-check (JavaScript/TypeScript için)

**Kurulum:**
```bash
npm install --save-dev fast-check @types/fast-check
```

**Test Yapılandırması:**
```typescript
import fc from 'fast-check';

// Her property test minimum 100 iterasyon ile çalışır
fc.assert(
  fc.property(
    fc.string(),
    (input) => {
      // Test logic
    }
  ),
  { numRuns: 100 }
);
```

**Test Tagging:**
Her property test, design document'teki özelliğe referans verir:

```typescript
/**
 * Feature: monorepo-architecture-migration
 * Property 2: İşlevsellik Koruma
 * 
 * Her mevcut özellik için, migrasyon sonrası özellik aynı input'larla
 * aynı output'u üretmelidir.
 */
test('Property 2: Functionality preservation', () => {
  fc.assert(
    fc.property(
      fc.record({
        gameId: fc.string(),
        userId: fc.string(),
        score: fc.integer({ min: 0, max: 100 }),
      }),
      (input) => {
        const legacyOutput = legacyGameEngine.calculateScore(input);
        const newOutput = newGameEngine.calculateScore(input);
        expect(newOutput).toEqual(legacyOutput);
      }
    ),
    { numRuns: 100 }
  );
});
```

### Test Kategorileri

#### 1. Workspace Yapısı Testleri

**Unit Testler:**
```typescript
describe('Workspace Structure', () => {
  test('should have apps directory', () => {
    expect(fs.existsSync('apps')).toBe(true);
  });

  test('should have packages directory', () => {
    expect(fs.existsSync('packages')).toBe(true);
  });

  test('should have web workspace', () => {
    expect(fs.existsSync('apps/web')).toBe(true);
    expect(fs.existsSync('apps/web/package.json')).toBe(true);
  });
});
```

**Property Test:**
```typescript
/**
 * Feature: monorepo-architecture-migration
 * Property 1: Workspace Yapısı Bütünlüğü
 */
test('Property 1: Workspace structure integrity', () => {
  const workspaces = ['apps/web', 'apps/teacher', 'apps/admin', 
                      'packages/ui', 'packages/game-engine'];
  
  workspaces.forEach(workspace => {
    expect(fs.existsSync(workspace)).toBe(true);
    expect(fs.existsSync(`${workspace}/package.json`)).toBe(true);
    expect(fs.existsSync(`${workspace}/tsconfig.json`)).toBe(true);
    expect(fs.existsSync(`${workspace}/src`)).toBe(true);
  });
});
```

#### 2. İşlevsellik Koruma Testleri

**Property Test:**
```typescript
/**
 * Feature: monorepo-architecture-migration
 * Property 2: İşlevsellik Koruma
 */
test('Property 2: Functionality preservation', () => {
  fc.assert(
    fc.property(
      fc.record({
        correctAnswers: fc.integer({ min: 0, max: 10 }),
        totalQuestions: fc.integer({ min: 1, max: 10 }),
        timeBonus: fc.integer({ min: 0, max: 50 }),
        difficultyMultiplier: fc.float({ min: 1, max: 3 }),
      }),
      (input) => {
        const legacyScore = legacyCalculateScore(
          input.correctAnswers,
          input.totalQuestions,
          input.timeBonus,
          input.difficultyMultiplier
        );
        const newScore = newCalculateScore(
          input.correctAnswers,
          input.totalQuestions,
          input.timeBonus,
          input.difficultyMultiplier
        );
        expect(newScore).toBe(legacyScore);
      }
    ),
    { numRuns: 100 }
  );
});
```

#### 3. TypeScript Path Alias Testleri

**Property Test:**
```typescript
/**
 * Feature: monorepo-architecture-migration
 * Property 3: TypeScript Path Alias Çözümleme
 */
test('Property 3: TypeScript path alias resolution', () => {
  const imports = [
    '@egitim-galaksisi/ui',
    '@egitim-galaksisi/game-engine',
    '@egitim-galaksisi/shared',
    '@egitim-galaksisi/mock-data',
  ];

  imports.forEach(importPath => {
    expect(() => require(importPath)).not.toThrow();
  });
});
```

#### 4. Circular Dependency Testleri

**Property Test:**
```typescript
/**
 * Feature: monorepo-architecture-migration
 * Property 5: Circular Dependency Yokluğu
 */
test('Property 5: No circular dependencies', () => {
  const madge = require('madge');
  
  const result = madge('apps/web/src', {
    fileExtensions: ['ts', 'tsx'],
  }).then((res) => {
    const circular = res.circular();
    expect(circular).toHaveLength(0);
  });
});
```

#### 5. Scoring Tutarlılığı Testleri

**Property Test:**
```typescript
/**
 * Feature: monorepo-architecture-migration
 * Property 6: Scoring Tutarlılığı
 */
test('Property 6: Scoring consistency', () => {
  fc.assert(
    fc.property(
      fc.integer({ min: 0, max: 100 }),
      fc.integer({ min: 1, max: 100 }),
      fc.integer({ min: 0, max: 50 }),
      fc.float({ min: 1, max: 3 }),
      (correct, total, bonus, multiplier) => {
        const score1 = calculateScore(correct, total, bonus, multiplier);
        const score2 = calculateScore(correct, total, bonus, multiplier);
        expect(score1).toBe(score2);
      }
    ),
    { numRuns: 100 }
  );
});
```

#### 6. Tema Renk Koruma Testleri

**Property Test:**
```typescript
/**
 * Feature: monorepo-architecture-migration
 * Property 8: Tema Renk Koruma
 */
test('Property 8: Theme color preservation', () => {
  const legacyTheme = require('../legacy/styles/gameTheme');
  const newTheme = require('@egitim-galaksisi/ui/theme/gameTheme');

  // Test all color values
  expect(newTheme.gameTheme.background).toBe(legacyTheme.gameTheme.background);
  expect(newTheme.gameTheme.outerCard).toBe(legacyTheme.gameTheme.outerCard);
  expect(newTheme.gameTheme.exitButton).toBe(legacyTheme.gameTheme.exitButton);

  // Test color schemes
  Object.keys(legacyTheme.colorSchemes).forEach(color => {
    expect(newTheme.colorSchemes[color]).toEqual(legacyTheme.colorSchemes[color]);
  });
});
```

#### 7. Route Testleri

**Property Test:**
```typescript
/**
 * Feature: monorepo-architecture-migration
 * Property 24: Route Path Koruma
 */
test('Property 24: Route path preservation', () => {
  const legacyRoutes = extractRoutesFromAppRouter('../legacy/AppRouter.tsx');
  const newRoutes = extractRoutesFromAppRouter('apps/web/src/routes/index.tsx');

  legacyRoutes.forEach(route => {
    expect(newRoutes).toContain(route);
  });
});
```

#### 8. Store Testleri

**Property Test:**
```typescript
/**
 * Feature: monorepo-architecture-migration
 * Property 30: Store Fonksiyonalite Koruma
 */
test('Property 30: Store functionality preservation', () => {
  fc.assert(
    fc.property(
      fc.record({
        email: fc.emailAddress(),
        password: fc.string({ minLength: 8 }),
      }),
      async (credentials) => {
        const legacyStore = createLegacyAuthStore();
        const newStore = createNewAuthStore();

        await legacyStore.login(credentials.email, credentials.password);
        await newStore.login(credentials.email, credentials.password);

        expect(newStore.user).toEqual(legacyStore.user);
        expect(newStore.isAuthenticated).toBe(legacyStore.isAuthenticated);
      }
    ),
    { numRuns: 100 }
  );
});
```

#### 9. Performance Testleri

**Property Test:**
```typescript
/**
 * Feature: monorepo-architecture-migration
 * Property 41: Performans Koruma
 */
test('Property 41: Performance preservation', () => {
  const criticalFlows = [
    { name: 'Page Load', fn: () => loadPage('/') },
    { name: 'Game Start', fn: () => startGame('math-addition-1') },
    { name: 'Navigation', fn: () => navigate('/games') },
  ];

  criticalFlows.forEach(flow => {
    const legacyTime = measurePerformance(flow.fn, 'legacy');
    const newTime = measurePerformance(flow.fn, 'new');
    
    const degradation = ((newTime - legacyTime) / legacyTime) * 100;
    expect(degradation).toBeLessThan(10);
  });
});
```

### Test Coverage Hedefleri

- **Unit Test Coverage**: Minimum %80
- **Property Test Coverage**: Tüm kritik özellikler için minimum 1 property test
- **Integration Test Coverage**: Tüm feature modülleri için minimum 1 integration test
- **E2E Test Coverage**: Tüm kritik user flow'lar için minimum 1 E2E test

### Continuous Integration

**GitHub Actions Workflow:**
```yaml
name: CI

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm install
      - run: npm run test:unit
      - run: npm run test:property
      - run: npm run test:integration
      - run: npm run build
```

### Test Komutları

```json
{
  "scripts": {
    "test": "npm run test:unit && npm run test:property",
    "test:unit": "vitest run --coverage",
    "test:property": "vitest run --config vitest.property.config.ts",
    "test:integration": "vitest run --config vitest.integration.config.ts",
    "test:e2e": "playwright test",
    "test:watch": "vitest watch"
  }
}
```

## Migrasyon Adımları

### Faz 1: Monorepo Yapısı Oluşturma (1-2 gün)

**Hedef**: Temel monorepo yapısını oluştur

**Adımlar:**
1. Root package.json oluştur ve workspace'leri yapılandır
2. apps/ ve packages/ dizinlerini oluştur
3. Her workspace için temel yapıyı oluştur (package.json, tsconfig.json, src/)
4. Root tsconfig.json ve vite.config.ts oluştur
5. Workspace dependency'lerini yapılandır

**Validation:**
- Tüm workspace'ler oluşturuldu mu?
- package.json workspace yapılandırması doğru mu?
- TypeScript derleme çalışıyor mu?

**Rollback**: Git checkpoint'e dön

### Faz 2: packages/ui Oluşturma (2-3 gün)

**Hedef**: Tasarım sistemi paketini oluştur

**Adımlar:**
1. packages/ui workspace'ini oluştur
2. styles/gameTheme.ts'yi packages/ui/src/theme/'ye taşı
3. components/common/ bileşenlerini packages/ui/src/components/'e taşı
4. components/core/ bileşenlerini packages/ui/src/components/'e taşı
5. Barrel export'ları oluştur (index.ts)
6. TypeScript tiplerini tanımla
7. Storybook kurulumu (opsiyonel)

**Validation:**
- Tüm renk değerleri korundu mu?
- Tüm bileşenler export ediliyor mu?
- TypeScript tipleri tanımlı mı?

**Rollback**: packages/ui'yi sil, dosyaları eski konumlarına geri taşı

### Faz 3: packages/game-engine Oluşturma (2-3 gün)

**Hedef**: Oyun motoru paketini oluştur

**Adımlar:**
1. packages/game-engine workspace'ini oluştur
2. GameTemplate bileşenini taşı
3. useGameState hook'unu oluştur
4. Scoring utilities'i oluştur
5. Level progression logic'i oluştur
6. Timer ve countdown utilities'i oluştur
7. Barrel export'ları oluştur

**Validation:**
- GameTemplate çalışıyor mu?
- Scoring logic tutarlı mı?
- Level progression monoton mu?

**Rollback**: packages/game-engine'i sil, dosyaları eski konumlarına geri taşı

### Faz 4: packages/mock-data Oluşturma (1-2 gün)

**Hedef**: Mock data paketini oluştur

**Adımlar:**
1. packages/mock-data workspace'ini oluştur
2. API contract interface'lerini oluştur
3. Mock data'ları oluştur (games, users, leaderboard)
4. Data generator'ları oluştur
5. services/mockData.ts'yi taşı ve güncelle
6. Barrel export'ları oluştur

**Validation:**
- Tüm API contract'ları tanımlı mı?
- Mock data'lar doğru formatta mı?
- Generator'lar çalışıyor mu?

**Rollback**: packages/mock-data'yı sil, dosyaları eski konumlarına geri taşı

### Faz 5: Feature Modüllerini Organize Etme (3-5 gün)

**Hedef**: Feature-based modül yapısını oluştur

**Adımlar:**
1. apps/web/src/features/ dizinini oluştur
2. components/academic/ → features/games/math-games/ (grade-level yapısını koru)
3. components/logic-games/ → features/games/logic-games/
4. components/turkish/ → features/games/language-games/turkish/
5. components/fast-reading/ → features/fast-reading/
6. components/focus/ → features/focus/
7. components/learning/ → features/learning/
8. components/language/ → features/language/
9. components/life-skills/ → features/life-skills/
10. components/teacher-tools/ → features/teacher-tools/
11. components/stories/ → features/stories/
12. Her feature için barrel export'ları oluştur
13. Her feature için routes.tsx oluştur

**Validation:**
- Tüm bileşenler taşındı mı?
- Grade-level yapısı korundu mu?
- Barrel export'lar çalışıyor mu?
- Circular dependency yok mu?

**Rollback**: features/ dizinini sil, dosyaları components/'e geri taşı

### Faz 6: App.tsx'i Parçalama (2-3 gün)

**Hedef**: 6000+ satırlık App.tsx'i parçala

**Adımlar:**
1. apps/web/src/routes/ dizinini oluştur
2. routes/index.tsx oluştur (ana routing)
3. routes/ProtectedRoute.tsx oluştur
4. routes/DashboardRouter.tsx oluştur
5. Her feature için routes.tsx oluştur
6. App.tsx'i sadece routing içerecek şekilde güncelle
7. Tüm game import'larını kaldır
8. Switch-case yapısını route-based yapıya dönüştür

**Validation:**
- Tüm route'lar çalışıyor mu?
- Lazy loading çalışıyor mu?
- Protected route'lar çalışıyor mu?
- Role-based routing çalışıyor mu?

**Rollback**: App.tsx'i eski haline döndür, routes/ dizinini sil

### Faz 7: Store ve Services Organize Etme (1-2 gün)

**Hedef**: State management ve API services'i organize et

**Adımlar:**
1. stores/ dizinini apps/web/src/stores/'a taşı
2. services/ dizinini apps/web/src/services/'a taşı
3. Her feature için gerekli store'ları feature içine taşı
4. API service'leri domain'e göre organize et
5. Barrel export'ları oluştur

**Validation:**
- Tüm store'lar çalışıyor mu?
- API service'ler çalışıyor mu?
- Store persistence çalışıyor mu?

**Rollback**: stores/ ve services/'i root'a geri taşı

### Faz 8: apps/teacher ve apps/admin Oluşturma (2-3 gün)

**Hedef**: Teacher ve admin uygulamalarını oluştur

**Adımlar:**
1. apps/teacher workspace'ini oluştur
2. apps/admin workspace'ini oluştur
3. Ortak bileşenleri packages/ui'den kullan
4. Teacher-specific feature'ları taşı
5. Admin-specific feature'ları taşı
6. Her app için routing yapılandır

**Validation:**
- Teacher app çalışıyor mu?
- Admin app çalışıyor mu?
- Shared package'lar kullanılıyor mu?

**Rollback**: apps/teacher ve apps/admin'i sil

### Faz 9: Kod Temizleme ve Optimizasyon (2-3 gün)

**Hedef**: Gereksiz kodu temizle ve optimize et

**Adımlar:**
1. Kullanılmayan bileşenleri tespit et ve kaldır
2. Kullanılmayan dependency'leri kaldır
3. Duplicate code'u shared utilities'e taşı
4. Commented-out code'u kaldır
5. Import statement'ları standardize et
6. console.log'ları kaldır
7. ESLint ve Prettier yapılandır

**Validation:**
- Runtime hataları yok mu?
- Build başarılı mı?
- Linter hataları yok mu?

**Rollback**: Git checkpoint'e dön

### Faz 10: Test ve Doğrulama (3-5 gün)

**Hedef**: Kapsamlı test ve doğrulama yap

**Adımlar:**
1. Unit testler yaz
2. Property-based testler yaz
3. Integration testler yaz
4. E2E testler yaz
5. Tüm route'ları manuel test et
6. Tüm oyunları manuel test et
7. Tüm dersleri manuel test et
8. Farklı ekran boyutlarında test et
9. Farklı tarayıcılarda test et
10. Performance testleri yap
11. Build size'ı karşılaştır

**Validation:**
- Tüm testler geçiyor mu?
- Tüm özellikler çalışıyor mu?
- Performance kabul edilebilir mi?
- Build size kabul edilebilir mi?

**Rollback**: Kritik hata varsa önceki faza dön

### Faz 11: Dokümantasyon ve Deployment (1-2 gün)

**Hedef**: Dokümantasyon tamamla ve deployment hazırlığı yap

**Adımlar:**
1. README.md güncelle
2. CONTRIBUTING.md oluştur
3. ARCHITECTURE.md oluştur
4. API dokümantasyonu oluştur
5. Component dokümantasyonu oluştur (Storybook)
6. Deployment script'leri oluştur
7. CI/CD pipeline'ı yapılandır
8. Production build test et

**Validation:**
- Dokümantasyon eksiksiz mi?
- Deployment script'leri çalışıyor mu?
- CI/CD pipeline çalışıyor mu?

**Rollback**: N/A (dokümantasyon fazı)

## Deployment Stratejisi

### Development Environment

```bash
# Tüm workspace'leri development mode'da çalıştır
npm run dev

# Sadece web app'i çalıştır
npm run dev:web

# Sadece teacher app'i çalıştır
npm run dev:teacher

# Sadece admin app'i çalıştır
npm run dev:admin
```

### Production Build

```bash
# Tüm workspace'leri build et
npm run build

# Sadece web app'i build et
npm run build:web

# Build output'u test et
npm run preview:web
```

### Deployment

**Vercel Deployment:**
```json
{
  "builds": [
    {
      "src": "apps/web/package.json",
      "use": "@vercel/static-build",
      "config": { "distDir": "dist" }
    }
  ]
}
```

**Docker Deployment:**
```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
COPY apps/web/package*.json ./apps/web/
COPY packages/*/package*.json ./packages/*/

RUN npm install

COPY . .

RUN npm run build:web

EXPOSE 3000

CMD ["npm", "run", "preview:web"]
```

## Sonuç

Bu tasarım dokümanı, Eğitim Galaksisi uygulamasının monolitik yapıdan modern monorepo mimarisine dönüşümü için kapsamlı bir plan sunmaktadır. Dönüşüm, 11 faz halinde gerçekleştirilecek ve her faz bağımsız olarak test edilebilir ve geri alınabilir olacaktır.

Migrasyon sonrası:
- Kod tabanı daha organize ve sürdürülebilir olacak
- Feature'lar bağımsız modüller halinde yönetilebilecek
- Shared package'lar kod tekrarını azaltacak
- Build ve development süreçleri optimize edilecek
- Test coverage artacak
- Deployment esnekliği sağlanacak

Tüm bu değişiklikler yapılırken, mevcut tasarım, renkler ve kullanıcı deneyimi korunacak ve hiçbir özellik kaybedilmeyecektir.
