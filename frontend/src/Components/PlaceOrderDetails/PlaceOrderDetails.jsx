import React, { useContext, useState } from "react";
import './PlaceOrderDetails.css'
import { StoreContext } from "../../Context/StoreContext";
import axios from "axios";
import {toast} from "react-toastify";

function PlaceOrderDetails () {

    const [loading, setLoading] = useState(false);




    const {cartTotalAmount,cartItem,url,token,allFoodData} = useContext(StoreContext);

    const [ data , setData ] = useState({
        firstName:'',
        lastName:'',
        email:'',
        street:'',
        city:'',
        state:'',
        zipCode:'',
        country:'',
        phone:''
    })

    function onChangeHandle(event){
        const name = event.target.name;
        const value = event.target.value;
        setData(data=>({...data,[name]:value}))
    }

    async function onSubmitHandle(event) {
    event.preventDefault();

    // Check if cart is empty first (no quantity > 0)
    const hasItems = Object.values(cartItem).some(quantity => quantity > 0);

    if (!hasItems) {
        toast.error("Your Cart is empty");
        return; // stop execution here
    }

    // Inside onSubmitHandle
setLoading(true);
// try-catch block remains

    // Now build orderItem array
      let orderItem = [];
        allFoodData.map((item)=>{
            if(cartItem[item._id]>0){
                let itemInfo = item;
                itemInfo['quantity'] = cartItem[item._id];
                orderItem.push(itemInfo);


            }
    
        })

         let orderData = {
        address: data,
        items: orderItem,
        amount: cartTotalAmount() + 99,
    };

    try {
        let response = await axios.post(`${url}/api/order/place`, orderData, { headers: { token } });
        if (response && response.data.session_url) {
            const session_url = response.data.session_url;
            window.location.replace(session_url);
        } else {
            alert("Payment redirect failed");
        }
    } catch (error) {
        toast.error("Failed to place order");
        console.error(error);
    }

    

    }
    return(
        <form onSubmit={onSubmitHandle}>
            <div className="place-order-details">
           <div className="place-order-details-left">
            <h1>Delivery Information</h1>
            <div className="names-input">
                <input type="text"  placeholder="First Name" name="firstName" value={data.firstName} onChange={onChangeHandle} required/>
                <input type="text" placeholder="Last Name" name="lastName" value={data.lastName} onChange={onChangeHandle} required/>
            </div>
            <input type="email" placeholder="Email" name="email" value={data.email} onChange={onChangeHandle} required/>
            <input type="text" placeholder="Street" name="street" value={data.street} onChange={onChangeHandle} required/>
            <div className="city-state-input">
                <input type="text" placeholder="City" name="city" value={data.city} onChange={onChangeHandle} required/>
                <input type="text" placeholder="State" name="state" value={data.state} onChange={onChangeHandle} required/>
            </div>
            <div className="zip-country-input">
                <input type="number" placeholder="Zip Code" name="zipCode" value={data.zipCode} onChange={onChangeHandle} required/>
                <input type="text" placeholder="Country" name="country" value={data.country} onChange={onChangeHandle} required/>
            </div>
            <input type="number" placeholder="Phone no." name="phone" value={data.phone} onChange={onChangeHandle} required/>
           </div>
           <div className="place-order-details-right">
            <h1>Cart Total</h1>
            <div className="subtotal">
                <p>Sub Total</p>
                <p>{cartTotalAmount()} PKR</p>
            </div>
            <hr />
            <div className="delivery-fee">
                <p>Delivery Fee</p>
                <p>99 PKR</p>
            </div>
            <hr />
            <div className="total">
                <h3>Total</h3>
                <p>{cartTotalAmount()+99} PKR</p>
            </div>
            <button type="submit" disabled={loading}>
  {loading ? "Redirecting..." : "Proceed To Payment"}
</button>

            <p></p>
           </div>
        </div>
        </form>
    );
}
export default PlaceOrderDetails