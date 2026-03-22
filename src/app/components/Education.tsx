import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { GraduationCap, Award, Trophy } from 'lucide-react';

export function Education() {
  const { ref, isInView } = useInView();

  const education = [
    {
      degree: 'Bachelor of Engineering',
      institution: 'CBIT',
      year: '2020',
      icon: GraduationCap,
    },
    {
      degree: 'Intermediate',
      institution: 'Narayana',
      year: '2016',
      icon: GraduationCap,
    },
    {
      degree: 'SSC',
      institution: 'Vasishta',
      year: '2014',
      icon: GraduationCap,
    },
  ];

  const certifications = [
    {
      name: 'Git by Atlassian',
      icon: Award,
    },
    {
      name: 'Google Cloud Fundamentals',
      icon: Award,
    },
  ];

  const hackathons = [
    {
      name: 'Smart India Hackathon',
      icon: Trophy,
    },
    {
      name: 'JP Morgan Hackathon',
      icon: Trophy,
    },
    {
      name: 'Thoughtworks Hackathon',
      icon: Trophy,
    },
  ];

  return (
    <section id="education" className="min-h-screen py-20 px-4 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black"></div>
      
      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Education & Achievements
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative p-6 bg-white/5 backdrop-blur-lg rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all h-full">
                <h3 className="text-2xl font-bold mb-6 text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text">
                  Education
                </h3>
                <div className="space-y-4">
                  {education.map((edu, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      className="flex items-start gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all"
                    >
                      <div className="p-2 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex-shrink-0">
                        <edu.icon size={20} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">{edu.degree}</h4>
                        <p className="text-gray-400 text-sm">{edu.institution}</p>
                        <p className="text-purple-400 text-sm font-medium mt-1">{edu.year}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:col-span-1"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative p-6 bg-white/5 backdrop-blur-lg rounded-2xl border border-blue-500/20 hover:border-blue-500/40 transition-all h-full">
                <h3 className="text-2xl font-bold mb-6 text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
                  Certifications
                </h3>
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                      className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all group/item"
                    >
                      <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex-shrink-0 group-hover/item:scale-110 transition-transform">
                        <cert.icon size={20} />
                      </div>
                      <h4 className="font-semibold text-white">{cert.name}</h4>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Hackathons */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative p-6 bg-white/5 backdrop-blur-lg rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all h-full">
                <h3 className="text-2xl font-bold mb-6 text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text">
                  Hackathons
                </h3>
                <div className="space-y-4">
                  {hackathons.map((hack, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                      className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all group/item"
                    >
                      <div className="p-2 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex-shrink-0 group-hover/item:scale-110 transition-transform">
                        <hack.icon size={20} />
                      </div>
                      <h4 className="font-semibold text-white">{hack.name}</h4>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
