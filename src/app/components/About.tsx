'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import { 
  Code, 
  Database, 
  Globe, 
  Smartphone, 
  Server, 
  Zap,
  Cloud,
  Brain,
  Settings,
  Monitor,
  Layers,
  GitBranch,
  Container,
  Shield,
  Cpu,
  BarChart3,
  FileCode,
  Wrench
} from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About = () => {
  const cardRef = useRef<HTMLDivElement>(null); // Reference for tilt effect
  const techStackCardRef = useRef<HTMLDivElement>(null); // Reference for tech stack tilt effect

  const handleMouseMove = (e: React.MouseEvent) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      cardRef.current.style.transform = `perspective(600px) rotateX(${y / 20}deg) rotateY(${x / 20}deg)`;
    }
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = 'perspective(600px) rotateX(0deg) rotateY(0deg)';
    }
  };

  const handleTechStackMouseMove = (e: React.MouseEvent) => {
    if (techStackCardRef.current) {
      const rect = techStackCardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      techStackCardRef.current.style.transform = `perspective(600px) rotateX(${y / 20}deg) rotateY(${x / 20}deg)`;
    }
  };

  const handleTechStackMouseLeave = () => {
    if (techStackCardRef.current) {
      techStackCardRef.current.style.transform = 'perspective(600px) rotateX(0deg) rotateY(0deg)';
    }
  };
  const { ref: headingRef, isVisible: headingVisible } = useScrollAnimation();
  const { ref: techStackRef, isVisible: techStackVisible } = useScrollAnimation();
  
  const expertiseAreas = [
    {
      title: 'Backend Development',
      icon: Server,
      color: 'from-green-400 to-green-600',
      languages: ['Python', 'JavaScript', 'SQL', 'Bash'],
      tools: ['FastAPI', 'Django', 'Flask', 'Node.js', 'Express.js', 'PostgreSQL']
    },
    {
      title: 'AI/ML',
      icon: Brain,
      color: 'from-yellow-400 to-yellow-600',
      languages: ['Python', 'R'],
      tools: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas']
    },
    {
      title: 'GenAI/Agentic AI',
      icon: Cpu,
      color: 'from-purple-400 to-purple-600',
      languages: ['Python', 'Julia'],
      tools: ['OpenAI', 'LangChain', 'Transformers', 'Hugging Face']
    },
    {
      title: 'System Design',
      icon: Layers,
      color: 'from-red-400 to-red-600',
      languages: ['C++', 'Python'],
      tools: ['Microservices', 'Event-Driven Architecture', 'Design Patterns']
    },
    {
      title: 'DevOps  Infrastructure',
      icon: Settings,
      color: 'from-orange-400 to-orange-600',
      languages: ['Bash', 'Python', 'YAML', 'HCL'],
      tools: ['Docker', 'Kubernetes', 'Terraform', 'Ansible', 'Jenkins', 'GitHub Actions']
    },
    {
      title: 'Database Management',
      icon: Database,
      color: 'from-indigo-400 to-indigo-600',
      languages: ['SQL', 'NoSQL', 'Python'],
      tools: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'DynamoDB', 'Elasticsearch']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <section id="about" className="py-12 lg:py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:ml-20">
        <div 
          ref={headingRef}
          className={`section-heading ${headingVisible ? 'animate-in' : ''}`}
        >
          <div 
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="mystical-heading-card mystical-card-ancient text-center"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                Know About Me
              </span>
            </h2>
          </div>
        </div>

        {/* About Me Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-slate-800/50 backdrop-blur-sm rounded-xl lg:rounded-2xl p-4 sm:p-6 lg:p-8 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 mb-8 lg:mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            {/* Left Side - Info */}
            <div className="space-y-6">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 lg:mb-6">About Me</h3>
              <p className="text-gray-300 text-base lg:text-lg leading-relaxed">
                I am a passionate Backend Developer and AI/ML Engineer with extensive hands-on experience 
                in Python development, DevOps practices, and data science. My journey started with curiosity about 
                building robust, scalable systems and evolved into exploring intelligent solutions through machine learning.
              </p>
              <p className="text-gray-300 text-base lg:text-lg leading-relaxed">
                I specialize in backend development using Python frameworks like FastAPI and Django, combined with 
                AI/ML expertise gained through internship experience in AI/ML departments. My technical skills span 
                from data science and machine learning to cloud infrastructure and DevOps automation.
              </p>
              <p className="text-gray-300 text-base lg:text-lg leading-relaxed">
                I believe in building intelligent, reliable systems that leverage both traditional software engineering 
                and modern AI/ML techniques. My approach combines scalable backend architectures with data-driven 
                insights to create solutions that are both technically sound and business-impactful.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-2 gap-3 lg:gap-4 mt-6 lg:mt-8">
                <div className="bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-lg lg:rounded-xl p-3 lg:p-4 text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-white mb-1">3+</div>
                  <div className="text-xs lg:text-sm text-gray-300">Years Experience</div>
                </div>
                <div className="bg-gradient-to-r from-green-500/20 to-teal-600/20 rounded-lg lg:rounded-xl p-3 lg:p-4 text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-white mb-1">25+</div>
                  <div className="text-xs lg:text-sm text-gray-300">Projects Completed</div>
                </div>
              </div>
              
              {/* Resume Download Button */}
              <div className="mt-8">
                <a 
                  href="/resume.pdf" 
                  download
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Resume
                </a>
              </div>
            </div>

            {/* Right Side - Photo */}
            <div className="relative flex justify-center">
              <motion.div
                className="w-130 h-160 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-600/20 border border-slate-700/50 flex items-center justify-center overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                {/* Photo Placeholder */}
                <div className="w-full h-full bg-gradient-to-br from-blue-500/10 to-purple-600/10 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">
                      <img src="/Gaurav.png" className="w-full h-full object-cover rounded-2xl" />
                    </div>
                    {/* <div className="text-white font-medium text-lg mb-2">Gaurav Wani</div>
                    <div className="text-gray-300 text-sm">Backend Developer | AI/ML Engineer</div> */}
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </motion.div>
              
              {/* Floating decoration */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-pink-400 to-orange-400 rounded-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
              />
            </div>
          </div>
        </motion.div>

        {/* Expertise & Tech Stack Section */}
        <div 
          ref={techStackRef}
          className={`section-heading ${techStackVisible ? 'animate-in' : ''}`}
        >
          <div 
            ref={techStackCardRef}
            onMouseMove={handleTechStackMouseMove}
            onMouseLeave={handleTechStackMouseLeave}
            className="mystical-heading-card mystical-card-cloudy text-center"
          >
            <h3 className="text-3xl font-bold text-white mb-4">Expertise & Tech Stack</h3>
          </div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8"
        >
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={area.title}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group relative bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${area.color} flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                  <area.icon size={24} className="text-white" />
                </div>
                <h4 className="text-xl font-semibold text-white">{area.title}</h4>
              </div>
              
              {/* Languages */}
              <div className="mb-4">
                <h5 className="text-sm font-medium text-gray-300 mb-2 flex items-center">
                  <FileCode size={16} className="mr-2" />
                  Languages
                </h5>
                <div className="flex flex-wrap gap-2">
                  {area.languages.map((lang, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs bg-slate-700/50 text-gray-300 rounded-full border border-slate-600/50"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Tools */}
              <div>
                <h5 className="text-sm font-medium text-gray-300 mb-2 flex items-center">
                  <Wrench size={16} className="mr-2" />
                  Tools & Frameworks
                </h5>
                <div className="flex flex-wrap gap-2">
                  {area.tools.map((tool, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs bg-slate-700/50 text-gray-300 rounded-full border border-slate-600/50"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Hover effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${area.color} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300`}></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
