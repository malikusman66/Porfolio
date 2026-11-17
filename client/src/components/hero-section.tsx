import { motion } from "framer-motion";
import { ArrowDownRight, Github, Sparkles } from "lucide-react";

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
};

export default function HeroSection() {
  return (
    <section id="home" className="hero-shell relative flex min-h-screen items-center overflow-hidden px-5 pb-20 pt-28 text-white sm:px-8 lg:px-12">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-orb hero-orb-one" aria-hidden="true" />
      <div className="hero-orb hero-orb-two" aria-hidden="true" />
      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1.25fr_.75fr]">
        <div>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6 }} className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[.04] px-4 py-2 text-xs font-medium tracking-[.18em] text-zinc-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,.8)]" />
            FRONTEND ENGINEERING · UI DEVELOPMENT
          </motion.div>
          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .1 }} className="mb-5 font-mono text-sm tracking-[.22em] text-zinc-500">HELLO, I'M</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .18, duration: .7 }} className="max-w-4xl text-6xl font-semibold leading-[.98] tracking-[-.07em] sm:text-7xl md:text-8xl xl:text-[104px]">
            Usman <span className="text-zinc-500">Nawaz.</span>
          </motion.h1>
          <motion.h2 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .3 }} className="mt-7 text-2xl font-medium tracking-tight text-zinc-200 sm:text-3xl">
            Frontend Engineer <span className="text-zinc-600"> & </span><br className="hidden sm:block" /> UI-focused Developer
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .4 }} className="mt-7 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
            I build thoughtful, responsive web experiences with clean interfaces and reliable functionality. I also work across census data workflows, helping keep real-world systems accurate and organized.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .5 }} className="mt-10 flex flex-wrap items-center gap-4">
            <button onClick={() => scrollTo("projects")} className="group inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-semibold text-black transition hover:bg-zinc-200">
              Explore my work <ArrowDownRight size={18} className="transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
            </button>
            <button onClick={() => scrollTo("contact")} className="rounded-full border border-white/15 px-7 py-4 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/[.05]">
              Let's talk
            </button>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .7 }} className="mt-12 flex items-center gap-5 text-zinc-500">
            <a href="https://github.com/malikusman66" target="_blank" rel="noreferrer" aria-label="GitHub" className="transition hover:text-white"><Github size={19} /></a>
            <span className="h-px w-12 bg-white/15" />
            <span className="text-xs tracking-[.16em]">BASED IN PAKISTAN</span>
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0, scale: .94, y: 18 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ delay: .35, duration: .8 }} className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-5 rounded-[2rem] border border-white/[.06]" />
          <div className="relative overflow-hidden rounded-[1.7rem] border border-white/10 bg-[#111] p-7 shadow-2xl shadow-black/50 sm:p-9">
            <div className="flex items-center justify-between border-b border-white/10 pb-6">
              <span className="font-mono text-xs tracking-[.18em] text-zinc-500">PROFILE / 001</span>
              <Sparkles size={17} className="text-zinc-400" />
            </div>
            <div className="py-10">
              <p className="font-mono text-xs tracking-[.2em] text-zinc-500">MY APPROACH</p>
              <p className="mt-5 text-4xl font-medium leading-tight tracking-[-.05em] text-white">Good design.<br /><span className="text-zinc-500">Solid engineering.</span></p>
              <p className="mt-6 text-sm leading-7 text-zinc-400">Turning ideas into accessible, intuitive and maintainable digital products.</p>
            </div>
            <div className="grid grid-cols-2 gap-3 border-t border-white/10 pt-6">
              <div><p className="text-2xl font-semibold text-white">UI</p><p className="mt-1 text-xs text-zinc-500">Frontend craft</p></div>
              <div><p className="text-2xl font-semibold text-white">DX</p><p className="mt-1 text-xs text-zinc-500">Clean workflows</p></div>
            </div>
          </div>
          <div className="absolute -bottom-5 -left-5 rounded-2xl border border-white/10 bg-[#171717] px-5 py-4 shadow-xl">
            <p className="font-mono text-[10px] tracking-[.18em] text-zinc-500">CURRENT FOCUS</p>
            <p className="mt-1 text-sm font-medium text-white">React · TypeScript · UI</p>
          </div>
        </motion.div>
      </div>
      <div className="pointer-events-none absolute bottom-7 right-8 hidden items-center gap-3 font-mono text-[10px] tracking-[.2em] text-zinc-600 lg:flex"><span>SCROLL TO EXPLORE</span><span className="h-px w-12 bg-zinc-700" /></div>
    </section>
  );
}