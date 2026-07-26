import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="relative z-50 w-full bg-black backdrop-blur-md border-b border-white/5 px-4 md:px-8 py-3 md:py-2">

        {/* Logo - Låst längst ut i vänstra hörnet av navbaren */}
        <div className="absolute left-4 sm:left-6 md:left-5 top-1/2 -translate-y-1/2 flex items-center">
        <Link to="/" onClick={() => setIsOpen(false)}>
        <img
        src="/images/group2.png"
        alt="ADAMH Logo"
        className="h-8 md:h-8 w-auto hover:opacity-80 transition-opacity"
        />
        </Link>
        </div>

        {/* Centrerad behållare för navigeringslänkarna på skrivbord */}
        <div className="max-w-6xl mx-auto flex items-center justify-center relative min-h-[36px] md:min-h-[32px]">

        {/* Desktop Navigation Links - Centrerade */}
        <div className="hidden md:flex gap-6 text-medium font-medium items-center">
        <Link to="/" className="text-gray-200 hover:text-teal-400 transition-colors">Home</Link>
        <Link to="/about" className="text-gray-200 hover:text-teal-400 transition-colors">About</Link>
        <Link to="/projects" className="text-gray-200 hover:text-teal-400 transition-colors">Projects</Link>
        <Link
        to="/contact"
        className="border border-teal-500/40 text-teal-400 px-3 py-2 rounded-lg hover:bg-teal-500/10 hover:border-teal-500/60 transition-all font-medium"
        >
        Contact
        </Link>
        </div>

        {/* Hamburger Menu Button - Visas endast på mobil (Låst till höger) */}
        <button
        onClick={toggleMenu}
        className="md:hidden absolute right-0 top-1/2 -translate-y-1/2 p-1.5 rounded-lg text-white focus:outline-none"
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
            <path d="M3 12h18" />
            <path d="M3 6h18" />
            <path d="M3 18h18" />
            </>
        )}
        </svg>
        </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
        className={`md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-2xl border-b border-teal-500/20 shadow-2xl transition-all duration-300 ease-in-out z-50 ${
            isOpen
            ? 'max-h-80 opacity-100 py-4 px-6 pointer-events-auto'
            : 'max-h-0 opacity-0 py-0 px-6 overflow-hidden pointer-events-none'
        }`}
        >
        <div className="flex flex-col items-center space-y-2 text-base font-medium">
        <Link
        to="/"
        className="w-full text-gray-200 hover:text-teal-400 hover:bg-white/5 px-4 py-2 rounded-xl transition-all text-center"
        onClick={() => setIsOpen(false)}
        >
        Home
        </Link>
        <Link
        to="/about"
        className="w-full text-gray-200 hover:text-teal-400 hover:bg-white/5 px-4 py-2 rounded-xl transition-all text-center"
        onClick={() => setIsOpen(false)}
        >
        About
        </Link>
        <Link
        to="/projects"
        className="w-full text-gray-200 hover:text-teal-400 hover:bg-white/5 px-4 py-2 rounded-xl transition-all text-center"
        onClick={() => setIsOpen(false)}
        >
        Projects
        </Link>

        {/* Contact-knappen är nu self-center med anpassad ram som bara omsluter texten */}
        <Link
        to="/contact"
        className="self-center border border-teal-500/40 text-teal-300 bg-teal-500/10 hover:bg-teal-500/20 px-3 py-2 rounded-lg transition-all text-center font-medium mt-1"
        onClick={() => setIsOpen(false)}
        >
        Contact
        </Link>
        </div>
        </div>
        </nav>
    );
};

export default Navbar;
