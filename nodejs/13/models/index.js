const Sequelzie = require('sequelize');
const User = require('./user');
const Good = require('./good');
const Auction = require('./auction');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config.json')[env];
const db = {};

const sequelize = new Sequelzie(config.database, config.username, config.password, config);
db.sequelize = sequelize;

module.exports = db;