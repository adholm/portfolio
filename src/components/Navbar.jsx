import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="flex items-center px-4 md:px-8 py-3 border-b border-white/10 relative">
            
            {/* Logo - always visible */}
            <div className="font-bold text-xl tracking-tighter">
                <Link to="/" className="hover:text-teal-400 transition-colors">ADAMH</Link>
            </div>

            {/* Spacer to push desktop links to center */}
            <div className="flex-1 hidden md:block"></div>

            {/* Desktop Navigation Links - hidden on mobile, centered */}
            <div className="hidden md:flex gap-6 text-sm font-medium items-center">
                <Link to="/" className="hover:text-teal-400 transition-colors">Home</Link>
                <Link to="/about" className="hover:text-teal-400 transition-colors">About</Link>
                <Link to="/projects" className="hover:text-teal-400 transition-colors">Projects</Link>
                <Link to="/contact" className="border border-teal-500/30 text-teal-400 px-4 py-2 rounded-lg hover:bg-teal-500/10 transition-all">
                    Contact
                </Link>
            </div>

            {/* Spacer to balance the logo on the left */}
            <div className="flex-1 hidden md:block"></div>

            {/* Hamburger Menu Button - visible only on mobile */}
            <button
                onClick={toggleMenu}
                className="md:hidden ml-auto p-2 rounded-lg hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500/50"
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
                    className="text-white"
                >
                    {isOpen ? (
                        <>
                            {/* Close icon (X) */}
                            <path d="M18 6 6 18" />
                            <path d="M6 6 18 18" />
                        </>
                    ) : (
                        <>
                            {/* Hamburger icon (3 lines) */}
                            <path d="M3 12h18" />
                            <path d="M3 6h18" />
                            <path d="M3 18h18" />
                        </>
                    )}
                </svg>
            </button>

            {/* Mobile Dropdown Menu - slides down when open */}
            <div
                className={`md:hidden absolute top-full left-0 right-0 bg-black/90 backdrop-blur-xl border-b border-white/10 transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
            >
                <div className="flex flex-col items-center py-4 space-y-3">
                    <Link
                        to="/"
                        className="text-sm font-medium hover:text-teal-400 transition-colors px-4 py-2"
                        onClick={() => setIsOpen(false)}
                    >
                        Home
                    </Link>
                    <Link
                        to="/about"
                        className="text-sm font-medium hover:text-teal-400 transition-colors px-4 py-2"
                        onClick={() => setIsOpen(false)}
                    >
                        About
                    </Link>
                    <Link
                        to="/projects"
                        className="text-sm font-medium hover:text-teal-400 transition-colors px-4 py-2"
                        onClick={() => setIsOpen(false)}
                    >
                        Projects
                    </Link>
                    <Link
                        to="/contact"
                        className="border border-teal-500/30 text-teal-400 px-4 py-2 rounded-lg hover:bg-teal-500/10 transition-all mt-2"
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
