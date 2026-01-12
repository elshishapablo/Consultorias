import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Users, Wallet, Zap } from 'lucide-react';
import { mockExperts, technologies } from '../../utils/mockData';

const FloatingDashboard = ({ userBalance = 50.0 }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTech, setSelectedTech] = useState('');

  const onlineExperts = mockExperts.filter((expert) => expert.status === 'online');
  const filteredExperts = onlineExperts.filter((expert) => {
    const matchesSearch = expert.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTech = !selectedTech || expert.technology === selectedTech;
    return matchesSearch && matchesTech;
  });

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed bottom-8 left-8 right-8 z-40 md:left-auto md:right-8 md:w-96"
    >
      <div className="glass rounded-2xl p-6 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gradient-white">Dashboard</h2>
          <div className="flex items-center gap-2 text-sm text-medium-gray">
            <Zap className="w-4 h-4 text-dark-gray" />
            <span>Live</span>
          </div>
        </div>

        {/* Buscador */}
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-medium-gray" />
          <input
            type="text"
            placeholder="Buscar experto..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-off-white border border-medium-gray/20 rounded-xl text-dark-gray placeholder-light-gray focus:outline-none focus:border-medium-gray/40 transition-colors"
          />
        </div>

        {/* Filtro por tecnología */}
        <div className="mb-4">
          <select
            value={selectedTech}
            onChange={(e) => setSelectedTech(e.target.value)}
            className="w-full px-4 py-2.5 bg-off-white border border-medium-gray/20 rounded-xl text-dark-gray focus:outline-none focus:border-medium-gray/40 transition-colors"
          >
            <option value="">Todas las tecnologías</option>
            {technologies.map((tech) => (
              <option key={tech} value={tech}>
                {tech}
              </option>
            ))}
          </select>
        </div>

        {/* Expertos Online */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-3">
            <Users className="w-5 h-5 text-dark-gray" />
            <span className="text-sm font-medium text-dark-gray">
              Expertos Online ({filteredExperts.length})
            </span>
          </div>
          <div className="max-h-48 overflow-y-auto space-y-2">
            {filteredExperts.map((expert) => (
              <motion.div
                key={expert.id}
                whileHover={{ scale: 1.02 }}
                className="flex items-center justify-between p-3 bg-off-white rounded-xl border border-medium-gray/10 hover:border-medium-gray/30 transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="text-2xl">{expert.avatar}</div>
                  <div>
                    <div className="font-medium text-sm text-dark-gray">{expert.name}</div>
                    <div className="text-xs text-medium-gray">{expert.technology}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-deep-black font-medium">${expert.pricePerMinute}/min</div>
                  <div className="text-xs text-medium-gray">⭐ {expert.rating}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Saldo */}
        <div className="flex items-center justify-between pt-4 border-t border-medium-gray/20">
          <div className="flex items-center gap-2">
            <Wallet className="w-5 h-5 text-dark-gray" />
            <span className="text-sm text-dark-gray">Tu Saldo</span>
          </div>
          <span className="text-lg font-bold text-gradient-white">${userBalance.toFixed(2)}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default FloatingDashboard;

