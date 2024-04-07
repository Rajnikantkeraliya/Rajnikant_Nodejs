//Setup Enviroment Configuration
require('dotenv').config()
//Import Util File
const util = require("./Utils")
//http library

const libpath = require('path')

const libexpress = require("express");

const app = libexpress()
//allow static File Request

//App Need To parse body Into Json if recevied
app.use(libexpress.json())

app.use(libexpress.static(libpath.join(__dirname, "public")))
//Import MiddleWare
const middlewarerequestlogger = require('./Middleware/Requestlogger')
//importing controller

const libpug = require('pug')

app.set('view engine', 'pug')


app.use(middlewarerequestlogger)

app.use("/api", require('./Router/Api'))

app.use(require('./Router/ui'))

app.listen(process.env.APP_PORT, () => {
    util.logger(`Server is Listning ${process.env.APP_PORT}`, "success")
})