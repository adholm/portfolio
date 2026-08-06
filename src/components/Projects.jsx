import { Link } from 'react-router-dom';

const Projects = () => {
    const projects = [
        {
            id: "portfolio",
            name: "Fullstack Portfolio",
            status: "active",
            image: "https://images.unsplash.com/photo-1592609931095-54a2168ae893?q=80&w=1170&auto=format&fit=crop",
            desc: "Fullstack development of a VPS-hosted website using React & Tailwind CSS and custom Nginx & Node.js backend.",
            tags: ["React", "Tailwind CSS", "VPS", "Rocky Linux", "Nginx", "Node.js", "Git", "CI/CD Automation", "SSL"]
        },
        {
            id: "ctf-fra",
            name: "CTF 'Exfiltratören' by FRA",
            status: "completed",
            image: "https://images.unsplash.com/photo-1645262748907-6827d43215d4",
            desc: "Solved FRA's CTF challenge 'Exfiltratören' using network analysis, steganography and scripting in Kali Linux.",
            tags: ["Wireshark", "Python", "Cryptography", "Stegsolve", "Bash", "Decryption", "Technical Documentation", "Scripting", "Kali Linux"]
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
            desc: "Developed a user-centered 3D UI prototype in Blender with applied HCI theory for 'HappySpace MR'.",
            tags: ["Blender", "Verge3D", "UX", "3DUI", "Interactive Design", "HCI"]
        }
    ];

    return (
        <section className="w-full pb-6 sm:pb-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">

        {/* Rubrik med avdelarlinje */}
        <div className="flex items-center justify-center mb-4 pb-2 border-b border-white/10">
        <Link
        to="/projects"
        className="text-xs sm:text-sm uppercase tracking-normal font-semibold text-zinc-300 hover:text-teal-400 transition-colors flex items-center gap-2"
        >
        <span>Latest projects</span>
        </Link>
        </div>

        {/* Grid - 4 kolumner */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {projects.map((project) => (
            <Link
            to={`/projects#${project.id}`}
            key={project.id}
            className="group flex flex-col bg-black/40 backdrop-blur-xl rounded-xl overflow-hidden border border-white/15 hover:border-teal-400/60 transition-all duration-300 hover:shadow-[0_0_20px_rgba(45,212,191,0.2)] hover:-translate-y-1 shadow-xl shadow-black/50 relative"
            >
            {/* Bildbehållare */}
            <div className="h-28 w-full overflow-hidden relative border-b border-white/10">
            <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />

            {/* Status Badge */}
            <div className={`absolute top-2.5 left-2.5 px-2 py-0.5 rounded-md text-[9px] font-bold uppercase tracking-wider z-20 backdrop-blur-md border ${
                project.status === 'active'
                ? 'bg-sky-500/20 text-sky-300 border-sky-500/40'
                : 'bg-teal-500/20 text-teal-300 border-teal-500/40'
            }`}>
            {project.status === 'active' ? 'Active' : 'Completed'}
            </div>

            {/* Länk-pil */}
            <div className="absolute top-2.5 right-2.5 z-20 w-6 h-6 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/70 group-hover:text-teal-400 group-hover:border-teal-500/50 group-hover:bg-teal-500/10 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 17L17 7"/>
            <path d="M7 7h10v10"/>
            </svg>
            </div>
            </div>

            {/* Textinnehåll & Taggars */}
            <div className="p-3.5 flex flex-col flex-1 justify-between bg-white/[0.02]">
            <div>
            {/* Ursprunglig storlek återställd: text-sm sm:text-base */}
            <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-teal-400 transition-colors mb-0.5 line-clamp-1">
            {project.name}
            </h3>
            {/* Ursprunglig storlek återställd: text-xs sm:text-[13px] */}
            <p className="text-zinc-400 text-xs sm:text-[13px] leading-relaxed font-normal line-clamp-2">
            {project.desc}
            </p>
            </div>

            {/* Tech Stack - Låst till 1 rad */}
            <div className="mt-3 pt-2.5 border-t border-white/10 flex items-center gap-1.5 overflow-hidden whitespace-nowrap">
            {project.tags.slice(0, 2).map((tag, index) => (
                <span
                key={index}
                className="text-[10px] font-mono text-teal-300 bg-teal-500/10 border border-teal-500/20 px-2 py-0.5 rounded shrink-0"
                >
                {tag}
                </span>
            ))}

            {/* +X badge med samma teal-styling som övriga taggar */}
            {project.tags.length > 2 && (
                <span className="text-[10px] font-mono text-teal-300 bg-teal-500/10 border border-teal-500/20 px-1.5 py-0.5 rounded shrink-0">
                +{project.tags.length - 2}
                </span>
            )}
            </div>
            </div>
            </Link>
        ))}
        </div>

        </div>
        </section>
    );
};

export default Projects;
