const express=require("express")
const mongoose=require("mongoose")
const Razorpay=require("razorpay")
const PaymentDetail = require("../Models/paymentModel")
const crypto=require('crypto')

const router=express.Router()
router.use(express.json())

const razorInstance=new Razorpay({
    key_id:"rzp_test_esmbUgto4eaZKN",
    key_secret:"oEOmANfxPkpxcmgrrpYbADdt"
})

router.post("/orders",async(req,res)=>{
const options=req.body

    await razorInstance.orders.create(options)
    .then(async(response)=>{
        const paymentdetail=new PaymentDetail({
            orderId:response.id,
            receiptId:response.receiptId,
            amount:response.amount,
            currency:response.currency,
            createdAt:response.created_at,
            status:response.status
        })
        try{
            await paymentdetail.save()
            console.log(paymentdetail)
            res.send(paymentdetail)
        }catch(err)
        {
            res.send(err)
        }
    }).catch((err)=>{
        res.send(err)
    })

  
})
router.post('/verify', async(req,res)=>{
    try{
   const params=req.body.razorpay_order_id+"|"+req.body.razorpay_payment_id
    const expectedSignature=crypto.createHmac('sha256',key_secret.update(params.toString()).digest('hex'))
    if(expectedSignature===req.body.razorpay_signature)
    {
        const doc=await PaymentDetail.findOneAndUpdate(
            {orderId:req.body.razorpay_order_id},
            {paymentId:req.body.razor_payment_id,
            signature:req.body.razorpay_signature,
        status:"paid"},
        {new:true}
        )
        res.send(doc)
    }
    else{
        res.send('payment Failed')
    }
}catch(err){
    res.send(err)
}
})


        


module.exports=router