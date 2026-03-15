import React, { useEffect, useState, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthStore } from './stores/authStore';

// Loading component
const LoadingFallback = () => (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] flex items-center justify-center">
        <div className="text-center">
            <div className="text-6xl animate-bounce">🚀</div>
            <p className="text-white/50 mt-4 text-lg font-medium">Yükleniyor...</p>
        </div>
    </div>
);

// Auth pages - Load immediately (critical)
import LoginPage from './features/auth/LoginPage';
import RegisterPage from './features/auth/RegisterPage';

// Lazy load dashboards
const StudentDashboard = lazy(() => import('./features/dashboard/StudentDashboard'));
const TeacherDashboard = lazy(() => import('./features/dashboard/TeacherDashboard'));
const AdminDashboard = lazy(() => import('./features/dashboard/AdminDashboard'));
const ParentDashboard = lazy(() => import('./features/dashboard/ParentDashboard'));

// Lazy load games
const GameBrowser = lazy(() => import('./features/games').then(m => ({ default: m.GameBrowser })));
const GamePlayer = lazy(() => import('./features/games').then(m => ({ default: m.GamePlayer })));
const GamePlayerNew = lazy(() => import('./features/games/GamePlayerNew'));

// Lazy load lessons
const MathLessonsMenu = lazy(() => import('./features/lessons').then(m => ({ default: m.MathLessonsMenu })));
const TurkishLessonsMenu = lazy(() => import('./features/lessons').then(m => ({ default: m.TurkishLessonsMenu })));

// Lazy load Turkish games
const TurkishMenu = lazy(() => import('./components/turkish/TurkishMenu'));
const TurkishGradeMenu = lazy(() => import('./components/turkish/TurkishGradeMenu'));

// Lazy load Grade 1
const LetterMatchGame = lazy(() => import('./components/academic/turkish/grade1/letters/LetterMatchGame'));
const VowelConsonantGame = lazy(() => import('./components/academic/turkish/grade1/letters/VowelConsonantGame'));
const LetterRecognitionGame = lazy(() => import('./components/academic/turkish/grade1/letters/LetterRecognitionGame'));
const UppercaseLowercaseGame = lazy(() => import('./components/academic/turkish/grade1/letters/UppercaseLowercaseGame'));
const SyllableBuilderGame = lazy(() => import('./components/academic/turkish/grade1/syllables/SyllableBuilderGame'));
const SyllableSeparationGame = lazy(() => import('./components/academic/turkish/grade1/syllables/SyllableSeparationGame'));
const SyllableCountGame = lazy(() => import('./components/academic/turkish/grade1/words/SyllableCountGame'));
const WordMakingGame = lazy(() => import('./components/academic/turkish/grade1/reading/WordMakingGame'));
const StoryComprehensionGame = lazy(() => import('./components/academic/turkish/grade1/reading/StoryComprehensionGame'));

// Lazy load Grade 2
const ReadingComprehensionGame = lazy(() => import('./components/academic/turkish/grade2/reading/ReadingComprehensionGame'));
const PunctuationGame = lazy(() => import('./components/academic/turkish/grade2/reading/PunctuationGame'));
const SentenceBuilderGame = lazy(() => import('./components/academic/turkish/grade2/writing/SentenceBuilderGame'));
const ParagraphWritingGame = lazy(() => import('./components/academic/turkish/grade2/writing/ParagraphWritingGame'));

// Lazy load Grade 3
const MetaphorGame = lazy(() => import('./components/academic/turkish/grade3/expressions/MetaphorGame'));
const SuffixGame = lazy(() => import('./components/academic/turkish/grade3/grammar/SuffixGame'));

// Lazy load Grade 4
const StoryWritingGame = lazy(() => import('./components/academic/turkish/grade4/composition/StoryWritingGame'));

// Lazy load Grade 5
const GenreGame = lazy(() => import('./components/academic/turkish/grade5/literature/GenreGame'));

// Lazy load Grade 6
const TextAnalysisGame = lazy(() => import('./components/academic/turkish/grade6/analysis/TextAnalysisGame'));

// Lazy load Grade 7
const FiguresOfSpeechGame = lazy(() => import('./components/academic/turkish/grade7/rhetoric/FiguresOfSpeechGame'));

// Lazy load Grade 8
const EssayWritingGame = lazy(() => import('./components/academic/turkish/grade8/composition/EssayWritingGame'));

// Lazy load Profile & Leaderboard
const ProfilePage = lazy(() => import('./features/profile/ProfilePage'));
const LeaderboardPage = lazy(() => import('./features/leaderboard/LeaderboardPage'));

// Lazy load Academic Components
const AcademicDashboard = lazy(() => import('./components/academic/AcademicDashboard'));
const MathMenu = lazy(() => import('./components/academic/math/MathMenu'));
const MathGrade1Menu = lazy(() => import('./components/academic/math/grade1/MathGrade1Menu'));
const MathGrade2Menu = lazy(() => import('./components/academic/math/grade2/MathGrade2Menu'));
const TurkishAcademicMenu = lazy(() => import('./components/academic/turkish/TurkishAcademicMenu'));
const TurkishGrade1Menu = lazy(() => import('./components/academic/turkish/grade1/TurkishGrade1Menu'));
const ScienceMenu = lazy(() => import('./components/academic/science/ScienceMenu'));
const LifeScienceMenu = lazy(() => import('./components/academic/life-science/LifeScienceMenu'));
const EnglishMenu = lazy(() => import('./components/academic/english/EnglishMenu'));
const EnglishGrade2Menu = lazy(() => import('./components/academic/english/grade2/EnglishGrade2Menu'));
const GermanMenu = lazy(() => import('./components/academic/german/GermanMenu'));
const SocialStudiesMenu = lazy(() => import('./components/academic/social-studies/SocialStudiesMenu'));
const ReligionMenu = lazy(() => import('./components/academic/religion/ReligionMenu'));
const MusicMenu = lazy(() => import('./components/academic/music/MusicMenu'));
const PhysicalEducationMenu = lazy(() => import('./components/academic/physical-education/PhysicalEducationMenu'));
const VisualArtsMenu = lazy(() => import('./components/academic/visual-arts/VisualArtsMenu'));
const HistoryMenu = lazy(() => import('./components/academic/history/HistoryMenu'));
const InformaticsMenu = lazy(() => import('./components/academic/informatics/InformaticsMenu'));

// Lazy load Math Grade Games
const FruitAdditionGame = lazy(() => import('./components/academic/math/grade1/basic/FruitAdditionGame'));
const FishAdditionGame = lazy(() => import('./components/academic/math/grade1/basic/FishAdditionGame'));
const SpaceAdditionGame = lazy(() => import('./components/academic/math/grade1/basic/SpaceAdditionGame'));
const BalloonPopGame = lazy(() => import('./components/academic/math/grade1/basic/BalloonPopGame'));
const CookieMonsterGame = lazy(() => import('./components/academic/math/grade1/basic/CookieMonsterGame'));
const BalloonCountGame = lazy(() => import('./components/academic/math/grade1/numbers/BalloonCountGame'));
const NumberTrainGame = lazy(() => import('./components/academic/math/grade1/numbers/NumberTrainGame'));
const NumberBuildingGame = lazy(() => import('./components/academic/math/grade1/numbers/NumberBuildingGame'));
const AppleCollectGame = lazy(() => import('./components/academic/math/grade1/numbers/AppleCollectGame'));
const ShapeHuntGame = lazy(() => import('./components/academic/math/grade1/geometry/ShapeHuntGame'));
const ShapePuzzleGame = lazy(() => import('./components/academic/math/grade1/geometry/ShapePuzzleGame'));
const ShadowMatchGame = lazy(() => import('./components/academic/math/grade1/geometry/ShadowMatchGame'));
const ShapeBuilderGame = lazy(() => import('./components/academic/math/grade1/geometry/ShapeBuilderGame'));
const LengthCompareGame = lazy(() => import('./components/academic/math/grade1/measurement/LengthCompareGame'));
const WeightCompareGame = lazy(() => import('./components/academic/math/grade1/measurement/WeightCompareGame'));
const ClockReadingGame = lazy(() => import('./components/academic/math/grade1/measurement/ClockReadingGame'));
const MoneyCountGame = lazy(() => import('./components/academic/math/grade1/measurement/MoneyCountGame'));

// Math Grade 2
const NumberHuntTo100Game = lazy(() => import('./components/academic/math/grade2/numbers/NumberHuntTo100Game'));
const PlaceValueGame = lazy(() => import('./components/academic/math/grade2/numbers/PlaceValueGame'));
const NumberLineJumpGame = lazy(() => import('./components/academic/math/grade2/numbers/NumberLineJumpGame'));
const MarketBasketGame = lazy(() => import('./components/academic/math/grade2/addition/MarketBasketGame'));
const TwoDigitAdditionGame = lazy(() => import('./components/academic/math/grade2/addition/TwoDigitAdditionGame'));
const MissingNumberGame = lazy(() => import('./components/academic/math/grade2/addition/MissingNumberGame'));
const ChangeCalculatorGame = lazy(() => import('./components/academic/math/grade2/subtraction/ChangeCalculatorGame'));
const TwoDigitSubtractionGame = lazy(() => import('./components/academic/math/grade2/subtraction/TwoDigitSubtractionGame'));
const CompareSubtractionGame = lazy(() => import('./components/academic/math/grade2/subtraction/CompareSubtractionGame'));
const ShapeCountGame = lazy(() => import('./components/academic/math/grade2/geometry/ShapeCountGame'));
const SymmetryGame = lazy(() => import('./components/academic/math/grade2/geometry/SymmetryGame'));

// English Grade 2
const ColorMatchGame = lazy(() => import('./components/academic/english/grade2/vocabulary/ColorMatchGame'));

// Lazy load Legacy App
const LegacyApp = lazy(() => import('./App'));

// ─── Route Guard ─────────────────────────────────────────
function ProtectedRoute({ children, roles }: { children: React.ReactNode; roles?: string[] }) {
    const { isAuthenticated, user, isLoading } = useAuthStore();

    if (isLoading) {
        return <LoadingFallback />;
    }

    if (!isAuthenticated) return <Navigate to="/login" />;
    if (roles && user && !roles.includes(user.role)) return <Navigate to="/" />;
    return <Suspense fallback={<LoadingFallback />}>{children}</Suspense>;
}

// ─── Dashboard Router ────────────────────────────────────
function DashboardRouter() {
    const { user } = useAuthStore();
    if (!user) return <Navigate to="/login" />;

    switch (user.role) {
        case 'SUPER_ADMIN':
        case 'SCHOOL_ADMIN':
            return <AdminDashboard />;
        case 'TEACHER':
            return <TeacherDashboard />;
        case 'PARENT':
            return <ParentDashboard />;
        default:
            return <StudentDashboard />;
    }
}

// ─── Main Router ─────────────────────────────────────────
export default function AppRouter() {
    const { loadUser, isAuthenticated, isLoading } = useAuthStore();
    const [initialized, setInitialized] = useState(false);

    useEffect(() => {
        const init = async () => {
            try {
                await loadUser();
            } catch (error) {
                console.log('Load user failed, continuing without auth');
            } finally {
                setInitialized(true);
            }
        };
        init();
    }, [loadUser]);

    if (!initialized || isLoading) {
        return <LoadingFallback />;
    }

    return (
        <BrowserRouter>
            <Routes>
                {/* Public Routes */}
                <Route path="/login" element={isAuthenticated ? <Navigate to="/" /> : <LoginPage />} />
                <Route path="/register" element={isAuthenticated ? <Navigate to="/" /> : <RegisterPage />} />

                {/* Dashboard — auto redirect by role */}
                <Route path="/" element={<ProtectedRoute><DashboardRouter /></ProtectedRoute>} />

                {/* Student Routes */}
                <Route path="/student" element={<ProtectedRoute><StudentDashboard /></ProtectedRoute>} />

                {/* Teacher Routes */}
                <Route path="/teacher" element={<ProtectedRoute roles={['TEACHER', 'SCHOOL_ADMIN', 'SUPER_ADMIN']}><TeacherDashboard /></ProtectedRoute>} />
                <Route path="/teacher/*" element={<ProtectedRoute roles={['TEACHER', 'SCHOOL_ADMIN', 'SUPER_ADMIN']}><TeacherDashboard /></ProtectedRoute>} />

                {/* Admin Routes */}
                <Route path="/admin" element={<ProtectedRoute roles={['SCHOOL_ADMIN', 'SUPER_ADMIN']}><AdminDashboard /></ProtectedRoute>} />
                <Route path="/admin/*" element={<ProtectedRoute roles={['SCHOOL_ADMIN', 'SUPER_ADMIN']}><AdminDashboard /></ProtectedRoute>} />

                {/* Parent Routes */}
                <Route path="/parent" element={<ProtectedRoute roles={['PARENT']}><ParentDashboard /></ProtectedRoute>} />
                <Route path="/parent/*" element={<ProtectedRoute roles={['PARENT']}><ParentDashboard /></ProtectedRoute>} />

                {/* Lessons */}
                <Route path="/lessons/math" element={<ProtectedRoute><MathLessonsMenu /></ProtectedRoute>} />
                <Route path="/lessons/turkish" element={<ProtectedRoute><TurkishLessonsMenu /></ProtectedRoute>} />
                
                {/* Turkish Games */}
                <Route path="/turkish" element={<ProtectedRoute><TurkishMenu /></ProtectedRoute>} />
                <Route path="/turkish/grade/:grade" element={<ProtectedRoute><TurkishGradeMenu /></ProtectedRoute>} />
                
                {/* Grade 1 */}
                <Route path="/turkish/grade1/letters/match" element={<ProtectedRoute><LetterMatchGame /></ProtectedRoute>} />
                <Route path="/turkish/grade1/letters/vowel-consonant" element={<ProtectedRoute><VowelConsonantGame /></ProtectedRoute>} />
                <Route path="/turkish/grade1/letters/recognition" element={<ProtectedRoute><LetterRecognitionGame /></ProtectedRoute>} />
                <Route path="/turkish/grade1/letters/uppercase-lowercase" element={<ProtectedRoute><UppercaseLowercaseGame /></ProtectedRoute>} />
                <Route path="/turkish/grade1/syllables/builder" element={<ProtectedRoute><SyllableBuilderGame /></ProtectedRoute>} />
                <Route path="/turkish/grade1/syllables/separation" element={<ProtectedRoute><SyllableSeparationGame /></ProtectedRoute>} />
                <Route path="/turkish/grade1/words/syllable-count" element={<ProtectedRoute><SyllableCountGame /></ProtectedRoute>} />
                <Route path="/turkish/grade1/reading/word-making" element={<ProtectedRoute><WordMakingGame /></ProtectedRoute>} />
                <Route path="/turkish/grade1/reading/story-comprehension" element={<ProtectedRoute><StoryComprehensionGame /></ProtectedRoute>} />
                
                {/* Grade 2 */}
                <Route path="/turkish/grade2/reading/comprehension" element={<ProtectedRoute><ReadingComprehensionGame /></ProtectedRoute>} />
                <Route path="/turkish/grade2/reading/punctuation" element={<ProtectedRoute><PunctuationGame /></ProtectedRoute>} />
                <Route path="/turkish/grade2/writing/sentence-builder" element={<ProtectedRoute><SentenceBuilderGame /></ProtectedRoute>} />
                <Route path="/turkish/grade2/writing/paragraph" element={<ProtectedRoute><ParagraphWritingGame /></ProtectedRoute>} />
                
                {/* Grade 3 */}
                <Route path="/turkish/grade3/expressions/metaphor" element={<ProtectedRoute><MetaphorGame /></ProtectedRoute>} />
                <Route path="/turkish/grade3/grammar/suffix" element={<ProtectedRoute><SuffixGame /></ProtectedRoute>} />
                
                {/* Grade 4 */}
                <Route path="/turkish/grade4/composition/story-writing" element={<ProtectedRoute><StoryWritingGame /></ProtectedRoute>} />
                
                {/* Grade 5 */}
                <Route path="/turkish/grade5/literature/genre" element={<ProtectedRoute><GenreGame /></ProtectedRoute>} />
                
                {/* Grade 6 */}
                <Route path="/turkish/grade6/analysis/text-analysis" element={<ProtectedRoute><TextAnalysisGame /></ProtectedRoute>} />
                
                {/* Grade 7 */}
                <Route path="/turkish/grade7/rhetoric/figures-of-speech" element={<ProtectedRoute><FiguresOfSpeechGame /></ProtectedRoute>} />
                
                {/* Grade 8 */}
                <Route path="/turkish/grade8/composition/essay-writing" element={<ProtectedRoute><EssayWritingGame /></ProtectedRoute>} />
                
                {/* Games — NEW Game Browser */}
                <Route path="/games" element={<ProtectedRoute><GameBrowser /></ProtectedRoute>} />
                <Route path="/play/:gameId" element={<ProtectedRoute><GamePlayer /></ProtectedRoute>} />
                <Route path="/play-new/:gameId" element={<ProtectedRoute><GamePlayerNew /></ProtectedRoute>} />
                
                {/* Profile & Leaderboard — NEW */}
                <Route path="/profile" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
                <Route path="/profile/:userId" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
                <Route path="/leaderboard" element={<ProtectedRoute><LeaderboardPage /></ProtectedRoute>} />
                <Route path="/leaderboard/:gameId" element={<ProtectedRoute><LeaderboardPage /></ProtectedRoute>} />
                
                {/* Academic Routes */}
                <Route path="/academic" element={<ProtectedRoute><AcademicDashboard /></ProtectedRoute>} />
                
                {/* Math Academic */}
                <Route path="/academic/math" element={<ProtectedRoute><MathMenu /></ProtectedRoute>} />
                <Route path="/academic/math/grade1" element={<ProtectedRoute><MathGrade1Menu /></ProtectedRoute>} />
                <Route path="/academic/math/grade1/numbers/balloon-count" element={<ProtectedRoute><BalloonCountGame /></ProtectedRoute>} />
                <Route path="/academic/math/grade1/numbers/number-train" element={<ProtectedRoute><NumberTrainGame /></ProtectedRoute>} />
                <Route path="/academic/math/grade1/numbers/number-building" element={<ProtectedRoute><NumberBuildingGame /></ProtectedRoute>} />
                <Route path="/academic/math/grade1/numbers/apple-collect" element={<ProtectedRoute><AppleCollectGame /></ProtectedRoute>} />
                <Route path="/academic/math/grade1/basic/fruit-addition" element={<ProtectedRoute><FruitAdditionGame /></ProtectedRoute>} />
                <Route path="/academic/math/grade1/basic/fish-addition" element={<ProtectedRoute><FishAdditionGame /></ProtectedRoute>} />
                <Route path="/academic/math/grade1/basic/space-addition" element={<ProtectedRoute><SpaceAdditionGame /></ProtectedRoute>} />
                <Route path="/academic/math/grade1/basic/balloon-pop" element={<ProtectedRoute><BalloonPopGame /></ProtectedRoute>} />
                <Route path="/academic/math/grade1/basic/cookie-monster" element={<ProtectedRoute><CookieMonsterGame /></ProtectedRoute>} />
                <Route path="/academic/math/grade1/geometry/shape-hunt" element={<ProtectedRoute><ShapeHuntGame /></ProtectedRoute>} />
                <Route path="/academic/math/grade1/geometry/shape-puzzle" element={<ProtectedRoute><ShapePuzzleGame /></ProtectedRoute>} />
                <Route path="/academic/math/grade1/geometry/shadow-match" element={<ProtectedRoute><ShadowMatchGame /></ProtectedRoute>} />
                <Route path="/academic/math/grade1/geometry/shape-builder" element={<ProtectedRoute><ShapeBuilderGame /></ProtectedRoute>} />
                <Route path="/academic/math/grade1/measurement/length-compare" element={<ProtectedRoute><LengthCompareGame /></ProtectedRoute>} />
                <Route path="/academic/math/grade1/measurement/weight-compare" element={<ProtectedRoute><WeightCompareGame /></ProtectedRoute>} />
                <Route path="/academic/math/grade1/measurement/clock-reading" element={<ProtectedRoute><ClockReadingGame /></ProtectedRoute>} />
                <Route path="/academic/math/grade1/measurement/money-count" element={<ProtectedRoute><MoneyCountGame /></ProtectedRoute>} />
                
                <Route path="/academic/math/grade2" element={<ProtectedRoute><MathGrade2Menu /></ProtectedRoute>} />
                <Route path="/academic/math/grade2/numbers/number-hunt" element={<ProtectedRoute><NumberHuntTo100Game /></ProtectedRoute>} />
                <Route path="/academic/math/grade2/numbers/place-value" element={<ProtectedRoute><PlaceValueGame /></ProtectedRoute>} />
                <Route path="/academic/math/grade2/numbers/number-line-jump" element={<ProtectedRoute><NumberLineJumpGame /></ProtectedRoute>} />
                <Route path="/academic/math/grade2/addition/market-basket" element={<ProtectedRoute><MarketBasketGame /></ProtectedRoute>} />
                <Route path="/academic/math/grade2/addition/two-digit" element={<ProtectedRoute><TwoDigitAdditionGame /></ProtectedRoute>} />
                <Route path="/academic/math/grade2/addition/missing-number" element={<ProtectedRoute><MissingNumberGame /></ProtectedRoute>} />
                <Route path="/academic/math/grade2/subtraction/change-calculator" element={<ProtectedRoute><ChangeCalculatorGame /></ProtectedRoute>} />
                <Route path="/academic/math/grade2/subtraction/two-digit" element={<ProtectedRoute><TwoDigitSubtractionGame /></ProtectedRoute>} />
                <Route path="/academic/math/grade2/subtraction/compare" element={<ProtectedRoute><CompareSubtractionGame /></ProtectedRoute>} />
                <Route path="/academic/math/grade2/geometry/shape-count" element={<ProtectedRoute><ShapeCountGame /></ProtectedRoute>} />
                <Route path="/academic/math/grade2/geometry/symmetry" element={<ProtectedRoute><SymmetryGame /></ProtectedRoute>} />
                
                {/* Turkish Academic */}
                <Route path="/academic/turkish" element={<ProtectedRoute><TurkishAcademicMenu /></ProtectedRoute>} />
                <Route path="/academic/turkish/grade1" element={<ProtectedRoute><TurkishGrade1Menu /></ProtectedRoute>} />
                
                {/* Other Subjects */}
                <Route path="/academic/science" element={<ProtectedRoute><ScienceMenu /></ProtectedRoute>} />
                <Route path="/academic/life-science" element={<ProtectedRoute><LifeScienceMenu /></ProtectedRoute>} />
                <Route path="/academic/english" element={<ProtectedRoute><EnglishMenu /></ProtectedRoute>} />
                <Route path="/academic/english/grade2" element={<ProtectedRoute><EnglishGrade2Menu /></ProtectedRoute>} />
                <Route path="/english/grade2/vocabulary/color-match" element={<ProtectedRoute><ColorMatchGame /></ProtectedRoute>} />
                <Route path="/academic/german" element={<ProtectedRoute><GermanMenu /></ProtectedRoute>} />
                <Route path="/academic/social-studies" element={<ProtectedRoute><SocialStudiesMenu /></ProtectedRoute>} />
                <Route path="/academic/religion" element={<ProtectedRoute><ReligionMenu /></ProtectedRoute>} />
                <Route path="/academic/music" element={<ProtectedRoute><MusicMenu /></ProtectedRoute>} />
                <Route path="/academic/physical-education" element={<ProtectedRoute><PhysicalEducationMenu /></ProtectedRoute>} />
                <Route path="/academic/visual-arts" element={<ProtectedRoute><VisualArtsMenu /></ProtectedRoute>} />
                <Route path="/academic/history" element={<ProtectedRoute><HistoryMenu /></ProtectedRoute>} />
                <Route path="/academic/informatics" element={<ProtectedRoute><InformaticsMenu /></ProtectedRoute>} />
                
                {/* Legacy Games (old structure) */}
                <Route path="/legacy" element={<ProtectedRoute><LegacyApp /></ProtectedRoute>} />
                <Route path="/legacy/*" element={<ProtectedRoute><LegacyApp /></ProtectedRoute>} />

                {/* Catch all */}
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </BrowserRouter>
    );
}
