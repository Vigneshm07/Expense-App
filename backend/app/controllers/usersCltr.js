const User = require('../models/user')
const Budget = require('../models/budget')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const Profile = require('../models/profile')
const usersCltr = {}

usersCltr.register = (req , res) => {
    const body = req.body
    const user = new User(body)
    bcryptjs.genSalt()
        .then((salt)=>{
            bcryptjs.hash(user.password , salt)
                .then((encrypted)=>{
                    user.password = encrypted
                    user.save()
                        .then((user)=>{
                            //console.log(user)
                            const budget = new Budget({userId : user._id})
                            //console.log(budget)
                            budget.save()
                            const profile = new Profile({userId : user._id})
                            //console.log("profile" , profile)
                            profile.save()
                            res.json(user)
                        })
                        .catch((err)=>{
                            res.json(err)
                        })
                })
        })
}

usersCltr.login = (req , res) => {
    const body = req.body
    User.findOne({email: body.email})
        .then((user)=>{
            if(!user){
                res.json({
                    errors : 'invalid email or password'
                })
            }

            bcryptjs.compare(body.password , user.password)
                .then((match)=>{
                    if(match){
                        const tokenData = {
                            _id: user._id,
                            email: user.email,
                            username: user.username
                        }
                        const token = jwt.sign(tokenData, process.env["JWT_TOKEN"] , {expiresIn: '2d'})
                        res.json({
                            token: `Bearer ${token}`
                        })
                    } else {
                        res.json({
                            errors : 'invalid email or password'
                        })
                    }
                })
        })
}

usersCltr.account = (req , res) => {
    res.json(req.user)
}

module.exports = usersCltr