import { useEffect, useRef, useState } from 'react';
import { Send, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const sectionRef = useRef<HTMLElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Message received",
        description: "We'll be in touch from the other side.",
      });
      setEmail('');
    }
  };

  const links = [
    { name: 'Twitter', href: '#' },
    { name: 'Discord', href: '#' },
    { name: 'GitHub', href: '#' },
  ];

  return (
    <section id="contact" ref={sectionRef} className="relative py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <span
            className={cn(
              'inline-block px-4 py-2 rounded-full glass text-xs font-mono text-muted-foreground tracking-widest uppercase mb-6 transition-all duration-700',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            )}
          >
            Connect
          </span>

          <h2
            className={cn(
              'text-4xl md:text-5xl lg:text-6xl font-bold mb-6 transition-all duration-700 delay-100',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            )}
          >
            <span className="text-foreground">Enter the </span>
            <span className="text-gradient">Nexus</span>
          </h2>

          <p
            className={cn(
              'text-lg text-muted-foreground mb-12 transition-all duration-700 delay-200',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            )}
          >
            Ready to transcend? Leave your coordinates and we'll find you.
          </p>

          {/* Email Form */}
          <form
            onSubmit={handleSubmit}
            className={cn(
              'relative max-w-md mx-auto mb-16 transition-all duration-700 delay-300',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            )}
          >
            <div className="relative group">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full px-6 py-4 pr-14 rounded-2xl bg-muted/50 border border-border focus:border-glow-cyan/50 focus:outline-none focus:ring-2 focus:ring-glow-cyan/20 text-foreground placeholder:text-muted-foreground transition-all duration-300"
                required
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl bg-gradient-to-r from-glow-cyan to-glow-purple flex items-center justify-center hover:scale-105 transition-transform"
              >
                <Send className="w-4 h-4 text-background" />
              </button>
              
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-glow-cyan/10 blur-xl opacity-0 group-focus-within:opacity-100 transition-opacity -z-10" />
            </div>
          </form>

          {/* Social Links */}
          <div
            className={cn(
              'flex items-center justify-center gap-6 transition-all duration-700 delay-400',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            )}
          >
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="group flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.name}
                <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
