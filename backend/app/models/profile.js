const mongoose = require("mongoose")
const Schema = mongoose.Schema

const profileSchema = new Schema ({
    name:{
        type : String
    },
    age : {
        type : String
    },
    occupation : {
        type : String
    },
    bio : {
        type : String
    },
    avatar : {
        type : String
    },
    userId : {
        type : Schema.Types.ObjectId ,
        required : true
    }
})

const Profile = mongoose.model("Profile" , profileSchema)

module.exports = Profile