const express = require("express");
const dotenv = require("dotenv");

dotenv.config(); //Load env variables

const app = express();

app.use(express.json()); //parses application/json
app.use(express.urlencoded({extended: true})); // parses application/x-www-form-urlencoded

const userRoutes = require("./routes/user.route");

app.use('/api/users', userRoutes);

const errorHandler = require('./middleware/error.middleware');
app.use(errorHandler);
module.exports = app;
