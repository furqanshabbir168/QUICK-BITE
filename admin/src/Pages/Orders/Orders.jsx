import {React, useState, useEffect} from "react";
import './Orders.css';
import axios from 'axios';
import orderimg from '../../assets/order-admin.png';
import {toast} from 'react-toastify';


function Orders () {
    const [data , setData ] = useState([]);
    const url = 'http://localhost:4000';

    async function fetchOrders() {
        const response = await axios.post(`${url}/api/order/listorder`,{});
        if(response.data.success){
            setData(response.data.data);
        }
        
    }
    async function handleStatus(event,orderId) {
        const response = await axios.post(`${url}/api/order/status`,{orderId,status:event.target.value});
        if(response.data.success){
            await fetchOrders();
            toast.success("Order Status is Updated!");
            
        }
    }
    
    useEffect(()=>{
        fetchOrders();
    },[])
    return(
        <div className="order-details">
            <div className="order-heading">
                <h1>Orders</h1>
            </div>
            <div className="orders">
                {data.map((order) => {
                    return (
                        <div key={order._id} className="my-order">
                            <img src={orderimg} alt="" />
                            
                            <div className="order-names-column">
                                {order.items.map((item) => (
                                    <li key={item._id}><p>{`${item.name} x ${item.quantity}`}</p></li>
                                ))}
                            </div>
                            <div className="user-details">
                               <li><p>{order.address.firstName}</p></li>
                               <li><p>{order.address.city} / {order.address.country}</p></li>
                               <li><p>{order.address.street}</p></li>
                               <li><p>PH : {order.address.phone}</p></li>
                               <li><p>{order.address.email}</p></li>
                               
                            </div>
                            

                            <p>{Math.floor(order.amount)}.00 PKR / {Math.floor(order.amount/275)}.00 $</p>
                            <p>Items : {order.items.length}</p>

                            <div className="order-status">
                                <select name="status" onChange={(event)=>{handleStatus(event,order._id)}} value={order.status}>
                                    <option value="Food Processing">Food Processing</option>
                                    <option value="Out For Delivery">Out For Delivery</option>
                                    <option value="Delivered">Delivered</option>
                                </select>
                                <p>{order.date}</p>
                            </div>

                
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
export default Orders