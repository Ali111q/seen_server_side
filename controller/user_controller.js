const bcrypt = require( 'bcrypt');
const jwt = require( 'jsonwebtoken');
const {User}  =require( '../model/model');


export  async function login(req, res, next ) {
  const user = await User.findOne({ where: { email: req.body.email } });
  if (!user) {
    return res.json({
      msg:'email not found',
      status: false});
  
  }

  const isPasswordValid = await bcrypt.compare(req.body.password, user.password);
  if (!isPasswordValid) {
    return res.json({
      msg:'password inviled',
      status: false});
  
  }

  const token = jwt.sign({ id: user.id }, 'secretKey');

  

  return res.json({
    msg:'loged in',
    status: true,
   token: token});
}
