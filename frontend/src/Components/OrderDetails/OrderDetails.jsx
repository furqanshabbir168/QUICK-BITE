import React, { useContext, useEffect, useState } from "react";
import './OrderDetails.css';
import orderimg from '../../assets/order.png';
import axios from 'axios';
import { StoreContext } from "../../Context/StoreContext";

function OrderDetails () {

    const [ data , setData ] = useState([]);
    const { url, token } = useContext(StoreContext);

    async function loadOrders() {
        const response = await axios.post(`${url}/api/order/userorder`,{},{headers:{token}});
        if(response.data.success){
            setData(response.data.data);
        }
    }
    useEffect(()=>{
        if(token){
             loadOrders();
        }
    },[token])


    return(
        <div className="order-details">
            <div className="order-heading">
                <h1>My Orders</h1>
            </div>
            <div className="orders">
                {data.map((order) => {
                    return (
                        <div key={order._id} className="my-order">
                            <img src={orderimg} alt="" />
                            
                            <div className="order-names-column">
                                {order.items.map((item) => (
                                    <li  key={item._id}><p>{`${item.name} x ${item.quantity}`}</p></li>
                                ))}
                            </div>

                            <p>{Math.floor(order.amount)}.00 PKR</p>
                            <p>Items : {order.items.length}</p>

                            <div className="foodstatus">
                                <div className="dot"></div>
                                <p>{order.status}</p>
                            </div>

                            <button>Track Order</button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
export default OrderDetails