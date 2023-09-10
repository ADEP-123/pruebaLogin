import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Formulary } from './components/formulary.jsx';
import { Bienvenida } from './components/bienvenida.jsx';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <React.StrictMode>
      {isLoggedIn ? (
        <Bienvenida />
      ) : (
        <Formulary onLogin={() => setIsLoggedIn(true)} />
      )}
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
