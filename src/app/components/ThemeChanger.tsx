'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

const ThemeChanger = () => {
  const [isDark, setIsDark] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check for saved theme preference or default to dark
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
    } else {
      // Default to dark theme
      setIsDark(true);
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    // Apply theme to document
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark, mounted]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  // Don't render until mounted to avoid hydration mismatch
  if (!mounted) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="fixed top-4 right-4 lg:right-20 z-50"
    >
      <motion.button
        onClick={toggleTheme}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={`p-3 rounded-full backdrop-blur-md border transition-all duration-300 shadow-lg hover:shadow-xl ${
          isDark 
            ? 'bg-slate-900/80 border-slate-700/50 hover:bg-slate-800/80' 
            : 'bg-white/80 border-slate-300/50 hover:bg-white/90'
        }`}
        style={{
          boxShadow: isDark 
            ? '0 10px 30px rgba(59, 130, 246, 0.1), 0 0 0 1px rgba(148, 163, 184, 0.1)'
            : '0 10px 30px rgba(59, 130, 246, 0.15), 0 0 0 1px rgba(148, 163, 184, 0.2)'
        }}
      >
        <motion.div
          initial={false}
          animate={{ rotate: isDark ? 0 : 180 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="relative"
        >
          {isDark ? (
            <Sun size={20} className="text-yellow-400" />
          ) : (
            <Moon size={20} className="text-blue-600" />
          )}
        </motion.div>
        
        {/* Ripple effect */}
        <motion.div
          className="absolute inset-0 rounded-full"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            background: isDark ? 'rgba(59, 130, 246, 0.3)' : 'rgba(234, 179, 8, 0.3)'
          }}
        />
      </motion.button>
    </motion.div>
  );
};

export default ThemeChanger;
