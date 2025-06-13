import React from "react";
import './MyOrders.css';
import OrderDetails from "../../Components/OrderDetails/OrderDetails";

function MyOrders(){
    return(
        <div className="myorder">
            <OrderDetails/>
        </div>
    );
}
export default MyOrders;