import { useEffect, useRef, useState } from 'react';
import { Zap, Shield, Infinity, Eye, Layers, Cpu } from 'lucide-react';
import { cn } from '@/lib/utils';

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Experience blazing performance that transcends conventional limits.',
    color: 'cyan',
  },
  {
    icon: Shield,
    title: 'Impenetrable',
    description: 'Security woven into the fabric of existence itself.',
    color: 'purple',
  },
  {
    icon: Infinity,
    title: 'Limitless',
    description: 'Boundaries dissolve in the face of infinite possibility.',
    color: 'pink',
  },
  {
    icon: Eye,
    title: 'All-Seeing',
    description: 'Insights that pierce through the veil of uncertainty.',
    color: 'blue',
  },
  {
    icon: Layers,
    title: 'Multi-Dimensional',
    description: 'Navigate layers of reality with seamless precision.',
    color: 'cyan',
  },
  {
    icon: Cpu,
    title: 'Sentient Core',
    description: 'Intelligence that evolves beyond programmed horizons.',
    color: 'purple',
  },
];

const FeatureCard = ({ feature, index }: { feature: typeof features[0]; index: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const colorClasses = {
    cyan: 'from-glow-cyan/20 to-transparent border-glow-cyan/30 hover:border-glow-cyan/50',
    purple: 'from-glow-purple/20 to-transparent border-glow-purple/30 hover:border-glow-purple/50',
    pink: 'from-glow-pink/20 to-transparent border-glow-pink/30 hover:border-glow-pink/50',
    blue: 'from-glow-blue/20 to-transparent border-glow-blue/30 hover:border-glow-blue/50',
  };

  const iconColorClasses = {
    cyan: 'text-glow-cyan',
    purple: 'text-glow-purple',
    pink: 'text-glow-pink',
    blue: 'text-glow-blue',
  };

  const Icon = feature.icon;

  return (
    <div
      ref={ref}
      className={cn(
        'group relative p-6 md:p-8 rounded-3xl border bg-gradient-to-b transition-all duration-500 cursor-pointer',
        colorClasses[feature.color as keyof typeof colorClasses],
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      )}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Glow effect on hover */}
      <div className={cn(
        'absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl',
        feature.color === 'cyan' && 'bg-glow-cyan/10',
        feature.color === 'purple' && 'bg-glow-purple/10',
        feature.color === 'pink' && 'bg-glow-pink/10',
        feature.color === 'blue' && 'bg-glow-blue/10'
      )} />

      <div className="relative z-10">
        <div className={cn(
          'w-14 h-14 rounded-2xl flex items-center justify-center mb-6 glass',
          iconColorClasses[feature.color as keyof typeof iconColorClasses]
        )}>
          <Icon className="w-7 h-7" />
        </div>

        <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-gradient transition-all duration-300">
          {feature.title}
        </h3>

        <p className="text-muted-foreground leading-relaxed">
          {feature.description}
        </p>
      </div>
    </div>
  );
};

const Features = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="features" ref={sectionRef} className="relative py-24 md:py-32">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <span
            className={cn(
              'inline-block px-4 py-2 rounded-full glass text-xs font-mono text-muted-foreground tracking-widest uppercase mb-6 transition-all duration-700',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            )}
          >
            Capabilities
          </span>

          <h2
            className={cn(
              'text-4xl md:text-5xl lg:text-6xl font-bold mb-6 transition-all duration-700 delay-100',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            )}
          >
            <span className="text-foreground">Unlock the </span>
            <span className="text-gradient-accent">Unknown</span>
          </h2>

          <p
            className={cn(
              'text-lg text-muted-foreground max-w-2xl mx-auto transition-all duration-700 delay-200',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            )}
          >
            Discover powers that exist beyond the threshold of ordinary perception.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
