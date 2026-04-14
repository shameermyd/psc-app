const jwt = require("jsonwebtoken");
const authMiddleware = (req,res,next) => {
    try {
        console.log(req,'==============req auth');
        
        next();
    } catch (error) {
        return res.status(401).json({message: "Invalid token!"})
    }
}
module.exports = authMiddleware;