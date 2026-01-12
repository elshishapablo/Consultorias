import { motion } from 'framer-motion';
import { User, MapPin, Star } from 'lucide-react';

const mockGente = [
  { id: 1, nombre: 'María González', ubicacion: 'Madrid, España', rating: 4.9, tecnologia: 'React' },
  { id: 2, nombre: 'Carlos Ramírez', ubicacion: 'Bogotá, Colombia', rating: 4.8, tecnologia: 'Python' },
  { id: 3, nombre: 'Ana Martínez', ubicacion: 'Buenos Aires, Argentina', rating: 5.0, tecnologia: 'Node.js' },
  { id: 4, nombre: 'Luis Fernández', ubicacion: 'México DF, México', rating: 4.7, tecnologia: 'TypeScript' },
  { id: 5, nombre: 'Sofia López', ubicacion: 'Barcelona, España', rating: 4.9, tecnologia: 'Vue.js' },
  { id: 6, nombre: 'Diego Torres', ubicacion: 'Santiago, Chile', rating: 4.8, tecnologia: 'React' },
];

const GenteEnlazada = () => {
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
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Gente Conectada Ahora</h2>
          <p className="text-xl text-gray-600">Expertos disponibles en tiempo real alrededor del mundo</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockGente.map((persona, index) => (
            <motion.div
              key={persona.id}
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
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-500 to-gray-400 flex items-center justify-center flex-shrink-0">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{persona.nombre}</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                    <MapPin className="w-4 h-4" />
                    <span>{persona.ubicacion}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded-full">
                      {persona.tecnologia}
                    </span>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      <span className="text-sm font-semibold text-gray-900">{persona.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GenteEnlazada;

