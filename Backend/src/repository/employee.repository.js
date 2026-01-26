const { getPool } = require("../config/database");

const fetchAllEmployees = async () => {
    const pool = getPool();
    const query = "SELECT * FROM employee_demographics";
    const result = await pool.query(query);
    console.log(result.rows)
    return result.rows;
};

module.exports={
    fetchAllEmployees
}