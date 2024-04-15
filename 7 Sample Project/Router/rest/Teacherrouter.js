const libexpress = require('express');
const util = require('../../Utils');
const ObjectId = require('mongodb').ObjectId
const libJWT = require('jsonwebtoken')

const teacherrouter = libexpress.Router()


//Route to Get All Teacher Data
teacherrouter.get('/', (req, res) => {
    util.getdbconnection(function (db) {

        if (db) {
            db.collection("teacher").find().toArray()
                .then(teacherdata => res.status(200).json({ teacherdata }))
                .catch(e => res.status(404).json({ error: "Internal Server Error" }))
        }
        else {
            res.status(404).json({ error: "Internal Server Error" })
        }

    })
})

//Route To Get Specific  Teacher data
teacherrouter.get('/:id', (req, res) => {
    util.getdbconnection(function (db) {

        if (db) {
            db.collection("teacher").find({ _id: new ObjectId(req.params.id) }).toArray()
                .then(teacherdata => res.status(200).json({ teacherdata }))
                .catch(e => res.status(404).json({ error: "Internal Server Error" }))
        }
        else {
            res.status(404).json({ error: "Internal Server Error" })
        }

    })
})


teacherrouter.post("/login", (req, res) => {
    util.getdbconnection(function (db) {
        if (db) {
            db.collection("teacher").find({ email: req.body.email, password: req.body.password }).toArray()
                .then(teacherArray => {

                    console.log(teacherArray[0])

                    if (teacherArray.length > 0) {
                        libJWT.sign(teacherArray[0], process.env.JWT_SIGN, { expiresIn: "1h" }, (error, token) => {
                            if (error) {
                                res.status(401).json({ token: false });
                            } else {
                                res.status(200).json({ token: token }); // Send token and authorised status
                            }
                        });
                    } else {
                        res.status(401).json({ token: false });
                    }
                })
                .catch(e => {
                    console.error(e);
                    res.status(500).json({ token: false });
                });
        } else {
            res.status(500).json({ Authorised: false });
        }
    });
});


//Route to delete Specific Teacher Data
teacherrouter.delete('/:id', (req, res) => {
    util.getdbconnection(function (db) {

        if (db) {
            db.collection("teacher").deleteOne({ _id: new ObjectId(req.params.id) })
                .then(deleteitems => res.status(200).json({ delete: deleteitems }))
                .catch(e => res.status(404).json({ error: "Internal Server Error" }))
        }
        else {

            res.status(404).json({ error: "Internal Server Error" })
        }


    })
})

// teacherrouter.put()

teacherrouter.use("*", (req, res, next) => {
    res.status(404).json({ Error: "Invalid Method" })
})


module.exports = teacherrouter;

