const libexpress = require('express')
const router = libexpress.Router();
const libJWT = require("jsonwebtoken")


router.post("/token", (req, res) => {


    if (req.body.email == "patelraj0804@gmail.com" && req.body.password == "Patel@0804") {

        libJWT.sign({ email: "patelraj0804@gmail.com" }, process.env.SECRET_KEY, { expiresIn: "1h" }, (error, token) => {

            res.status(200).json({ token: token })

        })

    }
    else {
        res.status(400).json()
    }

})


module.exports = router