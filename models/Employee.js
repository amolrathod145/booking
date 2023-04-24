const mongoose = require("mongoose")

const employeeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    catogary: {
        type: String,
        default: true
    },
    avtar: {
        type: String,
    },
    education: [{
        name: {
            type: String,

        },
        year: {
            type: Date
        },
        college: {
            type: String
        }

    }],
    email: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: ["male", "female", "other "],
        required: true
    },
    mobile: {
        type: String,
    },
    address: {
        type: String,
    },
    role: {
        type: String,
    },
    active: {
        type: String,

        default: true
    },

}, { timestamps: true })


module.exports = mongoose.model("employee ", employeeSchema)