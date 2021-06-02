const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const dotenv=require("dotenv")

//middleware
const app=express()
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended:true}))

//importing router modules
const PizzaRoute=require("./Routes/pizzaRoute")
const UserRoute=require("./Routes/userRoute")
const OrderRoute=require("./Routes/orderRoute")
//importing models
const Pizza=require('./Models/pizzaModel')
const User=require('./Models/userModel')

//database connection
const DB_URL=process.env.DBURL||"mongodb://127.0.0.1:27017/pizzadeliveryapp"
mongoose.connect(DB_URL,{useUnifiedTopology:true,useNewUrlParser:true,useFindAndModify:false,useCreateIndex:true})
const db=mongoose.connection
db.on('open',()=>{
    console.log("database connected")
})



//initializing route
app.use('/api/pizza',PizzaRoute)
app.use('/api/users',UserRoute)
app.use('/api/orders',OrderRoute)




const port=process.env.port||3100
app.listen(port,()=>console.log(":::Server Started:::"))
