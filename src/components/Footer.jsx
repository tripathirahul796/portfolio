import { Heart, Github, Linkedin, Mail, MessageCircle } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:your.email@example.com', label: 'Email' },
    { icon: MessageCircle, href: 'https://wa.me/1234567890', label: 'WhatsApp' },
  ];

  return (
    <footer className="bg-slate-900/80 backdrop-blur-sm border-t border-slate-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="flex gap-6 mb-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors duration-300 hover:scale-110 transform"
                aria-label={social.label}
              >
                <social.icon size={24} />
              </a>
            ))}
          </div>

          <p className="text-gray-400 text-center flex items-center gap-2">
            Made with <Heart size={16} className="text-red-500 fill-current" /> by Your Name
          </p>
          <p className="text-gray-500 text-sm mt-2">
            © {currentYear} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
