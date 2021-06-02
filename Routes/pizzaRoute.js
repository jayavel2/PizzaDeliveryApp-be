const express=require("express")
const mongoose=require("mongoose")
const Pizza=require("../Models/pizzaModel")
const router=express.Router();


router.use((req,res,next)=>{
    console.log(req.url+"------"+ Date.now())
    
    next();
})

router.use(express.json())

router.route('/').post(async (req,res)=>{
    const pizza=new Pizza({
        varients:req.body.varients,
        prices:req.body.prices,
        name:req.body.name,
        category:req.body.category,
        image:req.body.image,
        description:req.body.description

    })
    try{
        const newpizza=await pizza.save()
        res.send(newpizza)
    } catch(err){
        console.log(err)
    }
})


router.route('/').get(async(req,res)=>{
    let filter={}
    if(req.query.category)
    {
        console.log(req.query.category)
        filter.category=req.query.category
    }
    if(req.query.name)
    {
        console.log(req.query.name)
        filter.name=req.query.name
    }
    try{
        const pizza=await Pizza.find(filter)
        res.json(pizza)
    }catch(err){
        res.send(err)
    }
})

router.route('/').patch(async(req,res)=>{
  
    let update=req.body
    let id=req.body._id

    try{
        const pizza=await Pizza.findOneAndUpdate({_id:id},update,{new:true})
        res.json(pizza)
        pizza.save()
    }catch(err){
        res.send(err)
    }
    
})

router.route('/:_id').delete(async(req,res)=>{
    try{
        const pizza=await Pizza.findByIdAndDelete({_id:req.params._id})
        res.status(200).json({message:"deleted successfully"})
        
    }catch(err)
    {
        res.send(err)
    }
})


module.exports= router;    


