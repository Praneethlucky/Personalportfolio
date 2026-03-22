import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { ExternalLink, Github, Code2, Database, Brain, FileText } from 'lucide-react';

export function Projects() {
  const { ref, isInView } = useInView();

  const projects = [
    {
      title: 'Expense Tracker AI',
      description: 'A comprehensive expense tracking application with AI-powered insights and recurring expense management.',
      technologies: ['ASP.NET Core', 'React', 'GenAI', 'RAG'],
      features: [
        'Recurring expense engine',
        'GenAI insights',
        'RAG integration',
        'Real-time analytics',
      ],
      icon: Brain,
      gradient: 'from-purple-500 to-blue-500',
    },
    {
      title: 'AI Document Automation System',
      description: 'Intelligent document processing system with embeddings search and automatic summarization.',
      technologies: ['Python', 'AI Pipeline', '.NET', 'Embeddings'],
      features: [
        'Python AI pipeline',
        'Embeddings search',
        'Document summarization',
        '.NET integration',
      ],
      icon: FileText,
      gradient: 'from-blue-500 to-cyan-500',
    },
  ];

  return (
    <section id="projects" className="min-h-screen py-20 px-4 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-900/10 to-black"></div>
      
      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity`}></div>
              <div className="relative h-full p-8 bg-white/5 backdrop-blur-lg rounded-2xl border border-purple-500/20 hover:border-purple-500/50 transition-all hover:scale-105">
                <div className={`w-16 h-16 bg-gradient-to-br ${project.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <project.icon size={32} />
                </div>

                <h3 className="text-2xl font-bold mb-3 text-white">{project.title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">{project.description}</p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-purple-400 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="text-gray-300 text-sm flex items-start gap-2">
                        <span className="text-blue-400 mt-1">▹</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs font-medium text-purple-300 border border-purple-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg text-sm font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all">
                    <Github size={16} />
                    View Code
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-blue-400/50 rounded-lg text-sm font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all">
                    <ExternalLink size={16} />
                    Live Demo
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
