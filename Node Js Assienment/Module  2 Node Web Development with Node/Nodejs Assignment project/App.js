
//Que No 2  Create A Localhost Server Using Express
const libexpress = require('express')

const app = libexpress()
const port = 3000

app.get('/', (req, res) => {
    res.send("Welcome!!!")
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost: ${port}`)
})









//Que No 3 Create basic “Hello world” app using node and express
const libexpress = require('express')

const app2 = libexpress()
const port2 = 3000

app.get('/', (req, res) => {
    res.send("Hello Wrold!!!")
})

app.listen(port2, () => {
    console.log(`Server is running on http://localhost: ${port}`)
})