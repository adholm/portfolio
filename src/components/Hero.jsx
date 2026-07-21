const Hero = () => {
    return (
        /* Den yttre behållaren tar hela bredden och har linjen i botten */
        <section className="min-h-[50vh] flex items-center justify-center w-full relative bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1651497111372-9107c1a5d9a0')" }}>
            {/* Current bg: https://images.unsplash.com/photo-1651497111372-9107c1a5d9a0 */}
            {/* Contender bg: https://images.unsplash.com/photo-1695376425475-1b6b561f8e4e */}
            {/* Contender bg2: https://images.unsplash.com/photo-1774308667027-3ce5c579a518 */}


            {/* Mörka bilden */}
            {/* <div className="absolute inset-0 bg-slate-950/60"></div> */}

            {/* Den inre behållaren centrerar och begränsar textens bredd */}
            <div className="relative z-10 max-w-6xl mx-auto py-20 md:py-40 text-center px-4">
                <h1 className="uppercase text-white text-4xl md:text-6xl font-bold tracking-tighter drop-shadow-lg">
                    Adam Holm
                </h1>
                <p className="mt-4 md:mt-1 text-base md:text-lg font-semibold text-gray-300 drop-shadow-md">
                    Tech Specialist with a passion for Linux, code, UI/UX & Cybersecurity. Based in Stockholm 🇸🇪
                </p>
            </div>

        </section>
    );
};

export default Hero;  
