const mongoose = require('mongoose')
const Schema = mongoose.Schema
const mongoose_delete = require('mongoose-delete')

const expenseSchema = new Schema({
    name : {
        type : String,
        required : true,
        minlength : 2 ,
        maxlength : 64,
        unique : true
    } ,
    amount : {
        type : Number,
        required : true,
        default : 0 
    } , 
    userId : {
        type : Schema.Types.ObjectId ,
        required : true
    } ,
    categoryId : {
        type : String ,
        required : true
    } ,
    date : {
        type : String ,
        required : true
    }
})

expenseSchema.plugin(mongoose_delete,{overrideMethods: true})

const Expense = mongoose.model('expense' , expenseSchema)

module.exports = Expense