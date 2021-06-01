const mongoose=require('mongoose')
const bcrypt=require('bcrypt')


const userSchema=mongoose.Schema({
    name:{type:String,require},
    email:{type:String,require,unique:true},
    password:{type:String,require},
    isAdmin:{type:Boolean,require,default:false}
})

userSchema.pre("save",async function(next){
    try{
        const salt=await bcrypt.genSalt(10)
        const hashedpassword=await bcrypt.hash(this.password,salt)
        this.password=hashedpassword
        next()
        console.log(this.email,this.password)
    }catch(err)
    {
        console.log(err)
    }
})


const User=mongoose.model('User',userSchema)

module.exports=User