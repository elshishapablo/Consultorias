import { motion } from 'framer-motion';
import { Clock, DollarSign, Phone, PhoneOff } from 'lucide-react';
import { useTimer } from '../../hooks/useTimer';

const Taximeter = ({ expert, onEndCall, isActive }) => {
  const { minutes, seconds, cost, isRunning, start, stop, reset } = useTimer(
    expert?.pricePerMinute || 0,
    isActive
  );

  const handleEndCall = () => {
    stop();
    reset();
    if (onEndCall) {
      onEndCall({ duration: minutes * 60 + seconds, cost });
    }
  };

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      className="fixed bottom-8 right-8 z-50 glass rounded-2xl p-6 shadow-2xl min-w-[300px] glow-gray"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-medium-gray/10 flex items-center justify-center text-2xl">
            {expert?.avatar || '👨‍💻'}
          </div>
          <div>
            <div className="font-semibold text-dark-gray">{expert?.name || 'Experto'}</div>
            <div className="text-sm text-medium-gray">{expert?.technology || 'Tecnología'}</div>
          </div>
        </div>
      </div>

      {/* Timer */}
      <div className="flex items-center justify-center gap-2 mb-4 p-4 bg-off-white rounded-xl">
        <Clock className="w-6 h-6 text-dark-gray" />
        <div className="text-3xl font-bold text-dark-gray font-mono">
          {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
        </div>
      </div>

      {/* Cost */}
      <div className="flex items-center justify-between mb-4 p-4 bg-medium-gray/10 border border-medium-gray/20 rounded-xl">
        <div className="flex items-center gap-2">
          <DollarSign className="w-5 h-5 text-dark-gray" />
          <span className="text-sm text-medium-gray">Costo Total</span>
        </div>
        <span className="text-2xl font-bold text-gradient-white">${cost.toFixed(2)}</span>
      </div>

      {/* Rate */}
      <div className="text-center text-sm text-medium-gray mb-4">
        ${expert?.pricePerMinute || 0}/minuto
      </div>

      {/* Controls */}
      <div className="flex gap-3">
        {isRunning ? (
          <motion.button
            onClick={stop}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 py-2.5 px-4 bg-off-white border border-medium-gray/20 rounded-xl text-dark-gray hover:border-medium-gray/40 transition-colors"
          >
            Pausar
          </motion.button>
        ) : (
          <motion.button
            onClick={start}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 py-2.5 px-4 bg-medium-gray/10 border border-medium-gray/30 rounded-xl text-dark-gray hover:bg-medium-gray/20 transition-colors"
          >
            Reanudar
          </motion.button>
        )}
        <motion.button
          onClick={handleEndCall}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex-1 py-2.5 px-4 bg-red-500/20 border border-red-500/50 rounded-xl text-red-400 hover:bg-red-500/30 transition-colors flex items-center justify-center gap-2"
        >
          <PhoneOff className="w-4 h-4" />
          Finalizar
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Taximeter;

