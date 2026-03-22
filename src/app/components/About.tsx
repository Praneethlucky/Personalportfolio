import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { Code2, Rocket, Brain, Award } from 'lucide-react';

export function About() {
  const { ref, isInView } = useInView();

  const highlights = [
    {
      icon: Code2,
      title: '6+ Years',
      description: 'Professional Experience',
    },
    {
      icon: Rocket,
      title: 'Microservices',
      description: 'Architecture Expert',
    },
    {
      icon: Brain,
      title: 'GenAI & LLM',
      description: 'Integration Specialist',
    },
    {
      icon: Award,
      title: 'Clean Code',
      description: 'SOLID Principles',
    },
  ];

  return (
    <section id="about" className="min-h-screen py-20 px-4 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black"></div>
      
      <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl blur-xl"></div>
            <div className="relative p-8 bg-white/5 backdrop-blur-lg rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all">
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                Senior Software Engineer with <span className="text-purple-400 font-semibold">6+ years of experience</span> designing and delivering high-performance backend and full-stack systems using .NET, React, and cloud technologies.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                Experienced in <span className="text-blue-400 font-semibold">Python-based AI workflows</span>, GenAI integrations, LLM APIs, and Retrieval-Augmented Generation (RAG).
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Strong knowledge of <span className="text-purple-400 font-semibold">microservices architecture</span>, clean architecture, and design patterns.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="group relative p-6 bg-white/5 backdrop-blur-lg rounded-xl border border-blue-500/20 hover:border-blue-500/50 transition-all hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-blue-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <item.icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-1 text-white">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
