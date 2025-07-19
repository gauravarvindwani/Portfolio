'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useState, useRef } from 'react';

const Contact = () => {
  const { ref: headingRef, isVisible: headingVisible } = useScrollAnimation();
  const headingCardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!headingCardRef.current) return;
    
    const card = headingCardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    if (!headingCardRef.current) return;
    
    headingCardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
  };
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Message sent successfully! I\'ll get back to you soon.'
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.error || 'Failed to send message. Please try again.'
        });
      }
    } catch {
      setSubmitStatus({
        type: 'error',
        message: 'Network error. Please check your connection and try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'gauravwani2705@gmail.com',
      href: 'mailto:gauravwani2705@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9022202159',
      href: 'tel:+919022202159'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'India',
      href: '#'
    }
  ];

  return (
    <section id="contact" className="py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:ml-20">
        <div 
          ref={headingRef}
          className={`section-heading ${headingVisible ? 'animate-in' : ''}`}
        >
          <div 
            ref={headingCardRef}
            className="mystical-heading-card mystical-card-cloudy text-center"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                Lets Get in Touch
              </span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 lg:p-8 border border-slate-700/50"
          >
            <h3 className="text-xl lg:text-2xl font-bold text-white mb-4 lg:mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg focus:outline-none focus:border-blue-500 text-white placeholder-gray-400"
                  placeholder="Your name or Orgnisation name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg focus:outline-none focus:border-blue-500 text-white placeholder-gray-400"
                  placeholder="write your email here..."
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg focus:outline-none focus:border-blue-500 text-white placeholder-gray-400 resize-none"
                  placeholder="Write your message here..."
                />
              </div>
              
              {/* Status Message */}
              {submitStatus.message && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-lg text-center ${
                    submitStatus.type === 'success'
                      ? 'bg-green-500/20 text-green-300 border border-green-500/50'
                      : 'bg-red-500/20 text-red-300 border border-red-500/50'
                  }`}
                >
                  {submitStatus.message}
                </motion.div>
              )}
              
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                className={`w-full px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 ${
                  isSubmitting
                    ? 'bg-gray-600 cursor-not-allowed'
                    : 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center space-x-4 p-4 bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <info.icon size={24} className="text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">{info.label}</p>
                      <p className="text-white font-medium">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Let's Work Together - Enhanced Visibility */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="bg-gradient-to-r from-blue-500/30 to-purple-600/30 rounded-xl p-8 border-2 border-blue-500/50 shadow-xl shadow-blue-500/20 backdrop-blur-sm"
            >
              <motion.h4 
                className="text-2xl font-bold text-white mb-6 text-center"
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Let&apos;s Work Together
                </span>
                <span className="text-2xl ml-2">🚀</span>
              </motion.h4>
              <motion.p 
                className="text-gray-200 mb-6 text-lg leading-relaxed text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                I&apos;m currently available for freelance projects and full-time opportunities. 
                Whether you need backend development, AI/ML solutions, DevOps automation, or AWS cloud infrastructure, 
                I&apos;d love to hear from you and bring your ideas to life!
              </motion.p>
              <motion.div 
                className="flex flex-wrap justify-center gap-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
              >
                <motion.span 
                  className="px-4 py-2 bg-green-500/30 text-green-300 rounded-full text-sm font-medium border border-green-500/50 shadow-lg shadow-green-500/20"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(34, 197, 94, 0.4)" }}
                >
                  ✅ Available for hire
                </motion.span>
                <motion.span 
                  className="px-4 py-2 bg-blue-500/30 text-blue-300 rounded-full text-sm font-medium border border-blue-500/50 shadow-lg shadow-blue-500/20"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(59, 130, 246, 0.4)" }}
                >
                  🌍 Remote friendly
                </motion.span>
                <motion.span 
                  className="px-4 py-2 bg-purple-500/30 text-purple-300 rounded-full text-sm font-medium border border-purple-500/50 shadow-lg shadow-purple-500/20"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(168, 85, 247, 0.4)" }}
                >
                  ⚡ Quick response
                </motion.span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
