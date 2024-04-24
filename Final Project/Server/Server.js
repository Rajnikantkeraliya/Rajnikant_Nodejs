const libexpress = require('express');
const { libutil } = require('../Util/Utils.js');
const Requestlogger = require('../middleware/Requestlogger');
const jwtTokenVerifier = require('../middleware/jwtTokenVerifier');
const routerMovies = require('../Router/Api/Movies.js')
const routerUi = require('../Router/Ui/Ui.js')
const routeruser = require('../Router/Api/User.js')

const servermanager = {}

servermanager.prepare = () => {
    //init server
    servermanager.server = libexpress()

    servermanager.server.use(libexpress.static('public'));

    //ask app to use Pug Engine
    servermanager.server.set('view engine', 'pug');

    //Post Body Parser
    servermanager.server.use(libexpress.json())

    //create middleWare
    servermanager.server.use(Requestlogger)

    //Ui router
    servermanager.server.use('/', routerUi)

    servermanager.server.use("/user", routeruser)

    //Movies api
    servermanager.server.use('/movies', jwtTokenVerifier, routerMovies)

    servermanager.server.use((req, res) => {
        res.status(200).json({ error: "No Such Api" })
    })
}





servermanager.start = () => {
    servermanager.server.listen(process.env.PORT, () => {
        libutil.logger(`servermanager successfully started On Port ${process.env.PORT}. Ready to handle incoming requests.`, 1)
    })
}

module.exports = servermanager