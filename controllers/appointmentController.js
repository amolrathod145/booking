const asyncHandler = require("express-async-handler")
const Appointmet = require("../models/Appointmet")
exports.bookAppointment = asyncHandler(async (req, res) => {
    const result = await Appointmet.create({ ...req.body, bookingDate: new Date(`${req.body.date} ${req.body.time}`) })

    res.json({ message: "Booking Success", result })
})
exports.GetAppointments = asyncHandler(async (req, res) => {
    const result = await Appointmet.find()

    res.json({ message: "Fetch Booking Success", result })
})
exports.GetAppointment = asyncHandler(async (req, res) => {
    const result = await Appointmet.findOne({ _id: req.params.aid })
    res.json({ message: "Booking Details Success", result })
})
exports.destroyAppointment = asyncHandler(async (req, res) => {
    const result = await Appointmet.deleteMany()

    res.json({ message: "Booking Destroy Success", result })
})