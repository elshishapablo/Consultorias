import { motion } from 'framer-motion';
import { LayoutDashboard, MessageSquare, History, User, Heart, Settings, Bell } from 'lucide-react';
import logoIcon from '../../assets/icon.png';

const Navbar = ({ activeView, onViewChange }) => {
  const menuItems = [
    { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { id: 'consultas', icon: MessageSquare, label: 'Consultas' },
    { id: 'historial', icon: History, label: 'Historial' },
    { id: 'favoritos', icon: Heart, label: 'Favoritos' },
    { id: 'perfil', icon: User, label: 'Perfil' },
    { id: 'settings', icon: Settings, label: 'Configuración' },
  ];

  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 right-0 h-full w-20 z-50 bg-dark-gray/95 backdrop-blur-sm border-l border-medium-gray/20 flex flex-col items-center py-6"
    >
      {/* Logo at top */}
      <div className="mb-8">
        <img 
          src={logoIcon} 
          alt="MicroConsultas Logo" 
          className="w-10 h-10"
        />
      </div>

      {/* Menu Items */}
      <div className="flex flex-col gap-4 flex-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeView === item.id;
          return (
            <motion.button
              key={item.id}
              onClick={() => onViewChange && onViewChange(item.id)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`p-3 rounded-lg transition-colors relative group ${
                isActive ? 'bg-white/10' : 'hover:bg-white/10'
              }`}
              title={item.label}
            >
              <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-gray-400'}`} />
              {isActive && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-white rounded-r"
                />
              )}
            </motion.button>
          );
        })}
      </div>

      {/* Bottom: Notifications and Profile */}
      <div className="flex flex-col gap-4">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="relative p-3 rounded-lg hover:bg-white/10 transition-colors"
          title="Notificaciones"
        >
          <Bell className="w-5 h-5 text-gray-400" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
        </motion.button>
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-500 to-gray-400 cursor-pointer hover:ring-2 ring-white/50 transition-all"></div>
      </div>
    </motion.div>
  );
};

export default Navbar;

