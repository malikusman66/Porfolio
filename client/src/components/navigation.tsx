import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const items = [{ id: "home", label: "Home" }, { id: "about", label: "About" }, { id: "experience", label: "Experience" }, { id: "projects", label: "Work" }, { id: "skills", label: "Skills" }, { id: "contact", label: "Contact" }];

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  useEffect(() => {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) setActive(entry.target.id); }), { rootMargin: "-35% 0px -55% 0px" });
    items.forEach(item => { const node = document.getElementById(item.id); if (node) observer.observe(node); });
    return () => observer.disconnect();
  }, []);
  const go = (id: string) => { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); setOpen(false); };
  return <nav className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6"><div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between rounded-2xl border border-white/[.09] bg-[#090909]/85 px-5 shadow-2xl backdrop-blur-xl sm:px-7">
    <button onClick={() => go("home")} className="text-lg font-semibold tracking-[-.06em] text-white">UN<span className="text-zinc-600">.</span></button>
    <div className="hidden items-center gap-1 md:flex">{items.map(item => <button key={item.id} onClick={() => go(item.id)} className={`rounded-full px-3 py-2 text-xs transition lg:px-4 lg:text-sm ${active === item.id ? "bg-white/10 text-white" : "text-zinc-500 hover:text-white"}`}>{item.label}</button>)}</div>
    <a href="#contact" onClick={event => { event.preventDefault(); go("contact"); }} className="hidden items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs font-semibold text-black transition hover:bg-zinc-200 md:inline-flex">Let's talk <ArrowUpRight size={15}/></a>
    <button aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen(!open)} className="rounded-lg p-2 text-white md:hidden">{open ? <X/> : <Menu/>}</button>
  </div><AnimatePresence>{open && <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="mx-auto mt-2 max-w-7xl rounded-2xl border border-white/10 bg-[#101010] p-3 shadow-xl md:hidden">{items.map(item => <button key={item.id} onClick={() => go(item.id)} className="block w-full rounded-xl px-4 py-3 text-left text-sm text-zinc-300 hover:bg-white/5">{item.label}</button>)}</motion.div>}</AnimatePresence></nav>;
}
