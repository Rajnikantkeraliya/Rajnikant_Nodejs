const express = require("express");
const { MongoClient, ObjectId } = require('mongodb');

const app = express();

const PORT = 3000;
const URI = "mongodb://localhost:27017";

app.use(express.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Allow requests from any origin
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

// Database Connected
async function getMongoDBClient() {
    try {
        const client = new MongoClient(URI);
        await client.connect();
        console.log("MongoDB connected successfully");
        return client;
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        throw error;
    }
}

// All Data Show
app.get("/Movie", async (req, res) => {
    const client = await getMongoDBClient();
    const Database = client.db("moviemanagement");
    const collection = Database.collection("Movies");

    try {
        const Resultdata = await collection.find({}).toArray();
        res.status(200).json({ Data: Resultdata });
        console.log(Resultdata);
    } catch (error) {
        console.log(`Error fetching data ${error}`);
        res.status(500).json({ error: "Internal server error" });
    } finally {
        client.close();
    }
});

// Specific Data show
app.get('/Movie/:id', async (req, res) => {
    const taskId = req.params.id;
    try {
        const client = await getMongoDBClient();
        const Database = client.db("moviemanagement");
        const collection = Database.collection("Movies");

        const resultdata = await collection.findOne({ _id: new ObjectId(taskId) });

        if (!resultdata) {
            res.status(404).json({ error: "Result not found" });
        } else {
            res.status(200).json(resultdata);
        }
    } catch (error) {
        console.error("Error fetching movie:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

// Create a movie
app.post('/Movie', async (req, res) => {
    // Ensure all required fields are present
    if (!req.body.title || !req.body.views || !req.body.image) {
        return res.status(400).json({ error: "Missing required fields" });
    }

    try {
        const client = await getMongoDBClient();
        const Database = client.db("moviemanagement");
        const collection = Database.collection("Movies");

        const resultdata = await collection.insertOne({ ...req.body });
        res.status(201).json(resultdata);
    } catch (error) {
        console.error("Error creating movie:", error);
        res.status(500).json({ error: "  server error" });
    }
});

// Update a movie
app.put('/Movie/:id', async (req, res) => {
    const taskId = req.params.id;
    try {
        const client = await getMongoDBClient();
        const database = client.db("moviemanagement");
        const collection = database.collection("Movies");
        const resultdata = await collection.updateOne(
            { _id: new ObjectId(taskId) },
            { $set: req.body }
        );
        res.status(200).json(resultdata);
    } catch (error) {
        console.error("Error updating movie:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

// Delete a movie
app.delete('/Movie/:id', async (req, res) => {
    const taskId = req.params.id;
    try {
        const client = await getMongoDBClient();
        const database = client.db("moviemanagement");
        const collection = database.collection("Movies");
        const resultdata = await collection.deleteOne({ _id: new ObjectId(taskId) });
        res.status(200).json({ deletedCount: resultdata.deletedCount });
    } catch (error) {
        console.error("Error deleting movie:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

// Delete multiple movies
app.delete('/Movies', async (req, res) => {
    try {
        const client = await getMongoDBClient();
        const database = client.db("moviemanagement");
        const collection = database.collection("Movies");
        const resultdata = await collection.deleteMany({});
        res.status(200).json({ deletedCount: resultdata.deletedCount });
    } catch (error) {
        console.error("Error deleting movies:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});
