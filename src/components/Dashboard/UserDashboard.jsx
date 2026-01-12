import { motion } from 'framer-motion';
import { TrendingUp, Clock, DollarSign, MessageSquare, Star, Calendar, Award } from 'lucide-react';
import DashboardCard from './DashboardCard';

const UserDashboard = ({ user }) => {
  return (
    <div className="w-full p-6 space-y-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Tu Dashboard</h2>
        <p className="text-gray-600">Bienvenido de vuelta, {user?.name || 'Usuario'}</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <DashboardCard
          title="Consultas Totales"
          value="24"
          icon={MessageSquare}
          delay={0.1}
        />
        <DashboardCard
          title="Tiempo Ahorrado"
          value="8.5h"
          icon={Clock}
          delay={0.2}
        />
        <DashboardCard
          title="Invertido"
          value={`$${(user?.balance || 0).toFixed(2)}`}
          icon={DollarSign}
          delay={0.3}
        />
        <DashboardCard
          title="Rating Promedio"
          value="4.8"
          icon={Star}
          delay={0.4}
        />
      </div>

      {/* Activity Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <DashboardCard
          title="Actividad Semanal"
          icon={TrendingUp}
          delay={0.5}
        >
          <div className="mt-4">
            <div className="flex items-end justify-between h-32 gap-2">
              {['L', 'M', 'X', 'J', 'V', 'S', 'D'].map((day, index) => (
                <div key={day} className="flex-1 flex flex-col items-center">
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: `${20 + Math.random() * 60}%` }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="w-full rounded-t bg-gray-300"
                  />
                  <span className="text-xs text-gray-600 mt-2">{day}</span>
                </div>
              ))}
            </div>
          </div>
        </DashboardCard>

        <DashboardCard
          title="Próximas Consultas"
          icon={Calendar}
          delay={0.6}
        >
          <div className="mt-4 space-y-3">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <p className="font-semibold text-sm text-gray-900">Consulta con María</p>
                <p className="text-xs text-gray-600">Hoy a las 15:00</p>
              </div>
              <span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded-full">Confirmada</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <p className="font-semibold text-sm text-gray-900">Revisión de código</p>
                <p className="text-xs text-gray-600">Mañana a las 10:00</p>
              </div>
              <span className="text-xs px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full">Pendiente</span>
            </div>
          </div>
        </DashboardCard>
      </div>

      {/* Achievements */}
      <DashboardCard
        title="Logros Desbloqueados"
        icon={Award}
        delay={0.7}
      >
        <div className="mt-4 flex flex-wrap gap-3">
          {['Primera Consulta', '10 Consultas', 'Ahorrador', 'Experto'].map((achievement, index) => (
            <div
              key={achievement}
              className="px-3 py-2 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg text-sm font-medium text-gray-700"
            >
              🏆 {achievement}
            </div>
          ))}
        </div>
      </DashboardCard>
    </div>
  );
};

export default UserDashboard;

