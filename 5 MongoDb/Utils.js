const MongoClient = require("mongodb").MongoClient
const libchalk = require("chalk")
const libmoment = require("moment")
const libfs = require("fs")
const libpath = require("path")

const util = {}


util.getdbconnection = (callbackfunction) => {
    MongoClient.connect(process.env.MOGNO_URL)
        .then((dbconnection) => {

            callbackfunction(dbconnection.db(process.env.MONGO_DB))

        })
        .catch((error) => {
            callbackfunction(false)
            util.logger(error, "error")
        })
}


util.loggerchalkpicker = {
    "common": libchalk.white,
    "error": libchalk.red,
    "warning": libchalk.yellow,
    "success": libchalk.green
}
util.loggersignpicker = {
    "common": "[*]",
    "error": "[-]",
    "warning": "[!]",
    "success": "[+]"
}



util.logger = (msg, type = "common", track = true) => {

    const currentdatetime = libmoment().format('DD-MM-YYYY HH:mm:ss');

    const currentlogfile = process.cwd() + libpath.sep + "logs" + libpath.sep + ` ${libmoment(currentdatetime, 'DD-MM-YYYY HH:mm:ss').format('DD-MM-YYYY')}.log`;

    const logtoprint = `${util.loggersignpicker[type]} ${currentdatetime} ${msg}`

    console.log(util.loggerchalkpicker[type](logtoprint))

    if (track) {

        if (!libfs.existsSync(currentlogfile)) {
            libfs.writeFileSync(currentlogfile, "--------logs--------")
        }


        libfs.appendFile(currentlogfile, "\n" + logtoprint, (error) => {

            if (error) {
                throw new error("Failed to Save logs Plz Check the Issue:" + error)
            }


        })

    }


}

module.exports = util
