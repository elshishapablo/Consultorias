import { motion } from 'framer-motion';
import { Users, MessageSquare, Clock, TrendingUp } from 'lucide-react';

const stats = [
  { icon: Users, value: '10,000+', label: 'Usuarios Activos', color: 'text-blue-600' },
  { icon: MessageSquare, value: '50,000+', label: 'Consultas Resueltas', color: 'text-green-600' },
  { icon: Clock, value: '2.5 min', label: 'Tiempo Promedio de Respuesta', color: 'text-orange-600' },
  { icon: TrendingUp, value: '98%', label: 'Tasa de Satisfacción', color: 'text-purple-600' },
];

const Stats = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Números que Hablan</h2>
          <p className="text-xl text-gray-300">La plataforma de consultoría técnica más confiable</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 mb-4">
                  <Icon className={`w-8 h-8 ${stat.color}`} />
                </div>
                <div className="text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;

