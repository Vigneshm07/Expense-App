const mongoose = require('mongoose')
const isEmail = require('validator/lib/isEmail')
const Schema = mongoose.Schema
const userSchema = new Schema({
    username : {
        type : String,
        required : true,
        minlength : 6 ,
        maxlength : 64,
        unique : true
    } ,
    email : {
        type : String,
        required : true,
        validator : {
            validator : function(value){
                return isEmail(value)
            },
            message : function(){
                return 'invalid email format'
            }
        }
    } , 
    password : {
        type : String,
        required : String,
        minlength : 8 ,
        maxlength : 128,
    }
}, {
    timestamps : true
})

const User = mongoose.model('User' , userSchema)

module.exports = User