import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Send, Instagram, Facebook, Twitter, Linkedin } from "lucide-react";
import CountdownTimer from "@/components/CountdownTimer";
import heroBg from "@/assets/hero-bg.jpeg";

const ComingSoon = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "You're on the list!",
      description: "We'll notify you when we launch.",
    });

    setEmail("");
    setIsSubmitting(false);
  };

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Overlay gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
      
      {/* Animated particles / stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/60 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container px-6 py-12">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo / Name */}
          <div className="mb-8 animate-fade-up opacity-0" style={{ animationDelay: '0.2s' }}>
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-wider">
              <span className="text-primary text-glow">KALYAN</span>
              <span className="text-foreground"> BASNET</span>
            </h2>
          </div>

          {/* Main Heading */}
          <h1 
            className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black mb-6 animate-fade-up opacity-0"
            style={{ animationDelay: '0.4s' }}
          >
            <span className="text-foreground">COMING</span>
            <br />
            <span className="text-primary text-glow">SOON</span>
          </h1>

          {/* Subtitle */}
          <p 
            className="text-muted-foreground text-lg sm:text-xl md:text-2xl mb-12 max-w-2xl mx-auto font-light animate-fade-up opacity-0"
            style={{ animationDelay: '0.6s' }}
          >
            Something extraordinary is on the horizon. Get ready for an experience that will redefine possibilities.
          </p>

          {/* Countdown Timer */}
          <div 
            className="mb-16 animate-fade-up opacity-0"
            style={{ animationDelay: '0.8s' }}
          >
            <CountdownTimer />
          </div>

          {/* Email Subscription */}
          <div 
            className="max-w-md mx-auto mb-12 animate-fade-up opacity-0"
            style={{ animationDelay: '1s' }}
          >
            <p className="text-sm text-muted-foreground mb-4 uppercase tracking-widest">
              Be the first to know
            </p>
            <form onSubmit={handleSubmit} className="flex gap-3">
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 h-12 bg-secondary/50 border-border/50 focus:border-primary backdrop-blur-sm text-foreground placeholder:text-muted-foreground"
              />
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="h-12 px-6 bg-primary text-primary-foreground font-semibold hover:scale-105 transition-transform duration-300 neon-border"
              >
                {isSubmitting ? (
                  <span className="animate-pulse">...</span>
                ) : (
                  <Send className="w-5 h-5" />
                )}
              </Button>
            </form>
          </div>

          {/* Social Links */}
          <div 
            className="flex items-center justify-center gap-4 animate-fade-up opacity-0"
            style={{ animationDelay: '1.2s' }}
          >
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="p-3 rounded-full bg-secondary/50 backdrop-blur-sm text-muted-foreground hover:text-primary hover:bg-secondary hover:neon-border transition-all duration-300 hover:scale-110"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Domain */}
          <p 
            className="mt-12 text-xs text-muted-foreground/60 tracking-widest animate-fade-up opacity-0"
            style={{ animationDelay: '1.4s' }}
          >
            www.kalyanbasnet.com.np
          </p>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
