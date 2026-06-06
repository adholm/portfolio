const Split = () => {
    const expertise = ["Linux", "React", "Cybersecurity", "Wireshark", "Python", "Windows", "Microsoft 365", "UI", "UX", "IxD", "Blender", "Figma", "Steganalysis"];
    const projects = [
  { id: "portfolio", name: "Developed a VPS-hosted Portfolio with React & Tailwind"},
  { id: "ctf-fra", name: "Solved CTF Cryptography Challenge"},
  { id: "bank-ui", name: "Prototyped UI for Mobile Bank App"},
  { id: "mr-ui", name: "Prototyped 3D UI for Mixed Reality Product"}
];
    return (
        <section className="max-w-6xl mx-auto py-5 grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Vänster box: Recent projects */}
            <div>
                <h2 className="text-xl font-bold mb-3">Recent projects</h2>
                    <ul className="list-disc list-inside space-y-1 text-slate-400 text-base">
                        {projects.map((project) => (
                        <li key={project.id}>
                            <a href={`/projects#${project.id}`} className="hover:text-white transition-colors text-gray-200">
                            {project.name}
                            </a>
                        </li>
))}
                    </ul>
            </div>

            {/* Höger box: Expertise */}
            <div>
                <h2 className="text-xl font-bold mb-3">Expertise</h2>
                <div className="flex flex-wrap gap-2">
                    {expertise.map((expertise) => (
  <span key={expertise} className="bg-gray-800 px-3 py-1 rounded-full text-xs font-medium">
    {expertise}
  </span>
))}
                </div>

            </div> 

        </section>
    );
};

export default Split