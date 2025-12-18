const Footer = () => {
  return (
    <footer className="relative py-12 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3 interactive">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-glow-lavender to-glow-mint flex items-center justify-center">
              <span className="text-foreground font-bold text-sm">F</span>
            </div>
            <span className="text-lg font-bold tracking-tight text-foreground">
              FORCEND
            </span>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground font-mono">
            © {new Date().getFullYear()} Forcend. Nothing makes sense.
          </p>

          {/* Status */}
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-glow-mint animate-breathe" />
            <span className="text-xs font-mono text-muted-foreground tracking-wider uppercase">
              REALITY STATUS: QUESTIONABLE
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;