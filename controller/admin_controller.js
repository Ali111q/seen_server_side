const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Sequelize } = require('sequelize');

const { Admin, User } = require("../model/model");


// login controller
module.exports.login = async (req, res) => {

    console.log(await bcrypt.hash(req.body.password, 10));
    const admin = await Admin.findOne({ where: { email: req.body.email } });
    console.log(admin);
    if (!admin) {
        return res.render('login/login', { error: 'incorrect email please try again' });

    }

    const isPasswordValid = await bcrypt.compare(req.body.password, admin.password);
    if (!isPasswordValid) {
        return res.render('login/login', {
            error: 'password is incorrect please try again'
        });

    }

    const token = jwt.sign({ id: admin.id }, 'secretKey');

    await admin.update({
        token: token
    })
    req.session.user = { token: token };
    return res.redirect('/dasboard/index');



}
module.exports.loginView = (req, res) => {
    res.render('login/login')
}



// dashboard controller
module.exports.dashboardView = async (req, res,) => {
    const userCount = await User.count();
    let defrance = 0;
    const thisMonth = new Date();
    const startOfMonth = new Date(thisMonth.getFullYear(), thisMonth.getMonth(), 1);
    const endOfMonth = new Date(thisMonth.getFullYear(), thisMonth.getMonth() + 1, 0);
   const thisMonthCount = await  User.count({
        where: {
          createdAt: {
            [Sequelize.Op.between]: [startOfMonth, endOfMonth]
          }
        }
      })

      defrance = thisMonthCount
    res.render('dashboard/index', {
        userCount: userCount,
        defrance: defrance
    });
}