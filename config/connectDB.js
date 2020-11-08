const mongoose= require('mongoose')
const config= require('config')

const connectDB=()=>{
    try {
        mongoose.connect(config.get("MONGOURI"), { useNewUrlParser: true, useUnifiedTopology: true })
        console.log('MongoDB is Connected !')
        
    } catch (error) {
        console.log('Error Connection MongoDB !')
        console.log(error)
    }
    
   
}

module.exports = connectDB