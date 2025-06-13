
import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import Stripe from "stripe";
import dotenv from 'dotenv'
dotenv.config();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

        const frontend_url = 'http://localhost:5173';

// place order

async function placeOrder(request,response) {
    try{

        const newOrder = await orderModel({
            userId : request.body.userId,
            items : request.body.items,
            amount : request.body.amount,
            address : request.body.address
        })
        await newOrder.save();
        await userModel.findByIdAndUpdate(request.body.userId,{cartData:{}})

        const line_items = request.body.items.map((item)=>({
            price_data :{
                currency:"PKR",
                product_data:{
                    name:item.name
                },
                unit_amount:Math.round(item.price*100*275),
                
            },
            quantity:item.quantity
            
        }))
              line_items.push({
            price_data:{
                currency:"PKR",
                product_data:{
                    name:"Delivery Charges"
                },
                unit_amount:Math.round(0.36*100*275),
               
            },
             quantity:1
            
              })

            const session = await stripe.checkout.sessions.create({
                line_items:line_items,
                mode:"payment",
                locale: "en",  // ✅ Add this
                success_url:`${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
                cancel_url:`${frontend_url}/verify?success=false&orderId=${newOrder._id}`
            })
         response.json({
            success:true,
            session_url:session.url
        })
    } catch(error){
        console.log(error);
    }
}

// verify payment
async function verifyPayment(request,response) {
    try{
        const {orderId , success } = request.body;
    if(success==='true'){
        await orderModel.findByIdAndUpdate(orderId,{payment:true});
        return response.json({
            success:true,
            message:"Payment made successfully"
        })
    } else if(success==='false'){
        await orderModel.findByIdAndDelete(orderId);
        return response.json({
            success:false,
            message:"Payment redirect failed"
        })
    }
    } catch(error){
        console.log(error);
    }
}

// user order
async function userOrder(request,response) {
    try{
        const orders = await orderModel.find({userId:request.body.userId});
    return response.json({
        success:true,
        data:orders
    })
    } catch(error){
        console.log(error);
    }
}

// list Orders
async function listOrder(request,response) {
    try{
        const orders = await orderModel.find({});
    return response.json({
        success:true,
        data:orders
    })
    }catch(error){
        console.log(error);
    }
}
// update order status
async function updateOrderStatus(request,response) {
    try{
        const { orderId , status } = request.body;
    await orderModel.findByIdAndUpdate(orderId,{status:request.body.status});
    return response.json({
        success:true,
        message:"Status Updated",
        status:status
    })
    } catch(error){
        console.log(error);
    }
}

export  {placeOrder,verifyPayment,userOrder,listOrder,updateOrderStatus};