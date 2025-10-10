import { motion } from "framer-motion";
import { 
  Wrench, 
  Monitor, 
  Palette, 
  Code, 
  Database, 
  Smartphone,
  GitBranch,
  Figma,
} from "lucide-react";
import ScrollReveal from "@/components/ui/scroll-reveal";

export default function SkillsSection() {
  const skills = [
    { name: "React.js", level: 90, icon: "⚛️", color: "primary" },
    { name: "TypeScript", level: 85, icon: "📘", color: "secondary" },
    { name: "Next.js", level: 88, icon: "▲", color: "accent" },
    { name: "Tailwind CSS", level: 92, icon: "🎨", color: "primary" },
    { name: "Vue.js", level: 75, icon: "💚", color: "secondary" },
    { name: "Git & GitHub", level: 85, icon: "🔧", color: "accent" },
    { name: "Figma", level: 80, icon: "🎨", color: "primary" },
    { name: "Responsive Design", level: 95, icon: "📱", color: "secondary" },
  ];

  const additionalTechs = [
    "Redux", "GraphQL", "REST APIs", "Webpack", "Vite", "Jest",
    "Cypress", "Docker", "MongoDB", "PostgreSQL", "Firebase",
    "Vercel", "AWS", "CI/CD", "Storybook", "Framer Motion"
  ];

  const CircularProgress = ({ skill }: { skill: typeof skills[0] }) => {
    const radius = 54;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (skill.level / 100) * circumference;

    return (
      <ScrollReveal>
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="gradient-border p-6 rounded-2xl text-center"
        >
          <div className="relative w-32 h-32 mx-auto mb-4">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
              <circle
                cx="60"
                cy="60"
                r={radius}
                fill="none"
                stroke="hsl(0, 0%, 15%)"
                strokeWidth="8"
              />
              <motion.circle
                cx="60"
                cy="60"
                r={radius}
                fill="none"
                strokeWidth="8"
                strokeDasharray={circumference}
                strokeDashoffset={circumference}
                strokeLinecap="round"
                stroke="url(#gradient)"
                initial={{ strokeDashoffset: circumference }}
                whileInView={{ strokeDashoffset }}
                transition={{ duration: 1.5, delay: 0.5 }}
                viewport={{ once: true }}
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="hsl(0, 0%, 100%)" stopOpacity="1" />
                  <stop offset="50%" stopColor="hsl(0, 0%, 70%)" stopOpacity="1" />
                  <stop offset="100%" stopColor="hsl(0, 0%, 50%)" stopOpacity="1" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-4xl">{skill.icon}</span>
            </div>
          </div>
          <h3 className="text-xl font-bold mb-2 text-foreground">{skill.name}</h3>
          <p className="text-primary font-mono text-sm">
            {skill.level >= 90 ? "Expert" : skill.level >= 80 ? "Advanced" : "Intermediate"}
          </p>
        </motion.div>
      </ScrollReveal>
    );
  };

  return (
    <section id="skills" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-secondary/10 rounded-full text-sm font-mono text-secondary mb-4">
              <Wrench className="inline mr-2" size={16} />
              Technical Skills
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6">
              <span className="gradient-text">Tech Stack</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>
        </ScrollReveal>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skills.map((skill) => (
            <CircularProgress key={skill.name} skill={skill} />
          ))}
        </div>

        {/* Additional Skills */}
        <ScrollReveal>
          <div className="gradient-border p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-6 text-center gradient-text">Additional Technologies</h3>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-3"
            >
              {additionalTechs.map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1 }}
                  className="tech-badge px-4 py-2 bg-muted rounded-lg text-sm font-mono text-foreground cursor-default"
                  data-testid={`tech-${tech.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
