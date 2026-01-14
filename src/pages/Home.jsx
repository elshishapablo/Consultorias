import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar';
import ConsultasList from '../components/Consultas/ConsultasList';
import UserDashboard from '../components/Dashboard/UserDashboard';
import HistorialConsultas from '../components/Historial/HistorialConsultas';
import PerfilUsuario from '../components/Perfil/PerfilUsuario';
import FavoritosList from '../components/Favoritos/FavoritosList';
import Configuracion from '../components/Configuracion/Configuracion';
import Taximeter from '../components/Taximeter/Taximeter';

const Home = ({ user, onLogout }) => {
  // Scroll al top cuando se monta el componente
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [selectedExpert, setSelectedExpert] = useState(null);
  const [isCallActive, setIsCallActive] = useState(false);
  const [activeView, setActiveView] = useState('dashboard'); 

  const handleEndCall = (callData) => {
    console.log('Llamada finalizada:', callData);
    setIsCallActive(false);
    setSelectedExpert(null);
  };

  const renderContent = () => {
    switch (activeView) {
      case 'dashboard':
        return <UserDashboard user={user} />;
      case 'consultas':
        return <ConsultasList />;
      case 'historial':
        return <HistorialConsultas />;
      case 'perfil':
        return <PerfilUsuario user={user} />;
      case 'favoritos':
        return <FavoritosList />;
      case 'settings':
        return <Configuracion />;
      default:
        return <UserDashboard user={user} />;
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-white">
      {/* Main Content */}
      <div className="w-full pr-28 relative z-10">
        {renderContent()}
      </div>

      {/* Navbar - Right Sidebar */}
      <div className="fixed right-0 top-0 bottom-0 z-50">
        <Navbar activeView={activeView} onViewChange={setActiveView} onLogout={onLogout} />
      </div>
      
      {/* Taximeter Modal */}
      {isCallActive && selectedExpert && (
        <Taximeter
          expert={selectedExpert}
          isActive={isCallActive}
          onEndCall={handleEndCall}
        />
      )}
    </div>
  );
};

export default Home;

