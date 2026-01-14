import { useState, lazy, Suspense, useEffect } from 'react';
import LoginImproved from './components/Login/LoginImproved';
import Home from './pages/Home';

// Lazy load de componentes pesados
const Landing = lazy(() => import('./pages/Landing'));

function App() {
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const [loginMode, setLoginMode] = useState('login'); // 'login' o 'register'

  // Scroll al top cuando cambia la página (showLogin cambia)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [showLogin]);

  const handleLogin = (userData) => {
    setUser({ ...userData, balance: 50.0 }); // Mock balance
    setShowLogin(false);
  };

  const handleLoginClick = () => {
    setLoginMode('login');
    setShowLogin(true);
  };

  const handleRegisterClick = () => {
    setLoginMode('register');
    setShowLogin(true);
  };

  const handleBackToLanding = () => {
    setShowLogin(false);
  };

  const handleLogout = () => {
    setUser(null);
    setShowLogin(false);
  };

  // Si hay usuario, mostrar Home
  if (user) {
    return <Home user={user} onLogout={handleLogout} />;
  }

  // Si se hace clic en Login/Registrarse, mostrar Login
  if (showLogin) {
    return <LoginImproved onLogin={handleLogin} initialMode={loginMode} onBack={handleBackToLanding} />;
  }

  // Por defecto, mostrar Landing
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-gray-200 border-t-gray-900 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Cargando...</p>
        </div>
      </div>
    }>
      <Landing 
        onLoginClick={handleLoginClick} 
        onRegisterClick={handleRegisterClick} 
      />
    </Suspense>
  );
}

export default App;
