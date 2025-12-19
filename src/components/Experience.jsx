import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Software Engineer',
      company: "KPMG (Lowe's India) Bangalore, India",
      period: 'June 2024 – Present',
      description: [
        'Engineering marketplace backend systems powering multi-seller workflows, built with Java/Kotlin, Spring Boot, Kafka, and MongoDB.',
        'Designed and implemented a high-throughput event-driven architecture using Kafka to stream real-time pricing, inventory, and seller updates, supporting millions of events/day with horizontal scalability and fault tolerance.',
        'Built a Buy Box Ranking Engine to compute dynamic seller scores and ranking decisions on PDP, reducing ranking latency and improving accuracy under high load.',
        'Enabled platform monetization by integrating policy-controlled sponsored ranking boosts, improving vendor visibility, and contributing to significant incremental revenue while maintaining customer-first ranking fairness.',
        'Integrated upstream and downstream APIs to fetch, normalize, and process large-scale catalog data, ensuring end-to-end data consistency, faster ingestion, and reliable synchronization across marketplace services.',
        'Improved system reliability by automating pipelines with Apache Airflow DAGs, reducing manual intervention and improving operational efficiency.',
        'Enhanced platform observability by building end-to-end dashboards in Prometheus + Grafana for latency, throughput, error rates, and consumer lag.',
      ],
    },
    {
      title: 'Software Engineering Analyst',
      company: 'Accenture, Gurugram, India',
      period: 'April 2021 – June 2024',
      description: [
        'Developed backend services using Java, Spring Boot, and SQL, supporting financial and regulatory processing pipelines.',
        'Optimized SQL queries, indexes, and stored procedures, reducing query execution times by up to 40% and improving batch throughput.',
        'Enhanced and re-engineered batch processing systems, improving SLA adherence and reducing latency for high-volume jobs.',
        'Led components of the SQL Server migration (2012 → 2017), ensuring backward compatible data models, robust failover strategy, and smooth rollout.',
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
                index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
              }`}
            >
              <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary-500 rounded-full transform -translate-x-1/2 shadow-lg shadow-primary-500/50"></div>

              <div className={`ml-20 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:mr-auto md:text-left' : 'md:ml-auto md:text-left'}`}>
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
