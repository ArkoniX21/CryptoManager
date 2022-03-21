const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userScheme = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
}, { versionKey: false });

const User = mongoose.model("User", userScheme);
module.exports = User;