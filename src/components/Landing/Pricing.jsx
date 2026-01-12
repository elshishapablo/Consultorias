import { motion } from 'framer-motion';
import { Check, Zap } from 'lucide-react';

const planes = [
  {
    nombre: 'Pay as You Go',
    precio: 'Desde $2/min',
    descripcion: 'Paga solo por lo que uses',
    popular: false,
    features: [
      'Sin compromiso',
      'Pago por minuto',
      'Acceso a todos los expertos',
      'Sesiones ilimitadas',
      'Soporte por email',
    ],
  },
  {
    nombre: 'Créditos Prepago',
    precio: '$50',
    descripcion: 'Paquete de 25 minutos',
    popular: true,
    features: [
      '25 minutos incluidos',
      'Ahorra 20% vs. pay-as-you-go',
      'Válido por 6 meses',
      'Acceso prioritario',
      'Soporte prioritario',
      'Regalo de 5 minutos extra',
    ],
  },
  {
    nombre: 'Plan Mensual',
    precio: '$99/mes',
    descripcion: 'Ideal para equipos',
    popular: false,
    features: [
      '60 minutos incluidos',
      'Ahorra 40% vs. pay-as-you-go',
      'Múltiples usuarios',
      'Dashboard de equipo',
      'Reportes y analíticas',
      'Soporte 24/7',
      'Sesiones grabadas',
    ],
  },
];

const Pricing = () => {
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
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Planes Flexibles</h2>
          <p className="text-xl text-gray-600">Elige el plan que mejor se adapte a tus necesidades</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {planes.map((plan, index) => (
            <motion.div
              key={plan.nombre}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-xl p-8 backdrop-blur-xl border shadow-xl relative ${
                plan.popular
                  ? 'bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 scale-105'
                  : 'bg-white/10 border-white/20'
              }`}
              style={
                plan.popular
                  ? {}
                  : {
                      background: 'rgba(255, 255, 255, 0.1)',
                      backdropFilter: 'blur(20px)',
                      WebkitBackdropFilter: 'blur(20px)',
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                    }
              }
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gray-900 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Zap className="w-4 h-4" />
                    Más Popular
                  </span>
                </div>
              )}
              <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                {plan.nombre}
              </h3>
              <p className={`text-sm mb-4 ${plan.popular ? 'text-gray-300' : 'text-gray-600'}`}>
                {plan.descripcion}
              </p>
              <div className="mb-6">
                <span className={`text-4xl font-bold ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                  {plan.precio}
                </span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.popular ? 'text-green-400' : 'text-green-600'}`} />
                    <span className={plan.popular ? 'text-gray-200' : 'text-gray-700'}>{feature}</span>
                  </li>
                ))}
              </ul>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                  plan.popular
                    ? 'bg-white text-gray-900 hover:bg-gray-100'
                    : 'bg-gray-900 text-white hover:bg-gray-800'
                }`}
              >
                Comenzar Ahora
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;

