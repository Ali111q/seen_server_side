import * as Sequelize from "sequelize";
import db from "../database/dtatabase";




const user: any = db.define('user', {
    username:{
        type: Sequelize.STRING,
        allowNull:false
    },
    password:{
        type:Sequelize.STRING,
        allowNull:false
    },
    email:{
        type:Sequelize.STRING,
        allowNull:false
    },
    token:{
        type:Sequelize.STRING,
        allowNull:false
    }

},
{timestamps: false})