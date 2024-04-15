require('dotenv').config()
const util = require("./Utils")
const libexpress = require("express");
const middlewarerequestlogger = require('./Middleware/Requestlogger')

const app = libexpress()

app.use(middlewarerequestlogger)

app.get("/user", (req, res, next) => {

    util.getdbconnection(function (dbconn) {
        if (dbconn === false) {
            res.status(200).json({ error: "Faild To Connect Db" })
        }
        else {
            dbconn.collection("teacher").find().toArray()
                .then((Items) => { res.status(200).json(Items) })
                .catch((e) => { res.status(200).json({ error: e }) })
        }
    })

})

app.post("/Home", (req, res, next) => {

    util.getdbconnection((dbconn) => {
        if (dbconn === false) {
            res.status(200).json({ error: "Faild to Connection" })
        }
        else {
            dbconn.collection("mydata").find().toArray()
                .then(
                    (items) => {
                        res.status(200).json(items)
                    }
                )
                .catch(
                    (e) => { res.status(200).json({ error: e }) }
                )
        }
    })

})

app.put("/Dashboard", (req, res, next) => {
    res.status(200).json({ data: "Dashboard" })

})

app.delete("/index", (req, res, next) => {
    res.status(200).json({ data: "Index" })

})
app.use((req, res, next) => {
    res.status(404).end("not Found")

})

app.listen(process.env.APP_PORT, () => {
    util.logger(`Server is Listning ${process.env.APP_PORT}`, "success")
})