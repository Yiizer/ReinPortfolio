export default function TechStack() {
  const categories = [
    {
      number: "01",
      title: "Frontend & Interfaces",
      description:
        "Building responsive, accessible, and high-performance user interfaces with clean modular architecture.",
      skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "HTML5 / CSS3", "Responsive Design"],
    },
    {
      number: "02",
      title: "Backend & Systems",
      description:
        "Architecting secure server-side logic, real-time database synchronizations, and scalable REST APIs.",
      skills: ["Node.js", "Express", "PostgreSQL", "Supabase", "Firebase", "REST APIs"],
    },
    {
      number: "03",
      title: "3D & Creative Engineering",
      description:
        "Developing immersive spatial experiences, augmented reality simulations, and native mobile apps.",
      skills: ["Unity 3D", "C#", "AR Foundation", "Android SDK", "Hardware & Arduino", "Interactive 3D"],
    },
    {
      number: "04",
      title: "Tooling & Workflow",
      description:
        "Leveraging modern developer workflows, strict version control, and rapid prototyping environments.",
      skills: ["Git & GitHub", "VS Code", "Figma", "Postman", "Vercel / Cloud Hosting", "Turbopack"],
    },
  ];

  return (
    <section id="stack" className="py-24 border-b border-border-line">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        {/* Section Tag */}
        <span className="font-mono text-xs text-zinc-300 tracking-wider uppercase block mb-3 font-semibold">
          [ TECH STACK &amp; CAPABILITIES ]
        </span>

        {/* Lead Statement */}
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-zinc-100 font-normal leading-snug max-w-3xl mb-14">
          &ldquo;Engineering scalable software from intuitive interfaces to resilient backend systems.&rdquo;
        </h2>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          {categories.map((cat) => (
            <div
              key={cat.number}
              className="p-7 rounded-xl bg-surface/50 border border-border-line hover:border-zinc-500 transition-all duration-200 flex flex-col justify-between space-y-5 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-zinc-300 font-semibold px-2.5 py-0.5 rounded bg-zinc-800/80 border border-zinc-700 inline-block shadow-sm">
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
                    className="font-mono text-[11px] text-zinc-300 bg-ink/70 border border-border-line px-2.5 py-1 rounded group-hover:border-zinc-700 transition-colors"
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

