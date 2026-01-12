import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, LogIn, Eye, EyeOff, Facebook } from 'lucide-react';
import logoIcon from '../../assets/icon.png';
import Planet3D from '../Planet/Planet3D';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulación de login (en producción, aquí conectarías con Supabase/Firebase)
    setTimeout(() => {
      setIsLoading(false);
      if (onLogin) {
        onLogin({ email, name: 'Usuario Demo' });
      }
    }, 1000);
  };

  return (
    <div className="h-screen flex overflow-hidden">
      {/* Left Section - Form (60%) */}
      <div className="w-full lg:w-3/5 flex items-center justify-center bg-pure-white px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          {/* Logo */}
          <div className="mb-3 sm:mb-4 lg:mb-6 flex items-center gap-2 sm:gap-3">
            <img src={logoIcon} alt="MicroConsultas Logo" className="w-8 h-8 sm:w-10 sm:h-10" />
            <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-dark-gray">MicroConsultas</h1>
          </div>

          {/* Header */}
          <div className="mb-4 sm:mb-5 lg:mb-6">
            <p className="text-medium-gray text-xs sm:text-sm mb-1 sm:mb-2">Comienza tu viaje</p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-dark-gray mb-1 sm:mb-2">Regístrate en MicroConsultas</h2>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
            {/* Email Field */}
            <div>
              <label className="block text-xs sm:text-sm font-medium text-dark-gray mb-1 sm:mb-2">
                Correo electrónico
              </label>
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ejemplo@correo.com"
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base bg-pure-white border border-medium-gray/20 rounded-lg text-dark-gray placeholder-light-gray focus:outline-none focus:border-medium-gray/40 transition-colors"
                />
                <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-medium-gray" />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-xs sm:text-sm font-medium text-dark-gray mb-1 sm:mb-2">
                Contraseña
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base bg-pure-white border border-medium-gray/20 rounded-lg text-dark-gray placeholder-light-gray focus:outline-none focus:border-medium-gray/40 transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-medium-gray hover:text-dark-gray transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4 sm:w-5 sm:h-5" />
                  ) : (
                    <Eye className="w-4 h-4 sm:w-5 sm:h-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Sign Up Button */}
            <motion.button
              type="submit"
              disabled={isLoading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-2 sm:py-2.5 text-sm sm:text-base bg-gradient-to-r from-dark-gray to-medium-gray rounded-lg font-semibold text-pure-white flex items-center justify-center gap-2 hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Registrando...
                </>
              ) : (
                <>
                  <LogIn className="w-5 h-5" />
                  Registrarse
                </>
              )}
            </motion.button>
          </form>

          {/* Divider */}
          <div className="relative my-3 sm:my-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-medium-gray/20"></div>
            </div>
            <div className="relative flex justify-center text-xs sm:text-sm">
              <span className="px-3 sm:px-4 bg-pure-white text-medium-gray">o regístrate con</span>
            </div>
          </div>

          {/* Social Login Buttons */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-3 sm:mb-4">
            <motion.button
              type="button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center p-2 sm:p-2.5 border border-medium-gray/20 rounded-lg hover:bg-off-white transition-colors"
            >
              <Facebook className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
            </motion.button>
            <motion.button
              type="button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center p-2 sm:p-2.5 border border-medium-gray/20 rounded-lg hover:bg-off-white transition-colors"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
            </motion.button>
            <motion.button
              type="button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center p-2 sm:p-2.5 border border-medium-gray/20 rounded-lg hover:bg-off-white transition-colors"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24">
                <path fill="#F25022" d="M1 1h10v10H1z"/>
                <path fill="#00A4EF" d="M13 1h10v10H13z"/>
                <path fill="#7FBA00" d="M1 13h10v10H1z"/>
                <path fill="#FFB900" d="M13 13h10v10H13z"/>
              </svg>
            </motion.button>
          </div>

          {/* Sign In Link */}
          <div className="text-xs sm:text-sm text-medium-gray">
            ¿Ya tienes una cuenta?{' '}
            <a href="#" className="text-dark-gray font-semibold hover:underline transition-colors">
              Iniciar sesión
            </a>
          </div>
        </motion.div>
      </div>

      {/* Right Section - Planet 3D (40%) */}
      <div className="hidden lg:block lg:w-2/5 relative overflow-hidden bg-gradient-to-b from-pure-white via-off-white to-pure-white h-screen">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Planet3D onExpertClick={() => {}} showExperts={false} />
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
