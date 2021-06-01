const mongoose=require("mongoose")

const paymentmodelSchema=new mongoose.Schema({
    orderId:{type:String,require},
    receiptId:{type:String},
    // customerName:{type:String},
    // customerEmail:{type:String},
    // customerPhone:{type:Number},
    paymentId:{type:String},
    signature:{type:String},
    amount:{type:Number},
    currency:{type:String},
    createdAt:{type:Date},
    status:{type:String}
})

const PaymentDetail=mongoose.model('PaymentDetail',paymentmodelSchema)

module.exports=PaymentDetail