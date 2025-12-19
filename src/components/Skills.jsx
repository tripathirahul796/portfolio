import { motion } from 'framer-motion';
import { Code2, Database, Palette, Wrench, Briefcase } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: 'Backend & Languages',
      skills: [
        { name: 'Java', level: 95 },
        { name: 'Kotlin', level: 85 },
        { name: 'Spring Boot', level: 95 },
        { name: 'WebFlux', level: 82 },
        { name: 'Microservices', level: 90 },
        { name: 'Apache Kafka', level: 88 },
      ],
    },
    {
      icon: Database,
      title: 'Databases',
      skills: [
        { name: 'MongoDB', level: 85 },
        { name: 'SQL Server', level: 80 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'MySQL', level: 90 },
        { name: 'NoSQL', level: 80 },
      ],
    },
    {
      icon: Palette,
      title: 'Orchestration & Workflow',
      skills: [
        { name: 'Apache Airflow', level: 80 },
        { name: 'Autosys', level: 70 },
      ],
    },
    {
      icon: Wrench,
      title: 'DevOps & Tools',
      skills: [
        { name: 'Git', level: 95 },
        { name: 'Maven', level: 90 },
        { name: 'Gradle', level: 85 },
        { name: 'TeamCity', level: 80 },
        { name: 'Bitbucket', level: 82 },
        { name: 'GitHub', level: 85 },
        { name: 'Docker', level: 85 },
        { name: 'CI/CD', level: 82 },
      ],
    },
    {
      icon: Palette,
      title: 'Observability',
      skills: [
        { name: 'Prometheus', level: 80 },
        { name: 'Grafana', level: 80 },
        { name: 'Logging & Metrics Dashboards', level: 78 },
      ],
    },
    {
      icon: Briefcase,
      title: 'IDE & Collaboration',
      skills: [
        { name: 'IntelliJ IDEA', level: 95 },
        { name: 'VS Code', level: 85 },
        { name: 'Postman', level: 80 },
        { name: 'JIRA', level: 80 },
        { name: 'Confluence', level: 75 },
      ],
    },
    {
      icon: Code2,
      title: 'Domains',
      skills: [
        { name: 'Marketplace Systems', level: 88 },
        { name: 'Retail', level: 85 },
        { name: 'Capital Markets', level: 82 },
        { name: 'Investment Banking', level: 82 },
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

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    viewport={{ once: true }}
                    className="px-4 py-2 bg-slate-700/50 text-gray-300 rounded-lg border border-slate-600/50 hover:border-primary-500/50 hover:text-primary-400 transition-all duration-300"
                  >
                    {skill.name}
                  </motion.span>
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
