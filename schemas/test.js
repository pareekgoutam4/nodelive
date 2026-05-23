const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    username : String,
    email : String,
})

const Users = new mongoose.model("users" , userSchema)

module.exports = Users