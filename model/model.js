const Sequelize = require("sequelize");
const db = require("../database/dtatabase");

// app details 
module.exports.App = db.define('app', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    current_version: {
        type: Sequelize.STRING,
        allowNull: false
    },
    min_version: {
        type: Sequelize.STRING,
        allowNull: false
    },
    google_play_url: {
        type: Sequelize.STRING,
        allowNull: false
    },
    app_store_url: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    timestamps: false
})

// user table 
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
    },
    register_time: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    },
    image:{
        type:Sequelize.STRING,
        allowNull:true
    }

}, { timestamps: false });


module.exports.Show = db.define('show', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    priority: {
        type: Sequelize.INTEGER,
        defaultValue: 1
    },
    image: {
        type: Sequelize.STRING,
        allowNull: false
    },
    trailer: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: true
    },
    publish_time: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    },
}, {
    timestamps: false,
});

const Tag = db.define('tag', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    priority: {
        type: Sequelize.INTEGER,
        defaultValue: 1
    },
},
    { timestamps: false });


const Season = db.define('season', {
    number: {
        type: Sequelize.INTEGER
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    publish_time: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    }
});

const Episode = db.define('episode', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    episode_url: {
        type: Sequelize.STRING,
        allowNull: false
    },
    publish_time: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    }
});

const Ad = db.define('ad', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    video_url: {
        type: Sequelize.STRING,
        allowNull: false
    },
    website: {
        type: Sequelize.STRING,
        allowNull: true
    },
    location: {
        type: Sequelize.STRING,
        allowNull: true
    },
    title: {
        type: Sequelize.STRING,
        allowNull: true
    },
    is_active: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    duration: {
        type: Sequelize.DATE,
        allowNull: false
    },
    priority: {
        type: Sequelize.INTEGER,
        defaultValue: false
    }

}, {
    timestamps: false
});





