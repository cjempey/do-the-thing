const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

const port = 3000;


app.use(cors);
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
    console.log('Request received for root');
    res.send('Express base page (invalid)');
});

app.listen(port, () => {
    console.log(`Starting server at port ${port}`);
});