const Expense = require('../models/expense')

const expenseCltr = {}

expenseCltr.create = (req , res) => {
    const body = req.body
    const expense = new Expense(body)
    expense.userId = req.user._id
    expense.save()
        .then((response)=>{
            res.json(response)
        })
        .catch((err)=>{
            res.json(err.message)
        })
}

expenseCltr.list = (req , res) =>{
    Expense.find({userId:req.user._id})
        .then((category)=>{
            res.json(category)
        })
        .catch((err)=>{
            res.json(err.message)
        })
}

expenseCltr.update = (req , res) => {
    const id = req.params.id
    const body = req.body
    Expense.findByIdAndUpdate(id , body , {new: true, runValidators: true})
        .then((result)=>{
            res.json(result)
            console.log(result)
        })
        .catch((err)=>{
            res.json(err)
        })
}

expenseCltr.delete = (req , res) => {
    const id = req.params.id
    Expense.deleteById({_id:id , userId : req.user._id})
        .then((response)=>{
            res.json(response)
        })
        .catch((err)=>{
            res.json(err)
        })
}

expenseCltr.soft =(req , res) => {
    Expense.findDeleted({userId:req.user._id})
        .then((response)=>{
            res.json(response)
        })
        .catch((err)=>{
            res.json(err.message)
        })
}

expenseCltr.softrestore = (req , res) => {
    const id = req.params.id
    Expense.restore({_id:id , userId:req.user._id})
    .then((restore)=>{
        res.json(restore)
    })
    .catch((err)=>{
        res.json(err.message)
    })
}

module.exports = expenseCltr

