import { motion } from "framer-motion";
import { Code2, Database, Workflow } from "lucide-react";

const highlights = [
  { icon: Code2, title: "Frontend engineering", text: "Building responsive, accessible and maintainable interfaces with a focus on usability and detail." },
  { icon: Database, title: "Census operations", text: "Working with operational data, facility workflows and record accuracy across connected systems." },
  { icon: Workflow, title: "Problem solving", text: "Connecting product requirements with practical solutions, clear communication and reliable execution." },
];

export default function AboutSection() {
  return (
    <section id="about" className="section-wrap">
      <div className="section-inner">
        <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr]">
          <div><p className="eyebrow">01 / A LITTLE ABOUT ME</p><h2 className="section-title">Code with purpose.<br /><span className="text-zinc-600">Details with care.</span></h2></div>
          <div>
            <p className="text-lg leading-9 text-zinc-300">I'm a frontend developer who enjoys turning ideas into clear, useful digital experiences. I care about the details users notice — layout, responsiveness, accessibility and performance — as much as the code behind them.</p>
            <p className="mt-6 text-sm leading-8 text-zinc-500">Alongside frontend development, I contribute to census engineering and data operations. That work has strengthened my attention to detail, ownership and ability to work with complex, real-world workflows.</p>
          </div>
        </div>
        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {highlights.map((item, index) => { const Icon = item.icon; return <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .1 }} className="skill-panel"><Icon className="text-zinc-400" size={22} /><h3 className="mt-6 text-lg font-semibold text-white">{item.title}</h3><p className="mt-3 text-sm leading-7 text-zinc-500">{item.text}</p></motion.div>; })}
        </div>
      </div>
    </section>
  );
}
