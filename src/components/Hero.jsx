const Hero = () => {
    return (
        <section className="w-full relative flex flex-col items-center justify-center py-0">
        {/* Textinnehållet - Helt utan mörkläggningslager ovanpå */}
        <div className="relative z-10 max-w-6xl mx-auto text-center px-4">
        <h1 className="uppercase text-white text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter drop-shadow-lg">
        Adam Holm
        </h1>
        <p className="mt-2 text-sm md:text-base font-semibold text-gray-200 drop-shadow-md mx-auto leading-relaxed">
        Tech Specialist with a passion for Linux, code, UI/UX & Cybersecurity. Based in Stockholm 🇸🇪
        </p>
        </div>
        </section>
    );
};

export default Hero;
