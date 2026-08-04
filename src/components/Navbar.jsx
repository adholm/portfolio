import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="relative z-50 w-full bg-black/50 backdrop-blur-xl border-b border-white/5 px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 shadow-lg shadow-black/40">

        {/* Logo */}
        <div className="absolute left-4 sm:left-6 md:left-8 top-1/2 -translate-y-1/2 flex items-center z-20">
        <Link to="/" onClick={() => setIsOpen(false)} className="inline-flex items-center">
        <img
        src="/images/ADAMHclean.svg"
        alt="Logo"
        className="h-4 sm:h-4 w-auto opacity-90 hover:opacity-100 transition-all duration-200 ease-out hover:drop-shadow-[0_0_12px_rgba(45,212,191,0.85)] hover:brightness-110 hover:scale-[1.04] active:scale-95"
        />
        </Link>
        </div>

        {/* Centrerad behållare för navigeringslänkarna */}
        <div className="max-w-6xl mx-auto flex items-center justify-center relative min-h-[32px] sm:min-h-[36px]">

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex gap-8 text-base font-medium items-center">
        <Link to="/" className="text-white hover:text-teal-400 transition-colors">Home</Link>
        <Link to="/about" className="text-white hover:text-teal-400 transition-colors">About</Link>
        <Link to="/projects" className="text-white hover:text-teal-400 transition-colors">Projects</Link>

        {/* Desktop Contact-knapp */}
        <Link
        to="/contact"
        className="bg-teal-500/10 backdrop-blur-md border border-teal-500/30 text-teal-300 px-2.5 py-1.5 rounded-lg hover:bg-teal-500/20 hover:border-teal-400/60 hover:text-teal-200 hover:shadow-[0_0_15px_rgba(20,184,166,0.25)] hover:-translate-y-0.5 active:scale-95 transition-all duration-300 text-base font-medium shadow-sm"
        >
        Contact
        </Link>
        </div>

        {/* Hamburgarknapp (Mobil) */}
        <button
        onClick={toggleMenu}
        className={`md:hidden absolute right-0 top-1/2 -translate-y-1/2 p-1.5 sm:p-2 rounded-xl text-white hover:text-teal-300 bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-300 focus:outline-none z-20 active:scale-95 ${
            isOpen ? 'bg-teal-500/10 border-teal-500/40 text-teal-300 shadow-[0_0_12px_rgba(20,184,166,0.2)]' : ''
        }`}
        aria-label="Toggle menu"
        aria-expanded={isOpen}
        >
        <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        >
        {isOpen ? (
            <>
            <path d="M18 6 6 18" />
            <path d="M6 6 18 18" />
            </>
        ) : (
            <>
            <path d="M4 7h16" />
            <path d="M4 12h16" />
            <path d="M4 17h16" />
            </>
        )}
        </svg>
        </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
        className={`md:hidden absolute top-full left-4 right-4 mt-2.5 bg-black/95 backdrop-blur-3xl border border-white/10 rounded-2xl shadow-2xl shadow-black/90 transition-all duration-300 ease-in-out z-50 overflow-hidden ${
            isOpen
            ? 'max-h-96 opacity-100 py-4 px-3 translate-y-0 pointer-events-auto'
            : 'max-h-0 opacity-0 py-0 px-3 -translate-y-2 pointer-events-none border-transparent'
        }`}
        >
        <div className="flex flex-col items-center space-y-1.5 text-base font-medium">
        <Link
        to="/"
        className="w-full text-white hover:text-teal-400 hover:bg-white/5 px-4 py-3 rounded-xl transition-all text-center active:scale-[0.98]"
        onClick={() => setIsOpen(false)}
        >
        Home
        </Link>

        <Link
        to="/about"
        className="w-full text-white hover:text-teal-400 hover:bg-white/5 px-4 py-3 rounded-xl transition-all text-center active:scale-[0.98]"
        onClick={() => setIsOpen(false)}
        >
        About
        </Link>

        <Link
        to="/projects"
        className="w-full text-white hover:text-teal-400 hover:bg-white/5 px-4 py-3 rounded-xl transition-all text-center active:scale-[0.98]"
        onClick={() => setIsOpen(false)}
        >
        Projects
        </Link>

        {/* Mobile Contact-knapp med anpassad bredd */}
        <div className="w-full flex justify-center pt-1">
        <Link
        to="/contact"
        className="bg-teal-500/10 border border-teal-500/30 text-teal-300 px-8 py-2.5 rounded-xl hover:bg-teal-500/20 hover:border-teal-400/50 hover:text-teal-200 active:scale-[0.95] transition-all text-center font-medium shadow-sm"
        onClick={() => setIsOpen(false)}
        >
        Contact
        </Link>
        </div>
        </div>
        </div>
        </nav>
    );
};

export default Navbar;
