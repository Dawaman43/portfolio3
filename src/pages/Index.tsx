
import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { motion, AnimatePresence } from 'framer-motion';

const Index = () => {
  useEffect(() => {
    document.title = "Dawit Worku | Software Engineer";
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-background text-foreground relative"
      >
        {/* Background gradient effects */}
        <div className="fixed top-0 left-0 right-0 bottom-0 pointer-events-none z-[-1] overflow-hidden">
          <div className="absolute top-10 left-10 w-[300px] h-[300px] bg-primary/5 rounded-full filter blur-[100px]"></div>
          <div className="absolute bottom-40 right-10 w-[250px] h-[250px] bg-primary/10 rounded-full filter blur-[80px]"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full filter blur-[120px]"></div>
        </div>

        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
};

export default Index;
