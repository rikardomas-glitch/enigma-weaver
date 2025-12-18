import { Helmet } from 'react-helmet-async';
import ParticleField from '@/components/ParticleField';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Features from '@/components/Features';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>FORCEND | Ethereal Digital Experience</title>
        <meta name="description" content="Step into a realm where technology transcends reality. Forcend - an ethereal experience awaits those who dare to explore the unknown." />
        <meta name="keywords" content="forcend, ethereal, digital, technology, innovation, mysterious" />
      </Helmet>

      <div className="relative min-h-screen bg-background overflow-x-hidden">
        {/* Grain Overlay */}
        <div className="grain" />
        
        {/* Particle Background */}
        <ParticleField />

        {/* Content */}
        <Header />
        
        <main>
          <Hero />
          <About />
          <Features />
          <Contact />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Index;
