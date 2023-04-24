const jwt = require("jsonwebtoken")
exports.authProtected = (req, res, next) => {
    if (!res.cookies) {
        return res.status(400).json({
            message: "No Cookie Found"
        })
    }
    const { token } = req.cookies
    if (!token) {
        return res.status(400).json({ message: " Token Missing" })
    }
    jwt.verify(token, process.env.JWT_KEY, (err, decode) => {
        if (decode) {
            return res.status(400).json({ message: " Invalid Token" })
        }
        const { id, role } = decode
        req.body.userId = id
        req.body.role = role
        next()
    })
}