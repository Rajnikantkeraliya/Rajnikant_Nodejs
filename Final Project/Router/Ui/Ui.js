const libexpress = require('express');
const router = libexpress.Router()


router.get("/", (req, res) => {

    res.render("Index")

})
router.get("/dashboard", (req, res) => {

    res.render('Dashboard')

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