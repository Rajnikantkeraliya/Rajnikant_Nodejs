const libexpress = require('express')
const router = libexpress.Router();

router.post("/token", (req, res) => {


    if (req.body.email == "patelraj0804@gmail.com" && req.body.password == "Patel@0804") {

        res.status(200).json({ cokkie: "1234" })
    }
    else {
        res.status(400).json()
    }

})


module.exports = router