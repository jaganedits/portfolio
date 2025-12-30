import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Monitor, 
  Smartphone, 
  Server, 
  Database, 
  Cloud, 
  Shield, 
  Wrench 
} from 'lucide-react';
import { skills } from '../data/resume';

const skillCategories = [
  { 
    key: 'frontend' as keyof typeof skills, 
    label: 'Frontend', 
    icon: Monitor,
    color: 'from-blue-500 to-cyan-500'
  },
  { 
    key: 'mobile' as keyof typeof skills, 
    label: 'Mobile', 
    icon: Smartphone,
    color: 'from-purple-500 to-pink-500'
  },
  { 
    key: 'backend' as keyof typeof skills, 
    label: 'Backend', 
    icon: Server,
    color: 'from-orange-500 to-red-500'
  },
  { 
    key: 'database' as keyof typeof skills, 
    label: 'Database', 
    icon: Database,
    color: 'from-emerald-500 to-teal-500'
  },
  { 
    key: 'cloud' as keyof typeof skills, 
    label: 'Cloud & DevOps', 
    icon: Cloud,
    color: 'from-sky-500 to-blue-500'
  },
  { 
    key: 'security' as keyof typeof skills, 
    label: 'Security', 
    icon: Shield,
    color: 'from-rose-500 to-pink-500'
  },
  { 
    key: 'tools' as keyof typeof skills, 
    label: 'Tools', 
    icon: Wrench,
    color: 'from-amber-500 to-orange-500'
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="relative py-24 md:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-midnight to-charcoal/20" />
      
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-mono text-sm mb-4 block">// Technical Skills</span>
          <h2 className="section-title mb-4">
            My Tech <span className="text-gradient">Arsenal</span>
          </h2>
          <p className="text-silver max-w-2xl mx-auto">
            A comprehensive toolkit built over years of hands-on experience in enterprise development
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.key}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass-card p-6 group hover:border-accent/30 transition-all duration-500"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2.5 rounded-xl bg-gradient-to-br ${category.color} bg-opacity-20`}>
                  <category.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-display font-semibold text-pearl text-lg">
                  {category.label}
                </h3>
              </div>

              {/* Skills List */}
              <div className="flex flex-wrap gap-2">
                {skills[category.key].map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: index * 0.1 + skillIndex * 0.05 + 0.2, duration: 0.3 }}
                    className="tech-badge"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Decoration */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-16 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent"
        />
      </div>
    </section>
  );
};

export default Skills;
