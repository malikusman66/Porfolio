import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Github, Mail, MapPin, Send, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email"),
  subject: z.string().min(5, "Please add a subject"),
  message: z.string().min(10, "Your message should be at least 10 characters"),
});
type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactSection() {
  const { toast } = useToast();
  const form = useForm<ContactFormData>({ resolver: zodResolver(contactSchema), defaultValues: { name: "", email: "", subject: "", message: "" } });
  const mutation = useMutation({
    mutationFn: (data: ContactFormData) => apiRequest("POST", "/api/contact", data),
    onSuccess: () => { toast({ title: "Message sent", description: "Thanks for reaching out. I'll get back to you soon." }); form.reset(); },
    onError: (error: Error) => toast({ title: "Couldn't send your message", description: error.message || "Please try again in a moment.", variant: "destructive" }),
  });

  return (
    <section id="contact" className="section-shell px-5 py-28 text-white sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-3xl">
          <p className="section-kicker"><Mail size={15} /> GET IN TOUCH</p>
          <h2 className="section-heading mt-5">Have something in <span className="text-zinc-500">mind?</span></h2>
          <p className="mt-6 max-w-xl text-sm leading-7 text-zinc-400">Have a project, an opportunity or just want to say hello? My inbox is open.</p>
        </div>
        <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div className="flex flex-col justify-between gap-10">
            <div className="space-y-7">
              <a href="mailto:usmannawaz0304@gmail.com" className="group flex items-start gap-4"><span className="rounded-xl border border-white/10 bg-white/[.04] p-3 text-zinc-300"><Mail size={19} /></span><span><span className="block text-xs text-zinc-500">EMAIL ME</span><span className="mt-1 block text-sm text-white transition group-hover:text-zinc-400">usmannawaz0304@gmail.com</span></span><ArrowUpRight size={16} className="ml-auto text-zinc-600 transition group-hover:text-white" /></a>
              <div className="flex items-start gap-4"><span className="rounded-xl border border-white/10 bg-white/[.04] p-3 text-zinc-300"><MapPin size={19} /></span><span><span className="block text-xs text-zinc-500">LOCATION</span><span className="mt-1 block text-sm text-white">Pakistan · Open to remote work</span></span></div>
            </div>
            <a href="https://github.com/malikusman66" target="_blank" rel="noreferrer" className="inline-flex w-fit items-center gap-3 rounded-full border border-white/15 px-5 py-3 text-sm text-zinc-300 transition hover:border-white/40 hover:text-white"><Github size={17} /> Follow my work <ArrowUpRight size={15} /></a>
          </div>
          <form onSubmit={form.handleSubmit(data => mutation.mutate(data))} className="rounded-[1.5rem] border border-white/10 bg-[#101010] p-6 sm:p-9">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2"><Label htmlFor="name" className="text-xs text-zinc-400">YOUR NAME</Label><Input id="name" placeholder="Your name" {...form.register("name")} className="h-12 border-white/10 bg-white/[.04] text-white placeholder:text-zinc-600 focus-visible:ring-white/30" />{form.formState.errors.name && <p className="text-xs text-red-400">{form.formState.errors.name.message}</p>}</div>
              <div className="space-y-2"><Label htmlFor="email" className="text-xs text-zinc-400">EMAIL ADDRESS</Label><Input id="email" type="email" placeholder="you@example.com" {...form.register("email")} className="h-12 border-white/10 bg-white/[.04] text-white placeholder:text-zinc-600 focus-visible:ring-white/30" />{form.formState.errors.email && <p className="text-xs text-red-400">{form.formState.errors.email.message}</p>}</div>
            </div>
            <div className="mt-5 space-y-2"><Label htmlFor="subject" className="text-xs text-zinc-400">SUBJECT</Label><Input id="subject" placeholder="What would you like to discuss?" {...form.register("subject")} className="h-12 border-white/10 bg-white/[.04] text-white placeholder:text-zinc-600 focus-visible:ring-white/30" />{form.formState.errors.subject && <p className="text-xs text-red-400">{form.formState.errors.subject.message}</p>}</div>
            <div className="mt-5 space-y-2"><Label htmlFor="message" className="text-xs text-zinc-400">MESSAGE</Label><Textarea id="message" rows={5} placeholder="Tell me a little about it..." {...form.register("message")} className="resize-none border-white/10 bg-white/[.04] text-white placeholder:text-zinc-600 focus-visible:ring-white/30" />{form.formState.errors.message && <p className="text-xs text-red-400">{form.formState.errors.message.message}</p>}</div>
            <Button type="submit" disabled={mutation.isPending} className="mt-6 h-12 w-full rounded-full bg-white font-semibold text-black hover:bg-zinc-200 disabled:opacity-50">{mutation.isPending ? "Sending..." : <>Send message <Send size={16} className="ml-2" /></>}</Button>
          </form>
        </div>
      </div>
    </section>
  );
}