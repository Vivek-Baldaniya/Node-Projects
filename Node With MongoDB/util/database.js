const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const mongoConnect = (callback) => {
    MongoClient.connect(
            'mongodb+srv://Vivek_Baldaniya:Vivek%40456@cluster0.32anq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
        )
        .then(client => {
            console.log('Connected Successfully...');
            callback(client);
        })
        .catch(err => {
            console.log(err);
        });
};

module.exports = mongoConnect;