// require("dotenv").config();
const path = require('path');
require('dotenv').config({
  path: path.resolve(__dirname, '../../.env'),
});

const {Pool} = require("pg");

// const pool = new Pool({
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME
// })

const pool = new Pool({
    connectionString: process.env.DB_URL
})
console.log(process.env.DB_URL)

pool.on('connect', () => {
    console.log('Postgress db connection is alive')
});

module.exports = pool;