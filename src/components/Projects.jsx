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
        <section className="w-full pt-4 pb-8 ">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">

        {/* Rubrik med avdelarlinje */}
        <div className="flex items-center justify-center mb-6 pb-2 border-b border-white/10">
        <Link
        to="/projects"
        className="text-xs uppercase tracking-wider font-bold text-gray-300 hover:text-teal-400 transition-colors flex items-center gap-2 group"
        >
        <span>Latest projects</span>
        <span className="text-teal-400 group-hover:translate-x-1.5 transition-transform duration-300">→</span>
        </Link>
        </div>

        {/* Grid med stilrena, väldefinierade kort utan taggar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {projects.map((project) => (
            <Link
            to={`/projects#${project.id}`}
            key={project.id}
            className="group flex flex-col bg-black/50 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/15 hover:border-teal-400/60 transition-all duration-300 hover:shadow-[0_0_30px_rgba(45,212,191,0.2)] hover:-translate-y-1.5 shadow-xl shadow-black/50 relative"
            >
            {/* Bildbehållare med mjuk toning i underkanten */}
            <div className="h-36 w-full overflow-hidden relative border-b border-white/10">
            <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />

            {/* Mörk gradientöverlagring i botten av bilden */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90 z-10" />

            {/* Status Badge med glasram */}
            <div className={`absolute top-2.5 left-2.5 px-2 py-0.5 rounded-md text-[10px] font-semibold uppercase tracking-wider z-20 backdrop-blur-md border ${
                project.status === 'active'
                ? 'bg-sky-500/20 text-sky-300 border-sky-500/40'
                : 'bg-teal-500/20 text-teal-300 border-teal-500/40'
            }`}>
            {project.status === 'active' ? 'Active' : 'Completed'}
            </div>

            {/* Länk-pil uppe i högra hörnet */}
            <div className="absolute top-2.5 right-2.5 z-20 w-7 h-7 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/70 group-hover:text-teal-400 group-hover:border-teal-500/50 group-hover:bg-teal-500/10 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 17L17 7"/>
            <path d="M7 7h10v10"/>
            </svg>
            </div>
            </div>

            {/* Rent textinnehåll utan stökiga taggar */}
            <div className="p-4 flex flex-col flex-1 justify-between bg-white/[0.02]">
            <div>
            <h3 className="text-base font-bold text-white group-hover:text-teal-400 transition-colors mb-1">
            {project.name}
            </h3>
            <p className="text-gray-300 text-xs leading-relaxed font-normal">
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
