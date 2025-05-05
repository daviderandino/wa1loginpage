import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Importa useNavigate

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');
  const navigate = useNavigate();  // Inizializza useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:4000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ email, password })
    });

    if (res.ok) {
      setMsg("Login effettuato!");
      navigate('/home');  // Reindirizza a /home se login è riuscito
    } else {
      setMsg("Email o password errati.");
    }
  };

  function isAuthenticated(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.status(401).json({ error: "Non autenticato" });
  }

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input
          type="email"
          placeholder="Email"
          onChange={e => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button type="submit">Accedi</button>
        <p>{msg}</p>
      </form>
    </div>
  );
}

export default App;
