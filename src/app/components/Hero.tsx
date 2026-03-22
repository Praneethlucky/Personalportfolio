import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Mail, Phone, Download, Eye, Send } from 'lucide-react';

export function Hero() {
  const [displayText, setDisplayText] = useState('');
  const fullName = 'Praneeth Prasad Vemuluri';
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullName.length) {
        setDisplayText(fullName.slice(0, currentIndex));
        currentIndex++;
      } else {
        setIsTypingComplete(true);
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      {/* Animated background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-black"></div>
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 text-center max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-purple-400 text-lg mb-4">Hi, I'm</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent min-h-[80px] md:min-h-[100px]">
            {displayText}
            {!isTypingComplete && <span className="animate-pulse">|</span>}
          </h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.5, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-300 mb-6"
          >
            Senior Software Engineer | .NET | React | AI | Cloud | GenAI | Microservices
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4, duration: 0.8 }}
            className="flex flex-wrap gap-4 justify-center mb-8"
          >
            <div className="flex items-center gap-2 text-gray-400">
              <Mail size={18} />
              <span className="text-sm md:text-base">praneethlucky132@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <Phone size={18} />
              <span className="text-sm md:text-base">+91 7416437358</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 4.5, duration: 0.8 }}
            className="flex flex-wrap gap-4 justify-center mb-8"
          >
            <button
              onClick={() => {
                // Create a simple text resume
                const resumeContent = `PRANEETH PRASAD VEMULURI
Senior Software Engineer
Email: praneethlucky132@gmail.com
Phone: +91 7416437358
Location: Hyderabad, Telangana, India
LinkedIn: https://www.linkedin.com/in/praneeth-prasad-vemuluri-515974147/
GitHub: https://github.com/Praneethlucky`;
                
                const blob = new Blob([resumeContent], { type: 'text/plain' });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = 'Praneeth_Resume.txt';
                a.click();
                URL.revokeObjectURL(url);
              }}
              className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-semibold overflow-hidden transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Download size={20} />
                Download Resume
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>

            <button
              onClick={() => scrollToSection('projects')}
              className="group relative px-8 py-4 bg-white/10 backdrop-blur-sm border border-purple-400/50 rounded-lg font-semibold overflow-hidden transition-all hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Eye size={20} />
                View Projects
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className="group relative px-8 py-4 bg-white/10 backdrop-blur-sm border border-blue-400/50 rounded-lg font-semibold overflow-hidden transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Send size={20} />
                Contact
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 5, duration: 0.8 }}
            className="flex gap-6 justify-center"
          >
            <a
              href="https://www.linkedin.com/in/praneeth-prasad-vemuluri-515974147/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-blue-600 transition-all hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com/Praneethlucky"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-purple-600 transition-all hover:scale-110 hover:shadow-lg hover:shadow-purple-500/50"
            >
              <Github size={24} />
            </a>
            <a
              href="mailto:praneethlucky132@gmail.com"
              className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 transition-all hover:scale-110 hover:shadow-lg hover:shadow-purple-500/50"
            >
              <Mail size={24} />
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 5.5, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
