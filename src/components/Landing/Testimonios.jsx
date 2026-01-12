import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonios = [
  {
    id: 1,
    nombre: 'Carlos Ramírez',
    rol: 'Desarrollador Full Stack',
    empresa: 'TechStart',
    comentario: 'Resolví un bug crítico en producción en solo 12 minutos. MicroConsultas me salvó el día.',
    rating: 5,
    tecnologia: 'React',
  },
  {
    id: 2,
    nombre: 'Ana Martínez',
    rol: 'CTO',
    empresa: 'InnovateLab',
    comentario: 'La mejor inversión para nuestro equipo. Ahorramos horas de investigación con consultas rápidas.',
    rating: 5,
    tecnologia: 'Node.js',
  },
  {
    id: 3,
    nombre: 'Luis Fernández',
    rol: 'Desarrollador Backend',
    empresa: 'DataFlow',
    comentario: 'El sistema de expertos verificados es increíble. Siempre encuentro la solución que necesito.',
    rating: 5,
    tecnologia: 'Python',
  },
];

const Testimonios = () => {
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
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Lo Que Dicen Nuestros Usuarios</h2>
          <p className="text-xl text-gray-600">Miles de desarrolladores confían en MicroConsultas</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonios.map((testimonio, index) => (
            <motion.div
              key={testimonio.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="rounded-xl p-6 backdrop-blur-xl bg-white/10 border border-white/20 shadow-xl relative"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
              }}
            >
              <Quote className="w-8 h-8 text-gray-400 mb-4" />
              <p className="text-gray-700 mb-6 italic">"{testimonio.comentario}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-500 to-gray-400 flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-semibold">
                    {testimonio.nombre.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">{testimonio.nombre}</h4>
                  <p className="text-sm text-gray-600">{testimonio.rol} • {testimonio.empresa}</p>
                </div>
              </div>
              <div className="flex items-center gap-1 mt-4">
                {[...Array(testimonio.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonios;

