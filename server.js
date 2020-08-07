const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//iniciando APP
const app = express();

//iniciado DB
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true});

requireDir('./src/models');

const Product = mongoose.model('Product');

app.get('/',(req, res) => {
    res.send("SIC MUNDUS CREATUS");
});

app.listen(3001);

//