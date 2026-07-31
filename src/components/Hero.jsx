import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="w-full relative flex flex-col items-center justify-center py-3 sm:py-4 md:py-6">
        <div className="relative z-10 max-w-2xl mx-auto text-center px-4 flex flex-col items-center gap-2.5 sm:gap-3.5">

        {/* 1. Profilbild (Pyttelite större för både mobil och dator) */}
        <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-teal-500/30 to-emerald-500/30 rounded-full blur-lg opacity-30 group-hover:opacity-60 transition duration-500"></div>
        <img
        src="/images/pfp2.png"
        alt="Adam Holm"
        className="relative w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full object-cover border-2 border-white/20 shadow-2xl transition-transform duration-300 group-hover:scale-105"
        />
        </div>

        {/* 2. Vertikalt centrerat textblock */}
        <div className="flex flex-col items-center">
        <h1 className="uppercase text-white text-3xl sm:text-3xl md:text-4xl font-extrabold tracking-tight drop-shadow-lg leading-tight">
        Adam Holm
        </h1>

        <p className="mt-1.5 text-sm sm:text-sm font-medium text-gray-300 drop-shadow-md max-w-md leading-relaxed">
        Tech enthusiast with a passion for Linux, code, automation, UI/UX & cybersecurity. Based in Stockholm 🇸🇪
        </p>
        </div>

        {/* 3. Nätt, transparent teal-knapp */}
        <Link
        to="/about"
        className="mt-0.5 px-3 py-1 rounded-full bg-transparent border border-teal-500/30 text-xs font-medium text-teal-300 hover:text-teal-200 hover:border-teal-400/70 hover:bg-teal-500/10 hover:shadow-[0_0_12px_rgba(20,184,166,0.2)] transition-all duration-300"
        >
        Read more about me
        </Link>

        </div>
        </section>
    );
};

export default Hero;
