import { useState } from 'react';
import Login from './components/Login/Login';
import Home from './pages/Home';
import Landing from './pages/Landing';

function App() {
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);

  const handleLogin = (userData) => {
    setUser({ ...userData, balance: 50.0 }); // Mock balance
    setShowLogin(false);
  };

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  const handleRegisterClick = () => {
    setShowLogin(true);
  };

  // Si hay usuario, mostrar Home
  if (user) {
    return <Home user={user} />;
  }

  // Si se hace clic en Login/Registrarse, mostrar Login
  if (showLogin) {
    return <Login onLogin={handleLogin} />;
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
