import { useEffect, useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import GlowOrb from './GlowOrb';

const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const subtitles = [
    'Beyond the Veil',
    'Into the Unknown',
    'Ethereal Nexus',
    'Digital Mystique',
  ];

  const [currentSubtitle, setCurrentSubtitle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSubtitle((prev) => (prev + 1) % subtitles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Orbs */}
      <GlowOrb color="cyan" size="xl" className="top-1/4 -left-48" />
      <GlowOrb color="purple" size="lg" className="top-1/3 right-0" />
      <GlowOrb color="pink" size="md" className="bottom-1/4 left-1/4" />
      <GlowOrb color="blue" size="lg" className="bottom-0 right-1/4" />

      {/* Animated Ring */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] md:w-[800px] md:h-[800px] border border-glow-cyan/10 rounded-full animate-orbit" />
        <div className="absolute w-[500px] h-[500px] md:w-[650px] md:h-[650px] border border-glow-purple/10 rounded-full animate-orbit" style={{ animationDirection: 'reverse', animationDuration: '25s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 transition-all duration-700 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <Sparkles className="w-4 h-4 text-glow-cyan" />
            <span className="text-sm font-mono text-muted-foreground tracking-wider uppercase">
              Entering the void
            </span>
            <div className="w-2 h-2 rounded-full bg-glow-cyan animate-breathe" />
          </div>

          {/* Main Title */}
          <h1
            className={`text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-6 transition-all duration-700 delay-100 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <span className="text-gradient animate-glitch">FORCEND</span>
          </h1>

          {/* Animated Subtitle */}
          <div
            className={`h-12 mb-8 overflow-hidden transition-all duration-700 delay-200 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <p className="text-xl md:text-2xl text-muted-foreground font-light tracking-wide transition-all duration-500">
              {subtitles[currentSubtitle]}
            </p>
          </div>

          {/* Description */}
          <p
            className={`text-lg md:text-xl text-muted-foreground/80 max-w-2xl mx-auto mb-12 leading-relaxed transition-all duration-700 delay-300 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Step into a realm where technology transcends reality. 
            An ethereal experience awaits those who dare to explore.
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-400 ${
              mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <button className="group relative px-8 py-4 rounded-2xl font-semibold text-lg overflow-hidden">
              <span className="relative z-10 flex items-center gap-2 text-background">
                Explore Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-glow-cyan via-glow-purple to-glow-pink bg-[length:200%_100%] animate-shimmer" />
              <div className="absolute inset-0 bg-glow-cyan/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>

            <button className="group px-8 py-4 rounded-2xl font-semibold text-lg glass glow-border hover:glow-border-purple transition-all duration-300">
              <span className="text-foreground group-hover:text-glow-purple transition-colors">
                Learn More
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs font-mono text-muted-foreground/50 tracking-widest uppercase">
          Scroll
        </span>
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <div className="w-1.5 h-3 rounded-full bg-glow-cyan animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
