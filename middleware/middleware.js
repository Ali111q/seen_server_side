const { App, User } = require("../model/model");

module.exports.versionCheck = async (req, res, next) => {
    const headers = req.headers;
    let minVersion = await App.max('min_version');
    let app = await App.findOne({
        where: {
            min_version: minVersion
        }
    })
    if (headers['X-App-Version']) {
        if (Number.parseFloat(headers['X-App-Version']) >= minVersion) {
            return next();
        } else {
            if (headers['X-Platform'] == 'ios') {
                return res.json({
                    status: 300,
                    msg: 'you need to update',
                    url: app.dataValues.app_store_url
                });
            } else {
                return res.json({
                    status: 300,
                    msg: 'you need to update',
                    url: app.dataValues.google_play_url
                });
            }

        }
    } else {
        return res.json({
            status: 301,
            msg: 'headers error'
        })
    }

};

module.exports.loginCheck = async (req, res, next)=>{
    const headers = req.headers;
    const token = headers.Authorization.split(' ')[1];

    const user = await User.findOne({
        where:{
            token: token
        }
    });

    if (user) {
        req.body.userId = user.dataValues.id;
       return next();
    }
    return res.json({
        status: 303,
        msg:'you need to login'
    })
}

module.exports.checkEmail = async (req, res, next)=>{
  const user = await  User.findAll({
        where:{
            email: req.body.email
        }
    });


    if (user.length>0) {
        return res.send({
            status:304,
            msg:'there is account with this email'
        });
    }
    return next();
}