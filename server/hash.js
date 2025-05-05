const bcrypt = require('bcrypt');

const password = 'admin123';
bcrypt.hash(password, 10, (err, hashedPassword) => {
  if (err) throw err;
  console.log('Hash della password:', hashedPassword);
});

// $2b$10$NtBb9HgwTcO5lNPmN7cNqel85pY9N84ejSgDlWzIxdX2yVScgE3ba