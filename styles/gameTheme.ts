// Merkezi Oyun Tasarım Sistemi
// Tüm oyunlarda kullanılacak tutarlı tasarım değişkenleri
// Standart: Koyu lacivert arka plan + oyun kutusu renkleri

export const gameTheme = {
  // Ana Arka Plan (Sabit - Tüm Oyunlarda Aynı)
  background: 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900',

  // Dış Kart (Sabit - Tüm Oyunlarda Aynı)
  outerCard: 'bg-slate-800/80 backdrop-blur-xl rounded-3xl border border-slate-700',

  // Çıkış Butonu (Sabit - Tüm Oyunlarda Aynı)
  exitButton: 'bg-red-600/90 hover:bg-red-500/90',

  // Header Elemanları (Sabit - Tüm Oyunlarda Aynı)
  header: {
    container: 'bg-slate-800/80 backdrop-blur-md rounded-xl border border-slate-700',
    text: 'text-white font-black',
  },

  // Metin Renkleri
  text: {
    primary: 'text-white',
    secondary: 'text-slate-400',
    heading: 'text-white',
  },

  // Feedback Renkleri (Sabit)
  feedback: {
    correct: 'bg-green-500/90 border-2 border-green-300 text-white',
    incorrect: 'bg-red-500/90 border-2 border-red-300 text-white',
  },

  // Animasyonlar
  animations: {
    hover: 'transition-all transform hover:scale-105',
  },
};

// Oyun Renk Şemaları (Her oyun kendi rengini kullanır)
export const colorSchemes = {
  green: {
    innerCard: 'bg-gradient-to-br from-green-500 via-emerald-500 to-green-600',
    button: 'bg-green-500 hover:bg-green-400',
    box: 'bg-green-700/40 border-2 border-green-400',
  },
  blue: {
    innerCard: 'bg-gradient-to-br from-blue-500 via-cyan-500 to-blue-600',
    button: 'bg-blue-500 hover:bg-blue-400',
    box: 'bg-blue-700/40 border-2 border-blue-400',
  },
  purple: {
    innerCard: 'bg-gradient-to-br from-purple-500 via-violet-500 to-purple-600',
    button: 'bg-purple-500 hover:bg-purple-400',
    box: 'bg-purple-700/40 border-2 border-purple-400',
  },
  pink: {
    innerCard: 'bg-gradient-to-br from-pink-500 via-rose-500 to-pink-600',
    button: 'bg-pink-500 hover:bg-pink-400',
    box: 'bg-pink-700/40 border-2 border-pink-400',
  },
  orange: {
    innerCard: 'bg-gradient-to-br from-orange-500 via-amber-500 to-orange-600',
    button: 'bg-orange-500 hover:bg-orange-400',
    box: 'bg-orange-700/40 border-2 border-orange-400',
  },
  yellow: {
    innerCard: 'bg-gradient-to-br from-yellow-500 via-amber-500 to-yellow-600',
    button: 'bg-yellow-500 hover:bg-yellow-400',
    box: 'bg-yellow-700/40 border-2 border-yellow-400',
  },
  red: {
    innerCard: 'bg-gradient-to-br from-red-500 via-rose-500 to-red-600',
    button: 'bg-red-500 hover:bg-red-400',
    box: 'bg-red-700/40 border-2 border-red-400',
  },
  cyan: {
    innerCard: 'bg-gradient-to-br from-cyan-500 via-teal-500 to-cyan-600',
    button: 'bg-cyan-500 hover:bg-cyan-400',
    box: 'bg-cyan-700/40 border-2 border-cyan-400',
  },
  indigo: {
    innerCard: 'bg-gradient-to-br from-indigo-500 via-blue-500 to-indigo-600',
    button: 'bg-indigo-500 hover:bg-indigo-400',
    box: 'bg-indigo-700/40 border-2 border-indigo-400',
  },
};

// Yardımcı Fonksiyonlar
export const getColorScheme = (color: keyof typeof colorSchemes) => {
  return colorSchemes[color];
};

export const getFeedbackClasses = (isCorrect: boolean) => {
  return isCorrect ? gameTheme.feedback.correct : gameTheme.feedback.incorrect;
};
