const employeeRepository = require("../repository/employee.repository")

const getAllEmployeeService = async () => {
    const employees = await employeeRepository.fetchAllEmployees();
    //Business Logic;
    return employees;
};

module.exports={
    getAllEmployeeService
} 