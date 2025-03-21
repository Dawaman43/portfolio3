
import { motion } from 'framer-motion';
import { Code, BookOpen, GraduationCap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 overflow-hidden">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading">About Me</h2>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <p className="text-lg">
              I'm currently pursuing my Bachelor's degree in Software Engineering at Adama Science and Technology University, where I'm building a strong foundation in computer science principles and software development practices.
            </p>
            <p className="text-lg">
              My journey in technology is driven by a passion for creating impactful digital solutions. I enjoy tackling challenging problems and continuously learning new technologies to expand my skill set.
            </p>
            <p className="text-lg">
              When I'm not coding, you can find me exploring new programming languages, contributing to open-source projects, or expanding my knowledge through online courses and technical books.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <div className="backdrop-blur-card p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Education</h3>
                  <p className="text-muted-foreground mt-2">BSc in Software Engineering, Adama Science and Technology University (Current)</p>
                </div>
              </div>
            </div>
            
            <div className="backdrop-blur-card p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Technical Skills</h3>
                  <p className="text-muted-foreground mt-2">HTML, CSS, JavaScript, React, Node.js, Git, and more</p>
                </div>
              </div>
            </div>
            
            <div className="backdrop-blur-card p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Continuous Learning</h3>
                  <p className="text-muted-foreground mt-2">Dedicated to staying current with technology trends and best practices</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
