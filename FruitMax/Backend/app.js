const express = require('express');
const dotenv = require('dotenv');
const sequelize = require('./database');
const productRoutes = require('./routes/products');
const userRoutes = require('./routes/users');

// Configurar variables de entorno
dotenv.config();

// Inicializar la aplicación
const app = express();

// Middlewares
app.use(express.json()); // Permitir JSON en el body de las peticiones

// Rutas
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);

// Sincronizar con la base de datos
sequelize.sync()
  .then(() => console.log('Base de datos sincronizada'))
  .catch(error => console.error('Error al sincronizar la base de datos:', error));

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
