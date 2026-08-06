import { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMessage('');
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            const result = await response.json();
            if (response.ok && result.success) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setStatus('error');
                setErrorMessage(result.message || 'Något gick fel vid sändningen.');
            }
        } catch (error) {
            setStatus('error');
            setErrorMessage('Kunde inte ansluta till servern. Försök igen senare.');
        }
    };

    return (
        <section className="relative flex-1 w-full flex flex-col justify-center py-6 sm:py-8 md:py-12 overflow-hidden">
        {/* Utökad max-w till 5xl för ett ståtligare intryck på stora skärmar */}
        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8 flex-1 flex flex-col justify-center my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-14 items-center">

        {/* VÄNSTER SIDA: Text & Textknappar */}
        <div className="text-center lg:text-left max-w-lg mx-auto lg:mx-0">
        <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight drop-shadow-lg mb-3">
        Let's connect.
        </h1>
        <p className="text-gray-300 text-sm sm:text-base drop-shadow-md font-medium mb-6 leading-relaxed">
        Send me a message and I'll get back to you as soon as I can!
        </p>

        {/* Sociala knappar med ikon + text */}
        <div className="flex flex-wrap gap-3 justify-center lg:justify-start drop-shadow-md">
        <a
        href="mailto:adamholm@mailbox.org"
        className="flex items-center gap-2 px-4 py-2.5 bg-teal-500/10 border border-teal-500/20 rounded-xl text-teal-300 text-xs sm:text-sm font-semibold hover:bg-teal-500/20 hover:border-teal-400/50 hover:text-teal-200 hover:shadow-[0_0_15px_rgba(20,184,166,0.2)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
        aria-label="Email"
        >
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2"/>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
        </svg>
        <span>Email</span>
        </a>

        <a
        href="https://linkedin.com/in/adholm"
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-2 px-4 py-2.5 bg-teal-500/10 border border-teal-500/20 rounded-xl text-teal-300 text-xs sm:text-sm font-semibold hover:bg-teal-500/20 hover:border-teal-400/50 hover:text-teal-200 hover:shadow-[0_0_15px_rgba(20,184,166,0.2)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
        aria-label="LinkedIn"
        >
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect width="4" height="12" x="2" y="9"/>
        <circle cx="4" cy="4" r="2"/>
        </svg>
        <span>LinkedIn</span>
        </a>

        <a
        href="https://github.com/adholm"
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-2 px-4 py-2.5 bg-teal-500/10 border border-teal-500/20 rounded-xl text-teal-300 text-xs sm:text-sm font-semibold hover:bg-teal-500/20 hover:border-teal-400/50 hover:text-teal-200 hover:shadow-[0_0_15px_rgba(20,184,166,0.2)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
        aria-label="GitHub"
        >
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
        <path d="M9 18c-4.51 2-5-2-7-2"/>
        </svg>
        <span>GitHub</span>
        </a>
        </div>
        </div>

        {/* HÖGER SIDA: Större och mer luftigt formulärkort */}
        <div className="bg-black/40 backdrop-blur-xl p-6 sm:p-8 lg:p-9 rounded-2xl border border-white/15 shadow-2xl shadow-black/70 w-full">
        {status === 'success' && (
            <div className="mb-5 p-4 bg-teal-500/20 border border-teal-500/40 rounded-xl text-teal-300 text-sm font-medium">
            ✓ Message sent successfully! I'll get back to you as soon as possible.
            </div>
        )}
        {status === 'error' && (
            <div className="mb-5 p-4 bg-rose-500/20 border border-rose-500/40 rounded-xl text-rose-300 text-sm font-medium">
            ⚠ {errorMessage}
            </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
        <div>
        <label htmlFor="name" className="block text-xs uppercase tracking-wider text-gray-300 mb-1.5 font-semibold">
        Name
        </label>
        <input
        type="text"
        id="name"
        name="name"
        required
        value={formData.name}
        onChange={handleChange}
        className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-sm sm:text-base text-white placeholder-gray-400 focus:outline-none focus:border-teal-500/60 focus:ring-1 focus:ring-teal-500/60 transition-all"
        placeholder="Your Name"
        />
        </div>

        <div>
        <label htmlFor="email" className="block text-xs uppercase tracking-wider text-gray-300 mb-1.5 font-semibold">
        Email
        </label>
        <input
        type="email"
        id="email"
        name="email"
        required
        value={formData.email}
        onChange={handleChange}
        className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-sm sm:text-base text-white placeholder-gray-400 focus:outline-none focus:border-teal-500/60 focus:ring-1 focus:ring-teal-500/60 transition-all"
        placeholder="you@example.com"
        />
        </div>

        <div>
        <label htmlFor="message" className="block text-xs uppercase tracking-wider text-gray-300 mb-1.5 font-semibold">
        Message
        </label>
        <textarea
        id="message"
        name="message"
        required
        rows="4"
        value={formData.message}
        onChange={handleChange}
        className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-sm sm:text-base text-white placeholder-gray-400 focus:outline-none focus:border-teal-500/60 focus:ring-1 focus:ring-teal-500/60 transition-all resize-none"
        placeholder="How can we work together?"
        ></textarea>
        </div>

        <button
        type="submit"
        disabled={status === 'loading'}
        className="group w-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-sm sm:text-base font-semibold py-3.5 px-5 rounded-xl hover:bg-teal-500/20 hover:border-teal-400/60 hover:text-teal-200 hover:shadow-[0_0_20px_rgba(20,184,166,0.25)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 mt-2 disabled:opacity-50 flex items-center justify-center gap-2"
        >
        {status === 'loading' ? 'Sending...' : 'Send Message'}
        {status !== 'loading' && (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300">
            <line x1="22" y1="2" x2="11" y2="13"></line>
            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
        )}
        </button>
        </form>
        </div>

        </div>
        </div>
        </section>
    );
};

export default Contact;
