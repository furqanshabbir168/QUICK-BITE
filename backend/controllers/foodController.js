import foodModel from "../models/foodModel.js";
import fs from 'fs';

// add Food
async function addFood(request,response) {
    
    const image_filename = `${request.file.filename}`;

    const food = new foodModel({
        name:request.body.name,
        description:request.body.description,
        price:request.body.price,
        category:request.body.category,
        image:image_filename
    })
    try{
        
            await food.save();
        response.json({message:"Food added"});
        }
        
    catch(error){
        console.log(error)
        response.json({message:"Error"})
    }
}

// list Food
async function listFood(request,response) {

    try{
        const food = await foodModel.find();
    response.json({message:'Food listed',data:food})
    }
    catch(error){
        console.log(error)
        response.status(500).json({
            success:false,
            message:"Something went wrong. Please try again later."
        });

    }
}

// food deleted
async function removeFood(request,response) {
    try{
        const {id} = request.body;
        const food = await foodModel.findById(id);
        
        if(food){
                await foodModel.findByIdAndDelete(id);
                fs.unlink(`uploads/${food.image}`,()=>{})
                return response.json({message:"Food Removed"});
            }
    }
    catch(error){
        console.log(error)
        response.json({error})
    }
}
export {addFood,listFood,removeFood}