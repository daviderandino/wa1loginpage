import React from 'react';
import './HomePage.css'; // Importa il file CSS per la HomePage
import image from './assets/image.png'; // Importa l'immagine
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <h1>Benvenuto nella HomePage</h1>
      <nav>
        <Link to="/about">
          <button>Chi siamo</button>
        </Link>
        <Link to="/contact">
          <button>Contattaci</button>
        </Link>
      </nav>
    </div>
  );
}

export default HomePage;
