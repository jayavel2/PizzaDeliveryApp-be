
const mongoose=require("mongoose")

const DB_URL='mongodb+srv://sumathidbUser:karthi1620@cluster0.92l7q.mongodb.net/pizzadeliveryapp?retryWrites=true&w=majority'
mongoose.connect(DB_URL,{useUnifiedTopology:true,useNewUrlParser:true})
const db=mongoose.connection
db.on('connected',()=>{
    console.log("database connected")
})
db.on('error',()=>{
    console.log(" DB connection Failed")
})
module.exports=mongoose;