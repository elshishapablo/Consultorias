import { useState } from 'react';
import LoginImproved from './components/Login/LoginImproved';
import Home from './pages/Home';
import Landing from './pages/Landing';

function App() {
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const [loginMode, setLoginMode] = useState('login'); // 'login' o 'register'

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

  // Si hay usuario, mostrar Home
  if (user) {
    return <Home user={user} />;
  }

  // Si se hace clic en Login/Registrarse, mostrar Login
  if (showLogin) {
    return <LoginImproved onLogin={handleLogin} initialMode={loginMode} onBack={handleBackToLanding} />;
  }

  // Por defecto, mostrar Landing
  return (
    <Landing 
      onLoginClick={handleLoginClick} 
      onRegisterClick={handleRegisterClick} 
    />
  );
}

export default App;
