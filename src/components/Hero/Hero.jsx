import { motion } from 'framer-motion';
import Planet3D from '../Planet/Planet3D';
import logoIcon from '../../assets/icon.png';

const Hero = ({ onExpertClick }) => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-pure-white via-off-white to-pure-white">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-medium-gray/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-light-gray/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full h-full flex flex-col">
        {/* Header Text */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute top-20 left-0 right-0 text-center z-20 px-4"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <img src={logoIcon} alt="MicroConsultas Logo" className="w-16 h-16 md:w-20 md:h-20" />
            <h1 className="text-5xl md:text-7xl font-bold text-gradient-white">
              MicroConsultas
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-medium-gray max-w-2xl mx-auto">
            Soluciones técnicas flash. Expertos disponibles ahora mismo.
          </p>
        </motion.div>

        {/* Planet Container - 70% of screen */}
        <div className="flex-1 w-full mt-32 mb-32" style={{ height: '70vh' }}>
          <Planet3D onExpertClick={onExpertClick} />
        </div>
      </div>
    </section>
  );
};

export default Hero;

