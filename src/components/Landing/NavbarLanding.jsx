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
        className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-sm"
      >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src={logoIcon} alt="MicroConsultas Logo" className="w-8 h-8" />
            <span className="text-xl font-bold text-gray-900">MicroConsultas</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#que-hacemos" className="text-sm text-gray-600 hover:text-gray-900 transition-colors font-medium">
              Qué hacemos
            </a>
            <a href="#nosotros" className="text-sm text-gray-600 hover:text-gray-900 transition-colors font-medium">
              Nosotros
            </a>
            <a href="#contacto" className="text-sm text-gray-600 hover:text-gray-900 transition-colors font-medium">
              Contáctanos
            </a>
            <div className="flex items-center gap-3 ml-4 pl-4 border-l border-gray-200">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onLoginClick}
                className="px-5 py-2.5 text-sm font-semibold text-gray-700 hover:text-gray-900 transition-colors relative group"
              >
                Iniciar Sesión
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 group-hover:w-full transition-all duration-300"></span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onRegisterClick}
                className="px-6 py-2.5 text-sm font-semibold bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl"
              >
                Registrarse
              </motion.button>
            </div>
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
              <a 
                href="#que-hacemos" 
                className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Qué hacemos
              </a>
              <a 
                href="#nosotros" 
                className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Nosotros
              </a>
              <a 
                href="#contacto" 
                className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contáctanos
              </a>
              <div className="pt-4 border-t border-gray-200 space-y-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onLoginClick}
                  className="w-full px-4 py-3 text-sm font-semibold text-gray-700 hover:text-gray-900 transition-colors border border-gray-200 rounded-lg hover:border-gray-300"
                >
                  Iniciar Sesión
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onRegisterClick}
                  className="w-full px-4 py-3 text-sm font-semibold bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all shadow-lg"
                >
                  Registrarse
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default NavbarLanding;

