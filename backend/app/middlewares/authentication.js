const jwt = require('jsonwebtoken')
const User = require('../models/user')

const authenticateUser = (req , res, next) => {
    const token = req.headers['authorization'].split(' ')[1]
    let tokenData
    try {
        tokenData = jwt.verify(token, process.env["JWT_TOKEN"])
        User.findById(tokenData._id)
            .then((user)=>{
                req.user = user
                next()
            })
            .catch((err)=>{
                res.json(err.message)
            })
    } catch(e){
        res.json(e.message)
    }
}

module.exports = {
    authenticateUser
}