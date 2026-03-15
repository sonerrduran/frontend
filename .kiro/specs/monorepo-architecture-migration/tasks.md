# Implementation Plan: Monorepo Mimari Dönüşümü

## Genel Bakış

Bu implementation plan, Eğitim Galaksisi uygulamasının monolitik yapıdan modern monorepo mimarisine dönüşümünü 11 faz halinde gerçekleştirir. Her faz bağımsız olarak test edilebilir ve geri alınabilir. Tüm task'lar tasarım dokümanındaki fazları takip eder ve her task için validation ve rollback adımları bulunur.

## Önemli Notlar

- Her task bağımsız olarak test edilebilir olmalı
- Task'lar tasarım dokümanındaki 11 fazı takip eder
- Her faz için validation ve rollback adımları dahil edilmiştir
- Mock data oluşturma task'ları dahil edilmiştir
- App.tsx parçalama task'ları detaylı olarak planlanmıştır
- Test-related sub-task'lar opsiyonel olarak işaretlenmiştir (*)

## Tasks


- [x] 1. Faz 1: Monorepo Yapısı Oluşturma
  - [x] 1.1 Root package.json oluştur ve workspace'leri yapılandır
    - Root package.json dosyası oluştur
    - Workspaces yapılandırması ekle (apps/*, packages/*)
    - Package manager olarak npm workspaces kullan
    - _Requirements: 1.1, 1.6, 9.1_
  
  - [x] 1.2 Temel dizin yapısını oluştur
    - apps/ dizini oluştur
    - packages/ dizini oluştur
    - Her workspace için placeholder dizinler oluştur
    - _Requirements: 1.1_
  
  - [x] 1.3 apps/web workspace'ini oluştur
    - apps/web/package.json oluştur
    - apps/web/tsconfig.json oluştur
    - apps/web/vite.config.ts oluştur
    - apps/web/src/ dizini oluştur
    - _Requirements: 1.2_
  
  - [x] 1.4 apps/teacher workspace'ini oluştur
    - apps/teacher/package.json oluştur
    - apps/teacher/tsconfig.json oluştur
    - apps/teacher/vite.config.ts oluştur
    - apps/teacher/src/ dizini oluştur
    - _Requirements: 1.4_
  
  - [x] 1.5 apps/admin workspace'ini oluştur
    - apps/admin/package.json oluştur
    - apps/admin/tsconfig.json oluştur
    - apps/admin/vite.config.ts oluştur
    - apps/admin/src/ dizini oluştur
    - _Requirements: 1.3_
  
  - [x] 1.6 packages/ui workspace'ini oluştur
    - packages/ui/package.json oluştur
    - packages/ui/tsconfig.json oluştur
    - packages/ui/src/ dizini oluştur
    - _Requirements: 4.1_
  
  - [x] 1.7 packages/game-engine workspace'ini oluştur
    - packages/game-engine/package.json oluştur
    - packages/game-engine/tsconfig.json oluştur
    - packages/game-engine/src/ dizini oluştur
    - _Requirements: 3.1_
  
  - [x] 1.8 packages/shared workspace'ini oluştur
    - packages/shared/package.json oluştur
    - packages/shared/tsconfig.json oluştur
    - packages/shared/src/ dizini oluştur
    - _Requirements: 1.1_
  
  - [x] 1.9 packages/mock-data workspace'ini oluştur
    - packages/mock-data/package.json oluştur
    - packages/mock-data/tsconfig.json oluştur
    - packages/mock-data/src/ dizini oluştur
    - _Requirements: 1.1_
  
  - [x] 1.10 Root TypeScript yapılandırması oluştur
    - Root tsconfig.json oluştur
    - Path aliases yapılandır (@egitim-galaksisi/*)
    - Workspace referansları ekle
    - _Requirements: 1.7, 9.7_
  
  - [x] 1.11 Root Vite yapılandırması oluştur
    - Root vite.config.ts oluştur
    - Monorepo için optimize et
    - _Requirements: 10.1_
  
  - [x] 1.12 Workspace dependency'lerini yapılandır
    - Her workspace'in package.json'ında workspace protocol kullan
    - Internal package referansları ekle (workspace:*)
    - _Requirements: 9.2, 9.5_
  
  - [ ]* 1.13 Faz 1 validation testleri yaz
    - **Property 1: Workspace Yapısı Bütünlüğü**
    - **Validates: Requirements 1.1, 1.2, 1.3, 1.4, 1.6, 3.1, 4.1**
    - Tüm workspace'lerin varlığını test et
    - package.json ve tsconfig.json dosyalarını test et
    - TypeScript derleme testleri
  
  - [x] 1.14 Checkpoint - Faz 1 tamamlandı
    - Tüm workspace'ler oluşturuldu mu kontrol et
    - TypeScript derleme çalışıyor mu test et
    - Git commit oluştur (checkpoint-phase-1)
    - Ensure all tests pass, ask the user if questions arise.


- [x] 2. Faz 2: packages/ui Tasarım Sistemi Oluşturma
  - [x] 2.1 Tema dosyalarını taşı
    - styles/gameTheme.ts'yi packages/ui/src/theme/gameTheme.ts'ye taşı
    - Tüm renk değerlerini koru
    - Export yapısını oluştur
    - _Requirements: 4.2, 6.1_
  
  - [x] 2.2 Color schemes'i organize et
    - colorSchemes objesini ayrı dosyaya taşı
    - Her renk için tip tanımları oluştur
    - _Requirements: 4.2, 6.1_
  
  - [x] 2.3 Common bileşenleri taşı
    - components/common/GameTemplate.tsx → packages/ui/src/components/
    - components/common/GameWrapper.tsx → packages/ui/src/components/
    - components/common/LoadingSpinner.tsx → packages/ui/src/components/
    - components/common/GameOverOverlay.tsx → packages/ui/src/components/
    - components/common/RulesOverlay.tsx → packages/ui/src/components/
    - _Requirements: 4.3, 4.4_
  
  - [x] 2.4 Core bileşenleri taşı
    - components/core/ErrorBoundary.tsx → packages/ui/src/components/
    - components/core/GameCard.tsx → packages/ui/src/components/
    - components/core/Layout.tsx → packages/ui/src/components/
    - _Requirements: 4.3, 4.5_
  
  - [x] 2.5 Button bileşeni oluştur
    - TypeScript interface tanımla (ButtonProps)
    - Variant'ları implement et (primary, secondary, danger, success)
    - Size'ları implement et (sm, md, lg)
    - _Requirements: 4.3, 4.8_
  
  - [x] 2.6 Card bileşeni oluştur
    - TypeScript interface tanımla (CardProps)
    - Mevcut GameCard tasarımını koru
    - _Requirements: 4.3, 4.8_
  
  - [x] 2.7 Modal bileşeni oluştur
    - TypeScript interface tanımla (ModalProps)
    - Overlay ve close logic implement et
    - _Requirements: 4.3, 4.8_
  
  - [x] 2.8 Input bileşeni oluştur
    - TypeScript interface tanımla (InputProps)
    - Form validation desteği ekle
    - _Requirements: 4.3, 4.8_
  
  - [x] 2.9 Barrel exports oluştur
    - packages/ui/src/index.ts oluştur
    - Tüm bileşenleri export et
    - Tema ve renkleri export et
    - _Requirements: 2.5, 2.6_
  
  - [x] 2.10 TypeScript tipleri organize et
    - packages/ui/src/types/index.ts oluştur
    - Tüm component prop tiplerini export et
    - _Requirements: 4.8_
  
  - [ ]* 2.11 Faz 2 validation testleri yaz
    - **Property 8: Tema Renk Koruma**
    - **Validates: Requirements 4.2, 6.1**
    - **Property 9: Component Props Tip Güvenliği**
    - **Validates: Requirements 4.8**
    - Renk değerlerinin korunduğunu test et
    - Component prop tiplerini test et
    - Component render testleri
  
  - [x] 2.12 Checkpoint - Faz 2 tamamlandı
    - Tüm bileşenler export ediliyor mu kontrol et
    - Renk değerleri korundu mu test et
    - Git commit oluştur (checkpoint-phase-2)
    - Ensure all tests pass, ask the user if questions arise.


- [x] 3. Faz 3: packages/game-engine Oyun Motoru Oluşturma
  - [x] 3.1 GameTemplate bileşenini taşı ve güncelle
    - Mevcut GameTemplate'i packages/game-engine/src/components/'e taşı
    - TypeScript interface'i güncelle (GameTemplateProps)
    - packages/ui tema bileşenlerini kullan
    - _Requirements: 3.2, 3.6_
  
  - [x] 3.2 useGameState hook'unu oluştur
    - packages/game-engine/src/hooks/useGameState.ts oluştur
    - GameState interface tanımla
    - State management fonksiyonları implement et (incrementScore, nextLevel, loseLife, etc.)
    - _Requirements: 3.5_
  
  - [x] 3.3 Scoring utilities oluştur
    - packages/game-engine/src/utils/scoring.ts oluştur
    - calculateScore fonksiyonu implement et
    - calculateStars fonksiyonu implement et
    - Mevcut scoring logic'i koru
    - _Requirements: 3.3_
  
  - [x] 3.4 Level progression utilities oluştur
    - packages/game-engine/src/utils/levelProgression.ts oluştur
    - Level progression logic implement et
    - Difficulty scaling logic ekle
    - _Requirements: 3.4_
  
  - [x] 3.5 Timer utilities oluştur
    - packages/game-engine/src/utils/timer.ts oluştur
    - useTimer hook oluştur
    - Countdown logic implement et
    - _Requirements: 3.8_
  
  - [x] 3.6 Sound ve animation utilities oluştur
    - packages/game-engine/src/utils/sound.ts oluştur
    - packages/game-engine/src/utils/animation.ts oluştur
    - Mevcut sound effect'leri koru
    - _Requirements: 3.7_
  
  - [x] 3.7 Game types tanımla
    - packages/game-engine/src/types/index.ts oluştur
    - GameState, GameConfig, GameResult tiplerini tanımla
    - _Requirements: 3.5_
  
  - [x] 3.8 Barrel exports oluştur
    - packages/game-engine/src/index.ts oluştur
    - Tüm bileşenleri, hooks ve utilities'i export et
    - _Requirements: 2.5, 2.6_
  
  - [ ]* 3.9 Faz 3 validation testleri yaz
    - **Property 6: Scoring Tutarlılığı**
    - **Validates: Requirements 3.3**
    - **Property 7: Level Progression Monotonluğu**
    - **Validates: Requirements 3.4**
    - Scoring fonksiyonunu test et
    - Level progression'ı test et
    - GameTemplate render testleri
  
  - [x] 3.10 Checkpoint - Faz 3 tamamlandı
    - GameTemplate çalışıyor mu test et
    - Scoring logic tutarlı mı kontrol et
    - Git commit oluştur (checkpoint-phase-3)
    - Ensure all tests pass, ask the user if questions arise.


- [x] 4. Faz 4: packages/mock-data Mock Data Paketi Oluşturma
  - [x] 4.1 API contract interface'lerini oluştur
    - packages/mock-data/src/contracts/game.ts oluştur
    - GameCategory, Game, GameContent interface'lerini tanımla
    - packages/mock-data/src/contracts/user.ts oluştur
    - User, UserRole interface'lerini tanımla
    - packages/mock-data/src/contracts/lesson.ts oluştur
    - Subject, Topic, Lesson interface'lerini tanımla
    - packages/mock-data/src/contracts/leaderboard.ts oluştur
    - LeaderboardEntry, LeaderboardFilter interface'lerini tanımla
    - _Requirements: 14.1_
  
  - [x] 4.2 Mock game data oluştur
    - packages/mock-data/src/data/games.ts oluştur
    - mockGameCategories array'i oluştur (Matematik, Mantık, Dil, vb.)
    - mockGames array'i oluştur (tüm mevcut oyunlar için)
    - Her oyun için metadata ekle (icon, grade, difficulty, tags)
    - _Requirements: 14.1_
  
  - [x] 4.3 Mock user data oluştur
    - packages/mock-data/src/data/users.ts oluştur
    - mockUsers array'i oluştur (farklı roller için)
    - mockStudents, mockTeachers, mockAdmins oluştur
    - _Requirements: 14.1_
  
  - [x] 4.4 Mock leaderboard data oluştur
    - packages/mock-data/src/data/leaderboard.ts oluştur
    - mockLeaderboardEntries array'i oluştur
    - Farklı scope'lar için data oluştur (global, school, classroom)
    - _Requirements: 14.1_
  
  - [x] 4.5 Data generator'ları oluştur
    - packages/mock-data/src/generators/userGenerator.ts oluştur
    - generateMockUser fonksiyonu implement et (faker.js kullan)
    - packages/mock-data/src/generators/gameGenerator.ts oluştur
    - generateMockGame fonksiyonu implement et
    - _Requirements: 14.1_
  
  - [x] 4.6 Mock API service'leri oluştur
    - packages/mock-data/src/services/mockGameService.ts oluştur
    - getGames, getGameById, getGamesByCategory fonksiyonları implement et
    - packages/mock-data/src/services/mockUserService.ts oluştur
    - getUser, updateUser fonksiyonları implement et
    - Simulated delay ekle (realistic API behavior)
    - _Requirements: 14.2, 14.3_
  
  - [x] 4.7 Barrel exports oluştur
    - packages/mock-data/src/index.ts oluştur
    - Tüm contracts, data ve services'i export et
    - _Requirements: 2.5, 2.6_
  
  - [ ]* 4.8 Faz 4 validation testleri yaz
    - Mock data formatlarını test et
    - Generator fonksiyonlarını test et
    - Mock API service'leri test et
  
  - [x] 4.9 Checkpoint - Faz 4 tamamlandı
    - Tüm API contract'ları tanımlı mı kontrol et
    - Mock data'lar doğru formatta mı test et
    - Git commit oluştur (checkpoint-phase-4)
    - Ensure all tests pass, ask the user if questions arise.


- [ ] 5. Faz 5: Feature Modüllerini Organize Etme
  - [x] 5.1 Feature dizin yapısını oluştur
    - apps/web/src/features/ dizini oluştur
    - Her feature için subdirectory oluştur
    - _Requirements: 2.1, 2.2, 2.3, 2.4_
  
  - [-] 5.2 Games feature modülünü oluştur
    - [x] 5.2.1 Math games modülünü taşı
      - components/academic/math/ → features/games/math-games/
      - Grade-level yapısını koru (grade1/, grade2/, ..., grade8/)
      - Her grade için barrel export oluştur
      - _Requirements: 2.1, 5.1, 11.1, 11.11_
    
    - [x] 5.2.2 Logic games modülünü taşı
      - components/logic-games/ → features/games/logic-games/
      - Sudoku, puzzle, two-player oyunlarını organize et
      - _Requirements: 2.1, 5.2, 11.7_
    
    - [x] 5.2.3 Language games modülünü taşı
      - components/academic/turkish/ → features/games/language-games/turkish/
      - components/academic/english/ → features/games/language-games/english/
      - Grade-level yapısını koru
      - _Requirements: 2.1, 5.3, 11.1_
    
    - [x] 5.2.4 Game ortak bileşenlerini oluştur
      - features/games/components/ dizini oluştur
      - GameBrowser.tsx oluştur (oyun tarayıcı)
      - GamePlayer.tsx oluştur (oyun oynatıcı)
      - _Requirements: 2.1_
    
    - [x] 5.2.5 Game hooks oluştur
      - features/games/hooks/ dizini oluştur
      - useGameNavigation hook oluştur
      - useGameProgress hook oluştur
      - _Requirements: 2.1_
    
    - [x] 5.2.6 Game types tanımla
      - features/games/types/index.ts oluştur
      - GameMetadata, GameCategory tipleri tanımla
      - _Requirements: 2.1_
    
    - [x] 5.2.7 Games barrel export oluştur
      - features/games/index.ts oluştur
      - Tüm game modüllerini export et
      - _Requirements: 2.5, 2.6_
  
  - [x] 5.3 Lessons feature modülünü oluştur
    - components/academic/ (non-game) → features/lessons/
    - Her ders için subdirectory oluştur (math, turkish, science, etc.)
    - Barrel exports oluştur
    - _Requirements: 2.2, 11.1_
  
  - [x] 5.4 Fast Reading feature modülünü oluştur
    - components/fast-reading/ → features/fast-reading/
    - Exercises, measurements, brain-games subdirectories oluştur
    - Barrel exports oluştur
    - _Requirements: 11.2_
  
  - [x] 5.5 Focus feature modülünü oluştur
    - components/focus/ → features/focus/
    - Exercises ve timer subdirectories oluştur
    - Barrel exports oluştur
    - _Requirements: 11.4_
  
  - [x] 5.6 Learning feature modülünü oluştur
    - components/learning/ → features/learning/
    - Flashcards, mind-maps, mnemonics subdirectories oluştur
    - Barrel exports oluştur
    - _Requirements: 11.6_
  
  - [x] 5.7 Language feature modülünü oluştur
    - components/language/ → features/language/
    - Vocabulary, idioms, proverbs subdirectories oluştur
    - Barrel exports oluştur
    - _Requirements: 11.5_
  
  - [x] 5.8 Life Skills feature modülünü oluştur
    - components/first-aid/ → features/life-skills/first-aid/
    - components/traffic/ → features/life-skills/traffic/
    - components/hygiene/ → features/life-skills/hygiene/
    - components/digital/ → features/life-skills/digital/
    - components/financial/ → features/life-skills/financial/
    - Barrel exports oluştur
    - _Requirements: 11.3_
  
  - [x] 5.9 Teacher Tools feature modülünü oluştur
    - components/teacher-tools/ → features/teacher-tools/
    - Whiteboard, timer, random-picker subdirectories oluştur
    - Barrel exports oluştur
    - _Requirements: 11.12_
  
  - [x] 5.10 Stories feature modülünü oluştur
    - components/stories/ → features/stories/
    - StoryBook.tsx ve story assets'i taşı
    - Barrel exports oluştur
    - _Requirements: 11.10_
  
  - [x] 5.11 Auth feature modülünü oluştur
    - features/auth/ dizini oluştur
    - LoginPage.tsx, RegisterPage.tsx oluştur
    - Auth components ve hooks oluştur
    - _Requirements: 12.2, 12.3_
  
  - [x] 5.12 Dashboard feature modülünü oluştur
    - features/dashboard/ dizini oluştur
    - StudentDashboard.tsx, TeacherDashboard.tsx oluştur
    - AdminDashboard.tsx, ParentDashboard.tsx oluştur
    - _Requirements: 12.2_
  
  - [x] 5.13 Profile feature modülünü oluştur
    - features/profile/ dizini oluştur
    - ProfilePage.tsx ve profile components oluştur
    - _Requirements: 12.1_
  
  - [x] 5.14 Leaderboard feature modülünü oluştur
    - features/leaderboard/ dizini oluştur
    - LeaderboardPage.tsx ve leaderboard components oluştur
    - _Requirements: 2.4, 12.1_
  
  - [ ]* 5.15 Faz 5 validation testleri yaz
    - **Property 4: Barrel Export Tutarlılığı**
    - **Validates: Requirements 2.5, 2.6**
    - **Property 5: Circular Dependency Yokluğu**
    - **Validates: Requirements 2.7, 9.6**
    - **Property 11: Bağımsız Kategori Import**
    - **Validates: Requirements 5.5**
    - **Property 22: Modül Bileşen Koruma**
    - **Validates: Requirements 11.1-11.12**
    - Tüm bileşenlerin taşındığını test et
    - Barrel export'ları test et
    - Circular dependency kontrolü yap
    - Grade-level yapısını test et
  
  - [x] 5.16 Checkpoint - Faz 5 tamamlandı
    - Tüm feature modülleri oluşturuldu mu kontrol et
    - Import path'leri çalışıyor mu test et
    - Git commit oluştur (checkpoint-phase-5)
    - Ensure all tests pass, ask the user if questions arise.


- [-] 6. Faz 6: App.tsx'i Parçalama ve Routing Yapısı
  - [x] 6.1 Routing dizin yapısını oluştur
    - apps/web/src/routes/ dizini oluştur
    - _Requirements: 12.1_
  
  - [x] 6.2 Ana routing dosyasını oluştur
    - apps/web/src/routes/index.tsx oluştur
    - AppRoutes component'i oluştur
    - Suspense ve lazy loading yapılandır
    - Public ve protected route'ları organize et
    - _Requirements: 12.1, 12.4_
  
  - [x] 6.3 ProtectedRoute component'i oluştur
    - apps/web/src/routes/ProtectedRoute.tsx oluştur
    - Authentication check logic implement et
    - Redirect logic ekle (unauthorized → /login)
    - _Requirements: 12.3, 12.7_
  
  - [ ] 6.4 DashboardRouter oluştur
    - apps/web/src/routes/DashboardRouter.tsx oluştur
    - Role-based dashboard routing implement et
    - Student, Teacher, Admin, Parent dashboard'larını route et
    - _Requirements: 12.2, 12.7_
  
  - [ ] 6.5 Game routes oluştur
    - features/games/routes.tsx oluştur
    - GameBrowser ve GamePlayer route'larını tanımla
    - Category-based sub-routes oluştur (math/*, logic/*, language/*)
    - Lazy loading ekle
    - _Requirements: 5.6, 12.1, 12.4_
  
  - [ ] 6.6 Lesson routes oluştur
    - features/lessons/routes.tsx oluştur
    - Subject-based routing implement et
    - Lazy loading ekle
    - _Requirements: 12.1, 12.4_
  
  - [ ] 6.7 Profile routes oluştur
    - features/profile/routes.tsx oluştur
    - Profile page routing implement et
    - _Requirements: 12.1_
  
  - [ ] 6.8 Leaderboard routes oluştur
    - features/leaderboard/routes.tsx oluştur
    - Leaderboard page routing implement et
    - _Requirements: 12.1_
  
  - [x] 6.9 App.tsx'i yeniden yaz
    - Mevcut 6000+ satırlık App.tsx'i yedekle
    - Yeni minimal App.tsx oluştur (sadece routing)
    - ErrorBoundary ekle
    - BrowserRouter yapılandır
    - AppRoutes'u import et
    - _Requirements: 1.5, 12.1_
  
  - [x] 6.10 Tüm game import'larını kaldır
    - App.tsx'ten tüm game component import'larını kaldır
    - Switch-case yapısını kaldır
    - Gereksiz state'leri kaldır
    - _Requirements: 7.1, 7.4_
  
  - [ ] 6.11 Route parametrelerini yapılandır
    - Route parameter parsing logic ekle
    - Query string handling ekle
    - _Requirements: 12.6_
  
  - [ ] 6.12 Navigation guards ekle
    - Authentication guards implement et
    - Role-based guards implement et
    - _Requirements: 12.7_
  
  - [ ]* 6.13 Faz 6 validation testleri yaz
    - **Property 24: Route Path Koruma**
    - **Validates: Requirements 12.1**
    - **Property 25: Role-Based Routing**
    - **Validates: Requirements 12.2, 12.7**
    - **Property 26: Protected Route Koruma**
    - **Validates: Requirements 12.3**
    - **Property 27: Lazy Loading Koruma**
    - **Validates: Requirements 12.4**
    - **Property 28: Route Component Eşitliği**
    - **Validates: Requirements 12.5**
    - **Property 29: Route Parameter Koruma**
    - **Validates: Requirements 12.6**
    - Tüm route'ların çalıştığını test et
    - Lazy loading'i test et
    - Protected route logic'i test et
    - Role-based routing'i test et
  
  - [ ] 6.14 Checkpoint - Faz 6 tamamlandı
    - App.tsx parçalandı mı kontrol et
    - Tüm route'lar çalışıyor mu test et
    - Git commit oluştur (checkpoint-phase-6)
    - Ensure all tests pass, ask the user if questions arise.


- [x] 7. Faz 7: Store ve Services Organize Etme
  - [x] 7.1 Stores dizinini taşı
    - stores/ → apps/web/src/stores/
    - Mevcut store yapısını koru
    - _Requirements: 13.1, 13.2, 13.3_
  
  - [x] 7.2 authStore'u organize et
    - authStore.ts'yi kontrol et ve güncelle
    - Login, logout, register action'larını test et
    - Persistence logic'i koru
    - _Requirements: 13.1, 13.6_
  
  - [x] 7.3 gameStore'u organize et
    - gameStore.ts'yi kontrol et ve güncelle
    - Game progress, score tracking action'larını test et
    - _Requirements: 13.2, 13.6_
  
  - [x] 7.4 uiStore'u organize et
    - uiStore.ts'yi kontrol et ve güncelle
    - UI state management action'larını test et
    - _Requirements: 13.3, 13.6_
  
  - [x] 7.5 Services dizinini taşı
    - services/ → apps/web/src/services/
    - Mevcut service yapısını koru
    - _Requirements: 14.1_
  
  - [x] 7.6 API services'i organize et
    - services/api.ts'yi domain'lere göre böl
    - services/authService.ts oluştur
    - services/gameService.ts oluştur
    - services/userService.ts oluştur
    - services/leaderboardService.ts oluştur
    - _Requirements: 14.2, 14.3, 14.4, 14.6_
  
  - [x] 7.7 Gemini AI service'i organize et
    - services/geminiService.ts'yi kontrol et
    - Practice question service'i koru
    - _Requirements: 14.3_
  
  - [x] 7.8 Error handling ve retry logic'i koru
    - Tüm service'lerde error handling'i kontrol et
    - Retry logic'i test et
    - _Requirements: 14.7_
  
  - [x] 7.9 Service barrel exports oluştur
    - services/index.ts oluştur
    - Tüm service'leri export et
    - _Requirements: 2.5, 2.6_
  
  - [ ]* 7.10 Faz 7 validation testleri yaz
    - **Property 30: Store Fonksiyonalite Koruma**
    - **Validates: Requirements 13.1, 13.2, 13.3, 13.6, 13.7**
    - **Property 31: Store Interface Tutarlılığı**
    - **Validates: Requirements 13.5**
    - **Property 32: API Service Koruma**
    - **Validates: Requirements 14.2, 14.3, 14.4, 14.7**
    - **Property 33: Service Interface Tutarlılığı**
    - **Validates: Requirements 14.5**
    - Store action'larını test et
    - Store persistence'ı test et
    - API service'leri test et
    - Error handling'i test et
  
  - [x] 7.11 Checkpoint - Faz 7 tamamlandı
    - Tüm store'lar çalışıyor mu kontrol et
    - API service'ler çalışıyor mu test et
    - Git commit oluştur (checkpoint-phase-7)
    - Ensure all tests pass, ask the user if questions arise.


- [x] 8. Faz 8: apps/teacher ve apps/admin Oluşturma
  - [x] 8.1 Teacher app temel yapısını oluştur
    - apps/teacher/src/App.tsx oluştur
    - apps/teacher/src/main.tsx oluştur
    - Routing yapısını kur
    - _Requirements: 1.4_
  
  - [x] 8.2 Teacher-specific feature'ları taşı
    - Teacher dashboard'u taşı
    - Teacher tools'u taşı
    - Student management components'i taşı
    - _Requirements: 1.4, 11.12_
  
  - [x] 8.3 Teacher app'te shared package'ları kullan
    - @egitim-galaksisi/ui import et
    - @egitim-galaksisi/game-engine import et
    - @egitim-galaksisi/shared import et
    - _Requirements: 9.3, 9.4_
  
  - [x] 8.4 Admin app temel yapısını oluştur
    - apps/admin/src/App.tsx oluştur
    - apps/admin/src/main.tsx oluştur
    - Routing yapısını kur
    - _Requirements: 1.3_
  
  - [x] 8.5 Admin-specific feature'ları taşı
    - Admin dashboard'u taşı
    - User management components'i taşı
    - School management components'i taşı
    - Analytics components'i taşı
    - _Requirements: 1.3_
  
  - [x] 8.6 Admin app'te shared package'ları kullan
    - @egitim-galaksisi/ui import et
    - @egitim-galaksisi/shared import et
    - _Requirements: 9.3, 9.4_
  
  - [ ]* 8.7 Faz 8 validation testleri yaz
    - **Property 19: Shared Package Import**
    - **Validates: Requirements 9.3, 9.4**
    - Teacher app'in çalıştığını test et
    - Admin app'in çalıştığını test et
    - Shared package import'larını test et
  
  - [x] 8.8 Checkpoint - Faz 8 tamamlandı
    - Teacher ve admin app'ler çalışıyor mu kontrol et
    - Shared package'lar kullanılıyor mu test et
    - Git commit oluştur (checkpoint-phase-8)
    - Ensure all tests pass, ask the user if questions arise.


- [-] 9. Faz 9: Kod Temizleme ve Optimizasyon
  - [ ] 9.1 Kullanılmayan bileşenleri tespit et ve kaldır
    - Tüm dosyaları tara
    - Import edilmeyen bileşenleri bul
    - Kullanılmayan bileşenleri sil
    - _Requirements: 7.1_
  
  - [ ] 9.2 Kullanılmayan dependency'leri kaldır
    - package.json'ları kontrol et
    - Kullanılmayan npm paketlerini tespit et
    - Gereksiz dependency'leri kaldır
    - _Requirements: 7.2_
  
  - [ ] 9.3 Duplicate code'u consolidate et
    - Duplicate code'u tespit et
    - Shared utilities'e taşı
    - packages/shared/src/utils/'e ekle
    - _Requirements: 7.3_
  
  - [ ] 9.4 Commented-out code'u kaldır
    - Tüm dosyaları tara
    - Commented-out code block'larını bul ve kaldır
    - _Requirements: 7.4_
  
  - [ ] 9.5 Import statement'ları standardize et
    - Tüm dosyalarda import'ları alfabetik sırala
    - Absolute imports önce, relative imports sonra
    - Unused import'ları kaldır
    - _Requirements: 7.6, 13.4_
  
  - [ ] 9.6 console.log statement'larını kaldır
    - Production code'dan console.log'ları kaldır
    - Development-only logging için proper logger kullan
    - _Requirements: 7.7_
  
  - [x] 9.7 ESLint yapılandır
    - Root .eslintrc.js oluştur
    - Monorepo için ESLint kuralları ekle
    - Tüm workspace'lerde lint çalıştır
    - _Requirements: 7.6_
  
  - [x] 9.8 Prettier yapılandır
    - Root .prettierrc oluştur
    - Code formatting kuralları ekle
    - Tüm dosyaları format et
    - _Requirements: 7.6_
  
  - [ ] 9.9 TypeScript strict mode etkinleştir
    - tsconfig.json'da strict: true yap
    - Tip hatalarını düzelt
    - any kullanımını azalt
    - _Requirements: 4.8_
  
  - [ ]* 9.10 Faz 9 validation testleri yaz
    - **Property 12: Runtime Hata Yokluğu**
    - **Validates: Requirements 7.5**
    - **Property 13: Import Statement Standardizasyonu**
    - **Validates: Requirements 7.6**
    - **Property 14: Production Code Temizliği**
    - **Validates: Requirements 7.7**
    - Runtime hatalarını test et
    - Linter hatalarını kontrol et
    - Build başarısını test et
  
  - [ ] 9.11 Checkpoint - Faz 9 tamamlandı
    - Kod temizliği tamamlandı mı kontrol et
    - Linter hataları yok mu test et
    - Git commit oluştur (checkpoint-phase-9)
    - Ensure all tests pass, ask the user if questions arise.


- [ ] 10. Faz 10: Test ve Doğrulama
  - [ ] 10.1 Test framework'ü kur
    - Vitest kur ve yapılandır
    - Test script'leri ekle (test:unit, test:property, test:integration)
    - Coverage yapılandırması ekle
    - _Requirements: 8.4_
  
  - [ ] 10.2 Unit testler yaz
    - [ ]* 10.2.1 UI component testleri
      - Button, Card, Modal, Input testleri
      - GameTemplate testleri
      - Layout component testleri
    
    - [ ]* 10.2.2 Game engine testleri
      - useGameState hook testleri
      - Scoring utilities testleri
      - Timer utilities testleri
    
    - [ ]* 10.2.3 Feature module testleri
      - Game module testleri
      - Lesson module testleri
      - Dashboard testleri
    
    - [ ]* 10.2.4 Store testleri
      - authStore testleri
      - gameStore testleri
      - uiStore testleri
    
    - [ ]* 10.2.5 Service testleri
      - API service testleri
      - Mock service testleri
  
  - [ ] 10.3 Property-based testler yaz
    - [ ]* 10.3.1 Workspace yapısı property testleri
      - **Property 1: Workspace Yapısı Bütünlüğü**
      - **Property 3: TypeScript Path Alias Çözümleme**
      - **Property 17: Workspace Protocol Kullanımı**
      - **Property 18: Workspace Dependency Çözümleme**
    
    - [ ]* 10.3.2 İşlevsellik koruma property testleri
      - **Property 2: İşlevsellik Koruma**
      - **Property 6: Scoring Tutarlılığı**
      - **Property 7: Level Progression Monotonluğu**
    
    - [ ]* 10.3.3 Tasarım koruma property testleri
      - **Property 8: Tema Renk Koruma**
      - **Property 10: Tasarım Öğesi Koruma**
    
    - [ ]* 10.3.4 Modül yapısı property testleri
      - **Property 4: Barrel Export Tutarlılığı**
      - **Property 5: Circular Dependency Yokluğu**
      - **Property 11: Bağımsız Kategori Import**
    
    - [ ]* 10.3.5 Routing property testleri
      - **Property 24: Route Path Koruma**
      - **Property 25: Role-Based Routing**
      - **Property 26: Protected Route Koruma**
      - **Property 27: Lazy Loading Koruma**
    
    - [ ]* 10.3.6 Store ve service property testleri
      - **Property 30: Store Fonksiyonalite Koruma**
      - **Property 32: API Service Koruma**
  
  - [ ] 10.4 Integration testler yaz
    - [ ]* 10.4.1 Feature integration testleri
      - Game flow integration testleri
      - Lesson flow integration testleri
      - Dashboard integration testleri
    
    - [ ]* 10.4.2 Cross-workspace integration testleri
      - UI package integration testleri
      - Game engine integration testleri
      - Mock data integration testleri
  
  - [ ] 10.5 E2E testler yaz (Playwright)
    - [ ]* 10.5.1 Playwright kur ve yapılandır
      - Playwright install
      - Test yapılandırması oluştur
    
    - [ ]* 10.5.2 Kritik user flow E2E testleri
      - Login/logout flow
      - Game play flow
      - Lesson access flow
      - Profile update flow
      - Leaderboard view flow
  
  - [ ] 10.6 Manuel test checklist
    - [ ] 10.6.1 Tüm route'ları manuel test et
      - Her route'a git ve render kontrolü yap
      - _Requirements: 15.2_
    
    - [ ] 10.6.2 Tüm oyunları manuel test et
      - Her oyunu başlat, oyna ve tamamla
      - _Requirements: 15.3_
    
    - [ ] 10.6.3 Tüm dersleri manuel test et
      - Her derse eriş ve içeriği görüntüle
      - _Requirements: 15.4_
    
    - [ ] 10.6.4 Farklı ekran boyutlarında test et
      - Mobile (375px)
      - Tablet (768px)
      - Desktop (1920px)
      - _Requirements: 15.5_
    
    - [ ] 10.6.5 Farklı tarayıcılarda test et
      - Chrome
      - Firefox
      - Safari
      - Edge
      - _Requirements: 15.5_
    
    - [ ] 10.6.6 Authentication test et
      - Login işlemi
      - Register işlemi
      - Logout işlemi
      - Protected route erişimi
      - _Requirements: 15.6_
    
    - [ ] 10.6.7 API entegrasyonlarını test et
      - Game API çağrıları
      - User API çağrıları
      - Leaderboard API çağrıları
      - _Requirements: 15.7_
  
  - [ ] 10.7 Performance testleri yap
    - [ ]* 10.7.1 Page load performance
      - **Property 41: Performans Koruma**
      - Lighthouse score'ları karşılaştır
      - Core Web Vitals ölç
      - _Requirements: 15.10_
    
    - [ ]* 10.7.2 Game start performance
      - Oyun başlatma sürelerini ölç
      - Legacy kod ile karşılaştır
      - _Requirements: 15.10_
    
    - [ ]* 10.7.3 Navigation performance
      - Route değişim sürelerini ölç
      - Lazy loading performansını test et
      - _Requirements: 15.10_
  
  - [ ] 10.8 Build size karşılaştırması yap
    - [ ] 10.8.1 Build output size'ı ölç
      - **Property 40: Build Size Kontrolü**
      - Legacy build size'ı kaydet
      - Yeni build size'ı kaydet
      - Karşılaştır (%20'den fazla artış olmamalı)
      - _Requirements: 15.9_
    
    - [ ] 10.8.2 Bundle analysis yap
      - webpack-bundle-analyzer kullan
      - Büyük bundle'ları tespit et
      - Optimizasyon fırsatlarını belirle
      - _Requirements: 15.9_
  
  - [ ] 10.9 Checkpoint - Faz 10 tamamlandı
    - Tüm testler geçiyor mu kontrol et
    - Performance kabul edilebilir mi test et
    - Build size kabul edilebilir mi kontrol et
    - Git commit oluştur (checkpoint-phase-10)
    - Ensure all tests pass, ask the user if questions arise.


- [ ] 11. Faz 11: Dokümantasyon ve Deployment Hazırlığı
  - [ ] 11.1 README.md güncelle
    - Monorepo yapısını dokümante et
    - Workspace'leri açıkla
    - Development komutlarını ekle
    - Build komutlarını ekle
    - _Requirements: 8.5_
  
  - [ ] 11.2 CONTRIBUTING.md oluştur
    - Contribution guidelines yaz
    - Code style kurallarını ekle
    - PR process'i açıkla
    - _Requirements: 8.5_
  
  - [ ] 11.3 ARCHITECTURE.md oluştur
    - Monorepo mimarisini detaylı açıkla
    - Workspace dependency graph'ı ekle
    - Feature module yapısını dokümante et
    - Design decisions'ları açıkla
    - _Requirements: 8.5_
  
  - [ ] 11.4 API dokümantasyonu oluştur
    - API contract'ları dokümante et
    - Service interface'lerini dokümante et
    - Mock data yapısını açıkla
    - _Requirements: 8.5_
  
  - [ ] 11.5 Component dokümantasyonu oluştur (Storybook - opsiyonel)
    - Storybook kur
    - UI component'leri için stories yaz
    - Game engine component'leri için stories yaz
    - _Requirements: 8.5_
  
  - [ ] 11.6 Deployment script'leri oluştur
    - deploy:web script oluştur
    - deploy:teacher script oluştur
    - deploy:admin script oluştur
    - _Requirements: 8.6_
  
  - [ ] 11.7 CI/CD pipeline yapılandır
    - GitHub Actions workflow oluştur
    - Test automation ekle
    - Build automation ekle
    - Deployment automation ekle (opsiyonel)
    - _Requirements: 8.6_
  
  - [ ] 11.8 Production build test et
    - npm run build çalıştır
    - Build output'u kontrol et
    - Production preview test et
    - _Requirements: 10.7_
  
  - [ ] 11.9 Environment variables yapılandır
    - .env.example güncelle
    - Environment variables dokümante et
    - Production environment variables hazırla
    - _Requirements: 10.7_
  
  - [ ] 11.10 Docker yapılandırması oluştur (opsiyonel)
    - Dockerfile oluştur
    - docker-compose.yml oluştur
    - Docker build test et
    - _Requirements: 8.6_
  
  - [ ] 11.11 Vercel deployment yapılandır (opsiyonel)
    - vercel.json oluştur
    - Monorepo için yapılandır
    - Test deployment yap
    - _Requirements: 8.6_
  
  - [ ] 11.12 Migration checklist oluştur
    - Tüm fazların tamamlandığını doğrula
    - Rollback prosedürlerini dokümante et
    - Known issues listesi oluştur
    - _Requirements: 8.1, 8.7_
  
  - [ ] 11.13 Final validation
    - [ ] 11.13.1 Tüm workspace'lerin build olduğunu doğrula
      - **Property 18: Workspace Dependency Çözümleme**
      - npm run build çalıştır
      - Hata olmadığını kontrol et
    
    - [ ] 11.13.2 Tüm testlerin geçtiğini doğrula
      - **Property 15: Test Başarı Oranı Koruma**
      - npm run test çalıştır
      - %100 başarı oranı kontrol et
      - _Requirements: 8.4_
    
    - [ ] 11.13.3 Tüm özelliklerin çalıştığını doğrula
      - **Property 2: İşlevsellik Koruma**
      - **Property 34: Route Erişilebilirlik**
      - **Property 35: Oyun Oynanabilirlik**
      - **Property 36: Ders Erişilebilirlik**
      - **Property 37: Responsive Tasarım**
      - **Property 38: Authentication Çalışması**
      - **Property 39: API Entegrasyon Çalışması**
      - Manuel test checklist'i tamamla
      - _Requirements: 1.5, 15.2, 15.3, 15.4, 15.5, 15.6, 15.7_
    
    - [ ] 11.13.4 Performance'ın kabul edilebilir olduğunu doğrula
      - **Property 41: Performans Koruma**
      - Performance test sonuçlarını gözden geçir
      - %10'dan fazla düşüş olmadığını kontrol et
      - _Requirements: 15.10_
    
    - [ ] 11.13.5 Build size'ın kabul edilebilir olduğunu doğrula
      - **Property 40: Build Size Kontrolü**
      - Build size karşılaştırmasını gözden geçir
      - %20'den fazla artış olmadığını kontrol et
      - _Requirements: 15.9_
  
  - [ ] 11.14 Checkpoint - Faz 11 ve Migrasyon Tamamlandı
    - Dokümantasyon eksiksiz mi kontrol et
    - Deployment hazırlıkları tamamlandı mı test et
    - Final validation başarılı mı kontrol et
    - Git commit oluştur (checkpoint-phase-11-final)
    - Git tag oluştur (v2.0.0-monorepo)
    - Ensure all tests pass, ask the user if questions arise.

## Notlar

- Task'lar marked with `*` are optional and can be skipped for faster MVP
- Her task specific requirements'a referans verir (traceability için)
- Checkpoint'ler incremental validation sağlar
- Property testler universal correctness properties'i validate eder
- Unit testler specific examples ve edge cases'i validate eder
- Her faz sonunda git commit oluşturulur (rollback için)
- Rollback mekanizması her faz için mevcuttur

## Rollback Prosedürü

Her faz için rollback:
```bash
# Faz N'e geri dön
git reset --hard checkpoint-phase-N
npm install
npm run build
```

## Development Komutları

```bash
# Tüm workspace'leri development mode'da çalıştır
npm run dev

# Sadece web app'i çalıştır
npm run dev:web

# Tüm workspace'leri build et
npm run build

# Testleri çalıştır
npm run test              # Tüm testler
npm run test:unit         # Unit testler
npm run test:property     # Property-based testler
npm run test:integration  # Integration testler
npm run test:e2e          # E2E testler

# Linting ve formatting
npm run lint              # ESLint
npm run format            # Prettier
```

## Başarı Kriterleri

Migrasyon başarılı sayılır eğer:
- ✅ Tüm workspace'ler oluşturuldu ve build oluyor
- ✅ Tüm feature'lar çalışıyor (oyunlar, dersler, dashboard'lar)
- ✅ Tüm route'lar erişilebilir
- ✅ Tüm testler geçiyor (%100 başarı oranı)
- ✅ Performance düşüşü %10'dan az
- ✅ Build size artışı %20'den az
- ✅ Tasarım ve renkler korundu
- ✅ Circular dependency yok
- ✅ TypeScript hataları yok
- ✅ Linter hataları yok

