import { motion } from 'framer-motion';
import { Mail, MessageSquare } from 'lucide-react';

const Contacto = () => {
  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Contáctanos</h2>
          <p className="text-xl text-gray-600">¿Tienes preguntas? Estamos aquí para ayudarte</p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-xl p-8 backdrop-blur-xl bg-white/10 border border-white/20 shadow-xl"
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
            }}
          >
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nombre</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-900 focus:outline-none focus:border-gray-900 transition-colors"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-900 focus:outline-none focus:border-gray-900 transition-colors"
                  placeholder="tu@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Mensaje</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-900 focus:outline-none focus:border-gray-900 transition-colors resize-none"
                  placeholder="Tu mensaje..."
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full px-6 py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors"
              >
                Enviar Mensaje
              </motion.button>
            </form>

            <div className="mt-8 pt-8 border-t border-gray-200 flex flex-col sm:flex-row gap-6 justify-center">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gray-600" />
                <span className="text-gray-700">contacto@microconsultas.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MessageSquare className="w-5 h-5 text-gray-600" />
                <span className="text-gray-700">Soporte 24/7</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;

