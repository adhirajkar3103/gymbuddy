const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcrypt')

const Schema = mongoose.Schema

const userSchema = new Schema({
    email:{
        type:String,
        required:true,
        unique:'true'
    },
    password:{
        type:String,
        required:true
    }
})

userSchema.statics.signup = async function(email,password){
    if(!email || !password){
        throw Error('Field empty')
    }
    if(!validator.isEmail(email)){
        throw Error('Not a valid email id')
    }
    const exists = await this.findOne({email})
    if(exists){
        throw Error('User already exist')
    }
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password,salt)
    const user = await this.create({email,password:hash}) 
    return user
}

userSchema.statics.login = async function(email,password){
    if(!email || !password){
        throw Error('Field empty')
    }
    const user = await this.findOne({email})
    if(!user){
        throw Error('Password or Email incorrect')
    }
    const match = await bcrypt.compare(password,user.password)
    if(!match){
        throw Error('Password or Email incorrect')
    }
    return user
}

module.exports = mongoose.model('User',userSchema);