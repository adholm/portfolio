import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import ProjectsPage from "./pages/ProjectsPage";
import Contact from "./pages/Contact";
import AboutPage from "./pages/AboutPage";
import ProjectDetail from "./pages/ProjectDetail";

// Hjälpkomponent för att återställa scrollposition vid sidbyte
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function AppContent() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="relative flex flex-col min-h-screen text-white bg-slate-950">

    {/* Återställer scrollpositionen till toppen vid navigering */}
    <ScrollToTop />

    {/* FIXERAD BAKGRUND (Står stilla för bra prestanda och täckning) */}
    <div
    className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat pointer-events-none"
    style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1651497111372-9107c1a5d9a0')",
    }}
    />

    {/* HUVUDGLÖD (Bredare oval som täcker Hero + övre delen av projekten) */}
    <div className="fixed top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[1200px] h-[400px] sm:h-[600px] bg-cyan-500/25 rounded-[100%] blur-[140px] pointer-events-none z-0 animate-glow-slow" />

    {/* SEKUNDÄR GLÖD (Nere till höger för att balansera hela skärmytan) */}
    <div className="fixed -bottom-20 -right-20 w-[500px] sm:w-[800px] h-[500px] sm:h-[800px] bg-cyan-500/20 rounded-full blur-[160px] pointer-events-none z-0 animate-glow-delayed" />

    {/* INNEHÅLL */}
    <div className="relative z-10 flex flex-col min-h-screen">
    <Navbar />

    {/* Gemensam wrapper för innehåll + footer: Ger 100% sömlös blur på undersidor */}
    <div className={`flex-grow flex flex-col w-full ${!isHome ? 'backdrop-blur-sm' : ''}`}>
    <main className="flex-grow flex flex-col">
    <Routes>
    {/* HEM-SIDAN */}
    <Route path="/" element={
      <div className="flex-1 flex flex-col justify-between w-full gap-6 sm:gap-8 pt-4 pb-2">
      <div className="flex-1 flex items-center justify-center my-auto py-2 sm:py-4">
      <Hero />
      </div>
      <Projects />
      </div>
    } />

    {/* ÖVRIGA SIDOR */}
    <Route path="/projects" element={<ProjectsPage />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/projects/:id" element={<ProjectDetail />} />
    </Routes>
    </main>

    <Footer />
    </div>
    </div>
    </div>
  );
}

function App() {
  return (
    <Router>
    <AppContent />
    </Router>
  );
}

export default App;
