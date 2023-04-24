const { readUser, readUsers, register, continueWithGoogle, handleAccount, updateUser, destroyUsers, deleteUser, login } = require("../controllers/userController")

const router = require("express").Router()

router
    .get("/", readUsers)
    .get("/:id", readUser)

    .post("/register", register)
    .post("/login", login)
    .post("/continue-with-google", continueWithGoogle)

    .put("/account/:id", handleAccount)
    .put("/update/:id", updateUser)

    .delete("/distroy", destroyUsers)
    .delete("/:id", deleteUser)

module.exports = router