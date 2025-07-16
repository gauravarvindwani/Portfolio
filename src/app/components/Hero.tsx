'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react';

const Hero = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.3,
        duration: 0.8,
        ease: "easeOut" as const
      }
    })
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/gauravarvindwani/', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/gauravarvindwani/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:gauravwani2705@gmail.com', label: 'Email' }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-blue-900/20"></div>
        
        {/* Floating particles */}
        {typeof window !== 'undefined' && [...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: 'reverse'
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-8">
        <motion.div
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Avatar */}
          <motion.div
            custom={0}
            variants={textVariants}
            className="flex justify-center mb-8"
          >
            <div className="relative z-10">
              <motion.div
                className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 p-1"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                style={{ zIndex: 10 }}
              >
                <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center overflow-hidden">
                  {/* Placeholder for avatar/photo */}
                  <div className="w-28 h-28 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-600/20 flex items-center justify-center text-6xl font-bold text-white">
                    👨‍💻
                  </div>
                </div>
              </motion.div>
              
              {/* Floating particles around avatar */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-blue-400 rounded-full"
                  style={{
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)'
                  }}
                  animate={{
                    x: Math.cos(i * 0.785) * 60,
                    y: Math.sin(i * 0.785) * 60,
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 1, 0.3]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.2
                  }}
                />
              ))}
            </div>
          </motion.div>

          <motion.h1
            custom={1}
            variants={textVariants}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold"
          >
            <span className="block">Hi, I'm</span>
            <span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Gaurav Wani
            </span>
          </motion.h1>

          <motion.p
            custom={1}
            variants={textVariants}
            className="text-xl sm:text-2xl lg:text-3xl text-gray-300 dark:text-gray-300 light:text-gray-600 font-light"
          >
            <span className="typing-effect">Backend Developer | DevOps | AI/ML Engineer</span>
          </motion.p>

          <motion.p
            custom={2}
            variants={textVariants}
            className="text-lg sm:text-xl text-gray-400 dark:text-gray-400 light:text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
            I specialize in Backend Development using Python, DevOps practices, and AI/ML engineering 
            with hands-on experience in AWS cloud services and data science projects.
          </motion.p>

          {/* Social Links */}
          <motion.div
            custom={3}
            variants={textVariants}
            className="flex justify-center space-x-6"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 360 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full bg-slate-800/50 hover:bg-slate-700/50 transition-colors border border-slate-700/50"
              >
                <social.icon size={24} className="text-gray-300" />
              </motion.a>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            custom={4}
            variants={textVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              View My Work
            </motion.a>
            <motion.a
              href="/resume.pdf"
              download="Gaurav_Wani_Resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
            >
              <Download size={20} />
              Download Resume
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border-2 border-gray-300 text-gray-300 rounded-full font-semibold hover:bg-gray-300 hover:text-slate-900 transition-all duration-300"
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-gray-400 cursor-pointer"
        >
          <ArrowDown size={32} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
