import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Switch } from '@/components/ui/switch';
import { Slider } from '@/components/ui/slider';
import { 
  Activity, 
  Zap, 
  Cpu, 
  Radio, 
  Waves, 
  Circle,
  Triangle,
  Square,
  Hexagon,
  Moon,
  Sun,
  Sparkles,
  Eye,
  Fingerprint
} from 'lucide-react';

interface DashboardState {
  chaos: boolean;
  quantum: boolean;
  neural: boolean;
  dimensional: boolean;
  ethereal: boolean;
  temporal: boolean;
  hueRotation: number;
  saturation: number;
  brightness: number;
  glitchIntensity: number;
}

const StrangeDashboard = () => {
  const [state, setState] = useState<DashboardState>({
    chaos: false,
    quantum: true,
    neural: false,
    dimensional: true,
    ethereal: false,
    temporal: true,
    hueRotation: 0,
    saturation: 100,
    brightness: 100,
    glitchIntensity: 0,
  });

  const [randomValues, setRandomValues] = useState<number[]>([]);
  const [activeShape, setActiveShape] = useState(0);

  // Generate random dashboard values
  useEffect(() => {
    const interval = setInterval(() => {
      setRandomValues(Array(6).fill(0).map(() => Math.random() * 100));
      setActiveShape(prev => (prev + 1) % 4);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  // Apply global color effects
  useEffect(() => {
    const root = document.documentElement;
    root.style.filter = `
      hue-rotate(${state.hueRotation}deg) 
      saturate(${state.saturation}%) 
      brightness(${state.brightness}%)
    `;
    return () => {
      root.style.filter = '';
    };
  }, [state.hueRotation, state.saturation, state.brightness]);

  const shapes = [Circle, Triangle, Square, Hexagon];
  const ShapeIcon = shapes[activeShape];

  const toggles = [
    { key: 'chaos', label: 'CHAOS MODE', icon: Zap, color: 'rose' },
    { key: 'quantum', label: 'QUANTUM FLUX', icon: Activity, color: 'lavender' },
    { key: 'neural', label: 'NEURAL LINK', icon: Cpu, color: 'mint' },
    { key: 'dimensional', label: 'DIMENSION SHIFT', icon: Radio, color: 'peach' },
    { key: 'ethereal', label: 'ETHEREAL WAVES', icon: Waves, color: 'sky' },
    { key: 'temporal', label: 'TIME DISTORTION', icon: Eye, color: 'lemon' },
  ];

  return (
    <section id="dashboard" className="relative py-24 md:py-32">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs font-mono text-muted-foreground tracking-widest uppercase mb-6">
            <Fingerprint className="w-4 h-4 text-glow-rose animate-pulse" />
            CONTROL CENTER
            <Fingerprint className="w-4 h-4 text-glow-sky animate-pulse" />
          </span>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-foreground">The </span>
            <span className="text-gradient-accent animate-color-shift">Strange</span>
            <br />
            <span className="text-gradient">Dashboard</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Manipulate reality. Toggle dimensions. Control the chaos.
            <br />
            <span className="text-glow-rose">Warning: Effects may cause confusion.</span>
          </p>
        </div>

        {/* Dashboard Grid */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Toggle Controls */}
          {toggles.map((toggle, index) => {
            const Icon = toggle.icon;
            const isActive = state[toggle.key as keyof DashboardState] as boolean;
            
            return (
              <div
                key={toggle.key}
                className={cn(
                  'group p-6 rounded-3xl glass transition-all duration-500 interactive strange-toggle',
                  isActive && `glow-border shadow-lg`
                )}
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  background: isActive 
                    ? `linear-gradient(135deg, hsl(var(--glow-${toggle.color}) / 0.2), transparent)`
                    : undefined
                }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={cn(
                    'w-12 h-12 rounded-xl flex items-center justify-center glass',
                    isActive && 'animate-wobble'
                  )}>
                    <Icon className={cn(
                      'w-6 h-6 transition-colors',
                      isActive ? `text-glow-${toggle.color}` : 'text-muted-foreground'
                    )} />
                  </div>
                  <Switch
                    checked={isActive}
                    onCheckedChange={(checked) => 
                      setState(prev => ({ ...prev, [toggle.key]: checked }))
                    }
                    className="data-[state=checked]:bg-primary"
                  />
                </div>
                <h3 className={cn(
                  'font-mono text-sm tracking-wider transition-colors',
                  isActive ? 'text-foreground' : 'text-muted-foreground'
                )}>
                  {toggle.label}
                </h3>
                <div className="mt-2 h-1 rounded-full bg-muted overflow-hidden">
                  <div 
                    className={cn(
                      'h-full rounded-full transition-all duration-500',
                      `bg-glow-${toggle.color}`
                    )}
                    style={{ width: isActive ? `${randomValues[index] || 50}%` : '0%' }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Color Manipulation */}
        <div className="max-w-3xl mx-auto mt-12 p-8 rounded-3xl glass">
          <h3 className="text-xl font-bold mb-8 text-center flex items-center justify-center gap-3">
            <Sparkles className="w-5 h-5 text-glow-lavender" />
            REALITY MANIPULATION
            <Sparkles className="w-5 h-5 text-glow-mint" />
          </h3>

          <div className="space-y-8">
            {/* Hue Rotation */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm text-muted-foreground">HUE ROTATION</span>
                <span className="font-mono text-sm text-glow-lavender">{state.hueRotation}°</span>
              </div>
              <div className="relative">
                <Slider
                  value={[state.hueRotation]}
                  onValueChange={([value]) => setState(prev => ({ ...prev, hueRotation: value }))}
                  max={360}
                  step={1}
                  className="interactive"
                />
                <div 
                  className="absolute inset-0 rounded-full pointer-events-none opacity-50"
                  style={{ 
                    background: 'linear-gradient(90deg, red, yellow, lime, aqua, blue, magenta, red)',
                    filter: 'blur(20px)',
                    zIndex: -1
                  }}
                />
              </div>
            </div>

            {/* Saturation */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm text-muted-foreground">SATURATION</span>
                <span className="font-mono text-sm text-glow-peach">{state.saturation}%</span>
              </div>
              <Slider
                value={[state.saturation]}
                onValueChange={([value]) => setState(prev => ({ ...prev, saturation: value }))}
                max={200}
                step={1}
                className="interactive"
              />
            </div>

            {/* Brightness */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm text-muted-foreground flex items-center gap-2">
                  <Moon className="w-4 h-4" />
                  BRIGHTNESS
                  <Sun className="w-4 h-4" />
                </span>
                <span className="font-mono text-sm text-glow-lemon">{state.brightness}%</span>
              </div>
              <Slider
                value={[state.brightness]}
                onValueChange={([value]) => setState(prev => ({ ...prev, brightness: value }))}
                min={20}
                max={150}
                step={1}
                className="interactive"
              />
            </div>

            {/* Reset Button */}
            <button
              onClick={() => setState(prev => ({ 
                ...prev, 
                hueRotation: 0, 
                saturation: 100, 
                brightness: 100 
              }))}
              className="w-full py-4 rounded-xl glass hover:glow-border transition-all duration-300 font-mono text-sm tracking-wider interactive"
            >
              ↺ RESET REALITY
            </button>
          </div>
        </div>

        {/* Floating shape indicator */}
        <div className="flex justify-center mt-12">
          <div className="p-6 rounded-full glass animate-float">
            <ShapeIcon className="w-8 h-8 text-gradient animate-spin-slow" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrangeDashboard;