const { getPool } = require("../config/database");

const findAllUsers = async () => {
    const pool = getPool();
    const query = "SELECT * FROM USERS";
    const result = await pool.query(query);
    return result;
};

module.exports = {
    findAllUsers
}