const ProjectsPage = () => {
    const projects = [
        {
            id: "portfolio",
            name: "Fullstack Portfolio",
            status: "active",
            image: "https://images.unsplash.com/photo-1592609931095-54a2168ae893?q=80&w=1170&auto=format&fit=crop",
            desc: "Fullstack development of a VPS-hosted portfolio website using React & Tailwind CSS and custom Nginx & Node.js backend for email contact form functionality.",
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
            image: "https://images.unsplash.com/photo-1707167144646-cea7d2027ef7?q=80&w=1170&auto=format&fit=crop",
            desc: "Developed a user-centered 3D UI prototype in Blender with applied HCI theory for a Mixed Reality product called 'HappySpace MR'.",
            tags: ["Blender", "Verge3D", "UX", "3DUI", "Interactive Design", "HCI"]
        }
    ];

    return (
        <section className="relative flex-1 w-full flex flex-col justify-center py-6 md:py-10 overflow-hidden">

        {/* Ren oskärpa (blur) utan mörktoning */}
        <div className="absolute inset-0 backdrop-blur-sm z-0"></div>

        {/* Innehålls-container med avsamlad bredd max-w-4xl */}
        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 flex-1 flex flex-col justify-center items-center my-auto">

        {/* HEADER - Gott om luft nedåt (mb-6 md:mb-8) */}
        <div className="text-center mb-6 md:mb-8 max-w-xl">
        <h1 className="uppercase text-xl sm:text-xl font-bold mb-1 tracking-tight text-white drop-shadow-lg">
        Latest projects
        </h1>
        <p className="text-gray-300 text-sm sm:text-sm drop-shadow-md">
        My latest work in front- and backend development, as well as cybersecurity.
        </p>
        </div>

        {/* PROJEKT-GRID: Perfekt balanserade kort i 2-kolumns layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
        {projects.map((project) => (
            <div
            id={project.id}
            key={project.id}
            className="group flex flex-col bg-black/40 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/15 hover:border-teal-400/60 transition-all duration-500 hover:shadow-[0_0_25px_rgba(20,184,166,0.18)] hover:-translate-y-1 shadow-xl shadow-black/50"
            >
            {/* Bildbehållare med bra proportioner (h-32 sm:h-36) */}
            <div className="h-32 sm:h-36 w-full overflow-hidden relative border-b border-white/10">
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
            </div>

            {/* Text och Taggar med behaglig padding (p-4) */}
            <div className="p-4 flex flex-col flex-1 justify-between bg-white/[0.03]">
            <div>
            <h2 className="text-md sm:text-md font-bold text-white group-hover:text-teal-400 transition-colors mb-0.5">
            {project.name}
            </h2>
            <p className="text-gray-300 text-xs leading-relaxed font-normal">
            {project.desc}
            </p>
            </div>

            {/* Tech Tags */}
            <div className="mt-3.5 pt-2.5 border-t border-white/10">
            <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag, index) => (
                <span
                key={index}
                className="text-[10px] font-mono text-teal-300 bg-teal-500/10 border border-teal-500/20 px-1.5 py-0.5 rounded"
                >
                {tag}
                </span>
            ))}
            </div>
            </div>
            </div>
            </div>
        ))}
        </div>

        </div>
        </section>
    );
};

export default ProjectsPage;
