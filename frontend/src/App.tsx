import React, { useState, useEffect } from 'react';
import SplashScreen from './components/SplashScreen';
import Home from './components/Home';


function App() {
  const [showSplashScreen, setShowSplashScreen] = useState(true);

  useEffect(() => {
    // Após 500 milissegundos, altera o estado para ocultar a primeira SplashScreen
    const timeoutId = setTimeout(() => {
      setShowSplashScreen(false);
    }, 1000);

    // Limpa o timeout ao desmontar o componente para evitar vazamentos de memória
    return () => clearTimeout(timeoutId);
  }, [])

  return (
    // Renderiza a SplashScreen ou SplashScreen2 baseado no estado
    showSplashScreen ? <SplashScreen /> : <Home />
  );
}

export default App;
