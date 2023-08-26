// const { MongoClient } = require("mongodb");

// // Replace the following with your Atlas connection string                                                                                                                                        
// const url = "mongodb+srv://dpranav222:dpranav222@cluster0.2fnojzz.mongodb.net/?retryWrites=true&w=majority";

// // Connect to your Atlas cluster
// const client = new MongoClient(url);

// // Provide the name of the database and collection you want to use.
// // If the database and/or collection do not exist, the driver and Atlas
// // will create them automatically when you first write data.
// const dbName = "feedback-app";
// const collectionName = "product-request";

// // Create references to the database and collection in order to run
// // operations on them.
// const database = client.db(dbName);
// const collection = database.collection(collectionName);

// async function connectToMongo() {
//     try {
//         await client.connect();

//         console.log("Successfully connected to Atlas");

//     } catch (err) {
//         console.log(err.stack);
//     }
//     finally {
//         await client.close();
//     }
// }

// run().catch(console.dir);

// module.exports.dataBaseCollection = collection
// module.exports.connectToMongo = connectToMongo
// let database = connection.