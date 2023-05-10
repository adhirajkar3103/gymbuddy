const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()
const app = express()

app.use(express.json());
app.use(cors());

app.use('/workout',require('./routes/workout'))
app.use('/user',require('./routes/user'))

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(`Server running on port ${process.env.PORT}`)
    })
}).catch((err)=>{
    console.log(err)
})

