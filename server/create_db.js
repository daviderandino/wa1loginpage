const sqlite3 = require('sqlite3').verbose();
const bcrypt = require('bcrypt');

const db = new sqlite3.Database('./users.db');

db.serialize(async () => {
  db.run("DROP TABLE IF EXISTS users");
  db.run("CREATE TABLE users (id INTEGER PRIMARY KEY, email TEXT, password TEXT)");

  const hashedPassword = await bcrypt.hash('mypassword123', 10);
  db.run("INSERT INTO users (email, password) VALUES (?, ?)", ['utente@example.com', hashedPassword]);

  console.log("Utente creato: utente@example.com / mypassword123");
});
