const AboutPage = () => {
    return (
        /* Sektionens grundlayout */
        <section className="relative flex-1 w-full flex flex-col pt-8 pb-4 overflow-hidden">

        {/* Bakgrundsbild */}
        <div
        className="absolute inset-0 bg-cover bg-center scale-105 z-0"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1651497111372-9107c1a5d9a0')" }}
        ></div>

        {/* Ren oskärpa (blur) */}
        <div className="absolute inset-0 backdrop-blur-2xl z-0"></div>

        {/* Innehålls-container */}
        <div className="relative z-10 w-full max-w-4xl mx-auto px-6 flex-1 flex flex-col md:flex-row items-center justify-center gap-10 lg:gap-16 my-auto pb-16 md:pb-24">

        {/* VÄNSTER SIDA: Profilbild + Uppdaterade Sociala medier-knappar */}
        <div className="flex flex-col items-center gap-5 flex-shrink-0 animate-fade-in">

        {/* Cirkel-ram för profilbild */}
        <div className="w-44 h-44 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden border border-white/10 bg-black/30 backdrop-blur-md shadow-2xl">
        <img
        src="/images/pfp.jpeg"
        alt="Adam Holm"
        className="w-full h-full object-cover"
        />
        </div>

        {/* Sociala medier-knappar (Nu i form av transparenta teal-knappar) */}
        <div className="flex gap-4 drop-shadow-md mt-1">

        {/* Email */}
        <a
        href="mailto:holmadam@outlook.com"
        className="flex items-center justify-center w-11 h-11 bg-teal-500/10 border border-teal-500/20 rounded-xl text-teal-400 hover:bg-teal-500/20 hover:border-teal-500/40 hover:text-teal-300 hover:shadow-[0_0_15px_rgba(20,184,166,0.2)] transition-all duration-300"
        aria-label="Email"
        >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2"/>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
        </svg>
        </a>

        {/* LinkedIn */}
        <a
        href="https://linkedin.com/in/adholm"
        target="_blank"
        rel="noreferrer"
        className="flex items-center justify-center w-11 h-11 bg-teal-500/10 border border-teal-500/20 rounded-xl text-teal-400 hover:bg-teal-500/20 hover:border-teal-500/40 hover:text-teal-300 hover:shadow-[0_0_15px_rgba(20,184,166,0.2)] transition-all duration-300"
        aria-label="LinkedIn"
        >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect width="4" height="12" x="2" y="9"/>
        <circle cx="4" cy="4" r="2"/>
        </svg>
        </a>

        {/* GitHub */}
        <a
        href="https://github.com/adholm"
        target="_blank"
        rel="noreferrer"
        className="flex items-center justify-center w-11 h-11 bg-teal-500/10 border border-teal-500/20 rounded-xl text-teal-400 hover:bg-teal-500/20 hover:border-teal-500/40 hover:text-teal-300 hover:shadow-[0_0_15px_rgba(20,184,166,0.2)] transition-all duration-300"
        aria-label="GitHub"
        >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
        <path d="M9 18c-4.51 2-5-2-7-2"/>
        </svg>
        </a>

        </div>
        </div>

        {/* HÖGER SIDA: Textinnehåll med din exakta bio och lysande understrykning */}
        <div className="text-center md:text-left max-w-xl">
        <h1 className="text-3xl lg:text-4xl font-bold mb-4 tracking-tighter text-white drop-shadow-lg">
        Hi, I'm Adam.
        </h1>

        <p className="text-gray-300 text-sm sm:text-base leading-relaxed drop-shadow-md font-medium">
        I am a tech enthusiast and fresh graduate in Stockholm with a particular passion for Linux, code, automation, UI/UX design, and cybersecurity.
        <br /><br />
        At home I run my favorite Linux-distribution openSUSE Tumbleweed. My journey with Linux started when I was a teenager, and I have always enjoyed challenging myself with new knowledge, problem-solving and studying the underlying structure and logic of systems.
        <br /><br />
        At the moment I'm focused on improving this website and <span className="text-white font-semibold underline decoration-teal-400 decoration-2 underline-offset-4 drop-shadow-[0_0_6px_rgba(45,212,191,0.9)]">searching for my first challenge in tech</span> — but if I'm not doing that, I'm probably reading a book or swimming!
        </p>
        </div>

        </div>
        </section>
    );
};

export default AboutPage;
