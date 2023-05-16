const Categories = require('../models/categories')
const Expense = require('../models/expense')

const categoriesCltr = {}

categoriesCltr.create = (req , res) => {
    const body = req.body
    const category = new Categories(body)
    category.userId = req.user._id
    category.save()
        .then((category)=>{
            res.json(category)
        })
        .catch((err)=>{
            res.json(err.message)
        })
}

categoriesCltr.list = (req , res) =>{
    Categories.find({userId:req.user._id})
        .then((category)=>{
            res.json(category)
        })
        .catch((err)=>{
            res.json(err.message)
        })
}

categoriesCltr.delete = (req , res) => {
    const id = req.params.id
    Categories.findOneAndDelete({_id:id , userId : req.user._id})
        .then((category)=>{
            Expense.deleteMany({categoryId: category._id})
                .then((res)=>{
                    res.json(category)
                })
                .catch((err)=>{
                    res.json(err)
                })

        })
        .catch((err)=>{
            res.json(err)
        })
}

module.exports = categoriesCltr