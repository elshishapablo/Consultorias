import { motion } from 'framer-motion';
import { MapPin, Video, CreditCard } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: MapPin,
      title: 'Ubica al Experto',
      description: 'Explora el globo interactivo y encuentra al experto perfecto para tu problema técnico.',
      color: 'medium-gray',
    },
    {
      icon: Video,
      title: 'Llama Instantáneamente',
      description: 'Conecta en segundos mediante video/pantalla compartida. Sin esperas, sin complicaciones.',
      color: 'dark-gray',
    },
    {
      icon: CreditCard,
      title: 'Paga por Minuto',
      description: 'Solo pagas por el tiempo que uses. Soluciones rápidas de 10-15 minutos a precios justos.',
      color: 'deep-black',
    },
  ];

  return (
    <section className="py-24 px-4 md:px-8 bg-gradient-to-b from-pure-white to-off-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient-white">
            Cómo Funciona
          </h2>
          <p className="text-medium-gray text-lg max-w-2xl mx-auto">
            Soluciones técnicas flash en minutos, no en horas
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const colorClasses = {
              'medium-gray': 'bg-medium-gray/10 border-medium-gray/30 text-medium-gray',
              'dark-gray': 'bg-dark-gray/10 border-dark-gray/30 text-dark-gray',
              'deep-black': 'bg-deep-black/10 border-deep-black/30 text-deep-black',
            };
            const iconColorClasses = {
              'medium-gray': 'text-medium-gray',
              'dark-gray': 'text-dark-gray',
              'deep-black': 'text-deep-black',
            };
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="glass rounded-2xl p-8 text-center hover:glow-gray transition-all"
              >
                <div className={`inline-flex p-4 rounded-2xl mb-6 ${colorClasses[step.color]}`}>
                  <Icon className={`w-10 h-10 ${iconColorClasses[step.color]}`} />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-dark-gray">{step.title}</h3>
                <p className="text-medium-gray leading-relaxed">{step.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

