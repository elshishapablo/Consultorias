import { motion } from 'framer-motion';

const Nosotros = () => {
  return (
    <section id="nosotros" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nosotros</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 text-lg text-gray-700 leading-relaxed"
          >
            <p>
              En MicroConsultas, creemos que los programadores no deberían perder horas o días 
              resolviendo problemas que un experto puede solucionar en minutos.
            </p>
            <p>
              Nuestra misión es democratizar el acceso a conocimiento técnico de alta calidad, 
              conectando a desarrolladores con expertos verificados en tiempo real.
            </p>
            <p>
              A diferencia de plataformas tradicionales que se enfocan en proyectos largos, 
              nosotros nos especializamos en soluciones rápidas y efectivas. Cada minuto cuenta, 
              y por eso solo pagas por el tiempo que realmente usas.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Nosotros;

