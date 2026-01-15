const app = require('./app');
const port = process.env.LOCAL_PORT || 3000;
const {connectDB} = require("./config/database");

connectDB();

app.listen(port, () => {
    console.log(`Server is running on ${port}s`)
});