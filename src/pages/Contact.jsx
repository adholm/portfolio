import { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMessage('');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
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
        <section className="relative flex-1 flex items-center py-16 md:py-20 overflow-hidden">
        {/* Ren oskärpa (blur) */}
        <div className="absolute inset-0 backdrop-blur-sm z-0"></div>

        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

        {/* VÄNSTER SIDA: Text & länkar */}
        <div>
        <h1 className="text-4xl md:text-5xl font-bold mb-3 tracking-tighter text-white drop-shadow-lg">
        Let's connect!
        </h1>
        <p className="text-gray-300 mb-5 text-base md:text-lg max-w-md drop-shadow-md font-medium">
        <span className="text-white font-semibold underline decoration-teal-400 decoration-2 underline-offset-2">Need a driven and adaptable employee for your tech company?</span> Write something in the form and I'll get back to you via email as soon as I can.
        </p>

        <div className="flex gap-4 drop-shadow-md">
        {/* Email */}
        <a
        href="mailto:adamholm@mailbox.org"
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

        {/* HÖGER SIDA: Formulär */}
        <div className="bg-black/20 backdrop-blur-2xl p-6 sm:p-8 md:p-10 rounded-2xl border border-white/10 shadow-2xl w-full">
        {status === 'success' && (
            <div className="mb-6 p-4 bg-teal-500/20 border border-teal-500/40 rounded-xl text-teal-300 text-sm font-medium">
            ✓ Message sent successfully! I'll get back to you as soon as possible.
            </div>
        )}

        {status === 'error' && (
            <div className="mb-6 p-4 bg-rose-500/20 border border-rose-500/40 rounded-xl text-rose-300 text-sm font-medium">
            ⚠ {errorMessage}
            </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
        <div>
        <label htmlFor="name" className="block text-xs uppercase tracking-widest text-gray-300 mb-2 font-semibold">
        Name
        </label>
        <input
        type="text"
        id="name"
        name="name"
        required
        value={formData.name}
        onChange={handleChange}
        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/50 transition-all"
        placeholder="Your Name"
        />
        </div>

        <div>
        <label htmlFor="email" className="block text-xs uppercase tracking-widest text-gray-300 mb-2 font-semibold">
        Email
        </label>
        <input
        type="email"
        id="email"
        name="email"
        required
        value={formData.email}
        onChange={handleChange}
        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/50 transition-all"
        placeholder="you@example.com"
        />
        </div>

        <div>
        <label htmlFor="message" className="block text-xs uppercase tracking-widest text-gray-300 mb-2 font-semibold">
        Message
        </label>
        <textarea
        id="message"
        name="message"
        required
        rows="5"
        value={formData.message}
        onChange={handleChange}
        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/50 transition-all resize-none"
        placeholder="How can we work together?"
        ></textarea>
        </div>

        {/* Uppdaterad "Send Message"-knapp */}
        <button
        type="submit"
        disabled={status === 'loading'}
        className="group w-full bg-teal-500/10 border border-teal-500/30 text-teal-300 font-semibold py-3.5 px-6 rounded-xl hover:bg-teal-500/20 hover:border-teal-400/60 hover:text-teal-200 hover:shadow-[0_0_20px_rgba(20,184,166,0.25)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 mt-4 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none flex items-center justify-center gap-2.5"
        >
        {status === 'loading' ? (
            <>
            <svg className="animate-spin h-5 w-5 text-teal-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span>Sending...</span>
            </>
        ) : (
            <>
            <span>Send Message</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300">
            <line x1="22" y1="2" x2="11" y2="13"></line>
            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
            </>
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
