import { motion } from 'motion/react';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 px-4 overflow-hidden border-t border-purple-500/20">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-black"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
              Praneeth Prasad
            </h3>
            <p className="text-gray-400 text-sm">Senior Software Engineer</p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex gap-4"
          >
            <a
              href="https://www.linkedin.com/in/praneeth-prasad-vemuluri-515974147/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/5 backdrop-blur-sm rounded-full hover:bg-blue-600 transition-all hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/Praneethlucky"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/5 backdrop-blur-sm rounded-full hover:bg-purple-600 transition-all hover:scale-110 hover:shadow-lg hover:shadow-purple-500/50"
            >
              <Github size={20} />
            </a>
            <a
              href="mailto:praneethlucky132@gmail.com"
              className="p-3 bg-white/5 backdrop-blur-sm rounded-full hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 transition-all hover:scale-110 hover:shadow-lg hover:shadow-purple-500/50"
            >
              <Mail size={20} />
            </a>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center md:text-right"
          >
            <p className="text-gray-400 text-sm flex items-center gap-2 justify-center md:justify-end">
              Made with <Heart size={16} className="text-red-500 animate-pulse" /> by Praneeth
            </p>
            <p className="text-gray-500 text-xs mt-1">© {currentYear} All rights reserved</p>
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 pt-8 border-t border-purple-500/10 text-center"
        >
          <p className="text-gray-500 text-xs">
            Built with React, TypeScript, Tailwind CSS & Motion
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
