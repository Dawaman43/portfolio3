
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TypeWriterProps {
  words: string[];
  delay?: number;
  className?: string;
}

const TypeWriter = ({ words, delay = 100, className = '' }: TypeWriterProps) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[currentWordIndex];
    const timeout = setTimeout(() => {
      // If adding characters
      if (!isDeleting) {
        setCurrentText(word.substring(0, currentText.length + 1));
        
        // If word is complete, start deleting after delay
        if (currentText.length === word.length) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } 
      // If removing characters
      else {
        setCurrentText(word.substring(0, currentText.length - 1));
        
        // If word is fully deleted, move to next word
        if (currentText.length === 0) {
          setIsDeleting(false);
          setCurrentWordIndex((currentWordIndex + 1) % words.length);
        }
      }
    }, isDeleting ? delay / 2 : delay);

    return () => clearTimeout(timeout);
  }, [currentText, currentWordIndex, isDeleting, words, delay]);

  return (
    <motion.span 
      className={`inline-block relative ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {currentText}
      <span className="border-r-2 border-primary ml-1 animate-pulse">&nbsp;</span>
    </motion.span>
  );
};

export default TypeWriter;
