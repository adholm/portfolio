const Contact = () => {
    return (
        <section className="relative flex-1 flex items-center py-16 md:py-20 overflow-hidden">

        {/* Bakgrundsbild */}
        <div
        className="absolute inset-0 bg-cover bg-center scale-105 z-0"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1651497111372-9107c1a5d9a0')" }}
        ></div>

        {/* Ren oskärpa (blur) */}
        <div className="absolute inset-0 backdrop-blur-xl z-0"></div>

        {/* Innehållet */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

        {/* VÄNSTER SIDA: Text och de nya uppdaterade knapparna */}
        <div>
        <h1 className="text-4xl md:text-5xl font-bold mb-3 tracking-tighter text-white drop-shadow-lg">
        Let's connect!
        </h1>
        <p className="text-gray-300 leading-relaxed mb-8 text-base md:text-lg max-w-md drop-shadow-md font-medium">
        Whether you have a system to secure, an interface to design, or simply want to say hello (or hej) — let's start a conversation.
        </p>

        {/* Sociala Länkar - Nu stylade som moderna teal-knappar som matchar About */}
        <div className="flex gap-4 drop-shadow-md">

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

        {/* HÖGER SIDA: Kontaktformulär */}
        <div className="bg-black/20 backdrop-blur-2xl p-6 sm:p-8 md:p-10 rounded-2xl border border-white/10 shadow-2xl w-full">
        <form className="space-y-6">
        <div>
        <label htmlFor="name" className="block text-xs uppercase tracking-widest text-gray-300 mb-2 font-semibold">Name</label>
        <input type="text" id="name" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/50 transition-all" placeholder="Your Name" />
        </div>
        <div>
        <label htmlFor="email" className="block text-xs uppercase tracking-widest text-gray-300 mb-2 font-semibold">Email</label>
        <input type="email" id="email" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/50 transition-all" placeholder="you@example.com" />
        </div>
        <div>
        <label htmlFor="message" className="block text-xs uppercase tracking-widest text-gray-300 mb-2 font-semibold">Message</label>
        <textarea id="message" rows="5" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/50 transition-all resize-none" placeholder="How can we work together?"></textarea>
        </div>
        <button type="button" className="w-full bg-teal-500 text-slate-900 font-bold py-4 rounded-lg hover:bg-teal-400 hover:shadow-[0_0_20px_rgba(20,184,166,0.3)] transition-all duration-300 mt-4">
        Send Message
        </button>
        </form>
        </div>

        </div>
        </div>
        </section>
    );
};

export default Contact;
