
const express = require("express");
const cors = require("cors");

const app = express();
const authRouter = require('./features/auth/auth.routes')

app.use(cors());
app.use(express.json());

app.use('/api/auth',authRouter);


app.get('/',(req,res)=>{
    res.send("API Working!!")
})

module.exports = app;