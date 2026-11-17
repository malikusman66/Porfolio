import { motion } from "framer-motion";
import { Braces, Code2, Database, PanelsTopLeft, Workflow } from "lucide-react";

const groups = [
  { title: "Frontend", icon: PanelsTopLeft, items: ["React", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Responsive UI"] },
  { title: "Tools & workflow", icon: Workflow, items: ["Vite", "Git", "GitHub", "VS Code", "Figma", "REST APIs"] },
  { title: "Backend fundamentals", icon: Database, items: ["Node.js", "Express.js", "PostgreSQL", "API integration"] },
  { title: "Development practices", icon: Braces, items: ["Reusable components", "State management", "Debugging", "Performance", "Accessibility"] },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="section-shell border-y border-white/[.06] bg-[#0b0b0b] px-5 py-28 text-white sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-2xl">
          <p className="section-kicker"><Code2 size={15} /> WHAT I WORK WITH</p>
          <h2 className="section-heading mt-5">Tools of the <span className="text-zinc-500">trade.</span></h2>
          <p className="mt-6 text-sm leading-7 text-zinc-400">A practical toolkit for turning product ideas into responsive, maintainable web experiences.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {groups.map((group, index) => {
            const Icon = group.icon;
            return <motion.div key={group.title} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .5, delay: index * .07 }} className="rounded-2xl border border-white/[.08] bg-white/[.025] p-7 transition hover:border-white/20 hover:bg-white/[.04]">
              <div className="flex items-center gap-3"><span className="rounded-xl border border-white/10 bg-white/[.05] p-3 text-zinc-300"><Icon size={19} /></span><h3 className="text-lg font-semibold">{group.title}</h3></div>
              <div className="mt-7 flex flex-wrap gap-2">{group.items.map(item => <span key={item} className="rounded-lg bg-white/[.055] px-3 py-2 text-xs text-zinc-300">{item}</span>)}</div>
            </motion.div>;
          })}
        </div>
      </div>
    </section>
  );
}