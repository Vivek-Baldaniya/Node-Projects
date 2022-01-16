const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const todoRoutes = require('./routes/todos');

const app = express();
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Methods',
        'OPTIONS, GET, POST, PUT, PATCH, DELETE'
    );
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use(todoRoutes);

mongoose.connect('mongodb+srv://Vivek_Baldaniya:Vivek456@cluster0.32anq.mongodb.net/todo-app?retryWrites=true&w=majority')
    .then((result) => {
        console.log("Database Connected Successfully...");
        app.listen(8000);
    })
    .catch(err => {
        console.log(err);
    })