const asyncHandler = require("express-async-handler")
const Employee = require("../models/Employee")
const bcrypt = require("bcrypt")
exports.registerEmployee = asyncHandler(async (req, res) => {
    const { email, password } = req.body
    const found = await Employee.findOne({ email })
    if (found) {
        return res.status(400).json({ message: "Email already exist" })
    }
    const hashPass = bcrypt.hashSync(password, 10)
    const result = await Employee.create({ ...req.body, password: hashPass })
    res.json({
        message: "employee register success"
    })
})
exports.getEmployees = asyncHandler(async (req, res) => {
    const result = await Employee.find()
    res.json({
        message: "employee fetch success",
        result
    })
})
exports.getEmployee = asyncHandler(async (req, res) => {
    const result = await Employee.findOne({ _id: req.params.eid })
    res.json({
        message: "employee Details success",
        result
    })
})
exports.getDoctors = asyncHandler(async (req, res) => {
    const result = await Employee.find({ roel: "doctor" }).select("name catogary")
    res.json({
        message: "Doctor Fetch success",
        result
    })
})
exports.destroyEmployee = asyncHandler(async (req, res) => {
    const result = await Employee.deleteMany()
    res.json({
        message: "employee destroy success",
        result
    })
}) 