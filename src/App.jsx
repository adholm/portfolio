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
    <div
    className="flex flex-col min-h-screen text-white bg-cover bg-center bg-fixed bg-no-repeat"
    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1651497111372-9107c1a5d9a0')" }}
    >
    <Navbar />

    <main className="flex-grow flex flex-col">
    <Routes>
    {/* HEM-SIDAN: Perfekt centrerad Hero på mobil med 75vh höjd för synlig bakgrund */}
    <Route path="/" element={
      <div className="flex-1 flex flex-col justify-between w-full pt-16 md:pt-0">

      {/* Övre zon: Tvingar fram 75% av skärmhöjden på mobil så bakgrunden syns ordentligt */}
      <div className="flex-1 flex items-center justify-center min-h-[75vh] md:min-h-0 my-auto">
      <Hero />
      </div>

      {/* Nedre zon: Skjuts ner under "first fold" på mobil, dockad mot botten på desktop */}
      <Projects />
      </div>
    } />

    {/* PROJEKT-SIDA */}
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
