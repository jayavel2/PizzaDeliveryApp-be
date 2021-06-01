const express=require('express')
const mongoose=require('mongoose')
const bcrypt=require('bcrypt')
const router=express.Router()
const User=require("../Models/userModel")


// router.use(express.json())
router.use((req,res,next)=>{
    console.log(req.Date)
    next()
})

router.route('/Register').post(async(req,res)=>{
     const user=new User({
         name:req.body.name,
         email:req.body.email,
         password:req.body.password,
         isAdmin:req.body.isAdmin
     })
     try{
         const newuser=await user.save()
         res.status(200).send(newuser)
     }catch(error)
     {
         res.send(error)
     }
})

router.route('/loginverify').post(async(req,res)=>{
    let {email,password}=req.body
    
    let user=await User.find({email:email})
    try{
        
    
    // console.log(user)
    if(user)
    {
    if(user[0].email==email)
    {
        let result=await bcrypt.compare(password,user[0].password)
        if(result){
            res.status(200).json({message:"Login Success"})

        }
        else{
            res.status(401).json({message:"password incorrect"})

        }
    }
}
    else{
        res.status(403).json({message:" Email incorrect "})
    }
   }

   catch(error)
   {
       res.status(500).send(error)
   }

    

})



module.exports=router