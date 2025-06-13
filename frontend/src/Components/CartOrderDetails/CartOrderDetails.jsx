import React, { useContext, useState } from "react";
import './CartOrderDetails.css'
import { StoreContext } from "../../Context/StoreContext";
import { useNavigate } from "react-router-dom";

function CartOrderDetails () {

    const {allFoodData , cartItem , cartTotalAmount} = useContext(StoreContext);

    const [promoCode , setPromoCode] = useState("");
    const [message , setMessage]= useState("");

    function handlePromoCodeSubmit(){
        if(!promoCode){
            setMessage("* Please enter a promo code.");
        } else {
            setMessage("* Invalid promo code. Please try again.");
        }
    }

    const navigate = useNavigate();

    return(
        <div className="cart-order-details">
            <div className="cart-order-details-left">
                <h1>Cart Total</h1>
                <div className="total">
                <p>Sub Total</p>
                <p>{cartTotalAmount()} PKR</p>
                </div>
                <hr />
                <div className="total">
                <p>Delivery Fee</p>
                <p>99 PKR</p>
                </div>
                <hr />
                <div className="total">
                <h3>Total</h3>
                <p>{cartTotalAmount()+99} PKR</p>
                </div>
                <button onClick={()=>navigate('/placeorder')}>Proceed To Checkout</button>
            </div>
            <div className="cart-order-details-right">
                <p>Have a promo code . Enter here</p>
                <div className="promo-code-container">
                    <input type="number" placeholder="promo code" value={promoCode} onChange={(e)=>setPromoCode(e.target.value)}/>
                    <button onClick={handlePromoCodeSubmit} className="submit">Submit</button>
                    <p className="error-message">{message}</p>
                </div>
            </div>
        </div>
    );
}
export default CartOrderDetails