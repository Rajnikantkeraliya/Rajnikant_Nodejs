const libexpress = require('express');
const router = libexpress.Router()


router.get("/login", (req, res) => {

    res.render("Index")

})
router.post("/login", (req, res) => {

    res.send("Valid Credential")

})
router.get("/home", (req, res) => {

    res.send("This is a home page")

})
router.get("/login", (req, res) => {

    res.send("This is a login page")

})
router.get("/signup", (req, res) => {

    res.send("This is a signup page")

})











module.exports = router