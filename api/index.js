const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
const port =3000;
const cors = require("cors");

app.use(cors());

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

mongoose.connect("mongodb+srv://ritveak:ritveak@cluster0.hbrhuta.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(()=>{
    console.log("Connected to Mongo")
}).catch((error)=>{
    console.log("Error connecting to Mongo" +error);
});

app.listen(port, ()=>{
    console.log("Server is running onm port "+port);
})