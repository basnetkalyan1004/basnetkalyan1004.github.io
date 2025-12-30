import { Code2, Palette, Rocket, Zap } from "lucide-react";

const About = () => {
  const skills = [
    { icon: Code2, title: "Development", description: "Clean, efficient code with modern technologies" },
    { icon: Palette, title: "Design", description: "Beautiful, intuitive user interfaces" },
    { icon: Rocket, title: "Performance", description: "Fast, optimized web applications" },
    { icon: Zap, title: "Innovation", description: "Creative solutions to complex problems" },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />

      <div className="container relative z-10 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-2">About Me</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Passionate About Creating <span className="text-gradient">Digital Excellence</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              I'm a developer based in Nepal with a passion for building exceptional digital experiences. 
              I specialize in creating modern web applications that are both beautiful and functional.
            </p>
          </div>

          {/* Skills grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.title}
                className="group p-6 rounded-2xl card-gradient border border-border/50 hover:border-primary/30 transition-all duration-500 hover:scale-105 shadow-card hover:shadow-elevated"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <skill.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">{skill.title}</h3>
                <p className="text-muted-foreground text-sm">{skill.description}</p>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {[
              { value: "5+", label: "Years Experience" },
              { value: "50+", label: "Projects Completed" },
              { value: "30+", label: "Happy Clients" },
              { value: "100%", label: "Dedication" },
            ].map((stat, index) => (
              <div 
                key={stat.label} 
                className="text-center p-6"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <p className="font-display text-4xl md:text-5xl font-bold text-gradient mb-2">{stat.value}</p>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
