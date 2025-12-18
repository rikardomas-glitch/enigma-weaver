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
    { value: '???', label: 'Unknowns' },
    { value: '∞', label: 'Possibilities' },
    { value: '0', label: 'Certainties' },
  ];

  return (
    <section id="about" ref={sectionRef} className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Orbs */}
      <GlowOrb color="mint" size="lg" className="-left-48 top-1/2" />
      <GlowOrb color="lavender" size="md" className="right-0 top-1/4" />
      <GlowOrb color="rose" size="sm" className="left-1/3 bottom-0" />

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
              <div className="absolute inset-0 rounded-full border-2 border-glow-lavender/30 animate-orbit" />
              
              {/* Middle ring */}
              <div className="absolute inset-8 rounded-full border border-glow-mint/40" style={{ animation: 'orbitSlow 15s linear infinite reverse' }} />
              
              {/* Inner glow */}
              <div className="absolute inset-16 rounded-full bg-gradient-to-br from-glow-lavender/30 via-glow-mint/20 to-transparent backdrop-blur-sm" />
              
              {/* Center orb */}
              <div className="absolute inset-24 rounded-full bg-gradient-to-br from-glow-lavender to-glow-mint animate-breathe">
                <div className="absolute inset-0 rounded-full bg-glow-lavender/30 blur-2xl" />
              </div>

              {/* Floating elements */}
              <div className="absolute top-1/4 left-0 w-4 h-4 rounded-full bg-glow-rose animate-float" style={{ animationDelay: '0s' }} />
              <div className="absolute top-1/2 right-0 w-3 h-3 rounded-full bg-glow-lavender animate-float" style={{ animationDelay: '1s' }} />
              <div className="absolute bottom-1/4 left-1/4 w-2 h-2 rounded-full bg-glow-mint animate-float" style={{ animationDelay: '2s' }} />
              <div className="absolute top-1/3 left-1/3 w-5 h-5 rounded-full bg-glow-peach animate-float" style={{ animationDelay: '1.5s' }} />
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
              WHAT IS THIS?
            </span>

            <h2
              className={cn(
                'text-4xl md:text-5xl font-bold mb-6 transition-all duration-700 delay-100',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              )}
            >
              <span className="text-foreground">Where </span>
              <span className="text-gradient">Confusion</span>
              <br />
              <span className="text-foreground">Becomes </span>
              <span className="text-gradient-accent">Art</span>
            </h2>

            <p
              className={cn(
                'text-lg text-muted-foreground mb-8 leading-relaxed transition-all duration-700 delay-200',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              )}
            >
              Forcend isn't meant to make sense. It's a visual playground 
              exploring the aesthetics of AI, cryptocurrency, and future technologies—
              all wrapped in dreamy pastel chaos.
            </p>

            <p
              className={cn(
                'text-muted-foreground mb-12 leading-relaxed transition-all duration-700 delay-300',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              )}
            >
              This page exists purely to confuse and delight. If you understand it completely, 
              you're probably doing it wrong. <span className="text-glow-rose">Embrace the ambiguity.</span>
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
                  className="text-center p-4 rounded-2xl glass interactive hover:scale-105 transition-transform"
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