import { cn } from '@/lib/utils';

interface GlowOrbProps {
  className?: string;
  color?: 'cyan' | 'purple' | 'pink' | 'blue';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  animate?: boolean;
}

const GlowOrb = ({ className, color = 'cyan', size = 'lg', animate = true }: GlowOrbProps) => {
  const colorClasses = {
    cyan: 'bg-glow-cyan',
    purple: 'bg-glow-purple',
    pink: 'bg-glow-pink',
    blue: 'bg-glow-blue',
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
        'absolute rounded-full blur-3xl opacity-30 pointer-events-none',
        colorClasses[color],
        sizeClasses[size],
        animate && 'animate-pulse-glow',
        className
      )}
    />
  );
};

export default GlowOrb;
