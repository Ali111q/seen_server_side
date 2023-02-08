const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../model/model');


module.exports.login = async (req, res, next) => {
  const user = await User.findOne({ where: { email: req.body.email } });
  if (!user) {
    return res.json({
      msg: 'email not found',
      status: false
    });

  }

  const isPasswordValid = await bcrypt.compare(req.body.password, user.password);
  if (!isPasswordValid) {
    return res.json({
      msg: 'password inviled',
      status: false
    });

  }

  const token = jwt.sign({ id: user.id }, 'secretKey');

  await user.update({
    token: token
  })

  return res.json({
    msg: 'loged in',
    status: true,
    token: token,
    username: user.dataValues.username,
    image: user.dataValues.image
  });
}
module.exports.register = async (req, res, next) => {
  const data = req.body;
  const password = await bcrypt.hash(data.password, 10);

  data.password = password
  const user = await User.create(data);
  const sendData = user.dataValues;
  delete sendData.password
  if (user) {
    res.json({
      status: 200,
      msg:'registerd',
      ...sendData,
      
    })
  }
}

// need login check as middleware function
module.exports.updateData = async (req, res, next) => {
  const userId = req.body.userId;
  const data = req.body;
  delete data.userId;
  const user = await User.findByPk(userId);

  user.update(data).finally(updatedUser => {
    const sendUser = updatedUser.dataValues;
    delete sendUser.password;
    res.json({
      status: 200,
      msg:'updated',
      ...sendUser,
    });
  }).catch(err => {
    res.json({
      status: 305,
      msg: 'error has been occured'
    })
  });
}


