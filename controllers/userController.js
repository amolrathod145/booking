const asyncHandler = require("express-async-handler")
const bcrypt = require("bcrypt")
const User = require("../models/User")
const jwt = require("jsonwebtoken")
exports.register = asyncHandler(async (req, res) => {
    // validation
    const { password, email } = req.body
    const found = await User.findOne({ email })
    if (found) {
        return res.status(404).json({
            message: "Email Already Exist"
        })
    }

    const hashPass = bcrypt.hashSync(password, 10)

    const result = await User.create({ ...req.body, password: hashPass })
    res.json({
        message: "User Register Success",
        result
    })
})
exports.login = asyncHandler(async (req, res) => {
    const { email, password } = req.body

    const found = await User.findOne({ email })
    if (!found) {
        return res.status(400).json({ message: "Email Not Found" })
    }
    const verify = bcrypt.compareSync(password, found.password)
    if (!verify) {
        return res.status(400).json({
            message: "invalid Email Or Password"
        })
    }
    const token = jwt.sign({ id: found._id, role: found.role }, process.env.JWT_KEY)
    // res.cookie("token", token, {})
    res.cookie("token", token)
    res.json({
        message: "User login Success",
        result: found
    })
})
exports.continueWithGoogle = asyncHandler((req, res) => {
    res.json({
        message: "Continue with google Success"
    })
})
exports.handleAccount = asyncHandler(async (req, res) => {
    const { id } = req.params
    const result = await User.findByIdAndUpdate(id, { active: req.body.active }, { new: true })
    res.json({
        message: "account block/unblock success",
        result
    })
})
exports.readUsers = asyncHandler(async (req, res) => {
    const result = await User.find()
    res.json({
        message: "all user Fetch Success",
        result
    })
})
exports.readUser = asyncHandler(async (req, res) => {
    const { id } = req.params
    const result = await User.findById(id)
    if (!result) {
        return res.status(400).json({
            message: "invalid Id"
        })
    }
    res.json({
        message: "single user Fetch Success",
        result
    })
})
exports.updateUser = asyncHandler(async (req, res) => {
    const { id } = req.params
    const result = await User.findByIdAndUpdate(id, req.body, { new: true })
    if (!result) {
        return res.status(400).json({
            message: "invalid Id"
        })
    }

    res.json({
        message: " user upodate Success",
        result
    })
})
exports.deleteUser = asyncHandler(async (req, res) => {
    const { id } = req.params
    const result = await User.findByIdAndDelete(id)
    if (!result) {
        return res.status(400).json({
            message: "invalid Id"
        })
    }

    res.json({
        message: " user delete Success",

    })
})
exports.destroyUsers = asyncHandler(async (req, res) => {
    const result = await User.deleteMany()
    res.json({
        message: " user destroyUser Success",
        result
    })
})