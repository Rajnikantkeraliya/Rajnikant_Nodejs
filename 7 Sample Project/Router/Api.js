const libexpress = require('express');
const teacherrouter = require('./rest/Teacherrouter');

const Apirouter = libexpress.Router()

Apirouter.use('/teacher', teacherrouter)
Apirouter.use('/books', teacherrouter)
// apicontroller.use('/Doctor', teacherrouter)
// apicontroller.use('/User', teacherrouter)

Apirouter.use("*", (req, res, next) => {
    res.status(404).json({ Error: "No Such Api Found" })
})

module.exports = Apirouter;