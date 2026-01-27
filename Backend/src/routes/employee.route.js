const express = require('express');
const router = express.Router();
const employeeController = require("../controller/employee.controller")

router.get('/list', employeeController.getEmployeeController);
router.post('/', employeeController.postEmployeeController)

module.exports = router