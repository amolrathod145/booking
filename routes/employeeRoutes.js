const { registerEmployee, getEmployee, getEmployees, destroyEmployee, getDoctors } = require("../controllers/employeewController")

const router = require("express").Router()

router
    .get("/", getEmployees)
    .get("/doctors", getDoctors)
    .get("/:eid", getEmployee)
    .post("/register", registerEmployee)
    .delete("/destroy", destroyEmployee)


module.exports = router