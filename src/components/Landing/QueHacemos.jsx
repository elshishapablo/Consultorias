import { motion } from 'framer-motion';
import { Zap, Video, DollarSign, Clock } from 'lucide-react';

const QueHacemos = () => {
  const features = [
    {
      icon: Zap,
      title: 'Respuestas Instantáneas',
      description: 'Conecta con expertos en menos de 30 segundos. No más esperas de días o semanas.',
    },
    {
      icon: Video,
      title: 'Sesiones en Vivo',
      description: 'Comparte tu pantalla y resuelve problemas en tiempo real con video y chat.',
    },
    {
      icon: DollarSign,
      title: 'Pago por Minuto',
      description: 'Solo pagas por el tiempo que usas. Sesiones de 10-15 minutos, sin compromisos.',
    },
    {
      icon: Clock,
      title: 'Ahorra Tiempo',
      description: 'Resuelve problemas complejos en minutos en lugar de horas investigando.',
    },
  ];

  return (
    <section id="que-hacemos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">¿Qué Hacemos?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            MicroConsultas es una plataforma que conecta programadores con expertos técnicos 
            para resolver problemas rápidamente mediante sesiones de video en tiempo real.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
                  <Icon className="w-8 h-8 text-gray-900" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default QueHacemos;

