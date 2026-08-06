import { useParams, Link } from 'react-router-dom';

// Universal project database with English copy, correct roles, and precise contributions
const projectsData = {
    "mr-3dui": {
        id: "mr-3dui",
        title: "HappySpace MR",
        status: "completed",
        role: "UX & 3D UI Designer",
        timeline: "Aug – Oct 2024",
        category: "Mixed Reality / Spatial Computing",
        image: "/images/HappySpaceCover.png",
        tags: ["Blender", "Verge3D", "UX", "3DUI", "Interactive Design", "HCI"],
        overview: "HappySpace MR is a user-centered Mixed Reality concept designed to reduce fear and anxiety in pediatric hospital patients aged 4–12. Using optical see-through MR headsets, it overlays friendly virtual 3D figures onto the real environment, transforming sterile hospital rooms into reassuring, interactive spaces.",
        problem: "Hospitalized children frequently experience intense stress and anxiety in sterile medical settings, which can lead to procedural trauma and delayed recovery times.",
        solution: "A child-focused MR environment that provides immersive distraction during uncomfortable procedures (e.g., blood draws) and converts intimidating equipment (like syringes) into friendly characters via Object Recognition.",
        contributions: [
            "Designed and modeled non-photorealistic 3D assets (a friendly rabbit and glowing star) in Blender tailored for child emotional comfort.",
            "Architected a circular 2D Pie Menu interface with dynamic bubble-scaling touch feedback for low motor precision demands.",
            "Applied core HCI principles focusing on cognitive load reduction, intuitive affordances, and pastel color psychology.",
            "Conceptualized natural hand interactions (Image-plane pointing, petting gestures) and indirect smartphone control via Bluetooth for medical staff.",
            "Implemented feedback substitution strategies to replace heavy haptic hardware with rich visual/auditory feedback, maintaining headset weight under 300g."
        ],
        colors: [
            { name: "Pastel Yellow", hex: "#FFEE11", bg: "bg-[#FFEE11]" },
            { name: "Pastel Pink", hex: "#FFD3FF", bg: "bg-[#FFD3FF]" },
            { name: "Pastel Blue", hex: "#A3E0FF", bg: "bg-[#A3E0FF]" },
            { name: "Pastel Purple", hex: "#CCBAFF", bg: "bg-[#CCBAFF]" },
            { name: "Dark Charcoal", hex: "#1A1A1A", bg: "bg-[#1A1A1A]" }
        ]
    },
    "portfolio": {
        id: "portfolio",
        title: "Fullstack Portfolio",
        status: "active",
        role: "Fullstack Developer & Sysadmin",
        timeline: "2024 – Present",
        category: "Web Development / DevOps",
        image: "https://images.unsplash.com/photo-1592609931095-54a2168ae893?q=80&w=1170&auto=format&fit=crop",
        tags: ["React", "Tailwind CSS", "VPS", "Rocky Linux", "Nginx", "Node.js", "Git", "CI/CD Automation", "SSL"],
        overview: "A custom-built, high-performance portfolio website built from scratch with React and Tailwind CSS. Hosted on a self-managed Rocky Linux VPS with an Nginx reverse proxy and Node.js backend.",
        problem: "The need for a scalable, self-hosted platform to showcase technical competence and contact functionality without third-party constraints.",
        solution: "Engineered a custom glassmorphic UI paired with a dedicated Node.js backend service for contact form validation and automated email forwarding.",
        contributions: [
            "Developed a fully responsive React frontend featuring custom Glassmorphic components and fluid Tailwind CSS styling.",
            "Configured and hardened a dedicated Rocky Linux VPS environment with Nginx, SSL certificates, and systemd service management.",
            "Implemented a Node.js & Express REST API for secure contact form handling and email transmission.",
            "Optimized rendering performance, accessibility metrics, and clean code architecture."
        ]
    },
    "ctf-fra": {
        id: "ctf-fra",
        title: "CTF 'Exfiltratören' by FRA",
        status: "completed",
        role: "Cybersecurity Analyst",
        timeline: "Mar 2026",
        category: "Cybersecurity & Forensics",
        image: "https://images.unsplash.com/photo-1645262748907-6827d43215d4",
        tags: ["Wireshark", "Python", "Base45", "Stegsolve", "Exiftool", "zbarimg", "Kali Linux", "Packet Analysis", "Steganography"],
        overview: "A hands-on forensic investigation of the 'Exfiltratören' challenge published by challenge.fra.se. Executed within a virtualized Kali Linux environment to analyze network traffic (pcap), decode concealed payloads, and systematically recover exfiltrated data across multiple security layers.",
        problem: "A capture file (exfiltratoren.pcap) contained multiple hidden flags exfiltrated over different network protocols, embedded in encoded email attachments and steganographic image layers.",
        solution: "Reconstructed network streams in Wireshark, parsed encoded payloads (Base64/Base45) using custom CLI pipelines and Python scripts, and utilized Stegsolve bitplane manipulation to extract visual steganographic data.",
        contributions: [
            "Reconstructed FTP upload sessions (STOR) over TCP port 41209 in Wireshark, decoding exfiltrated Base64 payloads to capture Flag 1.",
            "Extracted SMTP email attachments via CLI, scanned embedded QR codes using zbarimg, and authored a Python base45 decoding script to extract Flag 2.",
            "Inspected image palette structures with Exiftool and performed LSB/bitplane analysis in Stegsolve (Random Colour Map 1) to visually uncover facility blueprints and Flag 3.",
            "Utilized a suite of Linux forensic utilities (Wireshark, tshark, Stegsolve, Exiftool, zbarimg, Python 3) inside a virtualized Kali Linux environment."
        ]
    },
    "bank-ui": {
        id: "bank-ui",
        title: "Mobile Bank App UI",
        status: "completed",
        role: "UI/UX Designer",
        timeline: "2024",
        category: "UI/UX & Design Systems",
        image: "https://images.unsplash.com/photo-1761998066489-4f32b9a4dff8?q=80&w=1032&auto=format&fit=crop",
        tags: ["Figma", "UI/UX", "Prototyping", "SCRUM", "Dynamic Scaling"],
        overview: "A scalable, accessible mobile banking interface prototype focused on clarity, security, and effortless navigation for daily financial tasks.",
        problem: "Traditional banking applications often suffer from cluttered dashboards and unintuitive navigation paths during everyday transactions.",
        solution: "Created a modern design system with clear visual hierarchy, dynamic component variants, and streamlined user flows.",
        contributions: [
            "Designed a scalable Figma design system complete with component variants, auto-layout, and design tokens.",
            "Built interactive, high-fidelity prototypes for rapid user navigation and transaction verification.",
            "Evaluated color contrast ratios and typography scale to ensure full accessibility compliance."
        ]
    }
};

const ProjectDetail = () => {
    const { id } = useParams();
    const project = projectsData[id];

    if (!project) {
        return (
            <div className="min-h-[50vh] flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-xl font-bold text-white mb-1">Project Not Found</h1>
            <p className="text-zinc-400 text-sm mb-5">No project matching ID "{id}".</p>
            <Link to="/projects" className="px-4 py-2 rounded-xl bg-teal-500/10 border border-teal-500/30 text-teal-300 text-sm font-medium hover:bg-teal-500/20 transition-all">
            ← Back to all projects
            </Link>
            </div>
        );
    }

    return (
        <section className="relative flex-1 w-full py-6 sm:py-10 overflow-hidden">
        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6">

        {/* Back navigation */}
        <Link
        to="/projects"
        className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-zinc-400 hover:text-teal-300 transition-colors mb-5 group"
        >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-1 transition-transform">
        <line x1="19" y1="12" x2="5" y2="12"></line>
        <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
        <span>Back to projects</span>
        </Link>

        {/* Main Glassmorphic Container */}
        <div className="bg-black/60 backdrop-blur-2xl border border-white/15 rounded-2xl overflow-hidden shadow-2xl">

        {/* Header Image & Title */}
        <div className="relative w-full h-48 sm:h-64 md:h-72 overflow-hidden border-b border-white/10 bg-black/50">
        <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-6 sm:p-8">
        <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight drop-shadow-md">
        {project.title}
        </h1>
        </div>
        </div>

        {/* Content Section - Generöst vertikalt utrymme mellan sektioner (space-y-8 sm:space-y-10) */}
        <div className="p-6 sm:p-8 space-y-8 sm:space-y-10">

        {/* Metadata Bar */}
        <div className="flex flex-wrap items-start justify-between gap-x-6 sm:gap-x-10 gap-y-3 p-4 rounded-xl bg-white/[0.03] border border-white/10 text-xs sm:text-sm">
        <div>
        <span className="block text-zinc-400 text-[11px] font-semibold uppercase tracking-wider mb-0.5">Role</span>
        <span className="text-white font-semibold">{project.role}</span>
        </div>
        <div>
        <span className="block text-zinc-400 text-[11px] font-semibold uppercase tracking-wider mb-0.5">Category</span>
        <span className="text-white font-semibold">{project.category}</span>
        </div>
        <div>
        <span className="block text-zinc-400 text-[11px] font-semibold uppercase tracking-wider mb-0.5">Timeline</span>
        <span className="text-white font-semibold">{project.timeline}</span>
        </div>
        <div>
        <span className="block text-zinc-400 text-[11px] font-semibold uppercase tracking-wider mb-0.5">Status</span>
        <span className={`font-semibold ${project.status === 'active' ? 'text-cyan-300' : 'text-teal-300'}`}>
        {project.status === 'active' ? 'Active' : 'Completed'}
        </span>
        </div>
        </div>

        {/* Section 1: Overview */}
        <div>
        <h2 className="text-base sm:text-lg font-bold text-white mb-0.5">Overview</h2>
        <p className="text-zinc-200 text-sm sm:text-base leading-relaxed font-normal">
        {project.overview}
        </p>
        </div>

        {/* Section 2: Challenge & Solution */}
        <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
        <div className="p-4 sm:p-5 rounded-xl bg-rose-500/5 border border-rose-500/20">
        <h3 className="text-xs sm:text-sm font-bold text-rose-300 uppercase tracking-wider mb-0.5">Challenge</h3>
        <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed">{project.problem}</p>
        </div>
        <div className="p-4 sm:p-5 rounded-xl bg-teal-500/5 border border-teal-500/20">
        <h3 className="text-xs sm:text-sm font-bold text-teal-300 uppercase tracking-wider mb-0.5">Solution</h3>
        <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed">{project.solution}</p>
        </div>
        </div>
        </div>

        {/* Section 3: Key Contributions & Deliverables */}
        <div>
        <h2 className="text-base sm:text-lg font-bold text-white mb-2.5">Actions</h2>
        <div className="space-y-2">
        {project.contributions.map((item, idx) => (
            <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.03] border border-white/10 text-xs sm:text-sm text-zinc-200">
            <span className="text-teal-400 font-bold text-sm shrink-0">✓</span>
            <span className="leading-relaxed">{item}</span>
            </div>
        ))}
        </div>
        </div>

        {/* Section 4: Design Color Palette (om tillgängligt) */}
        {project.colors && (
            <div>
            <h2 className="text-base sm:text-lg font-bold text-white mb-2.5">Design Color Palette</h2>
            <div className="flex flex-wrap gap-2.5">
            {project.colors.map((col, idx) => (
                <div key={idx} className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/[0.04] border border-white/10">
                <div className={`w-4 h-4 rounded-full ${col.bg} border border-white/20 shadow-sm`} />
                <span className="text-xs font-semibold text-white">{col.name}</span>
                <span className="text-[11px] font-mono text-zinc-400">{col.hex}</span>
                </div>
            ))}
            </div>
            </div>
        )}

        {/* Section 5: Technologies & Tools */}
        <div className="pt-4 border-t border-white/10">
        <h2 className="text-base sm:text-lg font-bold text-white mb-2.5">Technology</h2>
        <div className="flex flex-wrap gap-2">
        {project.tags.map((tag, idx) => (
            <span key={idx} className="text-xs font-mono text-teal-300 bg-teal-500/10 border border-teal-500/20 px-3 py-1 rounded-lg font-medium">
            {tag}
            </span>
        ))}
        </div>
        </div>

        </div>
        </div>

        </div>
        </section>
    );
};

export default ProjectDetail;
