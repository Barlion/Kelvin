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

// function auth(req , res , next){
//     const token = req.cookies.jwt;
//     if(!token){
//         res.status(401).json({message : "Unauthorized!"});
//         return;
//     }
//     jwt.verify(token , process.env.JWT_SECRET , async (err , email)=>{
//         if(err){
//             res.status(401).json({message : "Unauthorized!"});
//             return;
//         }
//         let user = await User.findOne({email});
//         req.user = user;
//         next();
//     });
// }

app.use(express.json());

app.use(cors());

app.get("/" , (req , res)=>{
    //res.redirect("frontend");
});

app.post("/register" , async (req , res)=>{
    const {fullName , email , password} = req.body;

    const user = await User.findOne({email});
    if(user){
        res.status(400).json({message : "User already exists!"});
        return;
    }
    let newUser = new User({
        fullName,
        email,
        password
    });
    newUser.password = await bcrypt.hash(password , 10);
    await newUser.save();
    let token = jwt.sign({email} , process.env.JWT_SECRET);
    //send cookie
    res.cookie("jwt" , token , {
        httpOnly : true,
        secure : true,
        maxAge : 24*60*60*1000
    });
    res.sendStatus(201);
});

app.post("/login" , async (req , res)=>{
    const {email , password} = req.body;
    const user = await User.findOne({email});
    if(!user){
        res.status(400).json({message : "User does not exist!"});
        return;
    }
    if(!await bcrypt.compare(password , user.password)){
        res.status(400).json({message : "Invalid credentials!"});
        return;
    }
    let token = jwt.sign({email} , process.env.JWT_SECRET);
    //send cookie
    res.cookie("jwt" , token , {
        httpOnly : true,
        secure : true,
        maxAge : 24*60*60*1000
    });
    res.sendStatus(200);
});

app.get("/logout" , (req , res)=>{
    res.clearCookie("jwt");
    res.sendStatus(200);
});

app.listen(port , ()=>{
    console.log("Server started on port: " + port);
});