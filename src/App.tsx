import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { QuizPage } from './pages/QuizPage';
import { BrowserPage } from './pages/BrowserPage';

function Header() {
  const location = useLocation();
  return (
    <header className="bg-white/80 backdrop-blur-sm border-b border-coral-100 sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src={`${import.meta.env.BASE_URL}characters/hoshi-reading2.png`} alt="" className="w-8 h-8 object-contain" />
          <span className="font-bold text-gray-800 text-lg">子育ての学校</span>
        </Link>
        <nav className="flex gap-1">
          <Link
            to="/quiz"
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              location.pathname === '/quiz'
                ? 'bg-coral-400 text-white'
                : 'text-gray-600 hover:bg-coral-50'
            }`}
          >
            診断
          </Link>
          <Link
            to="/browse"
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              location.pathname === '/browse'
                ? 'bg-coral-400 text-white'
                : 'text-gray-600 hover:bg-coral-50'
            }`}
          >
            講義一覧
          </Link>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-baby-pink text-gray-500 text-center py-6 px-4">
      <p className="text-sm">&copy; 2024 子育ての学校 おすすめ講義検索</p>
      <p className="text-xs mt-1 text-gray-400">全39講義の情報を基に診断・検索機能を提供しています</p>
    </footer>
  );
}

function AppContent() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/browse" element={<BrowserPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
}
