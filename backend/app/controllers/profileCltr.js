const Profile = require("../models/profile")

const profileCltr = {}

profileCltr.list = (req , res) => {
    Profile.findOne({userId : req.user._id})
        .then((response)=>{
            //console.log("profile" ,response)
            res.json((response))
        })
        .catch((err)=>{
            res.json(err.message)
            console.log(err.message)
        })
}

profileCltr.delete = (req , res) => {
    const id = req.params.id
    Profile.findOneAndDelete({_id: id , userId: req.user._id})
        .then((response)=>{
            res.json(response)
        })
        .catch((err)=>{
            res.json(err.message)
        })
}

profileCltr.update = (req , res) => {
    const id = req.params.id
    const body = req.body
    Profile.findOneAndUpdate({_id:id , userId: req.user._id} , body ,{new:true , runValidators: true})
        .then((profile)=>{
            res.json(profile)
        })
        .catch((err)=>{
            res.json(err.message)
        })
}

profileCltr.profile = (req , res) => {
    if(req.file){
        const id = req.params.id
        const body = req.body
        body.avatar = req.file.path
        Profile.findOneAndUpdate({_id:id, userId: req.user._id}, {$set: body}, {new:true , runValidators: true})
            .then((profile)=>{
                res.json(profile)
            })
            .catch((err)=>{
                res.json(err.message)
            })
    } else {
        res.json({
            errors: "only jpg and png files supporter"
        })
    }
}

module.exports = profileCltr
