const express = require('express');
const { login, updateData, register } = require('../controller/user_controller');
const { versionCheck, loginCheck } = require('../middleware/middleware');


const router = express.Router();

// user data and auth routes 
router.post('/login', versionCheck, login);
router.post('/register', versionCheck, register);
router.post('/update-data', versionCheck, updateData);

// home routes
router.get('/home', loginCheck, versionCheck, getHome);