import userModel from "../models/userModel.js";

// add to cart
async function addToCart(request,response) {
    try{
        let userData = await userModel.findOne({_id:request.body.userId});
    let cartData = await userData.cartData;
    if(!cartData[request.body.itemId]){
        cartData[request.body.itemId] = 1;
    } else{
        cartData[request.body.itemId] += 1;
    }
    await userModel.findByIdAndUpdate(request.body.userId,{cartData});
    return response.json({
        success: true,
        message: "Added to cart"
    })
    } catch(error){
        console.log(error);
    }
}

// remove from cart
async function removeFromCart(request,response) {
    try{
        let userData = await userModel.findById(request.body.userId);
    let cartData = await userData.cartData;
    if(cartData[request.body.itemId]>0){
        cartData[request.body.itemId] -= 1;
    }
    await userModel.findByIdAndUpdate(request.body.userId,{cartData})
    return response.json({
        success: true,
        message: "Removed from cart"
    })
    } catch(error){
        console.log(error);
    }
}

// get cart data
async function getCart(request,response) {
    let userData = await userModel.findById(request.body.userId);
    let cartData = await userData.cartData;
    return response.json({
        success: true,
        cartData
    })

}

export {addToCart,removeFromCart,getCart};