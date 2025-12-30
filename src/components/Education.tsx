import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Calendar, Building2 } from 'lucide-react';
import { education } from '../data/resume';

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="relative py-24 md:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-midnight via-charcoal/20 to-midnight" />
      
      <div ref={ref} className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-mono text-sm mb-4 block">// Academic Background</span>
          <h2 className="section-title mb-4">
            <span className="text-gradient">Education</span>
          </h2>
          <p className="text-silver max-w-2xl mx-auto">
            Foundation that shaped my technical expertise
          </p>
        </motion.div>

        {/* Education Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="glass-card p-6 group hover:border-accent/30 transition-all duration-500 relative overflow-hidden"
            >
              {/* Background Decoration */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-accent/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative">
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-accent/10 border border-accent/30 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-accent/20 transition-all duration-300">
                  <GraduationCap className="w-7 h-7 text-accent" />
                </div>

                {/* Degree */}
                <h3 className="font-display font-bold text-xl text-pearl mb-2 group-hover:text-accent transition-colors">
                  {edu.degree}
                </h3>

                {/* Institution */}
                <div className="flex items-center gap-2 text-silver mb-2">
                  <Building2 size={16} className="text-accent/70" />
                  <span className="text-sm">{edu.institution}</span>
                </div>

                {/* University */}
                <p className="text-silver/70 text-sm mb-3">{edu.university}</p>

                {/* Period */}
                <div className="flex items-center gap-2 text-accent">
                  <Calendar size={14} />
                  <span className="font-mono text-sm">{edu.period}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
