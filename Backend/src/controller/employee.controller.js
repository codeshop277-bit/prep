const employeeService = require('../service/employee.service');

const asyncHandler = fn =>
    (req, res, next) =>
        Promise.resolve(fn(req, res, next)).catch(next)


const getEmployeeController = asyncHandler(async (req, res, next) => {
    const employee = await employeeService.getAllEmployeeService();
    res.status(200).json({
        employee
    });
});

module.exports={
    getEmployeeController
}