const express = require('express');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const path = require('path');

const db = new sqlite3.Database('./users.db');

const app = express();
app.use(express.json());
app.use(cors({
    origin: (origin, callback) => callback(null, true),
    credentials: true
  }));


app.use(session({
  secret: 'secret123',
  resave: false,
  saveUninitialized: false,
}));

app.use(passport.initialize());
app.use(passport.session());

// ----- PASSPORT -----
passport.use(new LocalStrategy({ usernameField: 'email' },
  (email, password, done) => {
    db.get("SELECT * FROM users WHERE email = ?", [email], async (err, user) => {
      if (err) return done(err);
      if (!user) return done(null, false, { message: 'Email non trovata' });
      const match = await bcrypt.compare(password, user.password);
      return match ? done(null, user) : done(null, false, { message: 'Password errata' });
    });
  }
));

passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser((id, done) => {
  db.get("SELECT * FROM users WHERE id = ?", [id], (err, user) => {
    done(err, user);
  });
});

// ----- ROUTES -----
app.post('/login', passport.authenticate('local'), (req, res) => {
  res.json({ message: 'Login riuscito' });
});

app.get('/me', (req, res) => {
  req.isAuthenticated()
    ? res.json({ user: req.user.email })
    : res.status(401).json({ error: 'Non autenticato' });
});

app.listen(4000, () => {
  console.log('Server avviato su http://localhost:4000');
});
