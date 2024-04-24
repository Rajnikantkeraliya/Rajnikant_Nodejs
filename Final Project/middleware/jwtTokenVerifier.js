const libJWT = require("jsonwebtoken");

module.exports = (req, res, next) => {
    const tokenString = req.headers['authorization'];

    if (tokenString) {
        const token = tokenString.split(" ")[1];

        libJWT.verify(token, process.env.SECRET_KEY, (error, decoded) => {
            if (error) {
                console.error("Invalid Token:", error.message);
                res.status(400).json()
            } else {
                console.log("Token is Valid", decoded)
                next();
            }
        });
    } else {
        res.status(400).json({ message: 'Token not provided' }); // Return 400 Bad Request if token is not provided
    }
};
