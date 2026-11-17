import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Work" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = navItems.map(item => document.getElementById(item.id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) setActiveSection(entry.target.id); });
    }, { threshold: 0.25, rootMargin: "-20% 0px -55% 0px" });
    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const goTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[.07] bg-[#080808]/80 backdrop-blur-2xl">
      <nav className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12" aria-label="Main navigation">
        <button onClick={() => goTo("home")} className="flex items-center gap-3" aria-label="Go to home">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 bg-white/[.06] text-xs font-bold tracking-tight text-white">UN</span>
          <span className="text-sm font-semibold tracking-wide text-white">Usman Nawaz<span className="text-zinc-500">.</span></span>
        </button>
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map(item => <button key={item.id} onClick={() => goTo(item.id)} className={`rounded-full px-4 py-2 text-xs font-medium transition ${activeSection === item.id ? "bg-white/10 text-white" : "text-zinc-500 hover:text-white"}`}>{item.label}</button>)}
        </div>
        <a href="https://github.com/malikusman66" target="_blank" rel="noreferrer" className="hidden items-center gap-2 rounded-full border border-white/15 px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-white hover:text-black md:inline-flex">GitHub <ArrowUpRight size={14} /></a>
        <button onClick={() => setIsOpen(value => !value)} className="rounded-lg border border-white/10 p-2 text-white md:hidden" aria-label={isOpen ? "Close menu" : "Open menu"} aria-expanded={isOpen}>{isOpen ? <X size={20} /> : <Menu size={20} />}</button>
      </nav>
      <AnimatePresence>
        {isOpen && <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden border-t border-white/[.07] bg-[#080808] md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4 sm:px-8">{navItems.map(item => <button key={item.id} onClick={() => goTo(item.id)} className={`rounded-lg px-4 py-3 text-left text-sm ${activeSection === item.id ? "bg-white/10 text-white" : "text-zinc-400"}`}>{item.label}</button>)}
          <a href="https://github.com/malikusman66" target="_blank" rel="noreferrer" className="mt-2 flex items-center gap-2 px-4 py-3 text-sm text-white">GitHub <ArrowUpRight size={15} /></a></div>
        </motion.div>}
      </AnimatePresence>
    </header>
  );
}