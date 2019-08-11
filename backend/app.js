require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const app = express();

//Import routes
const routes = require('./routes/index');

//Middleware
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

//Initalize passport.js
app.use(passport.initialize());

//Database setup
// mongoose.connect('mongodb://mongodb:27017/menswear');
mongoose.connect('mongodb://mensweardb:menswear1234@ds131531.mlab.com:31531/menswear')
mongoose.Promise = global.Promise;
mongoose.connection.on('error', () => {
    console.log("Database Error");
});

app.get('/api', (req, res) => {
    res.json({ message: "Menswear api" });
})
app.use(routes);

app.listen(3000, () => console.log('Server run'));