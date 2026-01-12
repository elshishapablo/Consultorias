import { motion } from 'framer-motion';
import { Users, Clock, DollarSign, Zap } from 'lucide-react';
import DashboardCard from '../Dashboard/DashboardCard';

const DashboardsLanding = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Estadísticas en Tiempo Real</h2>
          <p className="text-xl text-gray-600">Mira lo que está pasando ahora mismo en la plataforma</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <DashboardCard
            title="Expertos Online"
            value="127"
            icon={Users}
            delay={0.1}
          />
          <DashboardCard
            title="Consultas Hoy"
            value="342"
            icon={Zap}
            delay={0.2}
          />
          <DashboardCard
            title="Tiempo Promedio"
            value="12 min"
            icon={Clock}
            delay={0.3}
          />
          <DashboardCard
            title="Ahorro Promedio"
            value="$45"
            icon={DollarSign}
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
};

export default DashboardsLanding;

