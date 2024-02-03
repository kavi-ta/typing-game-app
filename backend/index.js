const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()

mongoose.connect(`${process.env.DATABASE}`).then(()=> {
    console.log("DB Connected!")
})

const port = process.env.PORT || 8000
app.listen(port,()=>{
    console.log(`Listening at port ${port}`)
})