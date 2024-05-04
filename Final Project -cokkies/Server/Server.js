// Importing required modules
const libexpress = require('express');
const { libutil } = require('../Util/Utils.js'); // Assuming libutil is exported from Utils.js
const Requestlogger = require('../middleware/Requestlogger'); // Assuming Requestlogger is a middleware
const routerUi = require("../Router/Ui/Routerui.js") // Assuming routerUi is a router for UI routes
const bodyparsor = require("body-parser") // Body parsing middleware
const cookieParser = require('cookie-parser'); // Cookie parsing middleware
const session = require('express-session'); // Session middleware

// Object to manage the server
const servermanager = {}

// Function to prepare the server
servermanager.prepare = () => {
    // Initialize the server
    servermanager.server = libexpress()

    // Serve static files from the 'public' directory
    servermanager.server.use(libexpress.static('public'));

    // Session middleware setup
    servermanager.server.use(session({
        secret: process.env.SECRET_KEY,
        resave: false,
        saveUninitialized: false
    }));

    // Set the view engine to Pug
    servermanager.server.set('view engine', 'pug');

    // Parse cookies
    servermanager.server.use(cookieParser());

    // Custom request logger middleware
    servermanager.server.use(Requestlogger)

    // Parse JSON bodies
    servermanager.server.use(bodyparsor.json())
    // Parse URL-encoded bodies with extended options
    servermanager.server.use(bodyparsor.urlencoded({ extended: true }))

    // Mount UI router
    servermanager.server.use(routerUi)

    // Catch-all route for handling undefined routes
    servermanager.server.use((req, res) => {
        res.status(200).json({ error: "No Such Api" })
    })
}

// Function to start the server
servermanager.start = () => {
    servermanager.server.listen(process.env.PORT, () => {
        libutil.logger(`servermanager successfully started On Port ${process.env.PORT}. Ready to handle incoming requests.`, 1)
    })
}

// Exporting servermanager object
module.exports = servermanager
