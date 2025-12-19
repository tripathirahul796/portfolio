import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Message sent successfully!');
    setTimeout(() => {
      setStatus('');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'your.email@example.com',
      link: 'mailto:your.email@example.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      value: '+1 (555) 123-4567',
      link: 'https://wa.me/1234567890',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Your City, Country',
      link: null,
    },
  ];

  return (
    <section id="contact" className="section-container bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-primary-400">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto mb-4"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-6 mb-8">
              {contactInfo.map((info) => (
                <div key={info.title} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <info.icon size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-300 mb-1">{info.title}</h4>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-primary-400 hover:text-primary-300 transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-400">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="card">
              <h4 className="text-xl font-semibold mb-4">Why Work With Me?</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-primary-400 mt-1">✓</span>
                  <span>Dedicated to delivering high-quality work</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-400 mt-1">✓</span>
                  <span>Strong communication and collaboration skills</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-400 mt-1">✓</span>
                  <span>Always learning and staying up-to-date</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-400 mt-1">✓</span>
                  <span>Passionate about creating great user experiences</span>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="card">
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-300 font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg focus:outline-none focus:border-primary-500 transition-colors text-white"
                  placeholder="Your name"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-300 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg focus:outline-none focus:border-primary-500 transition-colors text-white"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-gray-300 font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg focus:outline-none focus:border-primary-500 transition-colors text-white"
                  placeholder="What's this about?"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-300 font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg focus:outline-none focus:border-primary-500 transition-colors text-white resize-none"
                  placeholder="Your message..."
                />
              </div>

              {status && (
                <div className="mb-4 p-3 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400 text-center">
                  {status}
                </div>
              )}

              <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                <Send size={20} />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
