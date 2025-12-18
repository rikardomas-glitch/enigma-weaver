import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import GlowOrb from './GlowOrb';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

  const stats = [
    { value: '∞', label: 'Possibilities' },
    { value: '0ms', label: 'Latency' },
    { value: '100%', label: 'Secure' },
  ];

  return (
    <section id="about" ref={sectionRef} className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Orbs */}
      <GlowOrb color="purple" size="lg" className="-left-48 top-1/2" />
      <GlowOrb color="cyan" size="md" className="right-0 top-1/4" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Visual Element */}
          <div
            className={cn(
              'relative transition-all duration-1000',
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            )}
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full border-2 border-glow-cyan/20 animate-orbit" />
              
              {/* Middle ring */}
              <div className="absolute inset-8 rounded-full border border-glow-purple/30" style={{ animation: 'orbitSlow 15s linear infinite reverse' }} />
              
              {/* Inner glow */}
              <div className="absolute inset-16 rounded-full bg-gradient-to-br from-glow-cyan/20 via-glow-purple/10 to-transparent backdrop-blur-sm" />
              
              {/* Center orb */}
              <div className="absolute inset-24 rounded-full bg-gradient-to-br from-glow-cyan to-glow-purple animate-breathe">
                <div className="absolute inset-0 rounded-full bg-glow-cyan/30 blur-2xl" />
              </div>

              {/* Floating elements */}
              <div className="absolute top-1/4 left-0 w-4 h-4 rounded-full bg-glow-pink animate-float" style={{ animationDelay: '0s' }} />
              <div className="absolute top-1/2 right-0 w-3 h-3 rounded-full bg-glow-cyan animate-float" style={{ animationDelay: '1s' }} />
              <div className="absolute bottom-1/4 left-1/4 w-2 h-2 rounded-full bg-glow-purple animate-float" style={{ animationDelay: '2s' }} />
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <span
              className={cn(
                'inline-block px-4 py-2 rounded-full glass text-xs font-mono text-muted-foreground tracking-widest uppercase mb-6 transition-all duration-700',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              )}
            >
              The Essence
            </span>

            <h2
              className={cn(
                'text-4xl md:text-5xl font-bold mb-6 transition-all duration-700 delay-100',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              )}
            >
              <span className="text-foreground">Where </span>
              <span className="text-gradient">Mystery</span>
              <br />
              <span className="text-foreground">Meets </span>
              <span className="text-gradient-accent">Innovation</span>
            </h2>

            <p
              className={cn(
                'text-lg text-muted-foreground mb-8 leading-relaxed transition-all duration-700 delay-200',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              )}
            >
              Forcend exists at the intersection of the known and the unknowable. 
              We craft experiences that transcend ordinary digital boundaries, 
              inviting you to explore realms previously unimagined.
            </p>

            <p
              className={cn(
                'text-muted-foreground mb-12 leading-relaxed transition-all duration-700 delay-300',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              )}
            >
              Our technology doesn't just respond—it anticipates. It doesn't just process—it understands. 
              Enter a space where every interaction reveals something new about what's possible.
            </p>

            {/* Stats */}
            <div
              className={cn(
                'grid grid-cols-3 gap-6 transition-all duration-700 delay-400',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              )}
            >
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="text-center p-4 rounded-2xl glass"
                  style={{ transitionDelay: `${500 + index * 100}ms` }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                    {stat.value}
                  </div>
                  <div className="text-xs font-mono text-muted-foreground tracking-wider uppercase">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
