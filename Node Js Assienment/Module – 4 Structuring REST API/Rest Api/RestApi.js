const express = require("express");
const { MongoClient, ObjectId } = require('mongodb');

const app = express();

const PORT = "3000";
const URI = "mongodb://localhost:27017";

app.use(express.json());

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
getMongoDBClient()

//All Data Show

app.get("/task", async (req, res) => {

    const client = await getMongoDBClient();
    const Database = client.db("Online_Shopping_App");
    const collection = Database.collection("TaskManagement");

    try {
        const Resultdata = await collection.find({}).toArray();
        res.status(200).json({ Data: Resultdata })
        console.log(Resultdata)

    } catch (error) {
        console.log(`Error Fatching data ${error}`)
        res.status(200).json({ error: "Internal server error" })
    }
    finally {
        client.close();
    }

});


//Specific Data show

app.get('/task/:id', async (req, res) => {

    const taskId = req.params.id;
    try {
        const client = await getMongoDBClient()
        const Database = client.db("Online_Shopping_App");
        const collection = Database.collection("TaskManagement");

        const resultdata = await collection.findOne({ _id: new ObjectId(taskId) });

        if (!resultdata) {
            res.status(404).json({ error: "Result not found" })
        }
        else {
            res.status(200).json(resultdata)
        }
    }
    catch (error) {
        console.error("Error fetching task:", error);
        res.status(500).json({ error: "Internal server error" });
    }
})

// Create a new task

app.post('/task', async (req, res) => {

    try {

        const client = await getMongoDBClient()
        const Database = client.db("Online_Shopping_App");
        const collection = Database.collection("TaskManagement");

        const resultdata = await collection.insertOne(
            {
                name: "Samsung Galaxy Note20",
                brand: "Samsung",
                price: 60000,
                description: "Description of the Samsung Note 20",
                stock_quantity: 100
            }
        )
        res.status(201).json(resultdata);
    }
    catch (error) {
        console.error("Error creating task:", error);
        res.status(500).json({ error: "Internal server error" });
    }

})


// Update a task
app.put('/task/:id', async (req, res) => {
    const taskId = req.params.id;
    try {
        const client = await getMongoDBClient();
        const database = client.db("Online_Shopping_App");
        const collection = database.collection("TaskManagement");
        const resultdata = await collection.updateOne(
            { _id: new ObjectId(taskId) },
            { $set: { name: "Samsung Galaxy Note23 Ultra" } }
        );
        res.status(200).json(resultdata);
    } catch (error) {
        console.error("Error updating task:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});


// Delete a task
app.delete('/task/:id', async (req, res) => {
    const taskId = req.params.id;
    try {
        const client = await getMongoDBClient();
        const database = client.db("Online_Shopping_App");
        const collection = database.collection("TaskManagement");
        console.log("Task ID:", taskId);
        const resultdata = await collection.deleteOne({ _id: new ObjectId(taskId) });
        console.log("Delete Result:", resultdata);
        res.status(200).json({ deletedCount: resultdata.deletedCount });
    } catch (error) {
        console.error("Error deleting task:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});


// Deletemany a task
app.delete('/tasks/:id', async (req, res) => {
    const taskId = req.params.id;
    try {
        const client = await getMongoDBClient();
        const database = client.db("Online_Shopping_App");
        const collection = database.collection("TaskManagement");
        console.log("Task ID:", taskId);
        const resultdata = await collection.deleteMany({ _id: new ObjectId(taskId) });
        console.log("Delete Result:", resultdata);
        res.status(200).json({ deletedCount: resultdata.deletedCount });
    } catch (error) {
        console.error("Error deleting task:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});
