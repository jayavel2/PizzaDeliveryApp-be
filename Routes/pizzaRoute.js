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


// router.get('/pizza' , async (req,res)=>{   
//     try{
//         const pizza=await  pizzaModel.find({}).toArray()
//         res.status(200).json(pizza)
//     }catch(error){
        
//         res.send(error)
//     }
        
//  })

//  router.post('/addpizza',async (req,res)=>{
//     try{
//     const data= new PizzaModel({
//         name:'chefs special',
//         varients:["small","medium","large"],
//         category:'veg',
//         description:'chef spl made up with veggie and it for pizza lovers',
//         image:"https://www.crazymasalafood.com/wp-content/images/double-1.jpg"
//     })

    
//         const results=await data.save()
//         console.log(results)
//         // res.json(results)
//     //  console.log(req.body)
//     // const pizza=req.body.pizza 
//     // try{
//     //      const newpizza= new pizzaModel(
//     //          {
                 
//     //              varients:['small','medium','large'],
//     //              prices:[pizza.prices],
//     //              name:pizza.name,
//     //              category:pizza.category,
//     //              image:pizza.image,
//     //              description:pizza.description
     
//     //          }
//     //          )
             
           
//     //         await newpizza.save()
            
//     //          res.json({message:"successfully added"})
//     //         //  console.log(result)

//      }
//      catch(error){
//          console.log(error)
//      }
//  })

// //  router.post('/editpizza',async(req,res)=>{
// //      const editpizza=req.body.editpizza
// //      try{
// //          const pizza=await pizzaModel.findOne({_id: editpizza._id})
// //          pizza.name=editpizza.name,
// //          pizza.category=editpizza.category,
// //          pizza.image=editpizza.image,
// //          pizza.description=editpizza.description,
// //          pizza.prices=[editpizza.prices]

// //          await pizza.save()
// //          res.send('pizza details edited successfully')


// //      }catch(error){
// //          return res.status(400).json({message:error})

// //      }
// //  })

// // router.delete('/deletepizza',async(req,res)=>{
// //     try{
// //         const deletepizza=await pizzaModel.findOneAndDelete({name:req.body.name})
// //         res.status(200).json({message:"pizza deleted successfully",deletepizza})

// //     }catch(error){
// //         res.status(500).send(error)

// //     }

// })
module.exports= router;    


