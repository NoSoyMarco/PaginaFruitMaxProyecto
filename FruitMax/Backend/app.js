// app.js
const express = require('express');
const cors = require('cors');
const connection = require('./database'); // Conexión a la base de datos
const usersRoutes = require('./routes/users'); // Importa las rutas de usuarios
const productsRoutes = require('./routes/products'); // Importa las rutas de productos

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// Usar las rutas
app.use('/users', usersRoutes); // Ahora las rutas de usuarios estarán en /users
app.use('/productos', productsRoutes); // Ahora las rutas de productos estarán en /productos

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});


