const userSchema = require("../models/userSchema")

const createUser = async(req,res)=>{
    try {
        const {name,phone,password,star,Subject} = req.body;
        const data = await userSchema.create({
            name,
            phone,
            password,
            star,
            Subject,
        })
        if(!data){
            return res.status(400).json({
                message:"fail"
            })
        }
        return res.status(201).json({
            message:"ok",
            data
        })
    } catch (error) {
        res.status(404).json({
            message:"internal eror"
        })
    }
}

const getUsers=async(req,res)=>{
    try {
        const data = await userSchema.find()
        if(!data){
            return res.status(400).json({
                message:"fail"
            })
        }
        return res.status(200).json({
            message:"ok",
            data
        })
    } catch (error) {
        res.status(404).json({
            message:"internal eror"
        })
    }
}

const getUserbyId = async(req,res)=>{
   
    try {
        const userId = req.params.id;
        const data = await userSchema.findById(userId)
        if(!data){
            return res.status(400).json({
                message:"fail"
            })
        }
        return res.status(200).json({
            message:"ok",
            data
        })
    } catch (error) {
        res.status(404).json({
            message:"internal eror"
        })
    }

}

module.exports={createUser,getUsers,getUserbyId}