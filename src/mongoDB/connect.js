const MongoClient = require('mongodb').MongoClient;

const clusterName = require('../../config/credentials.json').clusterName;
const database = require('../../config/credentials.json').database;
const username = require('../../config/credentials.json').username;
const password = require('../../config/credentials.json').password;
const collectionName = require('../../config/credentials.json').collectionName;

const uri = `mongodb+srv://${username}:${password}@${clusterName}-phzrg.mongodb.net`; //${database}?retryWrites=true`;

var _mongoCollection;

/**
 * Connect to the mongoDB and then returns the connection to the collection
 * @returns {Collection} the connected collection
 */
function connectDB(){
    let client = new MongoClient(uri, { useNewUrlParser: true });

    client.connect(err => {
        if(err)
            console.log(`Failed to Connect ${err}`);
        else
            console.log("Connected Successfully");
    });

    if(client.isConnected())
        _mongoCollection =  client.db(database).collection(collectionName);
}

function getCollection(){
    return _mongoCollection;
}

module.exports = {
    connectDB: connectDB,
    getCollection: getCollection
}