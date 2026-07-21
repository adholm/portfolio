const Projects = () => {
    // Lista med projektobjekt – gör det enkelt att lägga till/ta bort projekt
    const projects = [
        { 
            id: "portfolio", 
            name: "Fullstack Portfolio",
            status: "ongoing",
            image: "https://images.unsplash.com/photo-1592609931095-54a2168ae893?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
            image: "https://images.unsplash.com/photo-1761998066489-4f32b9a4dff8?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            desc: "Developed a scalable UI prototype in Figma for a mobile bank application." 
        },
        { 
            id: "mr-3dui", 
            name: "Mixed Reality 3D UI",
            status: "completed",
            image: "https://images.unsplash.com/photo-1707167144646-cea7d2027ef7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            desc: "Developed a user-centered 3D UI prototype in Blender for a Mixed Reality product." 
        }
    ];

    return (
        /* pt-10 minskar avståndet uppåt till Hero, pb-20 behåller luft nedåt */
        <section className="max-w-6xl mx-auto pt-5 px-4 sm:px-8 border-t border-white/10">
            
            {/* text-2xl gör rubriken mindre, mb-8 minskar avståndet till korten */}
            <h2 className="text-sm uppercase tracking-wider font-semibold text-center text-gray-400 mb-5">Recent projects</h2>

            {/* Grid: 1 column on mobile, 2 on small screens, 4 on large screens */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 justify-center">
                {projects.map((project) => (
                    <a 
                        href={`/projects#${project.id}`} 
                        key={project.id}
                        /* group-klass tillåter oss att styla barnen (som bilden) vid hover */
                        className="group bg-gray-900/50 rounded-2xl overflow-hidden border border-gray-900/50 hover:border-teal-500/20 transition-all duration-700"
                    >
                        {/* Bilder för projektkorten med fast proportion (aspect-video) */}
                        <div className="aspect-video w-full overflow-hidden relative">
                            <img 
                                src={project.image} 
                                alt={project.name}
                                /* scale skapar zoom-effekt vid hover */
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            {/* Ribbon som visar projektets status */}
                            <div className={`absolute top-2 left-2 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider z-20 
                            ${project.status === 'ongoing' ? 'bg-sky-600/70 text-white' : 'bg-teal-600/70 text-white'}`}>
                            {project.status === 'ongoing' ? 'Ongoing' : 'Completed'}
                            </div>

                        </div>
                        
                        {/* Textinnehåll med padding */}
                        <div className="p-4 sm:p-5">
                            <h3 className="text-base font-semibold text-white group-hover:text-teal-400 transition-colors">
                                {project.name}
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {project.desc}
                            </p>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default Projects;
