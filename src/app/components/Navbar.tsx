'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Home, User, Briefcase, FolderOpen, Mail } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show navbar when scrolling up, hide when scrolling down
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsMobileMenuOpen(false); // Close mobile menu when hiding navbar
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'About', href: '#about', icon: User },
    { name: 'Experience', href: '#experience', icon: Briefcase },
    { name: 'Projects', href: '#projects', icon: FolderOpen },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  return (
    <>
      {/* Fixed Navigation Bar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ 
          y: isVisible ? 0 : -100, 
          opacity: isVisible ? 1 : 0 
        }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-auto max-w-[95vw]"
      >
        <motion.div
          className="backdrop-blur-md border bg-slate-900/80 dark:bg-slate-900/80 light:bg-white/80 border-slate-700/50 dark:border-slate-700/50 light:border-slate-300/50 shadow-2xl shadow-blue-500/20 rounded-full px-6 py-3"
          whileHover={{ scale: 1.02 }}
          style={{
            boxShadow: '0 20px 40px rgba(59, 130, 246, 0.15), 0 0 0 1px rgba(148, 163, 184, 0.1)'
          }}
        >
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Logo */}
            <motion.div whileHover={{ scale: 1.05 }}>
              <a href="#home" className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                Portfolio
              </a>
            </motion.div>

            {/* Navigation Items */}
            <div className="flex items-center space-x-6">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-gray-300 dark:text-gray-300 light:text-gray-600 hover:text-white dark:hover:text-white light:hover:text-gray-900 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 relative group hover:bg-white/10"
                >
                  <span>{item.name}</span>
                  <motion.span 
                    className="absolute inset-x-0 bottom-1 h-0.5 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                    layoutId="navbar-indicator"
                  />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center justify-between space-x-4">
            <motion.div whileHover={{ scale: 1.05 }}>
              <a href="#home" className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                Portfolio
              </a>
            </motion.div>
            
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 dark:text-gray-300 light:text-gray-600 hover:text-white dark:hover:text-white light:hover:text-gray-900 p-2 rounded-full hover:bg-white/10 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </motion.div>
            </motion.button>
          </div>
        </motion.div>
      </motion.nav>

      {/* Mobile Navigation Menu */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: -20 }}
        animate={{ 
          opacity: isMobileMenuOpen ? 1 : 0,
          scale: isMobileMenuOpen ? 1 : 0.8,
          y: isMobileMenuOpen ? 0 : -20
        }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className={`fixed top-20 left-1/2 transform -translate-x-1/2 z-40 md:hidden w-80 max-w-[90vw] ${
          isMobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        <div className="bg-slate-900/90 backdrop-blur-md border border-slate-700/50 rounded-2xl p-4 shadow-2xl shadow-blue-500/20">
          <div className="space-y-2">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                initial={{ opacity: 0, x: 20 }}
                animate={{ 
                  opacity: isMobileMenuOpen ? 1 : 0,
                  x: isMobileMenuOpen ? 0 : 20
                }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                whileHover={{ scale: 1.05, x: -5 }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-300 hover:text-white flex items-center space-x-3 px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 hover:bg-white/10"
              >
                <item.icon size={16} />
                <span>{item.name}</span>
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
