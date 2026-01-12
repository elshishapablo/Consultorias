import { motion } from 'framer-motion';
import { Shield, Award, Clock, Users, TrendingUp, Zap, Star, MessageSquare, Video, DollarSign } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: 'Expertos Verificados',
      description: 'Todos nuestros expertos pasan por un proceso de verificación riguroso. Garantizamos calidad y confiabilidad.',
    },
    {
      icon: Award,
      title: 'Sistema de Certificaciones',
      description: 'Expertos certificados en las tecnologías más demandadas. Badges verificados por la plataforma.',
    },
    {
      icon: Clock,
      title: 'Respuesta en < 30 segundos',
      description: 'Conecta con un experto en menos de 30 segundos. No más esperas interminables.',
    },
    {
      icon: Users,
      title: 'Comunidad Activa',
      description: 'Únete a una comunidad de más de 10,000 desarrolladores y expertos técnicos.',
    },
    {
      icon: TrendingUp,
      title: 'Estadísticas en Tiempo Real',
      description: 'Monitorea tu progreso, tiempo ahorrado y dinero invertido en tu desarrollo profesional.',
    },
    {
      icon: Zap,
      title: 'Sesiones Express',
      description: 'Resuelve problemas complejos en sesiones de 10-15 minutos. Eficiencia máxima.',
    },
    {
      icon: Star,
      title: 'Sistema de Ratings',
      description: 'Califica y revisa cada consulta. Ayuda a otros a encontrar los mejores expertos.',
    },
    {
      icon: MessageSquare,
      title: 'Chat en Vivo',
      description: 'Comunícate en tiempo real durante las sesiones. Chat, video y pantalla compartida.',
    },
    {
      icon: Video,
      title: 'Grabaciones Opcionales',
      description: 'Guarda tus sesiones para consultarlas después. Aprende a tu ritmo.',
    },
    {
      icon: DollarSign,
      title: 'Planes Flexibles',
      description: 'Pago por minuto, créditos prepago o planes mensuales. Elige lo que mejor te convenga.',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Características Premium</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Todo lo que necesitas para resolver problemas técnicos de forma rápida y eficiente
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-xl p-6 backdrop-blur-xl bg-white/10 border border-white/20 shadow-xl hover:shadow-2xl transition-all"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 mb-4">
                  <Icon className="w-6 h-6 text-gray-900" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;

