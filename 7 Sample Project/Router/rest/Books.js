const libexpress = require('express')
const util = require('../../Utils')


const bookRouter = libexpress.Router();

bookRouter.get("/", (req, res) => {

    res.status(200).json(

        {
            Data: [{ Name: Book1 }, { Name: Book1 }, { Name: Book1 }, { Name: Book1 }]
        }
    )

})