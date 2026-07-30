import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="w-full relative flex flex-col items-center justify-center py-0">
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 flex flex-col items-center">

        {/* 1. Profilbild (Större på mobil, uppflyttad) */}
        <div className="relative mb-4 sm:mb-5 -mt-12 sm:mt-0 group">
        <div className="absolute -inset-1 bg-gradient-to-r from-teal-500/30 to-emerald-500/30 rounded-full blur-lg opacity-30 group-hover:opacity-60 transition duration-500"></div>
        <img
        src="/images/pfp.jpeg"
        alt="Adam Holm"
        className="relative w-40 h-40 sm:w-44 sm:h-44 md:w-48 md:h-48 rounded-full object-cover border-2 border-white/20 shadow-2xl transition-transform duration-300 group-hover:scale-105"
        />
        </div>

        {/* 2. Vertikalt centrerat textblock */}
        <div className="flex flex-col items-center">
        <h1 className="uppercase text-white text-5xl sm:text-6xl md:text-6xl font-extrabold tracking-tight drop-shadow-lg leading-none">
        Adam Holm
        </h1>

        <p className="mt-3 text-sm sm:text-base font-medium text-gray-300 drop-shadow-md max-w-lg">
        Tech enthusiast with a passion for Linux, code, automation, UI/UX & cybersecurity. Based in Stockholm 🇸🇪
        </p>
        </div>

        {/* 3. Nätt, transparent teal-knapp */}
        <Link
        to="/about"
        className="mt-4 px-2.5 py-1.5 rounded-full bg-transparent border border-teal-500/30 text-xs font-medium text-teal-300 hover:text-teal-200 hover:border-teal-400/70 hover:bg-teal-500/10 hover:shadow-[0_0_12px_rgba(20,184,166,0.2)] transition-all duration-300"
        >
        Read more about me
        </Link>

        </div>
        </section>
    );
};

export default Hero;
