import { motion } from 'framer-motion';
import { User, Calendar, Folder, Settings, FileText, BarChart3, Bell } from 'lucide-react';
import logoIcon from '../../assets/icon.png';

const Navbar = ({ onClose }) => {
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
      <div className="flex flex-col gap-6 flex-1">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
        >
          <User className="w-5 h-5 text-white" />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-3 rounded-lg hover:bg-white/10 transition-colors"
        >
          <Calendar className="w-5 h-5 text-gray-400" />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-3 rounded-lg hover:bg-white/10 transition-colors"
        >
          <Folder className="w-5 h-5 text-gray-400" />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-3 rounded-lg hover:bg-white/10 transition-colors"
        >
          <Settings className="w-5 h-5 text-gray-400" />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-3 rounded-lg hover:bg-white/10 transition-colors"
        >
          <FileText className="w-5 h-5 text-gray-400" />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-3 rounded-lg hover:bg-white/10 transition-colors"
        >
          <BarChart3 className="w-5 h-5 text-gray-400" />
        </motion.button>
      </div>

      {/* Bottom: Notifications and Profile */}
      <div className="flex flex-col gap-4">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="relative p-3 rounded-lg hover:bg-white/10 transition-colors"
        >
          <Bell className="w-5 h-5 text-gray-400" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
        </motion.button>
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-500 to-gray-400"></div>
      </div>
    </motion.div>
  );
};

export default Navbar;

