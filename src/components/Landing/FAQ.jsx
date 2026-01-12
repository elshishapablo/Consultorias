import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    pregunta: '¿Cómo funciona MicroConsultas?',
    respuesta: 'Simplemente busca un experto en la tecnología que necesitas, haz clic en "Conectar" y en menos de 30 segundos estarás en una sesión de video en vivo. El experto verá tu pantalla y te ayudará a resolver tu problema. Pagas solo por los minutos que uses.',
  },
  {
    pregunta: '¿Cuánto cuesta una consulta?',
    respuesta: 'Los precios varían según el experto, pero generalmente oscilan entre $2 y $5 por minuto. La mayoría de las consultas se resuelven en 10-15 minutos, lo que significa un costo promedio de $20-$75 por consulta.',
  },
  {
    pregunta: '¿Los expertos están verificados?',
    respuesta: 'Sí, todos nuestros expertos pasan por un proceso riguroso de verificación. Revisamos su experiencia, conocimientos técnicos y realizamos entrevistas. Solo aceptamos a los mejores profesionales.',
  },
  {
    pregunta: '¿Puedo grabar las sesiones?',
    respuesta: 'Sí, puedes grabar tus sesiones para consultarlas después. Las grabaciones están disponibles en tu dashboard durante 30 días después de la consulta.',
  },
  {
    pregunta: '¿Qué pasa si no se resuelve mi problema?',
    respuesta: 'Si no estás satisfecho con la consulta, puedes solicitar un reembolso dentro de las primeras 5 minutos de la sesión. Nuestro objetivo es tu satisfacción total.',
  },
  {
    pregunta: '¿Hay límite de consultas?',
    respuesta: 'No hay límite. Puedes hacer tantas consultas como necesites. Con nuestros planes prepago o mensuales puedes ahorrar hasta un 40%.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Preguntas Frecuentes</h2>
          <p className="text-xl text-gray-600">Todo lo que necesitas saber sobre MicroConsultas</p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-xl p-6 backdrop-blur-xl bg-white/10 border border-white/20 shadow-xl"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
              }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between text-left"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.pregunta}</h3>
                <ChevronDown
                  className={`w-5 h-5 text-gray-600 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-4 text-gray-600"
                >
                  {faq.respuesta}
                </motion.p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

