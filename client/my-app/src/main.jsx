import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importa Router e le route
import './index.css';
import App from './App.jsx';
import HomePage from './HomePage'; // Assicurati di avere una pagina per il reindirizzamento

// Avvio dell'applicazione
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router> {/* Utilizzo di BrowserRouter per gestire la navigazione */}
      <Routes>
        <Route path="/" element={<App />} /> {/* Pagina di login */}
        <Route path="/home" element={<HomePage />} /> {/* Pagina di destinazione dopo il login */}
      </Routes>
    </Router>
  </StrictMode>
);