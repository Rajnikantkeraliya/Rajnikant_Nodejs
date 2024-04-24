require("dotenv").config()
const servermanager = require('./Server/Server.js')
const { libutil } = require('./Util/Utils.js')


//prepare servermanager
servermanager.prepare();

//server is Started
servermanager.start();

//db Connection



libutil.getdbconnection(function (dbconnection) {


    if (dbconnection == false) {
        libutil.logger("Database Connection Failed", 3)
    }
    else {
        libutil.logger("Database Successfully Conected", 1)
    }

})