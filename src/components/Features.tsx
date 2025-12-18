import { useEffect, useRef, useState } from 'react';
import { Brain, Coins, Rocket, Eye, Layers, Cpu } from 'lucide-react';
import { cn } from '@/lib/utils';

const features = [
  {
    icon: Brain,
    title: 'Neural Networks',
    description: 'AI that thinks in colors you\'ve never seen.',
    color: 'lavender',
  },
  {
    icon: Coins,
    title: 'Crypto Chaos',
    description: 'Decentralized everything. Trust no one. Trust everyone.',
    color: 'mint',
  },
  {
    icon: Rocket,
    title: 'Future Tech',
    description: 'Technologies from timelines that may not exist yet.',
    color: 'peach',
  },
  {
    icon: Eye,
    title: 'All-Seeing',
    description: 'Insights that question the nature of insight itself.',
    color: 'sky',
  },
  {
    icon: Layers,
    title: 'Multi-Reality',
    description: 'Navigate parallel dimensions through a single interface.',
    color: 'rose',
  },
  {
    icon: Cpu,
    title: 'Quantum Dreams',
    description: 'Computing that exists in superposition until observed.',
    color: 'lemon',
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
    lavender: 'from-glow-lavender/20 to-transparent border-glow-lavender/30 hover:border-glow-lavender/60',
    mint: 'from-glow-mint/20 to-transparent border-glow-mint/30 hover:border-glow-mint/60',
    peach: 'from-glow-peach/20 to-transparent border-glow-peach/30 hover:border-glow-peach/60',
    sky: 'from-glow-sky/20 to-transparent border-glow-sky/30 hover:border-glow-sky/60',
    rose: 'from-glow-rose/20 to-transparent border-glow-rose/30 hover:border-glow-rose/60',
    lemon: 'from-glow-lemon/20 to-transparent border-glow-lemon/30 hover:border-glow-lemon/60',
  };

  const iconColorClasses = {
    lavender: 'text-glow-lavender',
    mint: 'text-glow-mint',
    peach: 'text-glow-peach',
    sky: 'text-glow-sky',
    rose: 'text-glow-rose',
    lemon: 'text-glow-lemon',
  };

  const Icon = feature.icon;

  return (
    <div
      ref={ref}
      className={cn(
        'group relative p-6 md:p-8 rounded-3xl border bg-gradient-to-b transition-all duration-500 interactive',
        colorClasses[feature.color as keyof typeof colorClasses],
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10',
        'hover:scale-105 hover:rotate-1'
      )}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Glow effect on hover */}
      <div className={cn(
        'absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl',
        `bg-glow-${feature.color}/20`
      )} />

      <div className="relative z-10">
        <div className={cn(
          'w-14 h-14 rounded-2xl flex items-center justify-center mb-6 glass group-hover:animate-wobble',
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
            CAPABILITIES (MAYBE)
          </span>

          <h2
            className={cn(
              'text-4xl md:text-5xl lg:text-6xl font-bold mb-6 transition-all duration-700 delay-100',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            )}
          >
            <span className="text-foreground">What We </span>
            <span className="text-gradient-accent">Probably</span>
            <span className="text-foreground"> Do</span>
          </h2>

          <p
            className={cn(
              'text-lg text-muted-foreground max-w-2xl mx-auto transition-all duration-700 delay-200',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            )}
          >
            Discover capabilities that may or may not exist in your current timeline.
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