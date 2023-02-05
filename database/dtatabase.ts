import { Sequelize } from "sequelize";

const db = new Sequelize('seen', 'root', '',{
    host:'localhost',
    dialect: 'mysql'
})

export  default db;