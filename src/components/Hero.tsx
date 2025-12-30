import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { personalInfo } from '../data/resume';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-accent/20 rounded-full blur-[128px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-[128px] animate-pulse-slow animation-delay-400" />
      
      {/* Floating Elements */}
      <div className="absolute top-1/3 left-[15%] w-2 h-2 bg-accent rounded-full animate-float opacity-60" />
      <div className="absolute top-1/2 right-[20%] w-3 h-3 bg-accent/50 rounded-full animate-float animation-delay-200" />
      <div className="absolute bottom-1/3 left-[25%] w-1.5 h-1.5 bg-accent/70 rounded-full animate-float animation-delay-400" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 mb-8"
        >
          <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
          <span className="text-sm font-medium text-accent">Available for opportunities</span>
        </motion.div>

        {/* Main Content */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight mb-4"
        >
          <span className="text-pearl">{personalInfo.name.split(' ')[0]}</span>
          <br />
          <span className="text-gradient">{personalInfo.name.split(' ')[1]}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl sm:text-2xl md:text-3xl text-silver font-light mb-6"
        >
          {personalInfo.title}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-2xl mx-auto text-silver/80 text-base md:text-lg mb-8 leading-relaxed"
        >
          Building enterprise-level web and mobile applications with 
          <span className="text-accent"> Angular</span>, 
          <span className="text-accent"> Flutter</span>, and 
          <span className="text-accent"> .NET Core</span>
        </motion.p>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-10 text-sm text-silver"
        >
          <span className="flex items-center gap-2">
            <MapPin size={16} className="text-accent" />
            {personalInfo.location}
          </span>
          <span className="hidden sm:block text-slate/50">•</span>
          <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-2 hover:text-accent transition-colors">
            <Mail size={16} className="text-accent" />
            {personalInfo.email}
          </a>
          <span className="hidden sm:block text-slate/50">•</span>
          <a href={`tel:${personalInfo.phone}`} className="flex items-center gap-2 hover:text-accent transition-colors">
            <Phone size={16} className="text-accent" />
            {personalInfo.phone}
          </a>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <motion.a
            href="#projects"
            className="btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.a>
          <motion.a
            href="#contact"
            className="btn-outline"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex items-center justify-center gap-4"
        >
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-charcoal/50 border border-slate/30 text-silver hover:text-accent hover:border-accent/50 transition-all duration-300"
          >
            <Github size={20} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-charcoal/50 border border-slate/30 text-silver hover:text-accent hover:border-accent/50 transition-all duration-300"
          >
            <Linkedin size={20} />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="p-3 rounded-xl bg-charcoal/50 border border-slate/30 text-silver hover:text-accent hover:border-accent/50 transition-all duration-300"
          >
            <Mail size={20} />
          </a>
        </motion.div>

      </div>

      {/* Scroll Indicator - Outside the content container */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.a
          href="#about"
          className="flex flex-col items-center gap-2 text-silver/50 hover:text-accent transition-colors"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-xs font-mono">Scroll</span>
          <ArrowDown size={16} />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
