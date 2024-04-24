const libhttp = require("http");
const libcluster = require("cluster");
const numCPUs = require('os').cpus().length;

if (libcluster.isMaster) {
    console.log("Master process is running with PID:", process.pid);

    libhttp.createServer((req, res) => { console.log("Hello World") }).listen(4000);

    // Fork workers
    for (let i = 0; i < numCPUs; i++) {
        libcluster.fork();
    }

    libcluster.on("exit", (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} died`);
        console.log(Object.keys(libcluster.workers).length + " workers remaining");
    });
} else {
    setTimeout(() => {
        console.log("Hello World from Worker with PID", process.pid);
        process.exit(0);
    }, Math.floor(Math.random() * 10) * 1000);
}
