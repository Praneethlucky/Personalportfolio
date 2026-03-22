import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';

export function Skills() {
  const { ref, isInView } = useInView();

  const skillCategories = [
    {
      title: 'Languages',
      skills: [
        { name: 'C#', level: 95 },
        { name: 'Python', level: 85 },
        { name: 'JavaScript', level: 90 },
        { name: 'SQL', level: 88 },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'ASP.NET Core', level: 95 },
        { name: '.NET Core', level: 95 },
        { name: 'REST APIs', level: 93 },
        { name: 'Microservices', level: 90 },
        { name: 'Clean Architecture', level: 88 },
        { name: 'SOLID Principles', level: 92 },
      ],
    },
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 88 },
        { name: 'HTML/CSS', level: 90 },
        { name: 'JavaScript', level: 90 },
      ],
    },
    {
      title: 'AI / GenAI',
      skills: [
        { name: 'LLM APIs', level: 85 },
        { name: 'RAG', level: 82 },
        { name: 'Prompt Engineering', level: 88 },
        { name: 'Embeddings', level: 80 },
        { name: 'Vector Search', level: 78 },
      ],
    },
    {
      title: 'Cloud & DevOps',
      skills: [
        { name: 'Azure', level: 90 },
        { name: 'AWS', level: 75 },
        { name: 'Docker', level: 85 },
        { name: 'CI/CD', level: 88 },
      ],
    },
    {
      title: 'Database',
      skills: [
        { name: 'SQL Server', level: 92 },
        { name: 'Oracle', level: 80 },
        { name: 'Cosmos DB', level: 75 },
      ],
    },
  ];

  return (
    <section id="skills" className="min-h-screen py-20 px-4 relative overflow-hidden">
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
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative p-6 bg-white/5 backdrop-blur-lg rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all">
                <h3 className="text-2xl font-bold mb-6 text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text">
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                        <span className="text-purple-400 font-semibold">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : {}}
                          transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                          className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full relative"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 opacity-50 animate-pulse"></div>
                        </motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
