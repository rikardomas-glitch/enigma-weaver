import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { ExternalLink, Sparkles, Zap } from 'lucide-react';

const partners = [
  {
    name: 'LAYNEL',
    url: 'https://laynel.com',
    description: 'Decentralized Future Networks',
    color: 'lavender',
  },
  {
    name: 'SUPERCHAIN SOCIETY',
    url: 'https://superchainsociety.com',
    description: 'Next-Gen Blockchain Collective',
    color: 'mint',
  },
];

const Partners = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredPartner, setHoveredPartner] = useState<string | null>(null);
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

  return (
    <section id="partners" ref={sectionRef} className="relative py-24 md:py-32 overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-glow-lavender/30 pastel-blob" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-glow-mint/30 pastel-blob" style={{ animationDelay: '-5s' }} />
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-glow-peach/30 pastel-blob" style={{ animationDelay: '-2.5s' }} />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <span
            className={cn(
              'inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs font-mono text-muted-foreground tracking-widest uppercase mb-6 transition-all duration-700',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            )}
          >
            <Sparkles className="w-4 h-4 text-glow-lavender" />
            NETWORK CONNECTIONS
            <Sparkles className="w-4 h-4 text-glow-mint" />
          </span>

          <h2
            className={cn(
              'text-4xl md:text-6xl lg:text-7xl font-bold mb-6 transition-all duration-700 delay-100',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            )}
          >
            <span className="text-foreground">Our </span>
            <span className="text-gradient-rainbow">Partners</span>
          </h2>

          <p
            className={cn(
              'text-lg text-muted-foreground max-w-2xl mx-auto transition-all duration-700 delay-200',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            )}
          >
            Connected nodes in the infinite web of innovation. 
            Building the future together through decentralized collaboration.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {partners.map((partner, index) => (
            <a
              key={partner.name}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'group relative p-8 md:p-12 rounded-3xl transition-all duration-500 cursor-pointer interactive',
                'bg-gradient-to-br border hover:scale-105',
                partner.color === 'lavender' 
                  ? 'from-glow-lavender/20 to-glow-rose/10 border-glow-lavender/30 hover:border-glow-lavender hover:shadow-glow-lavender'
                  : 'from-glow-mint/20 to-glow-sky/10 border-glow-mint/30 hover:border-glow-mint hover:shadow-glow-mint',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              )}
              style={{ transitionDelay: `${300 + index * 150}ms` }}
              onMouseEnter={() => setHoveredPartner(partner.name)}
              onMouseLeave={() => setHoveredPartner(null)}
            >
              {/* Glow effect */}
              <div className={cn(
                'absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl',
                partner.color === 'lavender' ? 'bg-glow-lavender/20' : 'bg-glow-mint/20'
              )} />

              <div className="relative z-10">
                {/* Partner Icon */}
                <div className={cn(
                  'w-16 h-16 rounded-2xl flex items-center justify-center mb-6 glass transition-all duration-300',
                  hoveredPartner === partner.name && 'animate-wobble'
                )}>
                  <Zap className={cn(
                    'w-8 h-8',
                    partner.color === 'lavender' ? 'text-glow-lavender' : 'text-glow-mint'
                  )} />
                </div>

                {/* Partner Name */}
                <h3 className="text-2xl md:text-3xl font-bold mb-3 flex items-center gap-3">
                  <span className={cn(
                    'transition-all duration-300',
                    hoveredPartner === partner.name ? 'text-gradient' : 'text-foreground'
                  )}>
                    {partner.name}
                  </span>
                  <ExternalLink className={cn(
                    'w-5 h-5 transition-all duration-300',
                    hoveredPartner === partner.name 
                      ? 'opacity-100 translate-x-0' 
                      : 'opacity-0 -translate-x-2'
                  )} />
                </h3>

                {/* Description */}
                <p className="text-muted-foreground mb-4">
                  {partner.description}
                </p>

                {/* URL Display */}
                <div className="flex items-center gap-2 text-sm font-mono text-muted-foreground/70">
                  <div className={cn(
                    'w-2 h-2 rounded-full animate-breathe',
                    partner.color === 'lavender' ? 'bg-glow-lavender' : 'bg-glow-mint'
                  )} />
                  {partner.url.replace('https://', '')}
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Decorative connecting line */}
        <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-xs h-px">
          <div className="w-full h-full bg-gradient-to-r from-glow-lavender via-glow-peach to-glow-mint animate-shimmer" />
        </div>
      </div>
    </section>
  );
};

export default Partners;