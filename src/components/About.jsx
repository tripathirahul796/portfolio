import { motion } from 'framer-motion';
import { User, Code, Heart, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable and scalable code',
    },
    {
      icon: Zap,
      title: 'Fast Learner',
      description: 'Quick to adapt to new technologies',
    },
    {
      icon: Heart,
      title: 'Passionate',
      description: 'Love what I do and always eager to learn',
    },
    {
      icon: User,
      title: 'Team Player',
      description: 'Collaborative and communicative',
    },
  ];

  return (
    <section id="about" className="section-container">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-primary-400">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl blur-2xl opacity-20"></div>
              <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
                <h3 className="text-2xl font-bold mb-4 text-primary-400">Hello!</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  I'm a passionate Java Backend Developer specializing in building scalable microservices
                  and distributed systems. With extensive experience in Spring Boot, Kafka, and reactive
                  programming, I create high-performance backend solutions.
                </p>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  My expertise lies in designing event-driven architectures, optimizing database performance,
                  and implementing robust APIs. I'm proficient in both Java and Kotlin, with a strong focus
                  on clean code and best practices.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  When I'm not coding, you can find me exploring new backend technologies, contributing
                  to open-source projects, or optimizing system architectures for better performance.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl mb-4">
                  <item.icon size={32} className="text-white" />
                </div>
                <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
