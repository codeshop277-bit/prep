const express = require('express');
const router = express.Router();
const userController = require('../controller/user.controller')

router.get('/', userController.getAllUsersController)
module.exports = router;