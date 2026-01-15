const { getPool } = require("../config/database");

const findAllUsers = async () => {
    const pool = getPool();
    const query = "SELECT * FROM USERS";
    const result = await pool.query(query);
    return result;
};

const createUser = async ({name, email, password}) => {
    const values = [name, email, password];
    const pool = getPool();
    const query = `INSERT INTO users (name, email, password)
    values ($1, $2, $3)
    RETURNING id, name, email`

    const result = await pool.query(query, values);
    return result;
};

module.exports = {
    findAllUsers,
    createUser
};