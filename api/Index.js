const express = require("express")
const app = express()
const PORT = 4002;
const mongoose = require('mongoose');
const Route = require("./Routes//userRoute")
const cors = require("cors")

mongoose.connect('mongodb://127.0.0.1:27017/Form-1')
.then(()=>{
    console.log("db is connected");
})
.catch((err)=>{
    console.log(err);
})
app.use(cors())
app.use(express.json())
app.use("/api",Route)



app.listen(PORT,()=>{
    console.log(`port is running on ${PORT}`);
})
