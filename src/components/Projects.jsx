import { Link } from 'react-router-dom';

const Projects = () => {
    const projects = [
        {
            id: "portfolio",
            name: "Fullstack Portfolio",
            status: "active",
            image: "https://images.unsplash.com/photo-1592609931095-54a2168ae893?q=80&w=1170&auto=format&fit=crop",
            desc: "Fullstack development of a VPS-hosted website using React & Tailwind CSS and Nginx & Node.js backend for email functionality."
        },
        {
            id: "ctf-fra",
            name: "CTF 'Exfiltratören' by FRA",
            status: "completed",
            image: "https://images.unsplash.com/photo-1645262748907-6827d43215d4",
            desc: "Solved FRA's CTF challenge 'Exfiltratören' using network analysis, steganography and scripting in a virtual Kali Linux environment."
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
            image: "/images/HappySpaceCover.png",
            desc: "Developed a user-centered 3D UI prototype in Blender with applied HCI theory for a Mixed Reality product called 'HappySpace MR'."
        }
    ];

    return (
        <section className="w-full pb-6 sm:pb-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">

        {/* Rubrik med avdelarlinje */}
        <div className="flex items-center justify-center mb-4 pb-2 border-b border-white/10">
        <Link
        to="/projects"
        className="text-xs sm:text-sm uppercase tracking-wide font-semibold text-gray-300 hover:text-teal-400 transition-colors flex items-center gap-2"
        >
        <span>Latest projects</span>
        </Link>
        </div>

        {/* Grid - maximerat för att ta lagom mycket vertikal plats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {projects.map((project) => (
            <Link
            to={`/projects#${project.id}`}
            key={project.id}
            className="group flex flex-col bg-black/40 backdrop-blur-xl rounded-xl overflow-hidden border border-white/15 hover:border-teal-400/60 transition-all duration-300 hover:shadow-[0_0_20px_rgba(45,212,191,0.2)] hover:-translate-y-1 shadow-xl shadow-black/50 relative"
            >
            {/* Bildbehållare - h-32 är kompakt och ryms perfekt på skärmen */}
            <div className="h-32 w-full overflow-hidden relative border-b border-white/10">
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

            {/* Textinnehåll - Kortare beskrivning förhindrar överdrivet scrollande */}
            <div className="p-4 flex flex-col flex-1 justify-between bg-white/[0.02]">
            <div>
            <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-teal-400 transition-colors mb-1.5 line-clamp-1">
            {project.name}
            </h3>
            {/* Max tre rader garanterar konsekvent höjd på alla 4 kort */}
            <p className="text-gray-400 text-xs sm:text-[13px] leading-relaxed font-normal line-clamp-3">
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
