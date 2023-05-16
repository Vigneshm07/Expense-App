require ('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const port = 3090
const configureDB = require('./config/database')
const router = require('./config/routers')
app.use("/uploads" , express.static("uploads"))
app.use(express.json())
app.use(cors())

configureDB()
app.use(router)

app.listen(port , ()=> {
    console.log('server running on port' , port)
})