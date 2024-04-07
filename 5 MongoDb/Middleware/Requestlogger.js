const util = require('../Utils')


module.exports = (req, res, next) => {


    if (req.originalUrl === '/favicon.ico') {
        res.status(204).end();
    }
    else {
        util.logger(`${req.method} ${req.path}`)
        next()
    }


}