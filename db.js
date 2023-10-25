const Sequelize = require('sequelize');

const sequelize = new Sequelize('Prueba', 'root', 'test', {
  host: 'mysql',
  port: 3306,
  dialect: 'mysql',
});

module.exports = sequelize;

