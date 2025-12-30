import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, MapPin, Calendar, ChevronRight } from 'lucide-react';
import { experience } from '../data/resume';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/20 via-midnight to-charcoal/20" />
      <div className="absolute top-1/2 -left-64 w-96 h-96 bg-accent/5 rounded-full blur-[128px]" />
      
      <div ref={ref} className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-mono text-sm mb-4 block">// Professional Journey</span>
          <h2 className="section-title mb-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-silver max-w-2xl mx-auto">
            Building enterprise solutions and delivering impactful digital products
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent/50 via-accent/20 to-transparent transform md:-translate-x-1/2" />

          {experience.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className={`relative mb-12 last:mb-0 ${
                index % 2 === 0 ? 'md:pr-[50%] md:text-right' : 'md:pl-[50%] md:ml-auto'
              }`}
            >
              {/* Timeline Dot */}
              <div className={`absolute top-0 w-4 h-4 rounded-full bg-accent shadow-lg shadow-accent/50 
                ${index % 2 === 0 ? 'left-0 md:left-auto md:right-0 md:translate-x-[calc(50%-1px)]' : 'left-0 md:-translate-x-[calc(50%+1px)]'}
                transform -translate-x-1/2 md:translate-x-1/2`}
              />

              {/* Content Card */}
              <div className={`ml-8 md:ml-0 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                <div className="glass-card p-6 hover:border-accent/30 transition-all duration-500 group">
                  {/* Header */}
                  <div className={`flex flex-wrap items-start gap-4 mb-4 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    <div className="p-3 rounded-xl bg-accent/10 border border-accent/30 group-hover:bg-accent/20 transition-colors">
                      <Briefcase className="w-5 h-5 text-accent" />
                    </div>
                    <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                      <h3 className="font-display font-bold text-xl text-pearl mb-1">
                        {job.title}
                      </h3>
                      <p className="text-accent font-medium">{job.company}</p>
                    </div>
                  </div>

                  {/* Meta Info */}
                  <div className={`flex flex-wrap gap-4 mb-4 text-sm text-silver ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={14} className="text-accent/70" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar size={14} className="text-accent/70" />
                      {job.period}
                    </span>
                  </div>

                  {/* Highlights */}
                  <ul className={`space-y-2 ${index % 2 === 0 ? 'md:text-left' : ''}`}>
                    {job.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="flex items-start gap-2 text-silver/80 text-sm">
                        <ChevronRight size={16} className="text-accent shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
