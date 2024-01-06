const jwt = require("jsonwebtoken");
const JWT_SECRET = "$aifis@goodb0y:)";


const fetchuser = (req, res, next) => {
    // Get the user from the JWT token and add user ID to req object
    const token = req.header("auth-token");
    if(!token) {
        res.status(401).send({error: "Please authenticate using valid token."});
    }
    try {
        const data = jwt.verify(token, JWT_SECRET);
        req.user = data.user;
        next();
    } catch (error) {
        res.status(401).send({error: "Please authenticate using valid token."});
    }
}

module.exports = fetchuser;