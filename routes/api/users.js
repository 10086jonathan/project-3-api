// require modules
const express = require('express');

// set up router object
const router = express.Router();

// require controller
const usersCtrl = require('../../controllers/users');

// define a signup route
router.post('/signup', usersCtrl.signup);
router.post('/login', usersCtrl.login);

// export your router
module.exports = router;