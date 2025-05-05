import React from 'react';
import './HomePage.css'; // Importa il file CSS per la HomePage
import image from './assets/image.png'; // Importa l'immagine

function HomePage() {
  return (
    <div className="homepage-container">
      <div className="content">
        <h1>Benvenuto nella Home!</h1>
        <p>Hai effettuato il login con successo. Benvenuto!</p>
      </div>
      <div className="image-container">
        <img src={image} alt="Benvenuto" className="home-image" />
      </div>
    </div>
  );
}

export default HomePage;
