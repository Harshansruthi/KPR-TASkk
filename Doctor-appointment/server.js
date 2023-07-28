const express = require('express')
const colors = require('colors')
const morgan = require('morgan')
const dotenv = require('dotenv')
const connectDB = require('./config/db')

//doteenv con
 dotenv.config();

 //mongodb connection
connectDB();

//rest object
const app = express()
//middleware
app.use(express.json())
app.use(morgan('dev'))

//routes
app.use("/api/v1/user" , require("./routes/userroutes"))
//port
const port = process.env.PORT  || 8000
//lis port
app.listen(port,()=>{
   console.log (`server running on ${process.env.NODE_MODE} Mode on port ${process.env.PORT}` 
    .bgCyan.white
   );
})

