const {User}=require("../models/index");


const getAllUsers= async(req,res,next)=>{
    const users=await User.findAll();
    res.json(users)
}

module.exports= getAllUsers