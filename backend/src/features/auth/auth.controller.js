const { loginService } = require("./auth.service");


const login = (req,res) => {

    console.log("BODY:", req.body);
    const {email,password} =  req.body;
    const result = loginService(email,password);  

    if(result.success){
        return res.json(result);
    }else{
        return res.status(401).json(result);
    }
}

module.exports = {login};