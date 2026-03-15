# Gereksinimler Dokümanı: Monorepo Mimari Dönüşümü

## Giriş

Eğitim Galaksisi uygulaması, şu anda tek bir monolitik yapıda olan bir Türkçe eğitim platformudur. Bu proje, uygulamayı modern monorepo mimarisine dönüştürerek ölçeklenebilirlik, bakım kolaylığı ve kod yeniden kullanılabilirliğini artırmayı hedeflemektedir. Dönüşüm sırasında mevcut tasarımlar, renkler ve kullanıcı deneyimi korunacak, gereksiz kod ve karmaşıklık temizlenecektir.

## Sözlük

- **Monorepo**: Birden fazla projeyi tek bir kod deposunda yöneten mimari yapı
- **Workspace**: Monorepo içindeki bağımsız paket veya uygulama
- **Feature_Module**: Belirli bir işlevselliği kapsayan bağımsız modül (örn: oyunlar, dersler)
- **Design_System**: Tutarlı UI bileşenleri ve tasarım kuralları içeren paket
- **Game_Engine**: Oyun mantığını ve ortak oyun işlevlerini içeren paket
- **Migration_System**: Mevcut kodun yeni yapıya taşınmasını yöneten sistem
- **Legacy_Code**: Mevcut monolitik yapıdaki kod
- **Target_Architecture**: Hedeflenen monorepo yapısı
- **Rollback_Mechanism**: Hata durumunda geri dönüş mekanizması

## Gereksinimler

### Gereksinim 1: Monorepo Yapısı Oluşturma

**Kullanıcı Hikayesi:** Geliştirici olarak, projeyi monorepo yapısına dönüştürmek istiyorum, böylece farklı uygulamalar ve paketler bağımsız olarak yönetilebilir.

#### Kabul Kriterleri

1. THE Migration_System SHALL create a workspace structure with apps/ and packages/ directories
2. THE Migration_System SHALL create apps/web workspace for the main student application
3. THE Migration_System SHALL create apps/admin workspace for the administrator panel
4. THE Migration_System SHALL create apps/teacher workspace for the teacher panel
5. WHEN workspace structure is created, THE Migration_System SHALL preserve all existing functionality
6. THE Migration_System SHALL create a root package.json with workspace configuration
7. THE Migration_System SHALL configure TypeScript path aliases for cross-workspace imports

### Gereksinim 2: Feature-Based Modül Yapısı

**Kullanıcı Hikayesi:** Geliştirici olarak, özellikleri bağımsız modüller halinde organize etmek istiyorum, böylece kod daha kolay bulunabilir ve bakımı yapılabilir.

#### Kabul Kriterleri

1. THE Migration_System SHALL create features/games module containing all game-related components
2. THE Migration_System SHALL create features/lessons module containing all lesson-related components
3. THE Migration_System SHALL create features/analytics module containing analytics and reporting components
4. THE Migration_System SHALL create features/leaderboard module containing leaderboard and ranking components
5. WHEN migrating components to feature modules, THE Migration_System SHALL maintain all import paths through barrel exports
6. THE Migration_System SHALL create index.ts files in each feature module for clean exports
7. FOR ALL feature modules, THE Migration_System SHALL ensure zero circular dependencies

### Gereksinim 3: Oyun Motoru Paketi

**Kullanıcı Hikayesi:** Geliştirici olarak, ortak oyun mantığını paylaşılan bir pakette toplamak istiyorum, böylece oyunlar arasında kod tekrarı önlenir.

#### Kabul Kriterleri

1. THE Migration_System SHALL create packages/game-engine workspace
2. THE Game_Engine SHALL provide a base GameTemplate component for all games
3. THE Game_Engine SHALL provide scoring logic that is consistent across all games
4. THE Game_Engine SHALL provide level progression logic
5. THE Game_Engine SHALL provide game state management utilities
6. WHEN a game uses Game_Engine, THE Game_Engine SHALL maintain the game's original visual design
7. THE Game_Engine SHALL provide sound effect and animation utilities
8. THE Game_Engine SHALL provide timer and countdown utilities

### Gereksinim 4: UI Tasarım Sistemi Paketi

**Kullanıcı Hikayesi:** Geliştirici olarak, tutarlı UI bileşenlerini merkezi bir pakette toplamak istiyorum, böylece tasarım tutarlılığı sağlanır.

#### Kabul Kriterleri

1. THE Migration_System SHALL create packages/ui workspace
2. THE Design_System SHALL preserve all existing color schemes from gameTheme.ts
3. THE Design_System SHALL provide Button, Card, Modal, and Input components
4. THE Design_System SHALL provide GameCard component with existing visual design
5. THE Design_System SHALL provide Layout components (Header, Footer, Sidebar)
6. WHEN Design_System components are used, THE Design_System SHALL maintain pixel-perfect compatibility with existing designs
7. THE Design_System SHALL export all color constants and theme variables
8. THE Design_System SHALL provide TypeScript types for all component props

### Gereksinim 5: Micro Frontend Hazırlığı

**Kullanıcı Hikayesi:** Geliştirici olarak, gelecekte micro frontend mimarisine geçiş için altyapı hazırlamak istiyorum, böylece oyun kategorileri bağımsız olarak deploy edilebilir.

#### Kabul Kriterleri

1. THE Migration_System SHALL create features/games/math-games subdirectory
2. THE Migration_System SHALL create features/games/logic-games subdirectory
3. THE Migration_System SHALL create features/games/language-games subdirectory
4. WHEN organizing games by category, THE Migration_System SHALL maintain all existing game functionality
5. THE Migration_System SHALL ensure each game category can be imported independently
6. THE Migration_System SHALL create separate routing configuration for each game category
7. WHERE micro frontend deployment is needed, THE Target_Architecture SHALL support independent deployment of game categories

### Gereksinim 6: Tasarım ve Renk Koruması

**Kullanıcı Hikayesi:** Kullanıcı olarak, uygulama mimarisinin değişmesine rağmen aynı görsel deneyimi yaşamak istiyorum, böylece alışkanlıklarım bozulmaz.

#### Kabul Kriterleri

1. THE Migration_System SHALL preserve all color values from styles/gameTheme.ts
2. THE Migration_System SHALL preserve all component styling and CSS classes
3. THE Migration_System SHALL preserve all animations and transitions
4. THE Migration_System SHALL preserve all icon and emoji usage
5. WHEN a component is migrated, THE Migration_System SHALL verify visual output matches Legacy_Code exactly
6. THE Migration_System SHALL preserve all responsive design breakpoints
7. THE Migration_System SHALL preserve all font sizes, weights, and families

### Gereksinim 7: Kod Temizleme ve Optimizasyon

**Kullanıcı Hikayesi:** Geliştirici olarak, kullanılmayan kodu ve gereksiz karmaşıklığı temizlemek istiyorum, böylece kod tabanı daha sürdürülebilir olur.

#### Kabul Kriterleri

1. THE Migration_System SHALL identify and remove unused components
2. THE Migration_System SHALL identify and remove unused dependencies from package.json
3. THE Migration_System SHALL consolidate duplicate code into shared utilities
4. THE Migration_System SHALL remove commented-out code blocks
5. WHEN removing code, THE Migration_System SHALL verify no runtime errors are introduced
6. THE Migration_System SHALL standardize import statements across all files
7. THE Migration_System SHALL remove console.log statements from production code

### Gereksinim 8: Adım Adım Migrasyon Planı

**Kullanıcı Hikayesi:** Geliştirici olarak, migrasyonun adım adım ve test edilebilir şekilde yapılmasını istiyorum, böylece her adımda uygulamanın çalışır durumda kalması garanti edilir.

#### Kabul Kriterleri

1. THE Migration_System SHALL create a migration plan with distinct phases
2. THE Migration_System SHALL ensure each migration phase is independently testable
3. THE Migration_System SHALL create a rollback procedure for each migration phase
4. WHEN a migration phase is completed, THE Migration_System SHALL run all existing tests
5. THE Migration_System SHALL document each migration step with clear instructions
6. THE Migration_System SHALL create migration checkpoints that can be committed to version control
7. IF a migration phase fails, THEN THE Rollback_Mechanism SHALL restore the previous working state

### Gereksinim 9: Bağımlılık Yönetimi

**Kullanıcı Hikayesi:** Geliştirici olarak, workspace'ler arası bağımlılıkları düzgün yönetmek istiyorum, böylece paketler birbirini doğru şekilde referans eder.

#### Kabul Kriterleri

1. THE Migration_System SHALL configure workspace dependencies in root package.json
2. THE Migration_System SHALL use workspace protocol for internal package references
3. THE Migration_System SHALL ensure packages/ui can be imported by all apps
4. THE Migration_System SHALL ensure packages/game-engine can be imported by all apps
5. WHEN building the project, THE Migration_System SHALL resolve all workspace dependencies correctly
6. THE Migration_System SHALL prevent circular dependencies between workspaces
7. THE Migration_System SHALL configure TypeScript to recognize workspace packages

### Gereksinim 10: Build ve Development Yapılandırması

**Kullanıcı Hikayesi:** Geliştirici olarak, monorepo yapısında build ve development süreçlerinin sorunsuz çalışmasını istiyorum, böylece geliştirme verimliliği korunur.

#### Kabul Kriterleri

1. THE Migration_System SHALL configure Vite for monorepo structure
2. THE Migration_System SHALL enable hot module replacement for all workspaces
3. THE Migration_System SHALL configure build scripts for each workspace
4. THE Migration_System SHALL configure a root build script that builds all workspaces
5. WHEN running dev server, THE Migration_System SHALL support concurrent development of multiple workspaces
6. THE Migration_System SHALL configure TypeScript compilation for all workspaces
7. THE Migration_System SHALL ensure build output is optimized for production

### Gereksinim 11: Mevcut Modül Yapısının Korunması

**Kullanıcı Hikayesi:** Geliştirici olarak, mevcut modüllerin (Academic, Fast Reading, First Aid, vb.) yapısının korunmasını istiyorum, böylece içerik kaybı olmaz.

#### Kabul Kriterleri

1. THE Migration_System SHALL preserve all Academic module components (matematik, Türkçe, İngilizce, fen, sosyal bilgiler)
2. THE Migration_System SHALL preserve all Fast Reading module components
3. THE Migration_System SHALL preserve all First Aid module components
4. THE Migration_System SHALL preserve all Focus module components
5. THE Migration_System SHALL preserve all Language module components
6. THE Migration_System SHALL preserve all Learning module components
7. THE Migration_System SHALL preserve all Logic Games module components
8. THE Migration_System SHALL preserve all Memory module components
9. THE Migration_System SHALL preserve all Reading module components
10. THE Migration_System SHALL preserve all Stories module components
11. WHEN migrating modules, THE Migration_System SHALL maintain all grade-level subdivisions
12. THE Migration_System SHALL preserve all teacher tools components

### Gereksinim 12: Routing ve Navigation Yapısı

**Kullanıcı Hikayesi:** Kullanıcı olarak, uygulama içinde gezinirken aynı URL yapısını ve navigasyon deneyimini yaşamak istiyorum, böylece yer imleri ve alışkanlıklar bozulmaz.

#### Kabul Kriterleri

1. THE Migration_System SHALL preserve all existing route paths from AppRouter.tsx
2. THE Migration_System SHALL maintain role-based routing (student, teacher, admin, parent)
3. THE Migration_System SHALL preserve all protected route logic
4. THE Migration_System SHALL maintain lazy loading for route components
5. WHEN a user navigates to a route, THE Target_Architecture SHALL render the same component as Legacy_Code
6. THE Migration_System SHALL preserve all route parameters and query strings
7. THE Migration_System SHALL maintain navigation guards and authentication checks

### Gereksinim 13: State Management Yapısı

**Kullanıcı Hikayesi:** Geliştirici olarak, mevcut state management yapısının (Zustand stores) korunmasını istiyorum, böylece uygulama durumu doğru şekilde yönetilir.

#### Kabul Kriterleri

1. THE Migration_System SHALL preserve authStore functionality
2. THE Migration_System SHALL preserve gameStore functionality
3. THE Migration_System SHALL preserve uiStore functionality
4. THE Migration_System SHALL organize stores within appropriate feature modules
5. WHEN a component uses a store, THE Target_Architecture SHALL provide the same state interface as Legacy_Code
6. THE Migration_System SHALL maintain all store actions and selectors
7. THE Migration_System SHALL preserve store persistence logic

### Gereksinim 14: API ve Service Katmanı

**Kullanıcı Hikayesi:** Geliştirici olarak, API ve service katmanının merkezi bir yerde organize edilmesini istiyorum, böylece backend entegrasyonu tutarlı olur.

#### Kabul Kriterleri

1. THE Migration_System SHALL create a shared services package or directory
2. THE Migration_System SHALL preserve all API service functions from services/api.ts
3. THE Migration_System SHALL preserve Gemini AI service integration
4. THE Migration_System SHALL preserve practice question service
5. WHEN an app calls an API service, THE Target_Architecture SHALL use the same service interface as Legacy_Code
6. THE Migration_System SHALL organize services by domain (auth, games, lessons, analytics)
7. THE Migration_System SHALL maintain all error handling and retry logic

### Gereksinim 15: Test Edilebilirlik ve Doğrulama

**Kullanıcı Hikayesi:** Geliştirici olarak, migrasyon sonrası uygulamanın doğru çalıştığını doğrulamak istiyorum, böylece üretim ortamına güvenle deploy edilebilir.

#### Kabul Kriterleri

1. THE Migration_System SHALL create a validation checklist for each migration phase
2. THE Migration_System SHALL verify all routes are accessible after migration
3. THE Migration_System SHALL verify all games are playable after migration
4. THE Migration_System SHALL verify all lessons are accessible after migration
5. WHEN validation is performed, THE Migration_System SHALL test on multiple screen sizes
6. THE Migration_System SHALL verify authentication and authorization work correctly
7. THE Migration_System SHALL verify all API integrations function correctly
8. THE Migration_System SHALL create smoke tests for critical user flows
9. THE Migration_System SHALL verify build output size is not significantly larger than Legacy_Code
10. THE Migration_System SHALL verify application performance is not degraded

## Özel Gereksinim Notları

### Parser ve Serializer Gereksinimleri

Bu projede doğrudan parser/serializer bulunmamaktadır, ancak gelecekte eklenmesi durumunda:

**Gereksinim 16: Veri Formatı İşleme (Gelecek)**

**Kullanıcı Hikayesi:** Geliştirici olarak, oyun verilerini ve ders içeriklerini parse edip serialize edebilmek istiyorum, böylece içerik yönetimi kolaylaşır.

#### Kabul Kriterleri

1. WHERE content parsing is needed, THE Content_Parser SHALL parse JSON configuration files into typed objects
2. WHERE content parsing is needed, THE Content_Parser SHALL return descriptive errors for invalid content
3. WHERE content serialization is needed, THE Pretty_Printer SHALL format content objects back into valid JSON
4. FOR ALL valid content objects, parsing then printing then parsing SHALL produce an equivalent object (round-trip property)

## Migrasyon Aşamaları Özeti

1. **Aşama 1**: Monorepo yapısı ve workspace konfigürasyonu
2. **Aşama 2**: packages/ui tasarım sistemi oluşturma
3. **Aşama 3**: packages/game-engine oluşturma
4. **Aşama 4**: Feature modüllerini organize etme (games, lessons, analytics, leaderboard)
5. **Aşama 5**: Apps yapısını oluşturma (web, admin, teacher)
6. **Aşama 6**: Routing ve navigation yapısını güncelleme
7. **Aşama 7**: State management ve services yapısını organize etme
8. **Aşama 8**: Kod temizleme ve optimizasyon
9. **Aşama 9**: Test ve doğrulama
10. **Aşama 10**: Dokümantasyon ve deployment hazırlığı

## Kısıtlar ve Notlar

- Migrasyon sırasında uygulama her zaman çalışır durumda kalmalıdır
- Her aşama bağımsız olarak test edilebilir olmalıdır
- Mevcut kullanıcı verileri ve oturum bilgileri korunmalıdır
- Performans düşüşü kabul edilemez
- Tasarım ve renk değişiklikleri kabul edilemez
- Tüm mevcut özellikler korunmalıdır
