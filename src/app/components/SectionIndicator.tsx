'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SectionInfo {
  id: string;
  title: string;
  description: string;
}

const SectionIndicator = () => {
  const [activeSection, setActiveSection] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const sectionData: SectionInfo[] = [
    {
      id: 'home',
      title: 'Welcome to My Portfolio',
      description: 'Discover my journey as a software developer'
    },
    {
      id: 'about',
      title: 'Know About Me',
      description: 'Learn more about my skills and background'
    },
    {
      id: 'experience',
      title: 'My Experience',
      description: 'Professional journey and achievements'
    },
    {
      id: 'projects',
      title: 'Take a Look at My Projects',
      description: 'Creative solutions and technical expertise'
    },
    {
      id: 'contact',
      title: 'Get In Touch',
      description: 'Let\'s discuss your next project'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      let currentSection = '';
      
      sectionData.forEach(section => {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            currentSection = section.id;
          }
        }
      });

      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
        setIsVisible(true);
        
        // Hide after 3 seconds
        setTimeout(() => setIsVisible(false), 3000);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection, sectionData]);

  const currentSectionData = sectionData.find(section => section.id === activeSection);

  return (
    <AnimatePresence>
      {isVisible && currentSectionData && (
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ 
            opacity: 0, 
            y: -50, 
            scale: 0.8,
            transition: { duration: 0.3 }
          }}
          transition={{ 
            duration: 0.5, 
            ease: 'easeOut'
          }}
          className="fixed top-20 left-1/2 transform -translate-x-1/2 z-40 pointer-events-none"
        >
          <div className="bg-slate-900/90 backdrop-blur-md border border-slate-700/50 rounded-2xl px-8 py-4 shadow-2xl shadow-blue-500/20">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-2">
                {currentSectionData.title}
              </h3>
              <p className="text-gray-300 text-sm">
                {currentSectionData.description}
              </p>
            </motion.div>
            
            {/* Decorative elements */}
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-gradient-to-r from-pink-400 to-orange-400 rounded-full animate-bounce"></div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SectionIndicator;
