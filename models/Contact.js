const mongoose= require('mongoose')
const schema= mongoose.Schema

const ContactSchema = new schema({
    fullName:{type:String},
    email:{type:String},
    phone:{type:Number}
})

module.exports= Contact = mongoose.model('contact',ContactSchema)