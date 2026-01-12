import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Server } from 'lucide-react';
import { useState, useEffect } from 'react';
import logoIcon from '../../assets/icon.png';

const Footer = () => {
  const [serverStatus, setServerStatus] = useState('online');

  useEffect(() => {
    // Simulación de estado del servidor
    const interval = setInterval(() => {
      // En producción, aquí harías una llamada real a la API
      setServerStatus(Math.random() > 0.1 ? 'online' : 'offline');
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="border-t border-medium-gray/20 bg-off-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logoIcon} alt="MicroConsultas Logo" className="w-10 h-10" />
              <h3 className="text-2xl font-bold text-gradient-white">MicroConsultas</h3>
            </div>
            <p className="text-medium-gray text-sm">
              Soluciones técnicas flash. Expertos disponibles 24/7.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4 text-dark-gray">Enlaces</h4>
            <ul className="space-y-2 text-sm text-medium-gray">
              <li>
                <a href="#" className="hover:text-dark-gray transition-colors">
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-dark-gray transition-colors">
                  Términos de Servicio
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-dark-gray transition-colors">
                  Privacidad
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-dark-gray transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Status */}
          <div>
            <h4 className="font-semibold mb-4 text-dark-gray">Estado del Sistema</h4>
            <div className="flex items-center gap-2">
              <Server className={`w-5 h-5 ${serverStatus === 'online' ? 'text-medium-gray' : 'text-red-500'}`} />
              <span className="text-sm text-medium-gray">
                Servidores: <span className={serverStatus === 'online' ? 'text-medium-gray' : 'text-red-500'}>
                  {serverStatus === 'online' ? 'Operativos' : 'Mantenimiento'}
                </span>
              </span>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-between pt-8 border-t border-medium-gray/20">
          <p className="text-sm text-medium-gray">
            © {new Date().getFullYear()} MicroConsultas. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-medium-gray hover:text-dark-gray transition-colors"
                  aria-label={social.label}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

