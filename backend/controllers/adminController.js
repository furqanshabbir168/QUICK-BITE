import adminModel from "../models/adminModel.js";
import jwt from 'jsonwebtoken';
import validator from 'validator';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
dotenv.config();

function createToken(id){
    return jwt.sign({id},process.env.ADMIN_SECRET_KEY);
}

// register admin 
async function registerAdmin(request,response) {
    try{

        const { secret , email , password } = request.body;
    const emailExist = await adminModel.findOne({email});
    if(emailExist){
       return response.json({
            success:false,
            message:"Email already Exist"
        })
    }
    if(!validator.isEmail(email)){
        return response.json({
            success:false,
            message:"Please enter a valid email"
        })
    }
    if(password.length<8){
        return response.json({
            success:false,
            message:"Please enter a strong password"
        })
    }
    const hashedPassword = await bcrypt.hash(password,10);
    const newAdmin = new adminModel({
        email:email,
        password:hashedPassword
    })
    // admin secret
    const adminSecret = process.env.ADMIN_SECRET_KEY;
    if(secret===adminSecret){
        const admin = await newAdmin.save();
    const token = createToken(admin._id);
    if(admin){
        return response.json({
            success:true,
            message:"Account Created",
            token:token
        })
    }
    } else if(secret!==adminSecret){
        return response.json({
            success:false,
            message:"Account can't be Created!"
        })
    }
    
    

    } catch(error){
        console.log(error);
    }
}

// login admin
async function loginAdmin(request,response) {
    try{

        const { email , password } = request.body;
    const admin = await adminModel.findOne({email});
    if(!admin){
        return response.json({
            success:false,
            message:"Account not Found"
        })
    }
    const isPasswordMatch = await bcrypt.compare(password,admin.password);
    if(!isPasswordMatch){
        return response.json({
            success:false,
            message:"Invalid Password!"
        })
    }
    const token = createToken(admin._id);
    if(isPasswordMatch){
        return response.json({
            success:true,
            message:"Welcome to admin pannel",
            token:token
        })
    }

    } catch(error){
        console.log(error);
    }
}

export { registerAdmin , loginAdmin }
