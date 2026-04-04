const loginService = (email, password) => {
    if (email === "admin@test.com" && password === "1234") {
        return {
            success: true,
            token: "fake-jwt-token",
            user: { email }
        }
    }

    return {
        success: false,
        message: "Invalid credentials"
    };
}

module.exports = { loginService }