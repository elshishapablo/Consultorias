import { motion } from 'framer-motion';
import { Users, MessageSquare, Heart, TrendingUp, FileText, Link as LinkIcon } from 'lucide-react';
import DashboardCard from './DashboardCard';

const AnalyticsDashboard = ({ userBalance = 50.0 }) => {
  return (
    <div className="w-full h-full p-4 space-y-4 pr-24 max-w-4xl">
      {/* Top Row - Reduced to 2 cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Total Likes Card */}
        <DashboardCard
          title="Total Likes"
          value="23.0K"
          gradient={false}
          delay={0.1}
        >
          <div className="mt-3 space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-gray-600">Female %20</span>
              <span className="text-gray-600">Male %50</span>
              <span className="text-gray-600">Other %30</span>
            </div>
            <div className="h-12 relative">
              {/* Mini graph lines */}
              <svg className="w-full h-full" viewBox="0 0 100 60" preserveAspectRatio="none">
                <path
                  d="M 0 50 Q 25 40, 50 35 T 100 30"
                  stroke="rgba(107, 114, 128, 0.6)"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d="M 0 45 Q 25 35, 50 30 T 100 25"
                  stroke="rgba(107, 114, 128, 0.4)"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d="M 0 55 Q 25 45, 50 40 T 100 35"
                  stroke="rgba(107, 114, 128, 0.3)"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            </div>
          </div>
        </DashboardCard>

        {/* Pending Messages Card */}
        <DashboardCard
          title="Pending Messages"
          value="20.k"
          icon={MessageSquare}
          delay={0.2}
        >
          <div className="mt-3 flex items-center justify-between">
            <div className="flex flex-col gap-1 text-xs text-gray-600">
              <span>%80</span>
              <span>%20</span>
              <span>%30</span>
            </div>
            <div className="relative w-16 h-16">
              {/* Donut chart */}
              <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 36 36">
                <circle
                  cx="18"
                  cy="18"
                  r="15"
                  fill="none"
                  stroke="rgba(59, 130, 246, 0.2)"
                  strokeWidth="3"
                />
                <circle
                  cx="18"
                  cy="18"
                  r="15"
                  fill="none"
                  stroke="rgba(234, 179, 8, 0.6)"
                  strokeWidth="3"
                  strokeDasharray="30 70"
                  strokeDashoffset="0"
                />
                <circle
                  cx="18"
                  cy="18"
                  r="15"
                  fill="none"
                  stroke="rgba(236, 72, 153, 0.6)"
                  strokeWidth="3"
                  strokeDasharray="20 80"
                  strokeDashoffset="-30"
                />
              </svg>
            </div>
          </div>
        </DashboardCard>

      </div>

      {/* Middle Row - Only 1 card */}
      <div className="grid grid-cols-1 gap-4">
        {/* Post Stats Card */}
        <DashboardCard
          title="Post Stats"
          icon={TrendingUp}
          delay={0.4}
        >
          <div className="mt-3">
            <div className="flex items-end justify-between h-24 gap-2">
              {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, index) => (
                <div key={day} className="flex-1 flex flex-col items-center">
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: index === 2 ? '100%' : `${30 + Math.random() * 50}%` }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className={`w-full rounded-t ${
                      index === 2 ? 'bg-pink-500' : 'bg-gray-300'
                    }`}
                  />
                  <span className="text-xs text-gray-600 mt-2">{day}</span>
                </div>
              ))}
            </div>
          </div>
        </DashboardCard>

        {/* User Balance Card */}
        <DashboardCard
          title="Saldo Disponible"
          value={`$${userBalance.toFixed(2)}`}
          subtitle="Balance actual"
          icon={Users}
          delay={0.5}
        >
          <div className="mt-3 flex items-center gap-4">
            <div className="flex-1">
              <div className="w-full bg-gray-200 rounded-full h-1.5">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${(userBalance / 100) * 100}%` }}
                  transition={{ duration: 1, delay: 0.7 }}
                  className="bg-green-500 h-1.5 rounded-full"
                />
              </div>
            </div>
          </div>
        </DashboardCard>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;

