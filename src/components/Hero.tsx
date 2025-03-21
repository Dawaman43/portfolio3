
import { Button } from '@/components/ui/button';
import { ArrowRight, Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';
import TypeWriter from './TypeWriter';
import DevIcons from './DevIcons';
import RevealText from './RevealText';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 overflow-hidden">
      <div className="section-container grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 md:space-y-8">
          <motion.span 
            className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <TypeWriter words={['Software Engineer', 'Web Developer', 'Application Developer']} delay={80} />
          </motion.span>
          
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-foreground to-primary"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Hi, I'm Dawit Worku
          </motion.h1>
          
          <RevealText 
            text="A passionate software engineering student at Adama Science and Technology University, dedicated to crafting elegant solutions to complex problems."
            className="text-lg md:text-xl text-muted-foreground max-w-[600px]"
            delay={0.3}
          />
          
          <motion.div 
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-primary hover:bg-primary/90 shadow-lg hover:shadow-primary/20 transition-all"
            >
              Get in touch <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            
            <Button 
              variant="outline" 
              asChild
              className="border-primary/20 hover:border-primary/40 shadow-sm hover:shadow-primary/10 transition-all"
            >
              <a href="https://github.com/dawaman43" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" /> GitHub
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              asChild
              className="border-primary/20 hover:border-primary/40 shadow-sm hover:shadow-primary/10 transition-all"
            >
              <a href="https://linkedin.com/in/dawit-worku-jima" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
              </a>
            </Button>
          </motion.div>
        </div>
        
        <motion.div 
          className="flex justify-center relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <DevIcons />
          <div className="w-[280px] h-[280px] md:w-[320px] md:h-[320px] lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden border-4 border-primary/20 shadow-xl shadow-primary/10 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-60 z-10"></div>
            <motion.div
              className="w-full h-full"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
            >
              <img 
                src="/lovable-uploads/db60cb62-e6b0-40e6-8262-f0a85b38b73c.png" 
                alt="Dawit Worku" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
          <div className="absolute -inset-4 bg-primary/5 rounded-full filter blur-3xl z-[-1] animate-pulse"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
