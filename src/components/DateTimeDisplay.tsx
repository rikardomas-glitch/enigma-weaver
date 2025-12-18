import { useState, useEffect } from 'react';

const DateTimeDisplay = () => {
  const [time, setTime] = useState(new Date());
  const [glitch, setGlitch] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
      // Random glitch effect
      if (Math.random() > 0.95) {
        setGlitch(true);
        setTimeout(() => setGlitch(false), 150);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 py-2 px-4 bg-gradient-to-r from-glow-lavender/20 via-glow-mint/20 to-glow-peach/20 backdrop-blur-sm border-b border-border/30">
      <div className="container mx-auto flex items-center justify-between">
        <div className={`font-mono text-sm tracking-wider ${glitch ? 'animate-glitch' : ''}`}>
          <span className="text-glow-lavender">{formatDate(time)}</span>
        </div>
        <div className={`font-mono text-lg font-bold tracking-widest ${glitch ? 'text-glow-rose' : 'text-gradient'}`}>
          {formatTime(time)}
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-glow-mint animate-breathe" />
          <span className="text-xs font-mono text-muted-foreground tracking-wider uppercase">
            SYSTEM ACTIVE
          </span>
        </div>
      </div>
    </div>
  );
};

export default DateTimeDisplay;