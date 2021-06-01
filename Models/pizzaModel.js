const mongoose=require('mongoose')
const db=require("../db")




const pizzaSchema=mongoose.Schema({

    
    varients:[],
    
    // toppings:[{veg-Toppings:[{name:String,img:String}]},{Non-veg Toppings:[{name:String,img:String}]},{sauce:[{name:String,img:String}]},{cheese:[{name:String,img:String}]}]
    prices:[],
    name:{ type:String, required:true, unique:true},
    category:{type:String,required:true},
    image:{type:String,required:true},
    description:{type:String,required:true},
    base:[]
})
const Pizza=mongoose.model('Pizza',pizzaSchema)

module.exports=Pizza