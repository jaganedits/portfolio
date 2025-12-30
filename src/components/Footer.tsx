import { motion } from 'framer-motion';
import { Heart, Terminal } from 'lucide-react';
import { personalInfo } from '../data/resume';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-8 border-t border-slate/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex items-center gap-2"
          >
            <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center">
              <Terminal className="w-4 h-4 text-accent" />
            </div>
            <span className="font-display font-bold text-lg text-pearl">
              JM<span className="text-accent">.</span>
            </span>
          </motion.div>

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-silver/60 text-sm flex items-center gap-1.5"
          >
            © {currentYear} {personalInfo.name}. Made with
            <Heart size={14} className="text-red-500 fill-red-500" />
            in {personalInfo.location.split(',')[0]}
          </motion.p>

          {/* Back to Top */}
          <motion.a
            href="#"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-silver/60 text-sm hover:text-accent transition-colors"
          >
            Back to top ↑
          </motion.a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
