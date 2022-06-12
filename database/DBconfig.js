const { Sequelize } = require('sequelize');

// connects to sqlite database
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './cortes.db'
});

module.exports = sequelize