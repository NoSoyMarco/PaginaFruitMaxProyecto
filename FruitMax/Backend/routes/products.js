// routes/products.js
const express = require('express');
const router = express.Router();
const connection = require('../database'); // Importa tu archivo de conexión a la base de datos

// Obtener todos los productos
router.get('/', (req, res) => {
  const query = 'SELECT * FROM productos';

  connection.query(query, (error, results) => {
    if (error) {
      console.error('Error al obtener productos:', error);
      res.status(500).json({ message: 'Error al obtener productos' });
      return;
    }
    res.json(results);
  });
});

// Agregar un nuevo producto
router.post('/', (req, res) => {
  const { nombre, precio, imagen_url } = req.body;

  const query = 'INSERT INTO productos (nombre, precio, imagen_url) VALUES (?, ?, ?)';
  connection.query(query, [nombre, precio, imagen_url], (error, results) => {
    if (error) {
      console.error('Error al agregar producto:', error);
      res.status(500).json({ message: 'Error al agregar producto' });
      return;
    }
    res.status(201).json({ message: 'Producto agregado exitosamente', id: results.insertId });
  });
});

module.exports = router;


