const { App } = require("../model/model");

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

}