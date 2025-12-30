import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Rocket, Zap, Users } from 'lucide-react';
import { personalInfo } from '../data/resume';

const stats = [
  { label: 'Years Experience', value: '2+', icon: Rocket },
  { label: 'Projects Delivered', value: '10+', icon: Code2 },
  { label: 'Technologies', value: '15+', icon: Zap },
  { label: 'Happy Clients', value: '5+', icon: Users },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-midnight via-charcoal/30 to-midnight" />
      
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Decorative Elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-transparent to-accent/10 rounded-3xl transform rotate-3" />
              <div className="absolute inset-4 glass-card rounded-3xl overflow-hidden">
                <div className="absolute inset-0 bg-grid-pattern opacity-20" />
                <div className="relative h-full flex items-center justify-center p-8">
                  {/* Code Block Visual */}
                  <div className="w-full font-mono text-sm">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="w-3 h-3 rounded-full bg-red-500/80" />
                      <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <span className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                    <pre className="text-silver/80 overflow-hidden">
                      <code>
                        <span className="text-accent">const</span> developer = {'{'}
                        {'\n'}  <span className="text-silver">name:</span> <span className="text-emerald-400">"Jagan"</span>,
                        {'\n'}  <span className="text-silver">role:</span> <span className="text-emerald-400">"Full Stack"</span>,
                        {'\n'}  <span className="text-silver">skills:</span> [
                        {'\n'}    <span className="text-emerald-400">"Angular"</span>,
                        {'\n'}    <span className="text-emerald-400">"Flutter"</span>,
                        {'\n'}    <span className="text-emerald-400">".NET Core"</span>
                        {'\n'}  ],
                        {'\n'}  <span className="text-silver">passion:</span> <span className="text-emerald-400">"∞"</span>
                        {'\n'}{'}'};
                      </code>
                    </pre>
                  </div>
                </div>
              </div>
              
              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="absolute -bottom-4 -right-4 px-4 py-2 bg-accent text-midnight font-semibold rounded-xl shadow-lg shadow-accent/30"
              >
                Open to Work
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-accent font-mono text-sm mb-4 block">// About Me</span>
            <h2 className="section-title mb-6">
              Crafting Digital
              <span className="text-gradient"> Experiences</span>
            </h2>
            
            <div className="space-y-4 text-silver leading-relaxed mb-8">
              <p>
                {personalInfo.summary}
              </p>
              <p>
                Skilled in IIS deployment, data encryption, role-based access control, 
                and building secure, scalable solutions. I'm passionate about creating 
                applications that make a real impact.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                  className="glass-card p-4 text-center group hover:border-accent/50 transition-colors"
                >
                  <stat.icon className="w-5 h-5 text-accent mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <div className="text-2xl font-display font-bold text-pearl">{stat.value}</div>
                  <div className="text-xs text-silver/70">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
