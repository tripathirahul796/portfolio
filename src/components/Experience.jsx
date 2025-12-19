import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Java Backend Developer',
      company: 'Tech Company Inc.',
      period: '2022 - Present',
      description: [
        'Architected and developed microservices using Spring Boot and WebFlux',
        'Implemented event-driven architecture with Apache Kafka for real-time data processing',
        'Optimized database queries and improved API response times by 60%',
        'Led migration from monolith to microservices architecture',
        'Mentored junior developers on best practices and design patterns',
      ],
    },
    {
      title: 'Java Backend Developer',
      company: 'Digital Solutions Ltd.',
      period: '2020 - 2022',
      description: [
        'Developed RESTful APIs using Spring Boot and Java 11+',
        'Implemented Kafka consumers and producers for asynchronous messaging',
        'Designed and optimized MongoDB and MySQL database schemas',
        'Built data pipelines using Apache Airflow for ETL processes',
        'Implemented CI/CD pipelines using Jenkins and Docker',
      ],
    },
    {
      title: 'Java Developer',
      company: 'Startup Innovations',
      period: '2018 - 2020',
      description: [
        'Developed backend services using Java and Spring Framework',
        'Worked with Kotlin for Android backend services',
        'Integrated third-party APIs and payment gateways',
        'Implemented unit and integration tests with JUnit and Mockito',
        'Participated in agile development and code reviews',
      ],
    },
  ];

  return (
    <section id="experience" className="section-container bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="text-primary-400">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto"></div>
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-400 via-primary-500 to-primary-600"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative mb-12 ${
                index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'
              }`}
            >
              <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary-500 rounded-full transform -translate-x-1/2 shadow-lg shadow-primary-500/50"></div>

              <div className="ml-20 md:ml-0 md:w-11/12">
                <div className="card">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
                      <Briefcase size={24} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-primary-400 mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-lg text-gray-300 mb-2">{exp.company}</p>
                      <div className="flex items-center gap-2 text-gray-400">
                        <Calendar size={16} />
                        <span className="text-sm">{exp.period}</span>
                      </div>
                    </div>
                  </div>
                  <ul className="space-y-2 text-gray-300">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-primary-400 mt-1">▹</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
