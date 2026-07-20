import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import ProjectsPage from "./pages/ProjectsPage";
import Contact from "./pages/Contact"; // Kontrollera att denna fil finns i src/pages/Contact.jsx
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-black text-white">
        
        <Navbar />

        <main className="flex-grow flex flex-col">
          <Routes>
            {/* HEM-SIDAN: Kombinerar Hero och din Recent Projects-sektion */}
            <Route path="/" element={
              <>
                <Hero />
                <Projects />
              </>
            } />

            {/* SEPARAT PROJEKT-SIDA */}
            <Route path="/projects" element={<ProjectsPage />} />
            
            {/* KONTAKT-SIDAN */}
            <Route path="/contact" element={<Contact />} />
            {/* ABOUT-SIDA */}
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>

        <Footer />

      </div>
    </Router>
  );
}

export default App;
