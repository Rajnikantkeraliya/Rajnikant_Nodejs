const libhttp = require("http")
const libcluster = require("cluster");
const numCPUs = require('os').cpus().length

// console.log(numCPUs)

if (libcluster.isMaster) {
    // console.log("i am A Main process", process.pid)

    libhttp.createServer((req, res) => { console.log("Hello World") }).listen(4000)

    libcluster.fork();
    libcluster.fork();
    libcluster.fork();
    libcluster.fork();
    libcluster.fork();
}
else {
    console.log('Me is CHild ', process.pid);
}

