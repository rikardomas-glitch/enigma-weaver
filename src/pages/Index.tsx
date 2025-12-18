import { Helmet } from 'react-helmet-async';
import ParticleField from '@/components/ParticleField';
import CursorEffects from '@/components/CursorEffects';
import DateTimeDisplay from '@/components/DateTimeDisplay';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Features from '@/components/Features';
import Partners from '@/components/Partners';
import StrangeDashboard from '@/components/StrangeDashboard';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>FORCEND | AI × Crypto × Future Tech</title>
        <meta name="description" content="A surreal journey through artificial intelligence, cryptocurrency, and future technologies. Prepare to be confused and delighted." />
        <meta name="keywords" content="forcend, ai, crypto, blockchain, future tech, web3, neural networks, quantum" />
      </Helmet>

      <div className="relative min-h-screen bg-background overflow-x-hidden">
        {/* Grain Overlay */}
        <div className="grain" />
        
        {/* Custom Cursor Effects */}
        <CursorEffects />
        
        {/* Date/Time Display */}
        <DateTimeDisplay />
        
        {/* Particle Background */}
        <ParticleField />

        {/* Content */}
        <Header />
        
        <main>
          <Hero />
          <About />
          <Features />
          <Partners />
          <StrangeDashboard />
          <Contact />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Index;