import { motion } from 'framer-motion';
import { Bell, Shield, CreditCard, Globe, Moon, Sun } from 'lucide-react';
import { useState } from 'react';

const Configuracion = () => {
  const [notificaciones, setNotificaciones] = useState({
    email: true,
    push: true,
    sms: false,
  });

  return (
    <div className="w-full p-6 space-y-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Configuración</h2>
        <p className="text-gray-600">Personaliza tu experiencia en MicroConsultas</p>
      </div>

      {/* Notificaciones */}
      <div className="rounded-xl p-6 backdrop-blur-xl bg-white/10 border border-white/20 shadow-xl"
        style={{
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
        }}
      >
        <div className="flex items-center gap-3 mb-4">
          <Bell className="w-5 h-5 text-gray-700" />
          <h3 className="text-lg font-semibold text-gray-900">Notificaciones</h3>
        </div>
        <div className="space-y-4">
          {Object.entries(notificaciones).map(([key, value]) => (
            <div key={key} className="flex items-center justify-between">
              <label className="text-gray-700 capitalize">{key === 'email' ? 'Email' : key === 'push' ? 'Push' : 'SMS'}</label>
              <button
                onClick={() => setNotificaciones({ ...notificaciones, [key]: !value })}
                className={`relative w-12 h-6 rounded-full transition-colors ${
                  value ? 'bg-gray-900' : 'bg-gray-300'
                }`}
              >
                <motion.div
                  animate={{ x: value ? 24 : 2 }}
                  className="absolute top-1 left-1 w-4 h-4 bg-white rounded-full"
                />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Privacidad */}
      <div className="rounded-xl p-6 backdrop-blur-xl bg-white/10 border border-white/20 shadow-xl"
        style={{
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
        }}
      >
        <div className="flex items-center gap-3 mb-4">
          <Shield className="w-5 h-5 text-gray-700" />
          <h3 className="text-lg font-semibold text-gray-900">Privacidad</h3>
        </div>
        <div className="space-y-3">
          <label className="flex items-center gap-2 text-gray-700">
            <input type="checkbox" defaultChecked className="w-4 h-4 rounded border-gray-300" />
            <span>Perfil público</span>
          </label>
          <label className="flex items-center gap-2 text-gray-700">
            <input type="checkbox" defaultChecked className="w-4 h-4 rounded border-gray-300" />
            <span>Mostrar estadísticas</span>
          </label>
          <label className="flex items-center gap-2 text-gray-700">
            <input type="checkbox" className="w-4 h-4 rounded border-gray-300" />
            <span>Permitir que otros me encuentren</span>
          </label>
        </div>
      </div>

      {/* Métodos de Pago */}
      <div className="rounded-xl p-6 backdrop-blur-xl bg-white/10 border border-white/20 shadow-xl"
        style={{
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
        }}
      >
        <div className="flex items-center gap-3 mb-4">
          <CreditCard className="w-5 h-5 text-gray-700" />
          <h3 className="text-lg font-semibold text-gray-900">Métodos de Pago</h3>
        </div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-2 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors"
        >
          Gestionar Métodos de Pago
        </motion.button>
      </div>

      {/* Idioma */}
      <div className="rounded-xl p-6 backdrop-blur-xl bg-white/10 border border-white/20 shadow-xl"
        style={{
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
        }}
      >
        <div className="flex items-center gap-3 mb-4">
          <Globe className="w-5 h-5 text-gray-700" />
          <h3 className="text-lg font-semibold text-gray-900">Idioma</h3>
        </div>
        <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900">
          <option value="es">Español</option>
          <option value="en">English</option>
          <option value="pt">Português</option>
        </select>
      </div>
    </div>
  );
};

export default Configuracion;

