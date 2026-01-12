import NavbarLanding from '../components/Landing/NavbarLanding';
import HeroLanding from '../components/Landing/HeroLanding';
import DashboardsLanding from '../components/Landing/DashboardsLanding';
import GenteEnlazada from '../components/Landing/GenteEnlazada';
import QueHacemos from '../components/Landing/QueHacemos';
import Nosotros from '../components/Landing/Nosotros';
import Contacto from '../components/Landing/Contacto';
import Footer from '../components/Footer/Footer';

const Landing = ({ onLoginClick, onRegisterClick }) => {
  return (
    <div className="min-h-screen bg-white">
      <NavbarLanding onLoginClick={onLoginClick} onRegisterClick={onRegisterClick} />
      <HeroLanding />
      <DashboardsLanding />
      <GenteEnlazada />
      <QueHacemos />
      <Nosotros />
      <Contacto />
      <Footer />
    </div>
  );
};

export default Landing;

