const libexpress = require('express')
const { libutil } = require('../../Util/Utils')
const { ObjectId } = require('mongodb')

const router = libexpress.Router()


//get All Movies
router.get('/', (req, res) => {

    libutil.getdbconnection(async (db) => {

        const Movie = await db.collection("Movies").find().toArray()
        res.status(200).json({ Movie: Movie })

    })

})

//get Specific Movie
router.get('/:id', (req, res) => {

    libutil.getdbconnection(async (db) => {

        const Movie = await db.collection("Movies").find(
            { _id: new ObjectId(req.params.id) }).toArray()
        res.status(200).json({ Movie: Movie })

    })


})


//get Specific Movie
router.post('/createmovies', (req, res) => {

    libutil.getdbconnection(async (db) => {

        await db.collection("Movies").insertOne({ ...req.body })
        res.status(201).json({ status: "New Movie Created" })
    })


})
//put Specific Movie
router.put('/:id', (req, res) => {

    libutil.getdbconnection(async (db) => {

        await db.collection("Movies").updateOne({ _id: new ObjectId(req.params.id) }, { $set: req.body })
        res.status(201).json({ status: " Movie Updated" })
    })


})
//put Specific Movie
router.patch('/:id', (req, res) => {

    libutil.getdbconnection(async (db) => {

        await db.collection("Movies").updateOne({ _id: new ObjectId(req.params.id) }, { $set: req.body })
        res.status(201).json({ status: "Movies Specific Data Updeted" })
    })


})
//put Specific Movie
router.delete('/:id', (req, res) => {

    libutil.getdbconnection(async (db) => {

        await db.collection("Movies").deleteOne({ _id: new ObjectId(req.params.id) })
        res.status(201).json({ status: " Specific Movies Deleted" })
    })


})





//No Such Method support for Movies
router.use((req, res) => {
    res.status(404).json({ error: "Method Not Supported" })
})

module.exports = router