const express = require('express')
const app = express()
const connectDB= require('./config/connectDB')

// Run Server 
const port= process.env.PORT || 5000

app.listen(port, err => {
    err ? console.log(err) : 
          console.log(`Server is running at localhost:${port}`)
})

//Connect MongoDB

connectDB()

// Use Express middleware

app.use(express.json())

// Routes

app.use("/contacts",require("./routes/contact"))

