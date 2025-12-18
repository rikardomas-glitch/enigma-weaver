import { useEffect, useState, useCallback } from 'react';

interface Ripple {
  id: number;
  x: number;
  y: number;
  color: string;
}

interface Trail {
  id: number;
  x: number;
  y: number;
}

const CursorEffects = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const [trail, setTrail] = useState<Trail[]>([]);

  const pastelColors = [
    'hsl(270, 60%, 75%)', // lavender
    'hsl(160, 50%, 75%)', // mint
    'hsl(20, 80%, 80%)',  // peach
    'hsl(200, 70%, 80%)', // sky
    'hsl(340, 60%, 80%)', // rose
    'hsl(60, 70%, 80%)',  // lemon
  ];

  const getRandomColor = useCallback(() => {
    return pastelColors[Math.floor(Math.random() * pastelColors.length)];
  }, []);

  useEffect(() => {
    let trailId = 0;
    
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Add trail point
      trailId++;
      setTrail(prev => [...prev.slice(-20), { id: trailId, x: e.clientX, y: e.clientY }]);
      
      // Check if hovering over interactive element
      const target = e.target as HTMLElement;
      setIsHovering(
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') !== null ||
        target.closest('a') !== null ||
        target.classList.contains('interactive')
      );
    };

    const handleClick = (e: MouseEvent) => {
      const newRipple: Ripple = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
        color: getRandomColor(),
      };
      setRipples(prev => [...prev, newRipple]);

      // Remove ripple after animation
      setTimeout(() => {
        setRipples(prev => prev.filter(r => r.id !== newRipple.id));
      }, 600);

      // Add distortion effect to body
      document.body.classList.add('distort');
      setTimeout(() => {
        document.body.classList.remove('distort');
      }, 300);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
    };
  }, [getRandomColor]);

  return (
    <>
      {/* Main cursor */}
      <div
        className="custom-cursor"
        style={{
          left: position.x,
          top: position.y,
          transform: 'translate(-50%, -50%)',
        }}
      >
        {/* Inner dot */}
        <div
          className={`rounded-full transition-all duration-150 ${
            isHovering ? 'w-16 h-16 bg-glow-rose/30' : 'w-6 h-6 bg-glow-lavender'
          }`}
          style={{
            boxShadow: isHovering 
              ? '0 0 30px hsl(340, 60%, 80%)' 
              : '0 0 20px hsl(270, 60%, 75%)',
          }}
        />
      </div>

      {/* Cursor trail */}
      {trail.map((point, index) => (
        <div
          key={point.id}
          className="fixed pointer-events-none rounded-full"
          style={{
            left: point.x,
            top: point.y,
            transform: 'translate(-50%, -50%)',
            width: (index / trail.length) * 12 + 2,
            height: (index / trail.length) * 12 + 2,
            backgroundColor: pastelColors[index % pastelColors.length],
            opacity: (index / trail.length) * 0.5,
            zIndex: 9997,
          }}
        />
      ))}

      {/* Click ripples */}
      {ripples.map(ripple => (
        <div
          key={ripple.id}
          className="click-ripple"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: 20,
            height: 20,
            transform: 'translate(-50%, -50%)',
            border: `3px solid ${ripple.color}`,
            boxShadow: `0 0 20px ${ripple.color}`,
          }}
        />
      ))}

      {/* Ambient glow following cursor */}
      <div
        className="fixed pointer-events-none rounded-full blur-3xl transition-all duration-500"
        style={{
          left: position.x,
          top: position.y,
          transform: 'translate(-50%, -50%)',
          width: 200,
          height: 200,
          background: `radial-gradient(circle, hsl(270, 60%, 75%, 0.2) 0%, transparent 70%)`,
          zIndex: 0,
        }}
      />
    </>
  );
};

export default CursorEffects;