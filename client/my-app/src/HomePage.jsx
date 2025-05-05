import React, { useState, useEffect } from 'react';
import './HomePage.css'; // Importa il file CSS per la HomePage
import image from './assets/image.png'; // Importa l'immagine
import { Link, useNavigate } from 'react-router-dom';


function HomePage() {
  const navigate = useNavigate();
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const fetchCounter = async () => {
      const res = await fetch('http://localhost:4000/counter', { credentials: 'include' });
      if (res.ok) {
        const data = await res.json();
        setCounter(data.counter);
      }
    };
    fetchCounter();
  }, []);

  const incrementCounter = async () => {
    const res = await fetch('http://localhost:4000/counter', {
      method: 'POST',
      credentials: 'include'
    });
    if (res.ok) {
      const data = await res.json();
      setCounter(data.counter);
    }
  };

  const handleLogout = async () => {
    const res = await fetch('http://localhost:4000/logout', {
      method: 'POST',
      credentials: 'include'
    });
  
    if (res.ok) {
      navigate('/'); // Torna alla login
    } else {
      alert('Errore durante il logout');
    }
  };
  return (
    <div className="home-container">
      <div className="header-bar">
        <button className="logout-button" onClick={handleLogout}>Logout</button>
      </div>

      <img src={image} alt="Immagine decorativa" />

      <div className="counter-section">
        <h2>Contatore: {counter}</h2>
        <button onClick={incrementCounter}>Incrementa il contatore</button>
      </div>

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
