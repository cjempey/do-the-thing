/*jshint esversion:6*/

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const dbConfig = require('./config/database');
const api = require('./controllers/api');

const app = express();

const port = 3000;

mongoose.connect(dbConfig.database, dbConfig.options);

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


app.use(express.static(path.join(__dirname, 'public')));

function root_invalid (request, response) {
    // console.log('Request received for root');
    response.send('Invalid page');
    
}

function startup (err) {
    if (err) {
        return console.log(`Error: ${err}`);
    }
    console.log(`Starting server at port :${port}`);
}

app.get('/', root_invalid);
app.use('/api', api);

app.listen(port, 'localhost', startup);