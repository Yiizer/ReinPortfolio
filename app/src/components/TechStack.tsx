export default function TechStack() {
  const categories = [
    {
      number: "01",
      title: "Frontend & Interfaces",
      description:
        "Creating responsive, polished interfaces with a focus on usability, clean layouts, and maintainable components.",
      skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "HTML5 / CSS3", "Responsive Design"],
    },
    {
      number: "02",
      title: "Backend & Systems",
      description:
        "Building the logic and data layer behind applications, from APIs and authentication to database-driven systems.",
      skills: ["Node.js", "PostgreSQL", "Supabase", "Firebase", "REST APIs"],
    },
    {
      number: "03",
      title: "3D & Creative Engineering",
      description:
        "Developing interactive applications beyond the traditional web, including AR experiences and hardware-focused projects.",
      skills: ["Unity 3D", "C#", "AR Foundation", "Android SDK", "Hardware & Arduino", "Interactive 3D"],
    },
    {
      number: "04",
      title: "Tooling & Workflow",
      description:
        "Using modern tools and workflows to build, test, deploy, and maintain projects efficiently.",
      skills: ["Git & GitHub", "VS Code", "Vercel / Cloud Hosting", "Unity"],
    },
  ];

  return (
    <section id="stack" className="py-24 border-b border-border-line">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        {/* Section Tag */}
        <span className="font-mono text-xs text-zinc-300 tracking-wider uppercase block mb-3 font-semibold">
          [ TECH STACK &amp; CAPABILITIES ]
        </span>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          {categories.map((cat) => (
            <div
              key={cat.number}
              className="p-7 rounded-xl bg-surface/50 border border-border-line hover:border-zinc-500 transition-all duration-200 flex flex-col justify-between space-y-5 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-accent font-semibold px-2.5 py-0.5 rounded bg-surface border border-border-line inline-block shadow-sm">
                    {cat.number}
                  </span>
                  <span className="font-mono text-xs text-zinc-500 group-hover:text-zinc-300 transition-colors">
                    STACK &amp; TOOLS
                  </span>
                </div>

                <h3 className="font-serif text-2xl text-zinc-100 font-medium group-hover:text-white transition-colors">
                  {cat.title}
                </h3>

                <p className="font-sans text-sm text-muted leading-relaxed">
                  {cat.description}
                </p>
              </div>

              {/* Skills Chips */}
              <div className="pt-2 flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-[11px] text-zinc-300 bg-ink/70 border border-border-line px-2.5 py-1 rounded hover:border-accent/50 hover:bg-accent/10 hover:text-accent hover:scale-105 transition-all duration-200 cursor-default select-none shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

