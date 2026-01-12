import { motion } from 'framer-motion';
import { Clock, DollarSign, Star, Video, Download, MessageSquare } from 'lucide-react';

const mockHistorial = [
  {
    id: 1,
    experto: 'María González',
    tecnologia: 'React',
    fecha: '2024-01-15',
    duracion: '12 min',
    costo: '$30.00',
    rating: 5,
    estado: 'completada',
    grabacion: true,
  },
  {
    id: 2,
    experto: 'Carlos Ramírez',
    tecnologia: 'Python',
    fecha: '2024-01-14',
    duracion: '8 min',
    costo: '$24.00',
    rating: 4,
    estado: 'completada',
    grabacion: true,
  },
  {
    id: 3,
    experto: 'Ana Martínez',
    tecnologia: 'Node.js',
    fecha: '2024-01-13',
    duracion: '15 min',
    costo: '$37.50',
    rating: 5,
    estado: 'completada',
    grabacion: false,
  },
];

const HistorialConsultas = () => {
  return (
    <div className="w-full p-6 space-y-4">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Historial de Consultas</h2>
        <p className="text-gray-600">Revisa todas tus consultas anteriores</p>
      </div>

      <div className="space-y-4">
        {mockHistorial.map((consulta, index) => (
          <motion.div
            key={consulta.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="rounded-xl p-6 backdrop-blur-xl bg-white/10 border border-white/20 shadow-xl hover:shadow-2xl transition-all"
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
            }}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">{consulta.experto}</h3>
                  <span className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-full">
                    {consulta.tecnologia}
                  </span>
                </div>
                <p className="text-sm text-gray-600">{new Date(consulta.fecha).toLocaleDateString('es-ES', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</p>
              </div>
              <div className="flex items-center gap-1">
                {[...Array(consulta.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
            </div>

            <div className="flex items-center gap-6 text-sm text-gray-600 mb-4">
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{consulta.duracion}</span>
              </div>
              <div className="flex items-center gap-1">
                <DollarSign className="w-4 h-4" />
                <span>{consulta.costo}</span>
              </div>
              {consulta.grabacion && (
                <div className="flex items-center gap-1 text-green-600">
                  <Video className="w-4 h-4" />
                  <span>Grabación disponible</span>
                </div>
              )}
            </div>

            <div className="flex items-center gap-3">
              {consulta.grabacion && (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Descargar Grabación
                </motion.button>
              )}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 text-gray-900 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                Ver Detalles
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HistorialConsultas;

