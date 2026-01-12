import { motion } from 'framer-motion';
import { Clock, DollarSign, MessageSquare, User } from 'lucide-react';

const ConsultaCard = ({ consulta, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="rounded-xl p-4 backdrop-blur-xl bg-white/10 border border-white/20 shadow-xl hover:shadow-2xl transition-all cursor-pointer"
      style={{
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
      }}
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-500 to-gray-400 flex items-center justify-center">
            <User className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900">{consulta.usuario}</h3>
            <p className="text-xs text-gray-500">{consulta.tiempo}</p>
          </div>
        </div>
        <span className={`text-xs px-2 py-1 rounded-full ${
          consulta.estado === 'activa' 
            ? 'bg-green-100 text-green-700' 
            : 'bg-gray-100 text-gray-700'
        }`}>
          {consulta.estado}
        </span>
      </div>

      <p className="text-sm text-gray-700 mb-3 line-clamp-2">{consulta.pregunta}</p>

      <div className="flex items-center justify-between text-xs text-gray-600">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            <span>{consulta.duracion}</span>
          </div>
          <div className="flex items-center gap-1">
            <DollarSign className="w-3 h-3" />
            <span>${consulta.costo}</span>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <MessageSquare className="w-3 h-3" />
          <span>{consulta.respuestas} respuestas</span>
        </div>
      </div>
    </motion.div>
  );
};

export default ConsultaCard;

