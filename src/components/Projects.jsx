import { Link } from 'react-router-dom';

const Projects = () => {
    const projects = [
        {
            id: "portfolio",
            name: "Fullstack Portfolio",
            status: "active",
            image: "https://images.unsplash.com/photo-1592609931095-54a2168ae893?q=80&w=1170&auto=format&fit=crop",
            desc: "Fullstack development of a VPS-hosted portfolio website using React & Tailwind."
        },
        {
            id: "ctf-fra",
            name: "CTF Challenge",
            status: "completed",
            image: "https://images.unsplash.com/photo-1645262748907-6827d43215d4",
            desc: "Solved FRA:s cryptography challenge using Wireshark, Stegsolve & Bash/Python."
        },
        {
            id: "bank-ui",
            name: "Mobile Bank App UI",
            status: "completed",
            image: "https://images.unsplash.com/photo-1761998066489-4f32b9a4dff8?q=80&w=1032&auto=format&fit=crop",
            desc: "Developed a scalable UI prototype in Figma for a mobile bank application."
        },
        {
            id: "mr-3dui",
            name: "Mixed Reality 3D UI",
            status: "completed",
            image: "https://images.unsplash.com/photo-1707167144646-cea7d2027ef7?q=80&w=1170&auto=format&fit=crop",
            desc: "Developed a user-centered 3D UI prototype in Blender for a Mixed Reality product."
        }
    ];

    return (
        /* Tonar från genomskinlig till mörkare svart längst ner mot footern */
        <section className="w-full pt-4 pb-8 bg-gradient-to-b from-transparent via-black/10 to-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">

        {/* Rubrik med avdelarlinje */}
        <div className="flex items-center justify-center mb-4 pb-2 border-b border-white/10">
        <Link
        to="/projects"
        className="text-xs uppercase tracking-wide font-bold text-gray-300 hover:text-teal-400 transition-colors flex items-center"
        >
        <span>Latest projects</span>
        <span className="text-teal-400 group-hover:translate-x-1.5 transition-transform duration-300"></span>
        </Link>
        </div>

        {/* Grid med projektkorten */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {projects.map((project) => (
            <Link
            to={`/projects#${project.id}`}
            key={project.id}
            className="group flex flex-col bg-black/25 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 hover:border-teal-500/40 transition-all duration-500 hover:shadow-[0_0_25px_rgba(20,184,166,0.18)] hover:-translate-y-1"
            >
            {/* Bildbehållare */}
            <div className="h-32 w-full overflow-hidden relative border-b border-white/10">
            <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />

            {/* Status Ribbon */}
            <div className={`absolute top-2.5 left-2.5 px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider z-20 backdrop-blur-sm
                ${project.status === 'active' ? 'bg-sky-600/70 text-white' : 'bg-teal-600/70 text-white'}`}>
                {project.status === 'active' ? 'Active' : 'Completed'}
                </div>
                </div>

                {/* Textinnehåll */}
                <div className="p-4 flex flex-col flex-1 justify-between">
                <div>
                <h3 className="text-base font-bold text-white group-hover:text-teal-400 transition-colors mb-1">
                {project.name}
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed">
                {project.desc}
                </p>
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
