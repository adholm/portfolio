import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="w-full relative flex flex-col items-center justify-center py-2 md:py-4">
        <div className="relative z-10 max-w-2xl mx-auto text-center px-4 flex flex-col items-center gap-4 sm:gap-5">

        {/* 1. Profilbild - Perfekt balanserad storlek */}
        <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-teal-500/30 to-emerald-500/30 rounded-full blur-lg opacity-40 group-hover:opacity-70 transition duration-500"></div>
        <img
        src="/images/pfp2.png"
        alt="Adam Holm"
        className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full object-cover border-2 border-white/20 shadow-2xl transition-transform duration-300 group-hover:scale-105"
        />
        </div>

        {/* 2. Textblock - Stram men modern typografi */}
        <div className="flex flex-col items-center gap-2">
        <h1 className="uppercase text-white text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight drop-shadow-lg leading-tight">
        Adam Holm
        </h1>

        <p className="text-sm sm:text-base font-medium text-gray-300 drop-shadow-md max-w-lg leading-relaxed px-2">
        Driven tech enthusiast with a passion for Linux, code, automation, UI/UX & cybersecurity. Based in Stockholm 🇸🇪
        </p>
        </div>

        {/* 3. Knapp - En "riktig" klickbar storlek */}
        <Link
        to="/about"
        className="mt-2 px-5 py-2 rounded-full bg-black/40 backdrop-blur-md border border-white/15 text-sm font-semibold text-gray-200 hover:text-teal-300 hover:border-teal-500/40 hover:bg-teal-500/10 transition-all duration-300 shadow-lg hover:shadow-[0_0_15px_rgba(20,184,166,0.2)]"
        >
        Read more about me
        </Link>

        </div>
        </section>
    );
};

export default Hero;
