const MongoClient = require('mongodb').MongoClient;

const clusterName = require('../../config/credentials.json').clusterName;
const database = require('../../config/credentials.json').database;
const username = require('../../config/credentials.json').username;
const password = require('../../config/credentials.json').password;
const collectionName = require('../../config/credentials.json').collectionName;

const uri = `mongodb+srv://${username}:${password}@${clusterName}-phzrg.mongodb.net`; //${database}?retryWrites=true`;
console.log(uri);

const client = new MongoClient(uri, { useNewUrlParser: true });

client.connect(err => {
    console.log("CONNECTING " + err);
    const collection = client.db(database).collection(collectionName);
    console.log(collection);

});