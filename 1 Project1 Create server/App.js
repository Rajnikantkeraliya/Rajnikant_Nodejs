const libHttp = require("http")
const Studentdata = require("./Studentdata")
const Teacherdata = require("./Teacherdata")


libHttp.createServer((req, res) => {

    if (req.url === "/student") {
        res.writeHead(200, { "content-type": "application/json" })
        res.write(JSON.stringify(Studentdata))
    } else if (req.url === "/teacher") {
        res.writeHead(200, { "content-type": "aplication/json" })
        res.write(JSON.stringify(Teacherdata))
    } else {
        res.writeHead(401, { "content-type": "text/html" })
        res.write("<h1>Page Note Found<h1/>")
    }
    res.end()

}).listen(3000)
