import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { Briefcase, Calendar } from 'lucide-react';

export function Experience() {
  const { ref, isInView } = useInView();

  const experiences = [
    {
      title: 'Senior Software Engineer',
      company: 'Evernorth Health Services',
      period: 'Dec 2024 – Present',
      location: 'Hyderabad, India',
      responsibilities: [
        'Built scalable microservices using ASP.NET Core',
        'Built GenAI financial insights engine using LLM APIs',
        'Integrated Python AI with .NET',
        'Optimized SQL performance',
        'Worked on RAG and transformer tuning',
      ],
    },
    {
      title: 'Software Engineer',
      company: 'InsightSoftware',
      period: 'Sep 2023 – Dec 2024',
      location: 'Hyderabad, India',
      responsibilities: [
        'Built desktop features using Office JS and Graph API',
        'Delivered AI features end-to-end',
        'Improved code quality using .NET Core',
      ],
    },
    {
      title: 'Software Engineer',
      company: 'FactSet',
      period: 'Nov 2022 – Sep 2023',
      location: 'Hyderabad, India',
      responsibilities: [
        'Built Azure apps',
        'Managed CI/CD',
        'Built REST APIs',
        'Improved UI performance',
      ],
    },
    {
      title: 'Software Developer',
      company: 'Micron Technologies',
      period: 'Jul 2020 – Nov 2022',
      location: 'Hyderabad, India',
      responsibilities: [
        'Built ETL monitoring tool',
        'REST API integrations',
        'Real-time system notifications',
      ],
    },
  ];

  return (
    <section id="experience" className="min-h-screen py-20 px-4 relative overflow-hidden">
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
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-blue-500 to-purple-500"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative mb-12 md:mb-16 flex flex-col md:flex-row items-start md:items-center ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full transform -translate-x-1/2 border-4 border-black z-10">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full animate-ping opacity-75"></div>
              </div>

              {/* Content card */}
              <div className={`ml-16 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative p-6 bg-white/5 backdrop-blur-lg rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg">
                        <Briefcase size={20} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                        <p className="text-purple-400 font-semibold">{exp.company}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>

                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="text-gray-300 text-sm flex items-start gap-2">
                          <span className="text-blue-400 mt-1">▹</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
