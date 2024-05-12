const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    fullName : {
        type : String,
        required : true
    },
    email : String,
    password : String
});

const User = mongoose.model("User", userSchema);

module.exports = User;