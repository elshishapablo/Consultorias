import { motion } from 'framer-motion';

const DashboardCard = ({ 
  title, 
  value, 
  subtitle, 
  icon: Icon, 
  gradient = false,
  children,
  className = '',
  delay = 0
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={`rounded-xl p-4 backdrop-blur-xl bg-white/10 border border-white/20 shadow-xl ${gradient ? 'bg-gradient-to-br from-gray-400/20 to-gray-300/20' : ''} ${className}`}
      style={{
        background: gradient 
          ? 'linear-gradient(135deg, rgba(156, 163, 175, 0.2), rgba(209, 213, 219, 0.2))'
          : 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
      }}
    >
      <div className="flex items-start justify-between mb-3">
        <div>
          {title && (
            <p className="text-xs font-medium text-gray-600 mb-1">{title}</p>
          )}
          {value && (
            <h3 className="text-2xl font-bold text-gray-900">{value}</h3>
          )}
          {subtitle && (
            <p className="text-xs text-gray-500 mt-1">{subtitle}</p>
          )}
        </div>
        {Icon && (
          <div className="p-1.5 rounded-lg bg-white/20">
            <Icon className="w-4 h-4 text-gray-700" />
          </div>
        )}
      </div>
      {children}
    </motion.div>
  );
};

export default DashboardCard;

