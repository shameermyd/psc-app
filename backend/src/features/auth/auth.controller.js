const { loginService, registerUser } = require("./auth.service");


const login = (req, res) => {
    const { email, password } = req.body;
    const result = loginService(email, password);

    if (result.success) {
        return res.json(result);
    } else {
        return res.status(401).json(result);
    }
}

const register = async (req, res) => {
    try {
        console.log(req.body);
        
        const user = await registerUser(req.body);
        res.json({ message: "User registered", user });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

module.exports = { login, register };