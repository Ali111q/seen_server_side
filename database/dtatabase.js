const {Sequelize} = require('sequelize');

const db = new Sequelize('seen', 'root', '',{
    host:'localhost',
    dialect: 'mysql'
})

module.exports = db;