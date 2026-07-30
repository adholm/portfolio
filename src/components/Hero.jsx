import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="w-full relative flex flex-col items-center justify-center py-0">
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 flex flex-col items-center">

        {/* 1. Något större profilbild */}
        <div className="relative mb-4 group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-500/30 to-emerald-500/30 rounded-full blur-md opacity-30 group-hover:opacity-60 transition duration-500"></div>
        <img
        src="/images/pfp.jpeg"
        alt="Adam Holm"
        className="relative w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full object-cover border-2 border-white/20 shadow-2xl transition-transform duration-300 group-hover:scale-105"
        />
        </div>

        {/* 2. Sammanhängande textblock: Namn + Beskrivning */}
        <div className="flex flex-col items-center">
        <h1 className="uppercase text-white text-4xl sm:text-5xl md:text-5xl font-bold tracking-tight drop-shadow-lg leading-none">
        Adam Holm
        </h1>

        {/* Tätt sammankopplad beskrivning med mt-1.5 och mjukare textfärg */}
        <p className="mt-2 text-sm sm:text-sm md:text-base font-medium text-gray-300 drop-shadow-md max-w-md leading-relaxed">
        Tech enthusiast with a passion for Linux, code, automation, UI/UX & cybersecurity. Based in Stockholm 🇸🇪
        </p>
        </div>

        {/* 3. Diskret & stilren "Read more"-textlänk */}
        <Link
        to="/about"
        className="group inline-flex items-center gap-1.5 mt-3 text-xs sm:text-xs font-medium text-gray-400 hover:text-teal-300 transition-colors duration-300"
        >
        <span className="border-b border-transparent group-hover:border-teal-400/50 pb-0.5 transition-all">
        Read more about me
        </span>
        <span className="text-teal-400/80 group-hover:translate-x-1 transition-transform duration-300">→</span>
        </Link>

        </div>
        </section>
    );
};

export default Hero;
