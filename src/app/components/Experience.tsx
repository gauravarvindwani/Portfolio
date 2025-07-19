'use client';

import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useRef } from 'react';

const Experience = () => {
  const { ref: headingRef, isVisible: headingVisible } = useScrollAnimation();
  const tiltRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!tiltRef.current) return;
    
    const rect = tiltRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    const rotateX = (mouseY / (rect.height / 2)) * -15;
    const rotateY = (mouseX / (rect.width / 2)) * 15;
    
    tiltRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    if (!tiltRef.current) return;
    tiltRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
  };
  
  const experiences = [
    // {
    //   title: 'Software Engineer',
    //   company: 'Tech Corp',
    //   duration: 'Jan 2023 - Present',
    //   description:
    //     'Developed and maintained web applications using React, Node.js, and PostgreSQL.',
    // },
    // {
    //   title: 'Junior Developer',
    //   company: 'Dev Labs',
    //   duration: 'Jun 2021 - Dec 2022',
    //   description:
    //     'Assisted in building mobile applications using React Native and Flutter.',
    // },
    {
      title: 'AI/ML Intern',
      company: 'Tata Motors',
      duration: 'Dec 2024 - June 2025',
      description:
        'Worked on 2 Major Projects: 1.Absenteeism Prediction Model using previous 20 years of raw data.Model acheived 95 percent acuracy considring various factors and parameters.'
        +'  2. Skills based task allocation when assigned person notpresent.Rhis was part of workflow automation project where we used AI to allocate tasks based on skills and availability.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section id="experience" className="py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:ml-20">
        <div 
          ref={headingRef}
          className={`section-heading ${headingVisible ? 'animate-in' : ''}`}
        >
          <div 
            ref={tiltRef}
            className="mystical-heading-card mystical-card-edgy text-center"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                My Working Experience
              </span>
            </h2>
          </div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid md:grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              data-subsection={`exp-${index + 1}`}
          className="group bg-slate-800/50 dark:bg-slate-800/50 light:bg-white/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 lg:p-8 border border-slate-700/50 dark:border-slate-700/50 light:border-slate-300/50 hover:border-blue-400/50 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-start gap-4 lg:gap-6">
                {/* Company Logo Placeholder */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-600/20 border border-slate-700/50 dark:border-slate-700/50 light:border-slate-300/50 rounded-xl flex items-center justify-center overflow-hidden"
                >
                  <div className="text-2xl">🏢</div>
                </motion.div>
                
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg lg:text-2xl font-semibold text-white dark:text-white light:text-gray-900 mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-base lg:text-lg text-purple-500 dark:text-purple-400 light:text-purple-600 mb-2">{exp.company}</p>
                  <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-400 dark:text-blue-400 light:text-blue-600 rounded-full text-sm font-medium mb-4">
                    {exp.duration}
                  </span>
                  <p className="text-sm lg:text-base text-gray-300 dark:text-gray-300 light:text-gray-600 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
              
              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-600/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

