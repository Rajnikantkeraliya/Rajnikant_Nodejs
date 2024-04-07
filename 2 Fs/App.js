const libHttp = require('http');
const libfs = require('fs');


// const studentdata = [
//     {
//         ID: '01',
//         Name: "Patel Raj",
//         Age: "26",
//     },
//     {
//         ID: '03',
//         Name: "Patel Nirav",
//         Age: "28",
//     },
//     {
//         ID: '04',
//         Name: "Patel",
//         Age: "26",
//     }
// ];

// libHttp.createServer((req, res) => {
//     if (req.url === "/student") {
//         res.writeHead(200, { "Content-Type": "application/json" });
//         res.write(JSON.stringify(studentdata));
//     } else {
//         res.writeHead(404, { "Content-Type": "text/plain" });
//         res.end("Not Found");
//     }
// }).listen(8000, () => {
//     console.log('Server running at http://localhost:8000/');
// });


// libfs.readFile("1.txt", (error, data) => {
//     if (error) {
//         console.log(error)
//     } else {
//         console.log(data.toString())
//     }
// })

libfs.open("raj.txt", "w", (error, file) => {
    if (error) {
        console.log("File Not create" + error)
    } else {
        libfs.writeFile(file, "Hello World!!", (error) => {

            if (error) {
                console.log(error)
            } else {
                console.log("Data Writen Success")
            }
        })
    }
})



libfs.appendFile("raj.txt", "How Are You Raj!!", (error) => {
    if (error) {
        console.log(error)
    } else {
        console.log("Data Added!!")
    }
})

libfs.unlink("1.txt", (error) => {
    if (error) {
        console.log(error)
    } else {
        console.log("File Is Deleted!!!")
    }
})

libfs.rename("raj.txt", "Raj.txt", (error) => {
    if (error) {
        console.log(error)
    }
    else {
        console.log("File Rename Is success")
    }
})