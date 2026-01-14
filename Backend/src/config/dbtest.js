const pool = require('./database');


// DB url format --> postgresql://USER:PASSWORD@HOST:PORT/DATABASE
// # will create a comment in .env so use url encoded -> %23
async function testConnection(params) {
    try{
        const result = await pool.query('SELECT NOW()');
        console.log(result)
    }catch(err){
        console.log(err)
    }
}
testConnection()