const employeeRepository = require("../repository/employee.repository")

const getAllEmployeeService = async () => {
    const employees = await employeeRepository.fetchAllEmployees();
    //Business Logic;
    return employees;
};
const postEmployeeService = async (payload) => {
    const post = await employeeRepository.postEmployee(payload);
    return post;
}
module.exports={
    getAllEmployeeService,
    postEmployeeService
} 