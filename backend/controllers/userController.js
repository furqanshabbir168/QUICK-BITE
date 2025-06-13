import userModel from "../models/userModel.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import validator from 'validator';
import dotenv from 'dotenv';
dotenv.config();


function createToken(id){
    return jwt.sign({id},process.env.USER_SECRET_KEY);
}


// register user
async function registerUser(request,response) {
    
    try{

        const {name,email,password} = request.body;
    const emailExist = await userModel.findOne({email});
    // checking if email exist or not
    if(emailExist){
        return response.json({
            success:false,
            message:"Email already exist"
        })
    }
    // checking email format
    if(!validator.isEmail(email)){
        return response.json({
            success:false,
            message:"Please enter a valid email"
        })
    }
    // checking password length
    if(password.length<8){
        return response.json({
            success:false,
            message:"Please enter a strong password"
        })
    }

    // hashing password
    const hashedPassword = await bcrypt.hash(password,10);

    const newUser = new userModel({
        name:name,
        email:email,
        password:hashedPassword
    })

    const user = await newUser.save();
    const token = createToken(user._id);
    if (user){
        return response.json({
        success:true,
        message:"Account Created",
        token:token
    })
    }
    

    } catch(error){
        console.log(error);
    }
    
}

// login user
async function loginUser(request,response) {

    try{
        const {name,email,password} = request.body;
    // checking account through email
    const user = await userModel.findOne({email});
    // if user not found
    if(!user){
        return response.json({
            success:false,
            message:"Account Not Found"
        })
    }
    // if user found
    const isPasswordMatch = await bcrypt.compare(password,user.password);
    if(name!==user.name){
        return response.json({
            success:false,
            message:"Invalid Username"
        })
    }
    
    if(!isPasswordMatch){
        return response.json({
            success:false,
            message:"Inavlid Password"
        })
    }
    const token = createToken(user._id);
    if(isPasswordMatch){
        return response.json({
            success:true,
            message:`Welcome ${user.name}`,
            token:token
        })
    }
    
    } catch(error){
        response.json({
            message:"Error"
        })
        console.log(error)
    }
    

}
export {registerUser,loginUser}
