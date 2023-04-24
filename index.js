require("dotenv").config({ path: ".env" })
const cookieParser = require("cookie-parser")
const mongoose = require("mongoose")
const express = require("express")
const { connectDB } = require("./config/db")
const cors = require("cors")
connectDB()
const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(express.static("public"))
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))
app.use("/api/users", require("./routes/userRouters"))
app.use("/api/employee", require("./routes/employeeRoutes"))
app.use("/api/appointment", require("./routes/appointmentRoute"))
mongoose.connection.once("open", () => {
    console.log("DB CONNECTED")
    app.listen(process.env.PORT || 5000, (err) => {
        if (err) {
            return console.log("UNABLE TO START SERVER", err)
        }
        console.log(`Server Running http://localhost:${process.env.PORT || 5000}`)
    })
})
mongoose.connection.on("error", err => {
    console.log("DB CONNECTION ERROR", err)
})

