import { cn } from '@/lib/utils';

interface GlowOrbProps {
  className?: string;
  color?: 'lavender' | 'mint' | 'peach' | 'sky' | 'rose' | 'lemon';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  animate?: boolean;
}

const GlowOrb = ({ className, color = 'lavender', size = 'lg', animate = true }: GlowOrbProps) => {
  const colorClasses = {
    lavender: 'bg-glow-lavender',
    mint: 'bg-glow-mint',
    peach: 'bg-glow-peach',
    sky: 'bg-glow-sky',
    rose: 'bg-glow-rose',
    lemon: 'bg-glow-lemon',
  };

  const sizeClasses = {
    sm: 'w-32 h-32',
    md: 'w-64 h-64',
    lg: 'w-96 h-96',
    xl: 'w-[500px] h-[500px]',
  };

  return (
    <div
      className={cn(
        'absolute rounded-full blur-3xl opacity-40 pointer-events-none',
        colorClasses[color],
        sizeClasses[size],
        animate && 'animate-pulse-glow',
        className
      )}
    />
  );
};

export default GlowOrb;