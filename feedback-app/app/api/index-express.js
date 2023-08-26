const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const { MongoClient } = require("mongodb");

const { ProductRequest } = require("./models/ProductRequest");
// const { dataBaseCollection, connectToMongo } = require('./mongodb');

// Replace the following with your Atlas connection string                                                                                                                                        
const url = "mongodb+srv://dpranav222:dpranav222@cluster0.2fnojzz.mongodb.net/?retryWrites=true&w=majority";

// Connect to your Atlas cluster
const client = new MongoClient(url);

// Provide the name of the database and collection you want to use.
// If the database and/or collection do not exist, the driver and Atlas
// will create them automatically when you first write data.
const dbName = "feedback-app";
const collectionName = "product-request";

let database;
let collection;

async function connectToMongo() {
    try {
        await client.connect();
        database = await client.db(dbName);
        collection = await database.collection(collectionName);
        console.log("Successfully connected to Atlas");

    } catch (err) {
        console.log(err.stack);
    }
    // finally {
    //     await client.close();
    // }
}

connectToMongo().then(() => {
    const app = express();
    
    app.use(express.json());
    app.use(cors());
    app.use(bodyParser.json());
    
    app.get('/status', async (req, res) => {
        const status = {
            "Status": "Running"
        };
         
        res.send(status);
    })
    
    app.get('/api/product-requests', async (req, res) => {
        try {
            const dataBaseArray = await collection.find({}).toArray()
            res.json(dataBaseArray[0].productRequests)
        }
        catch(err) {
            console.log(err);
        }
    })

    app.post('/api/add-feedback', async (req, res) => {
        try {
            const latestDocument = await collection.findOne({}, { sort: {id: -1} });
            
            const dataBaseArray = await collection.find({}).toArray()
            const productRequests = dataBaseArray[0].productRequests
            let latestId = 1

            productRequests.forEach(element => {
                latestId = Math.max(latestId, element.id)
            });

            const newFeedbackItem = {
                id: latestId+1,
                title: req.body.title,
                category: req.body.category,
                upvotes: req.body.upvotes,
                status: req.body.status,
                description: req.body.description
            }

            productRequests.push(newFeedbackItem)

            await collection.updateOne(
                {}, // updating first doc set
                { $set: {productRequests: productRequests} }
            );

            const newDataBaseArray = await collection.find({}).toArray()
            const newProductRequests = newDataBaseArray[0].productRequests

            res.json(newProductRequests);
        }
        catch(err) {
            console.log(err);
        }
    })
    
    const PORT = 5000
    
    app.listen(PORT, () => {
        console.log(`app listening on port http://localhost:${PORT}`)
    })
});
