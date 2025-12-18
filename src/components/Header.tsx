import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Features', href: '#features' },
    { name: 'Partners', href: '#partners' },
    { name: 'Dashboard', href: '#dashboard' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={cn(
        'fixed top-10 left-0 right-0 z-40 transition-all duration-500',
        isScrolled ? 'glass py-3' : 'py-4'
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group interactive">
          <div className="relative">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-glow-lavender to-glow-mint flex items-center justify-center animate-wobble">
              <span className="text-foreground font-bold text-lg">F</span>
            </div>
            <div className="absolute inset-0 rounded-xl bg-glow-lavender blur-lg opacity-50 group-hover:opacity-80 transition-opacity" />
          </div>
          <span className="text-xl font-bold tracking-tight text-foreground">
            FORCEND
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-muted-foreground hover:text-foreground transition-colors relative group interactive"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-glow-lavender to-glow-mint group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button className="relative px-6 py-2.5 rounded-full font-semibold text-sm overflow-hidden group interactive">
            <span className="relative z-10 text-foreground">Enter Void</span>
            <div className="absolute inset-0 bg-gradient-to-r from-glow-lavender to-glow-mint transition-transform group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-r from-glow-peach to-glow-rose opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground p-2 interactive"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'md:hidden absolute top-full left-0 right-0 glass border-t border-border overflow-hidden transition-all duration-300',
          isMobileMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <nav className="flex flex-col p-6 gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-muted-foreground hover:text-foreground transition-colors interactive"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button className="mt-2 px-6 py-2.5 rounded-full font-semibold text-sm bg-gradient-to-r from-glow-lavender to-glow-mint text-foreground interactive">
            Enter Void
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;