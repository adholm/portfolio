import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="flex items-center px-8 py-3 border-b border-white/10">
            
            {/* Vänster sida: Logga */}
            <div className="font-bold text-xl tracking-tighter flex-1">
                ADAMH
            </div>

            {/* Mitten: Centrerade navigeringslänkar med hover-effekter */}
            <div className="flex gap-6 text-sm font-medium items-center">
                <Link to="/" className="hover:text-teal-400 transition-colors">Home</Link>
                <Link to="/about" className="hover:text-teal-400 transition-colors">About</Link>
                <Link to="/projects" className="hover:text-teal-400 transition-colors">Projects</Link>
                <Link to="/contact" className="border border-teal-500/30 text-teal-400 px-4 py-2 rounded-lg hover:bg-teal-500/10 transition-all">
                    Contact
                </Link>
            </div>

            {/* Höger sida: "Spöket" som tvingar mitten att bli sann mittpunkt */}
            <div className="flex-1"></div>

        </nav>
    );
};

export default Navbar;