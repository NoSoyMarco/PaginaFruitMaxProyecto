const express = require('express');
const Product = require('../models/Product');
const router = express.Router();

// Obtener todos los productos
router.get('/', async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los productos' });
  }
});

// Agregar un producto nuevo
router.post('/', async (req, res) => {
  const { name, description, price, image } = req.body;
  try {
    const product = await Product.create({ name, description, price, image });
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ error: 'Error al agregar el producto' });
  }
});

module.exports = router;
