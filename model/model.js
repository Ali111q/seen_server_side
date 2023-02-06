const Sequelize = require("sequelize");
const db = require("../database/dtatabase");




module.exports.User = db.define('user', {
    username: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    token: {
        type: Sequelize.STRING,
        allowNull: false
    }

},
    { timestamps: false });

    