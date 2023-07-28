const useModel = require('../models/usermodels')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
//reg callback
const registerController = async (req,res)=>{
    try {
  const existingUser = await useModel.findOne({email:req.body.email})
    if(existingUser){
        return res.status(200).send({message:'User Already Exist', success:false})
    }
    const password = req.body.password
    const salt = await bcrypt.genSalt(10)
    const hashedpassword=await bcrypt.hash(password,salt)
    req.body.password = hashedpassword
    const newUser = new useModel(req.body)
    await newUser.save()
    res.status(201).send({message:"registered successfully",success:true})
}catch (error){
        console.log(error)
        res.status(500).send({success:false, message:`register conroller ${error.message}`})
    }

}
const loginController = async (req,res) =>{
    try {
        const user = await userModel.findOne({email:req.body.email})
        if(!user){
            return res.status(200).send({message:'user not found',success:false})
        }
        const isMatch = await bcrypt.compare(req.body.password,user.password)
        if(!isMatch){
        return res.status(200).send({message:'invalid email or password',success:false})     
        }
  const token = jwt.sign({id:user._id},process.env.JWT_SECRET,{  expiresIn:'1d' })
  res.status(200).send({message:'login success',success:true, token})

    }catch (error){
        console.log(error)
        res.status(500).send({message:`error in login ctrl ${error.message}`})
    }
};
const authController = async(req,res) =>{
    try {
       const user= await useModel.findOne({_id:req.body.userId})
       if(!user){
        return res.status(200).send({
            message:'user not found',
            success:false
        })
       }else{
        res.status(200).send({
           success: true,
           data:{
            name:user.name,
            email:user.email,
            
           }
        })
    
       }
    } catch (error) {
       console.log (error)
       res.ststus(500).send({
        message:'auth error',
        success:false,
        error
       })
    }
}
module.exports= {loginController,registerController,authController};