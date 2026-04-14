const express = require('express');
const router = express.Router();
const {login, register} = require("./auth.controller");
const authMiddleware = require("../../middleware/auth.middleware");

router.post('/login',login);
router.post("/register", register);
module.exports = router;