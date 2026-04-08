require("dotenv").config();
const app = require('./app');
const connectDB = require("./config/db")
const port = process.env.PORT;

connectDB();

app.listen(port, ()=>{
    console.log(`server running on port: ${port}`);
});