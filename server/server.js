const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

// Middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//Request
// GET
app.get("/", (req, res) => {
    res.status(200).json("Hello word");
});
// POST
app.post("/", (req, res) => {
    console.log(req.body.message);
});

// SERVER listening
app.listen(process.env.PORT || 8000, (err) => {
    if(err){
        console.log(err);
    }
    console.log("Backend server is running!");
  });