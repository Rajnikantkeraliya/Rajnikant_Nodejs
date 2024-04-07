const libexpress = require('express');


const routerui = libexpress.Router()

routerui.get('/', (req, res) => {
    res.render("index")
})
routerui.get("/dashboard", (req, res) => {
    res.render("dashboard")
})



module.exports = routerui;