router.post("/payment/orders", async (req,res)=>{
    //  const subtotal=req.body.subtotal;
    // const params=req.body
        // try{
            const options= {
                amount:req.body.amount * 100,
                // customerName:req.body.name,
                // customerEmail:req.body.email,
                // customerPhone:req.body.contact,
                currency:"INR",
                receipt:"receipt#",
                payment_capture:0
            }
           try{
    
               const payment=await razorInstance.orders.create(options)
               res.json({
    
                   const paymentdetail= new PaymentDetail({
                       orderId:result.id,
                       receiptId:result.receipt,
                       // customerName:customer.customerName,
                       // customerEmail:customer.customerEmail,
                       // customerPhone:customer.customerPhone,
           
                       amount:result.amount,
                       currency:result.currency,
                       createdAt:result.created_at,
                       status:result.status
           
                   })
                   await paymentdetail.save()
               })
               
           }
            // const customer=await razorInstance.customers.create(params)
                
               
            // //    console.log(payment)
                res.send({paymentdetail,"status":"success"})
            catch((err)=>{
                res.send({"sub":err,"status":"failed"})
            })
        })
    
            // .then(async (res)=>{
            //     const paymentdetail= new PaymentDetail({
            //         orderId:res.id,
            //         receiptId:res.receipt,
            //         amount:res.amount,
            //         currency:res.currency,
            //         createdAt:res.created_at,
            //         status:res.status
    
            //     })
            //     try{
            //         await paymentdetail.save()
            //         res.send(paymentdetail)
            //     }catch(err){
            //             res.status(500).json({message:"Something error!s"})
                    
            //     }
            // }).catch((err)=>{
            //         if(err) throw err
            //     })
                