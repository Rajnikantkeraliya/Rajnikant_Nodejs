const libHttp = require("http")
const studentdata = require("./Studentdata")
const teacherdata = require("./Teacherdata")

libHttp.createServer((req, res) => {

    if (req.url == "/studentdata") {
        res.writeHead(200, { "content-type": "application/json" })
        res.write(JSON.stringify(studentdata))
    }
    else if (req.url == "/teacherdata") {
        res.writeHead(200, { "content-type": "application/json" })
        res.write(JSON.stringify(teacherdata))
    }
    else {
        res.writeHead(404, { "content-type": "text/html" })
        res.write("<h1>Page not Found</h1>")
    }
    res.end()

}).listen(3000)
