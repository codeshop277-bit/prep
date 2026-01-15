const express = require('express');
const router = express.Router();
const userController = require('../controller/user.controller');
const validate = require("../middleware/validate.middleware");
const userDto = require("../dto/user.dto");

router.get('/', userController.getAllUsersController);

router.post('/add', validate(userDto.createUserDto), userController.postUserController);
module.exports = router;