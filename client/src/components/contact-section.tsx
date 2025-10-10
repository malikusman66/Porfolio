import { useState } from "react";
import { motion } from "framer-motion";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  Github,
  Linkedin,
  Twitter,
  ExternalLink,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import ScrollReveal from "@/components/ui/scroll-reveal";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactSection() {
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: (data: ContactFormData) =>
      apiRequest("POST", "/api/contact", data),
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      form.reset();
    },
    onError: (error: Error) => {
      toast({
        title: "Failed to send message",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    mutation.mutate(data);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "hello@Usman.dev",
      link: "mailto:hello@Usman.dev",
      color: "primary",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "San Francisco, CA",
      color: "secondary",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (234) 567-890",
      link: "tel:+1234567890",
      color: "accent",
    },
  ];

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: ExternalLink, href: "#", label: "Portfolio" },
    { icon: MessageCircle, href: "#", label: "Discord" },
  ];

  return (
    <section
      id="contact"
      className="py-20 md:py-32 bg-gradient-to-b from-muted/20 to-background"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-accent/10 rounded-full text-sm font-mono text-accent mb-4">
              <Mail className="inline mr-2" size={16} />
              Get In Touch
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6">
              <span className="gradient-text">Let's Work Together</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind? Let's discuss how I can help bring your
              ideas to life
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <ScrollReveal>
            <div className="gradient-border p-8 rounded-2xl">
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <div>
                  <Label
                    htmlFor="name"
                    className="block text-sm font-semibold mb-2 text-foreground"
                  >
                    Name
                  </Label>
                  <Input
                    id="name"
                    data-testid="input-name"
                    placeholder="Usman Nawaz"
                    className="w-full px-4 py-3 bg-muted border-2 border-border rounded-lg text-foreground placeholder-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                    {...form.register("name")}
                  />
                  {form.formState.errors.name && (
                    <p className="text-destructive text-sm mt-1">
                      {form.formState.errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label
                    htmlFor="email"
                    className="block text-sm font-semibold mb-2 text-foreground"
                  >
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    data-testid="input-email"
                    placeholder="usmannawaz0304@gmail.com"
                    className="w-full px-4 py-3 bg-muted border-2 border-border rounded-lg text-foreground placeholder-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                    {...form.register("email")}
                  />
                  {form.formState.errors.email && (
                    <p className="text-destructive text-sm mt-1">
                      {form.formState.errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label
                    htmlFor="subject"
                    className="block text-sm font-semibold mb-2 text-foreground"
                  >
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    data-testid="input-subject"
                    placeholder="Project Inquiry"
                    className="w-full px-4 py-3 bg-muted border-2 border-border rounded-lg text-foreground placeholder-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                    {...form.register("subject")}
                  />
                  {form.formState.errors.subject && (
                    <p className="text-destructive text-sm mt-1">
                      {form.formState.errors.subject.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label
                    htmlFor="message"
                    className="block text-sm font-semibold mb-2 text-foreground"
                  >
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    rows={6}
                    data-testid="textarea-message"
                    placeholder="Tell me about your project..."
                    className="w-full px-4 py-3 bg-muted border-2 border-border rounded-lg text-foreground placeholder-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 resize-none"
                    {...form.register("message")}
                  />
                  {form.formState.errors.message && (
                    <p className="text-destructive text-sm mt-1">
                      {form.formState.errors.message.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  data-testid="button-send-message"
                  disabled={mutation.isPending}
                  className="btn-primary w-full px-8 py-4 rounded-lg text-primary-foreground font-semibold inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {mutation.isPending ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </ScrollReveal>

          {/* Contact Info & Social */}
          <div className="space-y-8">
            {/* Contact Info Cards */}
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <ScrollReveal key={info.title}>
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="gradient-border p-6 rounded-2xl"
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`flex-shrink-0 w-12 h-12 bg-${info.color}/20 rounded-lg flex items-center justify-center`}
                      >
                        <IconComponent
                          className={`text-${info.color} text-xl`}
                          size={24}
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-1 text-foreground">
                          {info.title}
                        </h3>
                        {info.link ? (
                          <a
                            href={info.link}
                            data-testid={`link-${info.title.toLowerCase()}`}
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{info.value}</p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                </ScrollReveal>
              );
            })}

            {/* Social Links */}
            <ScrollReveal>
              <div className="gradient-border p-8 rounded-2xl">
                <h3 className="text-xl font-bold mb-6 text-center text-foreground">
                  Connect With Me
                </h3>
                <div className="flex justify-center gap-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        data-testid={`social-${social.label.toLowerCase()}`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        whileHover={{ y: -4, scale: 1.1 }}
                        viewport={{ once: true }}
                        className="social-icon w-12 h-12 bg-muted rounded-lg flex items-center justify-center text-foreground text-xl hover:text-primary transition-colors"
                      >
                        <IconComponent size={20} />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
