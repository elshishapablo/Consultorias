import { useState, lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, LogIn, Eye, EyeOff, Facebook, Github, User, Phone, Building, ArrowLeft } from 'lucide-react';
import logoIcon from '../../assets/icon.png';

// Lazy load del planeta 3D
const Planet3D = lazy(() => import('../Planet/Planet3D'));

const LoginImproved = ({ onLogin, initialMode = 'login', onBack }) => {
  const [isLogin, setIsLogin] = useState(initialMode === 'login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulación de login/registro
    setTimeout(() => {
      setIsLoading(false);
      if (onLogin) {
        onLogin({ 
          email, 
          name: name || 'Usuario Demo',
          phone,
          company 
        });
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen flex bg-white">
      {/* Left Section - Form (60%) */}
      <div className="w-full lg:w-3/5 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 overflow-y-auto relative">
        {/* Back Button */}
        {onBack && (
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onBack}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute top-4 left-4 sm:top-6 sm:left-6 flex items-center gap-2 px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors rounded-lg hover:bg-gray-100 z-10"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm font-medium hidden sm:inline">Volver</span>
          </motion.button>
        )}
        
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          {/* Logo */}
          <div className="mb-6 flex items-center gap-3">
            <img src={logoIcon} alt="MicroConsultas Logo" className="w-10 h-10" />
            <h1 className="text-2xl font-bold text-dark-gray">MicroConsultas</h1>
          </div>

          {/* Tabs */}
          <div className="flex gap-4 mb-6 border-b border-gray-200">
            <button
              onClick={() => setIsLogin(true)}
              className={`pb-3 px-2 font-semibold transition-colors ${
                isLogin
                  ? 'text-gray-900 border-b-2 border-gray-900'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Iniciar Sesión
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`pb-3 px-2 font-semibold transition-colors ${
                !isLogin
                  ? 'text-gray-900 border-b-2 border-gray-900'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Registrarse
            </button>
          </div>

          {/* Header */}
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-dark-gray mb-2">
              {isLogin ? 'Bienvenido de vuelta' : 'Crea tu cuenta'}
            </h2>
            <p className="text-sm text-medium-gray">
              {isLogin 
                ? 'Inicia sesión para continuar' 
                : 'Comienza tu viaje con MicroConsultas'}
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Field - Solo en registro */}
            {!isLogin && (
              <div>
                <label className="block text-xs sm:text-sm font-medium text-dark-gray mb-1">
                  Nombre completo
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Juan Pérez"
                    required={!isLogin}
                    className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base bg-white border border-medium-gray/20 rounded-lg text-dark-gray placeholder-light-gray focus:outline-none focus:border-medium-gray/40 transition-colors"
                  />
                  <User className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-medium-gray" />
                </div>
              </div>
            )}

            {/* Email Field */}
            <div>
              <label className="block text-xs sm:text-sm font-medium text-dark-gray mb-1">
                Correo electrónico
              </label>
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ejemplo@correo.com"
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base bg-white border border-medium-gray/20 rounded-lg text-dark-gray placeholder-light-gray focus:outline-none focus:border-medium-gray/40 transition-colors"
                />
                <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-medium-gray" />
              </div>
            </div>

            {/* Phone Field - Solo en registro */}
            {!isLogin && (
              <div>
                <label className="block text-xs sm:text-sm font-medium text-dark-gray mb-1">
                  Teléfono (opcional)
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+34 600 000 000"
                    className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base bg-white border border-medium-gray/20 rounded-lg text-dark-gray placeholder-light-gray focus:outline-none focus:border-medium-gray/40 transition-colors"
                  />
                  <Phone className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-medium-gray" />
                </div>
              </div>
            )}

            {/* Company Field - Solo en registro */}
            {!isLogin && (
              <div>
                <label className="block text-xs sm:text-sm font-medium text-dark-gray mb-1">
                  Empresa (opcional)
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Mi Empresa S.L."
                    className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base bg-white border border-medium-gray/20 rounded-lg text-dark-gray placeholder-light-gray focus:outline-none focus:border-medium-gray/40 transition-colors"
                  />
                  <Building className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-medium-gray" />
                </div>
              </div>
            )}

            {/* Password Field */}
            <div>
              <label className="block text-xs sm:text-sm font-medium text-dark-gray mb-1">
                Contraseña
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  minLength={6}
                  className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base bg-white border border-medium-gray/20 rounded-lg text-dark-gray placeholder-light-gray focus:outline-none focus:border-medium-gray/40 transition-colors"
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
              {!isLogin && (
                <p className="text-xs text-gray-500 mt-1">Mínimo 6 caracteres</p>
              )}
            </div>

            {/* Remember Me / Forgot Password - Solo en login */}
            {isLogin && (
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 text-xs sm:text-sm text-gray-700">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-4 h-4 rounded border-gray-300 text-gray-900 focus:ring-gray-900"
                  />
                  Recordarme
                </label>
                <a href="#" className="text-xs sm:text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  ¿Olvidaste tu contraseña?
                </a>
              </div>
            )}

            {/* Terms - Solo en registro */}
            {!isLogin && (
              <label className="flex items-start gap-2 text-xs text-gray-600">
                <input
                  type="checkbox"
                  required
                  className="w-4 h-4 rounded border-gray-300 text-gray-900 focus:ring-gray-900 mt-0.5"
                />
                <span>
                  Acepto los{' '}
                  <a href="#" className="text-gray-900 font-semibold hover:underline">
                    términos y condiciones
                  </a>{' '}
                  y la{' '}
                  <a href="#" className="text-gray-900 font-semibold hover:underline">
                    política de privacidad
                  </a>
                </span>
              </label>
            )}

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isLoading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-2.5 sm:py-3 text-sm sm:text-base bg-gradient-to-r from-dark-gray to-medium-gray rounded-lg font-semibold text-white flex items-center justify-center gap-2 hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  {isLogin ? 'Iniciando sesión...' : 'Creando cuenta...'}
                </>
              ) : (
                <>
                  <LogIn className="w-5 h-5" />
                  {isLogin ? 'Iniciar Sesión' : 'Crear Cuenta'}
                </>
              )}
            </motion.button>
          </form>

          {/* Divider */}
          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-medium-gray/20"></div>
            </div>
            <div className="relative flex justify-center text-xs sm:text-sm">
              <span className="px-3 sm:px-4 bg-white text-medium-gray">o continúa con</span>
            </div>
          </div>

          {/* Social Login Buttons */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-4">
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
              <Github className="w-4 h-4 sm:w-5 sm:h-5 text-gray-900" />
            </motion.button>
          </div>

          {/* Switch Link */}
          <div className="text-xs sm:text-sm text-medium-gray text-center">
            {isLogin ? (
              <>
                ¿No tienes una cuenta?{' '}
                <button
                  onClick={() => setIsLogin(false)}
                  className="text-dark-gray font-semibold hover:underline transition-colors"
                >
                  Regístrate
                </button>
              </>
            ) : (
              <>
                ¿Ya tienes una cuenta?{' '}
                <button
                  onClick={() => setIsLogin(true)}
                  className="text-dark-gray font-semibold hover:underline transition-colors"
                >
                  Inicia sesión
                </button>
              </>
            )}
          </div>
        </motion.div>
      </div>

      {/* Right Section - Planet 3D (40%) */}
      <div className="hidden lg:block lg:w-2/5 relative overflow-hidden bg-white h-screen">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Suspense fallback={
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-12 h-12 border-4 border-gray-200 border-t-gray-900 rounded-full animate-spin"></div>
            </div>
          }>
            <Planet3D onExpertClick={() => {}} showExperts={false} />
          </Suspense>
        </motion.div>
      </div>
    </div>
  );
};

export default LoginImproved;

