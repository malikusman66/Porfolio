import { motion } from "framer-motion";
import { ArrowUpRight, Code2, Github, Layers3 } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Quickshow Movie App",
    type: "WEB APPLICATION",
    description: "A movie discovery and ticket-booking experience focused on intuitive browsing, clear show information and a smooth seat-selection journey.",
    stack: ["React", "JavaScript", "Tailwind CSS", "Vite"],
    image: "https://images.unsplash.com/photo-1489599849927-2ee91 hadf?auto=format&fit=crop&w=1200&q=85",
    href: "https://github.com/malikusman66",
    featured: true,
  },
  {
    number: "02",
    title: "Frontend Experiments",
    type: "UI ENGINEERING",
    description: "A growing collection of interface work, reusable components and practical frontend explorations built while sharpening my development craft.",
    stack: ["React", "TypeScript", "CSS", "Framer Motion"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=85",
    href: "https://github.com/malikusman66",
    featured: false,
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="section-shell px-5 py-28 text-white sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="section-kicker"><Layers3 size={15} /> SELECTED WORK</p>
            <h2 className="section-heading mt-5">Things I've <span className="text-zinc-500">worked on.</span></h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-zinc-400">A snapshot of the interfaces and products I enjoy building. More projects and code are available on GitHub.</p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article key={project.number} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .15 }} transition={{ duration: .55, delay: index * .08 }} className="project-tile group overflow-hidden rounded-[1.6rem] border border-white/[.09] bg-[#101010]">
              <div className="project-image-wrap relative aspect-[16/10] overflow-hidden bg-[#191919]">
                <img src={project.image.replace("1489599849927-2ee91 hadf", "1489599849927-2ee91c529a31")} alt="" loading="lazy" className="h-full w-full object-cover opacity-70 transition duration-700 group-hover:scale-105 group-hover:opacity-90" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101010] via-transparent to-black/10" />
                <span className="absolute left-6 top-6 rounded-full border border-white/15 bg-black/40 px-3 py-1.5 font-mono text-[10px] tracking-[.18em] text-zinc-200">{project.type}</span>
                <span className="absolute bottom-5 right-6 font-mono text-sm text-white/60">{project.number}</span>
              </div>
              <div className="p-7 sm:p-8">
                <h3 className="text-2xl font-semibold tracking-tight">{project.title}</h3>
                <p className="mt-4 min-h-[4.5rem] text-sm leading-7 text-zinc-400">{project.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">{project.stack.map((tech) => <span key={tech} className="rounded-full border border-white/10 px-3 py-1.5 font-mono text-[10px] text-zinc-400">{tech}</span>)}</div>
                <a href={project.href} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-zinc-400">Explore on GitHub <ArrowUpRight size={16} /></a>
              </div>
            </motion.article>
          ))}
        </div>
        <div className="mt-10 flex justify-center"><a href="https://github.com/malikusman66" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-zinc-300 transition hover:border-white/40 hover:text-white"><Github size={17} /> More on GitHub <ArrowUpRight size={16} /></a></div>
      </div>
    </section>
  );
}