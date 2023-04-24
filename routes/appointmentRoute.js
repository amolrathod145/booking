const { GetAppointment, GetAppointments, bookAppointment, destroyAppointment } = require("../controllers/appointmentController")
const { authProtected } = require("../middlewares/auth")

const router = require("express").Router()

router
    .get("/", GetAppointments)
    .get("/:aid", GetAppointment)
    .post("/book", authProtected, bookAppointment)
    .delete("/destroy", destroyAppointment)


module.exports = router