const bcrypt = require('bcrypt');

const password = 'mypassword123';
bcrypt.hash(password, 10, (err, hashedPassword) => {
  if (err) throw err;
  console.log('Hash della password:', hashedPassword);
});

// $2b$10$h8flpTjW6Me5B1.JsGEZUe8v36wz6XCc03CQipw6yD//WSQd7vW7m