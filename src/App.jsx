import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import ProjectsPage from "./pages/ProjectsPage";
import Contact from "./pages/Contact";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <Router>
    <div className="relative flex flex-col min-h-screen text-white bg-slate-950">

    {/* FIXERAD BAKGRUND */}
    <div
    className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat pointer-events-none"
    style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1651497111372-9107c1a5d9a0')",
    }}
    />

    {/* INNEHÅLL */}
    <div className="relative z-10 flex flex-col min-h-screen">
    <Navbar />

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
    </Routes>
    </main>

    <Footer />
    </div>
    </div>
    </Router>
  );
}

export default App;
