const mongoose = require('mongoose')

const configureDB = () => {
    mongoose.set('strictQuery', false)
    mongoose.connect('mongodb://127.0.0.1:27017/s2sdec')
    .then(()=>{
        console.log('Connected to db')
    })
    .catch((err)=>{
        console.log('error connecting to db' ,err)
    })
}

module.exports = configureDB