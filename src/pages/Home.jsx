import { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import ConsultasList from '../components/Consultas/ConsultasList';
import Taximeter from '../components/Taximeter/Taximeter';

const Home = ({ user }) => {
  const [selectedExpert, setSelectedExpert] = useState(null);
  const [isCallActive, setIsCallActive] = useState(false);

  const handleEndCall = (callData) => {
    console.log('Llamada finalizada:', callData);
    setIsCallActive(false);
    setSelectedExpert(null);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-white">
      {/* Main Content - Consultas */}
      <div className="w-full pr-28 relative z-10">
        <ConsultasList />
      </div>

      {/* Navbar - Right Sidebar */}
      <div className="fixed right-0 top-0 bottom-0 z-50">
        <Navbar />
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

