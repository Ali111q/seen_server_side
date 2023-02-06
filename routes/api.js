const express = require( 'express');
const {login} = require( '../controller/user_controller');


const router = express.Router();

// user data and auth routes 
router.post('/login', login);
router.post('/register', register);
router.post('/update-data', updateData);

// home routes
router.get('/home', getHome);
