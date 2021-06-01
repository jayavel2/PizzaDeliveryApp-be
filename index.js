// const express=require("express")
// const cors=require("cors")
// const dotenv=require("dotenv")
// const mongoose=require("mongoose")



// //importing database connection and db models
// // const db=require("./db")
// const DB_URL='mongodb+srv://sumathidbUser:karthi1620@cluster0.92l7q.mongodb.net/pizzadelivery?retryWrites=true&w=majority'
// mongoose.connect(DB_URL,{useUnifiedTopology:true,useNewUrlParser:true})
// const db=mongoose.connection
// db.on('connected',()=>{
//     console.log("database connected")
// })
// db.on('error',()=>{
//     console.log(" DB connection Failed")
// })
// const pizzaModel=require("./Models/pizzaModel")



// //using middleware
// const app=express();
// app.use(express.json());
// app.use(cors())
// app.use(express.urlencoded({ extended: true }));
// dotenv.config()
// const port=process.env.port||3100

// //importing routes
// const pizzaRoute=require("./Routes/pizzaRoute")


// //initializa route
// app.use("/api/pizza",pizzaRoute)



// // app.use('/', async(req,res)=>{
// //     try{
// //     const pizza=await pizzaModel.find({})
    
// //     res.send(pizza)
// //     }
// //     catch(error){
// //         console.log(error)

// //     }
// // })



// // API REQUEST




// // router.get("/getallpizza",async (req,res)=>{   
// // try{
// //     // DATABASE CONNECTION
// //     await mongoose.connect(DB_URL,{useUnifiedTopology:true,useNewUrlParser:true})
// //     const db=mongoose.connection
// //     const result=await db
// //     .collection("pizzadata").find({}).toArray();
// //     res.status(200).json({message:"message has been successfully fetched ",result})
// //     db.close()
// // }catch(error){
// //     console.log(error)
// //     res.sendStatus(500)
// // }
    
// // })


// app.listen(port,()=>console.log(":::server started:::"))