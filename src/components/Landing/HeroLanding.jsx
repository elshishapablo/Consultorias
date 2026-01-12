import { motion } from 'framer-motion';
import { lazy, Suspense } from 'react';

// Lazy load del planeta 3D que es pesado
const Planet3D = lazy(() => import('../Planet/Planet3D'));

const HeroLanding = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden bg-white">
      <div className="container mx-auto px-4 py-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Soluciones Técnicas
              <span className="block text-gray-600">en Minutos</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Conecta con expertos técnicos en tiempo real. Resuelve tus problemas de programación 
              en sesiones rápidas de 10-15 minutos con cobro por minuto.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors"
              >
                Comenzar Ahora
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-white text-gray-900 rounded-lg font-semibold border-2 border-gray-900 hover:bg-gray-50 transition-colors"
              >
                Ver Cómo Funciona
              </motion.button>
            </div>
          </motion.div>

          {/* Right: Planet */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[500px] lg:h-[600px] bg-white"
          >
            <Suspense fallback={
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-12 h-12 border-4 border-gray-200 border-t-gray-900 rounded-full animate-spin"></div>
              </div>
            }>
              <Planet3D onExpertClick={() => {}} showExperts={true} />
            </Suspense>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroLanding;

