import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import logoIcon from '../../assets/icon.png';

const NavbarLanding = ({ onLoginClick, onRegisterClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src={logoIcon} alt="MicroConsultas Logo" className="w-8 h-8" />
            <span className="text-xl font-bold text-gray-900">MicroConsultas</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#que-hacemos" className="text-gray-700 hover:text-gray-900 transition-colors">
              Qué hacemos
            </a>
            <a href="#nosotros" className="text-gray-700 hover:text-gray-900 transition-colors">
              Nosotros
            </a>
            <a href="#contacto" className="text-gray-700 hover:text-gray-900 transition-colors">
              Contáctanos
            </a>
            <button
              onClick={onLoginClick}
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              Login
            </button>
            <button
              onClick={onRegisterClick}
              className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              Registrarse
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 border-t border-gray-200"
          >
            <div className="flex flex-col gap-4">
              <a href="#que-hacemos" className="text-gray-700 hover:text-gray-900 transition-colors">
                Qué hacemos
              </a>
              <a href="#nosotros" className="text-gray-700 hover:text-gray-900 transition-colors">
                Nosotros
              </a>
              <a href="#contacto" className="text-gray-700 hover:text-gray-900 transition-colors">
                Contáctanos
              </a>
              <button
                onClick={onLoginClick}
                className="text-left text-gray-700 hover:text-gray-900 transition-colors"
              >
                Login
              </button>
              <button
                onClick={onRegisterClick}
                className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-left"
              >
                Registrarse
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default NavbarLanding;

