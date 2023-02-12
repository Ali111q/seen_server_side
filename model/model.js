const Sequelize = require("sequelize");
const db = require("../database/dtatabase");

// app details 
const App = db.define('app', {
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
const User = db.define('user', {
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
    image: {
        type: Sequelize.STRING,
        allowNull: true
    }

}, { timestamps: false });


const Show = db.define('show', {
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
    priority:{
        type: Sequelize.INTEGER,
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
    image: {
        type: Sequelize.STRING,
        allowNull: true
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
    },
    time: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    }

}, {
    timestamps: false
});

const Place = db.define('place', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, { timestamps: false })

const AdPlace = db.define('ad_place', {
    placeId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
            model: Place,
            key: 'id'
        }
    },
    adId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
            model: Ad,
            key: 'id'
        }
    }
})


Tag.hasMany(Show);
Show.belongsTo(Tag, { as: 'show', foreignKey: 'showId' });
Show.hasMany(Season);
Season.belongsTo(Show, { as: 'season', foreignKey: 'seasonId' });
Season.hasMany(Episode);
Episode.belongsTo(Season, { as: 'episode', foreignKey: 'episodeId' });
Ad.belongsToMany(Place, { through: AdPlace, foreignKey: 'adId' });
Place.belongsToMany(Ad, { through: AdPlace, foreignKey: 'placeId' });




module.exports = {
    User, Show, App, Tag, Season, Episode, Ad
}



