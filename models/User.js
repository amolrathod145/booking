const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({
    name: {
        type: String, required: true
    },
    email: {
        type: String, required: true
    },
    password: {
        type: String, required: true
    },
    mobile: {
        type: String
    },
    gender: {
        type: String,
        required: true,
        enum: ["male", "female", "other"]
    },
    blood: {
        type: String,
        enum: ["a-", "b-", "ab+", "o+", "a+", "b+", "ab-"]
    },
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user",
    },
    height: { type: String },
    weight: { type: String },
    dob: { ype: String },
    active: { type: Boolean, default: true },
    address: { type: String },
    city: { type: String },

}, { timestamps: true })

module.exports = mongoose.model("user", UserSchema)