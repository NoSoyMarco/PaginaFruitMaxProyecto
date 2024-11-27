// routes/users.js
const express = require('express');
const router = express.Router();
const connection = require('../database'); // Importa tu archivo de conexión a la base de datos

// Registro de usuario
router.post('/register', (req, res) => {
  const { nombre, email, password } = req.body;

  const query = 'INSERT INTO usuarios (nombre, email, password) VALUES (?, ?, ?)';
  connection.query(query, [nombre, email, password], (error, results) => {
    if (error) {
      console.error('Error al registrar usuario:', error);
      res.status(500).json({ message: 'Error al registrar usuario' });
      return;
    }
    res.status(201).json({ message: 'Usuario registrado exitosamente', id: results.insertId });
  });
});

// Login de usuario
router.post('/login', (req, res) => {
  const { email, password } = req.body;

  const query = 'SELECT * FROM usuarios WHERE email = ? AND password = ?';
  connection.query(query, [email, password], (error, results) => {
    if (error) {
      console.error('Error al iniciar sesión:', error);
      res.status(500).json({ message: 'Error al iniciar sesión' });
      return;
    }

    if (results.length > 0) {
      res.json({ message: 'Inicio de sesión exitoso', nombre: results[0].nombre });
    } else {
      res.status(401).json({ message: 'Credenciales incorrectas' });
    }
  });
});

module.exports = router;

