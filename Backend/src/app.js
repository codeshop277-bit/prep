const express = require("express");
const dotenv = require("dotenv");

dotenv.config(); //Load env variables

const app = express();

app.use(express.json()); //parses application/json
app.use(express.urlencoded({extended: true})); // parses application/x-www-form-urlencoded

const userRoutes = require("./routes/user.route");
const employeeRoutes = require("./routes/employee.route");

app.use('/api/users', userRoutes);
app.use('/employee', employeeRoutes);
app.get('/health', (req, res) => {
    res.status(200).json({
        status: 'OK',
        message: 'Connection Live',
        uptime: process.uptime()
    })
});

const {errorHandler} = require('./middleware/error.middleware');
app.use(errorHandler);
module.exports = app;
