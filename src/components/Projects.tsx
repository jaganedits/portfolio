import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { 
  FileCheck, 
  Wheat, 
  Ticket, 
  Users, 
  Calendar,
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import { projects } from '../data/resume';

const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
  FileCheck,
  Wheat,
  Ticket,
  Users,
  Calendar,
};

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeProject, setActiveProject] = useState<number | null>(null);

  return (
    <section id="projects" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/20 to-midnight" />
      <div className="absolute top-1/3 -right-32 w-80 h-80 bg-accent/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/3 -left-32 w-64 h-64 bg-accent/5 rounded-full blur-[80px]" />
      
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-mono text-sm mb-4 block">// Featured Work</span>
          <h2 className="section-title mb-4">
            Key <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-silver max-w-2xl mx-auto">
            Enterprise solutions I've built that solve real-world problems
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const IconComponent = iconMap[project.icon] || FileCheck;
            const isActive = activeProject === index;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`glass-card overflow-hidden group cursor-pointer transition-all duration-500 
                  ${isActive ? 'ring-2 ring-accent/50' : 'hover:border-accent/30'}`}
                onClick={() => setActiveProject(isActive ? null : index)}
              >
                {/* Card Header */}
                <div className="relative p-6 pb-4">
                  {/* Gradient Overlay */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-accent/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative">
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/30 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-accent/20 transition-all duration-300">
                      <IconComponent className="w-6 h-6 text-accent" />
                    </div>

                    {/* Title */}
                    <h3 className="font-display font-bold text-xl text-pearl mb-1 group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-accent/80 text-sm font-medium mb-3">{project.subtitle}</p>

                    {/* Description */}
                    <p className="text-silver/80 text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.slice(0, 4).map((tech) => (
                        <span key={tech} className="tech-badge text-xs">
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 4 && (
                        <span className="tech-badge text-xs">
                          +{project.tech.length - 4}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Expandable Content */}
                <motion.div
                  initial={false}
                  animate={{ height: isActive ? 'auto' : 0 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 border-t border-slate/20 pt-4">
                    <h4 className="text-sm font-semibold text-pearl mb-3 flex items-center gap-2">
                      <ExternalLink size={14} className="text-accent" />
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, hIndex) => (
                        <li key={hIndex} className="flex items-start gap-2 text-silver/70 text-sm">
                          <ChevronRight size={14} className="text-accent shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>

                {/* View More Indicator */}
                <div className="px-6 pb-4">
                  <span className="text-xs text-silver/50 flex items-center gap-1 group-hover:text-accent/70 transition-colors">
                    {isActive ? 'Click to collapse' : 'Click to expand'}
                    <ChevronRight 
                      size={12} 
                      className={`transition-transform duration-300 ${isActive ? 'rotate-90' : ''}`} 
                    />
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
