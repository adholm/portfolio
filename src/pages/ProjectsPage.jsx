import { Link } from 'react-router-dom';

const ProjectsPage = () => {
    const projects = [
        {
            id: "portfolio",
            name: "Fullstack Portfolio",
            status: "active",
            image: "https://images.unsplash.com/photo-1592609931095-54a2168ae893?q=80&w=1170&auto=format&fit=crop",
            desc: "Fullstack development of a VPS-hosted website using React & Tailwind CSS and custom Nginx & Node.js backend for email contact form functionality.",
            tags: ["React", "Tailwind CSS", "VPS", "Rocky Linux", "Nginx", "Node.js", "Git", "CI/CD Automation", "SSL"]
        },
        {
            id: "ctf-fra",
            name: "CTF Challenge 'Exfiltratören' by FRA",
            status: "completed",
            image: "https://images.unsplash.com/photo-1645262748907-6827d43215d4",
            desc: "Solved FRA's CTF challenge 'Exfiltratören' using network analysis, steganography and scripting in a virtual Kali Linux environment.",
            tags: ["Wireshark", "Stegsolve", "Cryptography", "Python", "Bash", "Decryption", "Technical Documentation", "Scripting", "Kali Linux"]
        },
        {
            id: "bank-ui",
            name: "Mobile Bank App UI",
            status: "completed",
            image: "https://images.unsplash.com/photo-1761998066489-4f32b9a4dff8?q=80&w=1032&auto=format&fit=crop",
            desc: "Developed a scalable UI prototype in Figma for a modern mobile banking application.",
            tags: ["Figma", "UI/UX", "Prototyping", "SCRUM", "Dynamic Scaling"]
        },
        {
            id: "mr-3dui",
            name: "Mixed Reality 3D UI",
            status: "completed",
            image: "/images/HappySpaceCover.png",
            desc: "Developed a user-centered 3D UI prototype in Blender with applied HCI theory for a Mixed Reality product called 'HappySpace MR'.",
            tags: ["Blender", "Verge3D", "UX", "3DUI", "Interactive Design", "HCI"]
        }
    ];

    return (
        <section className="relative flex-1 w-full flex flex-col py-6 sm:py-8 overflow-hidden">
        <div className="relative z-10 w-full max-w-2xl mx-auto px-4 sm:px-6 flex-1 flex flex-col">

        {/* HEADER */}
        <div className="text-center mb-6 sm:mb-8">
        <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight drop-shadow-lg mb-2">
        Latest projects
        </h1>
        <p className="text-gray-300 text-sm sm:text-base font-medium drop-shadow-md leading-relaxed">
        My latest work in front- and backend development, and cybersecurity.
        </p>
        </div>

        {/* PROJEKT-FEED */}
        <div className="flex flex-col gap-8 sm:gap-10 pb-12 w-full">
        {projects.map((project) => (
            <Link
            to={`/projects/${project.id}`}
            key={project.id}
            className="group flex flex-col w-full bg-black/35 hover:bg-black/30 backdrop-blur-xl border border-white/15 rounded-xl overflow-hidden shadow-xl shadow-black/70 hover:border-teal-400/60 hover:shadow-[0_0_20px_rgba(45,212,191,0.2)] hover:-translate-y-1 transition-all duration-300"
            >
            {/* BILD */}
            <div className="relative w-full h-36 sm:h-44 border-b border-white/10 bg-black/40 overflow-hidden">
            <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
            />

            {/* Status Badge */}
            <div className={`absolute top-3.5 left-3.5 px-2.5 py-0.5 rounded-md text-[9px] sm:text-[10px] font-bold uppercase tracking-wider z-20 backdrop-blur-md border shadow-md ${
                project.status === 'active'
                ? 'bg-sky-500/20 text-sky-300 border-sky-500/40'
                : 'bg-teal-500/20 text-teal-300 border-teal-500/40'
            }`}>
            {project.status === 'active' ? 'Active' : 'Completed'}
            </div>
            </div>

            {/* INNEHÅLL */}
            <div className="flex flex-col p-4 sm:p-5">
            <h2 className="text-lg sm:text-xl font-bold text-white group-hover:text-teal-400 transition-colors mb-1">
            {project.name}
            </h2>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-normal mb-4">
            {project.desc}
            </p>

            {/* Tech Stack */}
            <div className="pt-3 border-t border-white/10">
            <h3 className="text-[10px] sm:text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">
            Tech Stack
            </h3>
            <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag, index) => (
                <span
                key={index}
                className="text-[11px] sm:text-xs font-mono text-teal-300 bg-teal-500/10 border border-teal-500/20 px-2.5 py-0.5 rounded"
                >
                {tag}
                </span>
            ))}
            </div>
            </div>
            </div>
            </Link>
        ))}
        </div>

        </div>
        </section>
    );
};

export default ProjectsPage;
