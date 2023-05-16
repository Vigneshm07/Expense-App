const Budget = require('../models/budget')
const budgetCltr = {}

budgetCltr.budget = (req , res) => {
    Budget.findOne({userId : req.user._id})
        .then((budget)=>{
            res.json(budget)
            //console.log("budget" ,budget)
        })
        .catch((err)=>{
            res.json(err.message)
        })
}

budgetCltr.update = (req , res) => {
    const { id } = req.params
    const body = req.body
    Budget.findOneAndUpdate({_id : id , userId : req.user._id} ,body , {new: true, runValidators: true})
        .then((response)=>{
            res.json(response)
        })
        .catch((err)=>{
            res.json(err)
        })
}

module.exports = budgetCltr