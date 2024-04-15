const libhttp = require("http")
const libfs = require('fs')
const libformidable = require('formidable')


libhttp.createServer((req, res) => {


    if (req.url == '/') {

        libfs.readFile('Form.html', (error, data) => {

            if (!error) {
                res.writeHead(200, { 'content-type': 'text/html' })
                res.write(data)
                res.end()
            }

        })
    }
    else if (req.url == "/Fileuplode") {

        const form = new libformidable.IncomingForm({
            allowEmptyFiles: true
        });
        form.parse(req, (error, Fields, files) => {

            if (error) {
                console.log(error)
            } else {

                // console.log("Fields" + JSON.stringify(Fields))
                // console.log(files)
                const File1path = files.File1[0].filepath;
                const File2path = files.File2[0].filepath;
                const File3path = files.File3[0].filepath;
                const File4path = files.File4[0].filepath;
                const File5path = files.File5[0].filepath;

                const File1newpath = process.cwd() + "/" + files.File1[0].originalFilename;
                const File2newpath = process.cwd() + "/" + files.File2[0].originalFilename;
                const File3newpath = process.cwd() + "/" + files.File3[0].originalFilename;
                const File4newpath = process.cwd() + "/" + files.File4[0].originalFilename;
                const File5newpath = process.cwd() + "/" + files.File5[0].originalFilename;

                libfs.rename(File1path, File1newpath, (error) => {
                    if (error) console.log(error)
                    else console.log("Done")
                })

                libfs.rename(File2path, File2newpath, (error) => {
                    if (error) console.log(error)
                    else console.log("Done")
                })

                libfs.rename(File3path, File3newpath, (error) => {
                    if (error) console.log(error)
                    else console.log("Done")
                })
                libfs.rename(File4path, File4newpath, (error) => {
                    if (error) console.log(error)
                    else console.log("Done")
                })


                libfs.rename(File5path, File5newpath, (error) => {
                    if (error) console.log(error)
                    else console.log("Done")
                })

            }

            res.write("Done")
            res.end()

        })
    }
    else {
        res.write("Page Not found")
    }




}).listen(3000)
