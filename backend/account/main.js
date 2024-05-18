const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const cors = require("cors");
const User = require("./schema.js");

dotenv.config();

mongoose.connect(process.env.MONGO_URI, {
    dbName : process.env.DB_NAME
});

const db = mongoose.connection;

db.once("connected", ()=>{
    console.log("Database connected successfully!");
});

db.on("error" , ()=>{
    console.log("Error connecting to database!");
});

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

app.use(cors());

app.listen(port , ()=>{
    console.log("Server started on port: " + port);
});