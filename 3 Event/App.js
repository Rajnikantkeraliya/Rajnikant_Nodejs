const libhttp = require('http')
const libfs = require("fs")
const libEvent = require('events')

const studentdata = [

    {
        Id: '98',
        name: 'Raj patel',
    },
    {
        Id: '99',
        name: 'Nirav patel',
    }
]


libhttp.createServer((req, res) => {

    if (req.url == "/studentdata") {
        res.writeHead(200, { "Contemt-type": "application/json" })
        res.write(JSON.stringify(studentdata))
    } else {
        res.writeHead(401, { "Contemt-type": "text/html" })
        res.write("<h1>Page Note found</h1>")
    }

    res.end()


}).listen(3000)




const eventmanager = new libEvent.EventEmitter()

eventmanager.on("lunch", function () {
    console.log("I am having Lunch")
});


eventmanager.on("dinner", function () {
    console.log("I am having dinner")
});


setInterval(() => {
    eventmanager.emit("lunch")
}, 10000)

setTimeout(() => {
    eventmanager.emit("dinner")
}, 20000)


const readable = libfs.createReadStream('input.txt')

readable.on('open', () => {
    console.log("The File is Open")
})

readable.on('readable', () => {
    console.log("The FIle Is Read" + readable.read())
})

readable.on('end', () => {
    console.log("The File is Ended")
})