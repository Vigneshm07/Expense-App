const Budget = require("../models/budget")
const Categories = require("../models/categories")
const Expense = require("../models/expense")
const Profile = require("../models/profile")
const User = require("../models/user")

const deleteCltr = {}

deleteCltr.account = (req , res) => {
    // console.log( "req" ,req ) 
    // console.log(req.url)
    const id = req.params.id
    User.findOneAndDelete({_id: req.user._id})
        .then((user)=>{
            console.log("res" , user)
            res.json(user)
        })
        .catch((err)=>{
            res.json(err.message)
        })
}

deleteCltr.expense = (req , res) => {
    Expense.deleteMany({userId : req.user._id})
        .then((expense)=>{
            res.json(expense)
        })
        .catch((err)=>{
            res.json(err.message)
        })
}

deleteCltr.category = (req , res) => {
    Categories.deleteMany({userId : req.user._id})
        .then((category)=>{
            res.json(category)
        })
        .catch((err)=>{
            res.json(err.message)
        })
}

deleteCltr.profile = (req , res) => {
    Profile.findOneAndDelete({userId : req.user._id})
        .then((profile)=>{
            res.json(profile)
        })
        .catch((err)=>{
            res.json(err.message)
        })
}

deleteCltr.budget = (req , res) => {
    Budget.findOneAndDelete({userId : req.user._id})
        .then((budget)=>{
            console.log(budget)
            res.json(budget)
        })
        .catch((err)=>{
            res.json(err.message)
        })
}

module.exports = deleteCltr