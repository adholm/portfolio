const ProjectsPage = () => {
    const projects = [
        {
            id: "portfolio",
            name: "Portfolio Website",
            status: "ongoing",
            image: "https://images.unsplash.com/photo-1592609931095-54a2168ae893?q=80&w=1170&auto=format&fit=crop",
            desc: "Fullstack development of a VPS-hosted portfolio website focusing on performance, security, and a minimalist UI.",
            tags: ["React", "Tailwind CSS", "VPS", "Rocky Linux", "Git", "CI/CD Automation", "SSL"]
        },
        {
            id: "ctf-fra",
            name: "CTF Challenge",
            status: "completed",
            image: "https://images.unsplash.com/photo-1645262748907-6827d43215d4",
            desc: "Solved FRA's cryptography challenge utilizing network analysis and steganography tools.",
            tags: ["Wireshark", "Stegsolve", "Python", "Bash", "Decryption", "Technical Documentation"]
        },
        {
            id: "bank-ui",
            name: "Mobile Bank App UI",
            status: "completed",
            image: "https://images.unsplash.com/photo-1761998066489-4f32b9a4dff8?q=80&w=1032&auto=format&fit=crop",
            desc: "Developed a scalable, user-centric UI prototype for a modern mobile banking application.",
            tags: ["Figma", "UI/UX", "Prototyping", "Agile Framework (Scrum)", "Dynamic Scaling"]
        },
        {
            id: "mr-3dui",
            name: "Mixed Reality 3D UI",
            status: "completed",
            image: "https://images.unsplash.com/photo-1707167144646-cea7d2027ef7?q=80&w=1170&auto=format&fit=crop",
            desc: "Designed and prototyped a spatial 3D user interface for an upcoming Mixed Reality headset product.",
            tags: ["Blender", "Verge3D", "UX", "3DUI", "Interactive Design", "HCI"]
        }
    ];

    return (
        /* pt-8 och pb-4 ger sektionen en stabil ram i topp och botten */
        <section className="relative flex-1 w-full flex flex-col pt-8 pb-4 overflow-hidden">

        {/* Bakgrundsbild */}
        <div
        className="absolute inset-0 bg-cover bg-center scale-105 z-0"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1651497111372-9107c1a5d9a0')" }}
        ></div>

        {/* Ren oskärpa (blur) */}
        <div className="absolute inset-0 backdrop-blur-2xl z-0"></div>

        {/* Innehålls-container: "flex-1 flex flex-col" låter denna container ta upp hela skärmhöjden */}
        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 flex-1 flex flex-col items-center">

        {/* HEADER: Helt vanlig flödesplacering, men med mindre bottenmarginal (mb-2) */}
        <div className="text-center mb-2 flex flex-col items-center">
        <h1 className="text-3xl lg:text-4xl font-bold mb-1 tracking-tighter text-white drop-shadow-lg">
        Latest projects
        </h1>
        <p className="text-gray-300 text-sm max-w-xl leading-relaxed drop-shadow-md">
        An in-depth look at my latest work across cybersecurity, front- & backend development, and UI/UX design.
        </p>
        </div>

        {/* PROJEKT-GALLERI: "my-auto" centrerar denna del helt magiskt i det tomma utrymmet som finns kvar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full max-w-4xl my-auto">
        {projects.map((project) => (
            <a
            href={`#${project.id}`}
            key={project.id}
            className="group flex flex-col bg-black/20 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10 hover:border-teal-500/30 transition-all duration-500 hover:shadow-[0_0_30px_rgba(20,184,166,0.15)]"
            >
            {/* Bildbehållare (h-36) */}
            <div className="h-36 w-full overflow-hidden relative border-b border-white/10">
            <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />

            {/* Status Ribbon - Nu med ren genomskinlighet utan blur */}
            <div className={`absolute top-2 left-2 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider z-20
                ${project.status === 'ongoing' ? 'bg-sky-600/70 text-white' : 'bg-teal-600/70 text-white'}`}>
                {project.status === 'ongoing' ? 'Ongoing' : 'Completed'}
                </div>
                </div>

                {/* Text och Taggar - Luftig padding (p-5) och tydlig text (text-xl / text-sm) */}
                <div className="p-5 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-white group-hover:text-teal-400 transition-colors">
                {project.name}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-3 flex-1">
                {project.desc}
                </p>

                {/* Tech Tags - text-[10px] */}
                <div className="flex flex-wrap gap-1.5 mt-auto">
                {project.tags.map((tag, index) => (
                    <span
                    key={index}
                    className="text-[10px] uppercase tracking-wider font-semibold text-teal-300 bg-teal-500/10 border border-teal-500/20 px-2 py-0.5 rounded-md"
                    >
                    {tag}
                    </span>
                ))}
                </div>
                </div>
                </a>
        ))}
        </div>

        </div>
        </section>
    );
};

export default ProjectsPage;
