const { loginView, login, dashboardView } = require('../controller/admin_controller');

const router  = require('express').Router();

// login routes
router.post('/login',login)
router.get('/login', loginView);
//
router.get('/index', dashboardView);

module.exports = router