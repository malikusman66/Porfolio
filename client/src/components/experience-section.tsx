import { motion } from "framer-motion";
import { ArrowUpRight, Code2, Database } from "lucide-react";

const roles = [
  { period: "CURRENT", role: "Census Engineer & Frontend Developer", kind: "Engineering / Operations", icon: Code2, points: ["Contribute to frontend development and improve user-facing application workflows.", "Support census data operations across connected systems, with a focus on accurate and timely updates.", "Coordinate with cross-functional teams to investigate issues and keep operational processes moving."] },
  { period: "ONGOING", role: "Independent Frontend Projects", kind: "Personal development", icon: Database, points: ["Build React-based applications to strengthen component design, state management and API integration skills.", "Practice responsive layouts, reusable UI patterns and accessible interactions.", "Iterate on projects through debugging, refinement and deployment preparation."] },
];

export default function ExperienceSection() {
  return <section id="experience" className="section-wrap bg-[#080808]"><div className="section-inner">
    <div className="mb-14"><p className="eyebrow">02 / EXPERIENCE</p><h2 className="section-title">Where I make <span className="text-zinc-600">an impact.</span></h2></div>
    <div className="space-y-4">{roles.map((role, index) => { const Icon = role.icon; return <motion.article key={role.role} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .1 }} className="grid gap-6 rounded-2xl border border-white/[.08] bg-[#101010] p-7 sm:p-9 md:grid-cols-[.35fr_1fr]"><div><span className="font-mono text-[10px] tracking-[.2em] text-zinc-500">{role.period}</span><div className="mt-5 inline-flex rounded-xl border border-white/10 bg-white/[.03] p-3 text-zinc-400"><Icon size={21}/></div></div><div><div className="flex flex-wrap items-center justify-between gap-3"><div><h3 className="text-xl font-semibold text-white sm:text-2xl">{role.role}</h3><p className="mt-1 text-xs text-zinc-500">{role.kind}</p></div><ArrowUpRight className="text-zinc-600" size={18}/></div><ul className="mt-6 space-y-3">{role.points.map(point => <li key={point} className="flex gap-3 text-sm leading-7 text-zinc-400"><span className="mt-3 h-1 w-1 shrink-0 rounded-full bg-zinc-500"/>{point}</li>)}</ul></div></motion.article>; })}</div>
  </div></section>;
}
