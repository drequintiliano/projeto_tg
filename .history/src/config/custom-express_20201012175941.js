const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static('../app/public'));

app.use(bodyParser.urlencoded({
    extended: true
}));