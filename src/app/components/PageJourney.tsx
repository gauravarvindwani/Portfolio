'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import { Home, User, Briefcase, FolderOpen, Mail, Code, Zap, Target, Palette, Rocket, Bot } from 'lucide-react';

interface JourneyStop {
  id: string;
  title: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  subsections?: { id: string; title: string; icon?: React.ComponentType<{ size?: number; className?: string }> }[];
  color: string;
}

const PageJourney = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [activeSubsection, setActiveSubsection] = useState('');
  const { scrollYProgress } = useScroll();

  const journeyStops: JourneyStop[] = [
    {
      id: 'home',
      title: 'Home',
      icon: Home,
      color: 'from-blue-400 to-blue-600'
    },
    {
      id: 'about',
      title: 'About',
      icon: User,
      color: 'from-purple-400 to-purple-600'
    },
    {
      id: 'experience',
      title: 'Experience',
      icon: Briefcase,
      subsections: [
        { id: 'exp-1', title: 'Software Engineer', icon: Code },
        { id: 'exp-2', title: 'Junior Developer', icon: Zap },
        { id: 'exp-3', title: 'Intern', icon: Target }
      ],
      color: 'from-green-400 to-green-600'
    },
    {
      id: 'projects',
      title: 'Projects',
      icon: FolderOpen,
      subsections: [
        { id: 'proj-1', title: 'E-commerce Platform', icon: FolderOpen },
        { id: 'proj-2', title: 'Task Management', icon: Target },
        { id: 'proj-3', title: 'Weather Dashboard', icon: Zap },
        { id: 'proj-4', title: 'Social Media App', icon: User },
        { id: 'proj-5', title: 'Portfolio Website', icon: Palette },
        { id: 'proj-6', title: 'AI Chat Bot', icon: Bot }
      ],
      color: 'from-pink-400 to-pink-600'
    },
    {
      id: 'contact',
      title: 'Contact',
      icon: Mail,
      color: 'from-orange-400 to-orange-600'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = journeyStops.map(stop => stop.id);
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            
            // Check for subsections
            const currentStop = journeyStops.find(stop => stop.id === sectionId);
            if (currentStop?.subsections) {
              for (const subsection of currentStop.subsections) {
                const subElement = document.querySelector(`[data-subsection="${subsection.id}"]`);
                if (subElement) {
                  const rect = subElement.getBoundingClientRect();
                  if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                    setActiveSubsection(subsection.id);
                    break;
                  }
                }
              }
            }
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [journeyStops]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSubsection = (subsectionId: string) => {
    const element = document.querySelector(`[data-subsection="${subsectionId}"]`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed left-2 lg:left-6 top-1/4 transform -translate-y-1/4 z-40 block">
      <div className="relative">
        {/* Progress Line */}
        <div className="absolute left-5 top-0 w-0.5 h-96 bg-slate-700/50"></div>
        <motion.div
          className="absolute left-5 top-0 w-0.5 bg-gradient-to-b from-blue-400 to-purple-600"
          style={{ scaleY: scrollYProgress, height: '24rem', transformOrigin: 'top' }}
          initial={{ scaleY: 0 }}
        />

        {/* Journey Stops */}
        <div className="space-y-12">
          {journeyStops.map((stop, index) => (
            <div key={stop.id} className="relative">
              {/* Main Stop */}
              <motion.div
                className={`relative z-10 cursor-pointer group`}
                onClick={() => scrollToSection(stop.id)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <div
                  className={`w-10 h-10 rounded-full border-2 transition-all duration-300 flex items-center justify-center ${
                    activeSection === stop.id
                      ? 'bg-gradient-to-r ' + stop.color + ' border-white shadow-lg'
                      : 'bg-slate-800 border-slate-600 hover:border-slate-400'
                  }`}
                >
                  <stop.icon 
                    size={16} 
                    className={`transition-all duration-300 ${
                      activeSection === stop.id ? 'text-white' : 'text-slate-400'
                    }`}
                  />
                </div>
              </motion.div>

              {/* Subsections */}
              {stop.subsections && activeSection === stop.id && (
                <motion.div
                  className="ml-8 mt-4 space-y-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, staggerChildren: 0.1 }}
                >
                  {stop.subsections.map((subsection, subIndex) => (
                    <motion.div
                      key={subsection.id}
                      className="relative cursor-pointer group"
                      onClick={() => scrollToSubsection(subsection.id)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: subIndex * 0.1 }}
                    >
                      <div
                        className={`w-6 h-6 rounded-full transition-all duration-300 flex items-center justify-center ${
                          activeSubsection === subsection.id
                            ? 'bg-gradient-to-r ' + stop.color + ' shadow-md'
                            : 'bg-slate-700 hover:bg-slate-600'
                        }`}
                      >
                        {subsection.icon && (
                          <subsection.icon 
                            size={10} 
                            className={`transition-all duration-300 ${
                              activeSubsection === subsection.id ? 'text-white' : 'text-slate-400'
                            }`}
                          />
                        )}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </div>
          ))}
        </div>

        {/* Floating Progress Indicator */}
        <motion.div
          className="absolute -right-8 top-0 w-16 h-1 bg-slate-700/50 rounded-full overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-blue-400 to-purple-600 rounded-full"
            style={{ scaleX: scrollYProgress, transformOrigin: 'left' }}
            initial={{ scaleX: 0 }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default PageJourney;
