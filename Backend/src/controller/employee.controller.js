const employeeService = require('../service/employee.service');
const bcrypt = require("bcrypt");
const asyncHandler = fn =>
    (req, res, next) =>
        Promise.resolve(fn(req, res, next)).catch(next)


const getEmployeeController = asyncHandler(async (req, res, next) => {
    const employee = await employeeService.getAllEmployeeService();
    res.status(200).json({
        employee
    });
});

const postEmployeeController = asyncHandler(async (req, res, next) => {
    const { first_name, last_name, password, dept_id, occupation, salary } = req.body;
    const hashed = await  bcrypt.hash(password, 12);
    //12 -> 2^12 = 4096 iterations That means the algorithm runs 4096 rounds of processing to generate the hash.
    const payload = {
        employee_id,
        first_name, 
        last_name,
        dept_id, occupation, salary, password: hashed
    }
//     SELECT setval(
//   pg_get_serial_sequence('employee_demographics', 'employee_id'),
//   (SELECT MAX(employee_id) FROM employee_demographics)
// ); When duplicate key violates specific constraint

    const post = await employeeService.postEmployeeService(payload);
    res.status(201).json({
        post
    })
});

module.exports={
    getEmployeeController,
    postEmployeeController
}