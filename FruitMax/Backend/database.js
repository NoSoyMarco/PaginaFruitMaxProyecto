const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');

// Cargar variables de entorno
dotenv.config();

// Configuración de Sequelize para MySQL
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
  }
);

// Probar la conexión a la base de datos
sequelize.authenticate()
  .then(() => console.log('Conexión a la base de datos establecida.'))
  .catch(err => console.error('No se pudo conectar a la base de datos:', err));

module.exports = sequelize;
