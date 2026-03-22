import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { Brain, Cpu, Database, Sparkles, MessageSquare, Zap } from 'lucide-react';

export function AI() {
  const { ref, isInView } = useInView();

  const aiFeatures = [
    {
      icon: Brain,
      title: 'LLM Integration',
      description: 'Expert in integrating Large Language Models like GPT, Claude, and open-source models',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Database,
      title: 'RAG Systems',
      description: 'Building Retrieval-Augmented Generation systems with vector databases',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: MessageSquare,
      title: 'Prompt Engineering',
      description: 'Crafting effective prompts and system instructions for optimal AI responses',
      color: 'from-purple-500 to-blue-500',
    },
    {
      icon: Cpu,
      title: 'AI Workflows',
      description: 'Designing and implementing Python-based AI workflows and pipelines',
      color: 'from-pink-500 to-purple-500',
    },
    {
      icon: Sparkles,
      title: 'Embeddings',
      description: 'Working with text embeddings and semantic search for intelligent applications',
      color: 'from-cyan-500 to-blue-500',
    },
    {
      icon: Zap,
      title: 'GenAI Apps',
      description: 'Building production-ready Generative AI applications and chatbots',
      color: 'from-blue-500 to-purple-500',
    },
  ];

  return (
    <section id="ai" className="min-h-screen py-20 px-4 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black"></div>
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            AI & GenAI Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Specialized in building intelligent applications with cutting-edge AI technologies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aiFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-all duration-300`}></div>
              <div className="relative p-6 bg-white/5 backdrop-blur-lg rounded-2xl border border-purple-500/20 hover:border-purple-500/50 transition-all hover:scale-105 h-full">
                <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <feature.icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-400">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 p-8 bg-white/5 backdrop-blur-lg rounded-2xl border border-purple-500/20"
        >
          <h3 className="text-2xl font-bold mb-4 text-center bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            AI Technologies & Tools
          </h3>
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {['OpenAI', 'LangChain', 'Pinecone', 'Chroma', 'Hugging Face', 'Azure AI', 'Claude API', 'Vector Search', 'Semantic Kernel', 'Python AI'].map((tech, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.7 + i * 0.05 }}
                className="px-4 py-2 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm rounded-full text-sm border border-purple-500/30 hover:border-purple-500/50 hover:scale-105 transition-all cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
