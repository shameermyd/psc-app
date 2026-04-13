const { loginUser, registerUser } = require("./auth.service");


const login = async (req, res) => {
    try {
        console.log(req.body, "reqBody C");

        const data = await loginUser(req.body);

        return res.json({
            message: "Login successful",
            user: data.user,
            token: data.token
        });

    } catch (err) {
        return res.status(400).json({ message: err.message });
    }
};

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