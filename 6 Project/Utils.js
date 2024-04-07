const MongoClient = require('mongodb') = MongoClient
const libchalk = require('chalk')
const libmoment = require('moment')
const libfs = require('fs')

const utils = {}

utils.getdbconnection = () => {
    MongoClient.connect(process.env.MONGO_URL)
        .then()
        .catch((error) => {
            utils.logger(error, "error")
        })
}

utils.loggerchalkpicker = {
    "common": libchalk.white,
    "Error": libchalk.red,
    "Warning": libchalk.yellow,
    "Success": libchalk.green
}
utils.loggersignpicker = {
    "common": "[*]",
    "Error": "[-]",
    "Warning": "[!]",
    "Success": "[+]"
}

utils.logger = (msg, type = "common", track = true) => {

    const currentdatetime = libmoment().format('DD-MM-YYYY HH:mm:ss');

    const currentlogfile = process.cwd() + libpath.sep + "logs" + libpath.sep + ` ${libmoment(currentdatetime, 'DD-MM-YYYY HH:mm:ss').format('DD-MM-YYYY')}.log`;

    const logtoprint = `${utils.loggersignpicker[type]} ${currentdatetime} ${msg}`

    console.log(utils.loggerchalkpicker[type](logtoprint))

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

module.exports = utils
