const { getPool } = require("../config/database");

const fetchAllEmployees = async () => {
    const pool = getPool();
    const query = "SELECT * FROM employee_salary";
    const result = await pool.query(query);
    return result.rows;
};

const postEmployee = async (payload) => {
    const pool = getPool();
    const query = "INSERT INTO employee_salary (employee_id, first_name, last_name, dept_id, occupation, salary, password) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *";
    const values = [
        payload.first_name,
        payload.last_name,
        payload.dept_id,
        payload.occupation,
        payload.salary,
        payload.password,
    ];
    const result = await pool.query(query, values);
    return result;
}
module.exports = {
    fetchAllEmployees,
    postEmployee
}