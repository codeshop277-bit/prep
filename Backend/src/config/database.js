const { Pool } = require("pg");
// const pool = new Pool({
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME
// })
let pool;
const connectDB = async () => {
    try {
         pool = new Pool({
            connectionString: process.env.DB_OFFICE_URL
        });
        await pool.query("SELECT 1")
        console.log('✅ Postgres DB connection is alive');
    }catch(err){
        console.error(`DB connection failed ${err}`)
        process.exit(1);
    }
};

const getPool = () => {
    if(!pool){
        throw new Error("Database not intialized");
    }
    return pool;
}

module.exports = {
    connectDB,
    getPool
};