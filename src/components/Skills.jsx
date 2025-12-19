import { motion } from 'framer-motion';
import { Code2, Database, Palette, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: 'Backend & Languages',
      skills: [
        { name: 'Java', level: 95 },
        { name: 'Kotlin', level: 85 },
        { name: 'Spring Boot', level: 92 },
        { name: 'Microservices', level: 88 },
        { name: 'WebFlux', level: 82 },
      ],
    },
    {
      icon: Database,
      title: 'Databases',
      skills: [
        { name: 'MongoDB', level: 85 },
        { name: 'MySQL', level: 90 },
        { name: 'SQL', level: 92 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'Redis', level: 75 },
      ],
    },
    {
      icon: Palette,
      title: 'Messaging & Streaming',
      skills: [
        { name: 'Apache Kafka', level: 88 },
        { name: 'RabbitMQ', level: 75 },
        { name: 'Event-Driven Architecture', level: 85 },
        { name: 'REST APIs', level: 92 },
        { name: 'GraphQL', level: 70 },
      ],
    },
    {
      icon: Wrench,
      title: 'DevOps & Tools',
      skills: [
        { name: 'Git', level: 95 },
        { name: 'Apache Airflow', level: 80 },
        { name: 'Docker', level: 85 },
        { name: 'Kubernetes', level: 75 },
        { name: 'CI/CD', level: 82 },
      ],
    },
  ];

  return (
    <section id="skills" className="section-container">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="text-primary-400">Expertise</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="card"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center">
                  <category.icon size={28} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-primary-400 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="h-full bg-gradient-to-r from-primary-500 to-primary-400 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
