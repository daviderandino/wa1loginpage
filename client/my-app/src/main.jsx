import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importa Router e le route
import './index.css';
import App from './App.jsx';
import HomePage from './HomePage'; // Assicurati di avere una pagina per il reindirizzamento
import AboutPage from './AboutPage'; // Importa la pagina Chi siamo
import ContactPage from './ContactPage'; // Importa la pagina Contattaci
import { ThemeProvider } from './ThemeContext'; // assicurati del path corretto

// Avvio dell'applicazione
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
    <Router> {/* Utilizzo di BrowserRouter per gestire la navigazione */}
      <Routes>
        <Route path="/" element={<App />} /> {/* Pagina di login */}
        <Route path="/home" element={<HomePage />} /> {/* Pagina di destinazione dopo il login */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
    </ThemeProvider>
  </StrictMode>
);