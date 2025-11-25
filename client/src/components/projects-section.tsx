import { motion } from "framer-motion";
import { ExternalLink, Github, Code, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ui/scroll-reveal";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Quickshow Movie App",
      description:
        "A modern movie streaming platform with real-time search, personalized recommendations, and seamless playback. Built with React and integrated with TMDB API for comprehensive movie data.",
      image:
        "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      featured: true,
      tech: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "React Query",
        "Zustand",
        "Framer Motion",
      ],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "E-Commerce Dashboard",
      description:
        "Admin dashboard for managing products, orders, and analytics with real-time updates and interactive charts.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
      tech: ["Next.js", "Chart.js", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Task Flow Pro",
      description:
        "Collaborative task management tool with drag-and-drop functionality, real-time collaboration, and team analytics.",
      image:
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
      tech: ["React", "DnD Kit", "Socket.io"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "SocialHub Connect",
      description:
        "Modern social platform with real-time messaging, stories feature, and advanced content recommendation algorithm.",
      image:
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
      tech: ["Vue.js", "Firebase", "WebRTC"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "WeatherWise",
      description:
        "Beautiful weather application with location-based forecasts, interactive maps, and weather alerts.",
      image:
        "https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
      tech: ["React Native", "Expo", "OpenWeather API"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 md:py-32 bg-gradient-to-b from-background to-muted/20"
      style={{
        background:
          "linear-gradient(-45deg, #ff7e5f, #feb47b, #86fde8, #00c6ff)",
        backgroundSize: "400% 400%",
        animation: "gradientAnimation 15s ease infinite",
        color: "black",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-sm font-mono text-primary mb-4">
              <Code className="inline mr-2" size={16} />
              Featured Work
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6">
              <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A collection of my recent work showcasing my skills in frontend
              development
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Featured Project - Quickshow */}
          <ScrollReveal>
            <div className="lg:col-span-2">
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="project-card gradient-border p-8 rounded-2xl"
              >
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <img
                      src={projects[0].image}
                      alt="Quickshow Movie App Interface"
                      className="rounded-xl shadow-2xl w-full"
                    />
                  </div>
                  <div>
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-mono mb-2">
                        FEATURED PROJECT
                      </span>
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
                      {projects[0].title}
                    </h3>
                    <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                      {projects[0].description}
                    </p>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {projects[0].tech.map((tech) => (
                          <span
                            key={tech}
                            className="tech-badge px-3 py-1 bg-muted rounded-lg text-sm font-mono text-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4">
                      <Button
                        data-testid="button-live-demo"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                      >
                        <ExternalLink size={18} />
                        Live Demo
                      </Button>
                      <Button
                        variant="outline"
                        data-testid="button-view-code"
                        className="inline-flex items-center gap-2 px-6 py-3 border-2 border-border text-foreground rounded-lg font-semibold hover:border-primary hover:text-primary transition-colors"
                      >
                        <Github size={18} />
                        View Code
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </ScrollReveal>

          {/* Other Projects */}
          {projects.slice(1).map((project, index) => (
            <ScrollReveal key={project.title}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="project-card gradient-border p-6 rounded-2xl h-full"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-lg mb-6 w-full h-48 object-cover"
                />
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="tech-badge px-3 py-1 bg-muted rounded-lg text-xs font-mono text-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={project.liveUrl}
                      data-testid={`link-demo-${index}`}
                      className="text-primary hover:text-primary/80 font-semibold text-sm inline-flex items-center gap-1"
                    >
                      <ExternalLink size={14} />
                      Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      data-testid={`link-code-${index}`}
                      className="text-foreground hover:text-primary font-semibold text-sm inline-flex items-center gap-1"
                    >
                      <Github size={14} />
                      Code
                    </a>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="text-center mt-12">
            <Button
              variant="outline"
              data-testid="button-view-all-projects"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              View All Projects
              <ArrowRight size={18} />
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
