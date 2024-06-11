//Root Of app

const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose');
const userRoute = require("./Routes/userRoute");


mongoose.set('strictQuery', false)

const app = express() //app is an object
require("dotenv").config()

//middleware functions
app.use(express.json()) //methos of express,recieve ans send data
app.use(cors())
app.use("/api/users", userRoute)

//CRUD
app.get("/", (req, res) => {
    res.send("Welcome to chat API")
});


//server for listneing 
const port = process.env.PORT || 5000; //for reading port from env variables
const uri = process.env.MONGODB_URI;

app.listen(port, (req, res) => { //callback fun
    console.log(`Server Running on Port..: ${port}`)
});

if (!uri) {
    throw new Error('MONGODB_URI is not defined in the environment variables');
}

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("Mongo Connection Enstablished")).catch((error) => console.log
    ("Mongo connection failed : ", error.message))
