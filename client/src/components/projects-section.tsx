import { motion } from "framer-motion";
import { ArrowUpRight, Github, Clapperboard, Utensils, CheckSquare, Gamepad2 } from "lucide-react";

const projects = [
  { title: "Quickshow Movie App", type: "MOVIE DISCOVERY & BOOKING", description: "A movie-focused web experience built around discovering titles, exploring show details and moving through a streamlined booking flow.", stack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"], icon: Clapperboard },
  { title: "Food App", type: "FOOD & DISCOVERY", description: "A responsive food application interface, developed to practice component-driven UI, reusable layouts and a smooth browsing experience.", stack: ["React", "Vite", "CSS"], icon: Utensils },
  { title: "Task Tracker", type: "PRODUCTIVITY", description: "A task management project focused on organizing everyday work and practicing frontend-to-API integration.", stack: ["React", "REST API", "JavaScript"], icon: CheckSquare },
  { title: "Space Invaders", type: "INTERACTIVE GAME", description: "A browser-based arcade game with player controls, scoring, lives and a restart flow.", stack: ["JavaScript", "HTML Canvas", "CSS"], icon: Gamepad2 },
];

export default function ProjectsSection() {
  return <section id="projects" className="section-wrap"><div className="section-inner">
    <div className="mb-14 flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="eyebrow">03 / SELECTED WORK</p><h2 className="section-title">Things I've <span className="text-zinc-600">built.</span></h2></div><p className="max-w-sm text-sm leading-7 text-zinc-500">A selection of personal projects and experiments that reflect how I approach frontend development.</p></div>
    <div className="grid gap-5 lg:grid-cols-2">{projects.map((project, index) => { const Icon = project.icon; return <motion.article key={project.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .08 }} className="project-panel group">
      <div className="project-art"><div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,#353535,transparent_58%)]"/><div className="relative z-10 flex h-full flex-col items-center justify-center"><div className="rounded-2xl border border-white/10 bg-black/30 p-6 shadow-2xl transition duration-500 group-hover:-translate-y-2 group-hover:scale-105"><Icon size={52} strokeWidth={1}/></div><span className="mt-6 font-mono text-[10px] tracking-[.3em] text-zinc-600">{project.type}</span></div><span className="absolute right-6 top-5 font-mono text-xs text-zinc-600">0{index + 1}</span></div>
      <div className="p-7 sm:p-8"><p className="eyebrow !mb-3">{project.type}</p><h3 className="text-2xl font-semibold tracking-tight text-white">{project.title}</h3><p className="mt-4 text-sm leading-7 text-zinc-500">{project.description}</p><div className="mt-6 flex flex-wrap gap-2">{project.stack.map(tag => <span key={tag} className="rounded-full border border-white/10 px-3 py-1.5 font-mono text-[10px] text-zinc-400">{tag}</span>)}</div><a href="https://github.com/malikusman66?tab=repositories" target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 text-xs font-semibold text-zinc-300 transition hover:text-white">Explore code on GitHub <Github size={14}/></a>
    </div></motion.article>; })}</div>
    <div className="mt-9 text-center"><a href="https://github.com/malikusman66?tab=repositories" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-zinc-400 transition hover:text-white">Explore all GitHub repositories <ArrowUpRight size={16}/></a></div>
  </div></section>;
}
