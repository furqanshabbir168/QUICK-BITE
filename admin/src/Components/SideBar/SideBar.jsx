import React, { useState } from "react";
import './SideBar.css';
import add from '../../assets/add-icon.png';
import list from '../../assets/list-icon.png';
import order from '../../assets/orders-icon.png';
import { Link } from "react-router-dom";

function SideBar() {

    const [ currentState , setCurrentState ] = useState('add');


    return(
        <div className="sidebar">
            <Link to = "/addfood">
            <div onClick={()=>{setCurrentState('add')}} className={currentState==='add'?'active':'add'}>
                <img src={add} alt="" />
                <p>Add Items</p>
            </div>
            </Link>

            <Link to = "/listfood">
            <div onClick={()=>{setCurrentState('list')}} className={currentState==='list'?'active':'list'}>
                <img src={list} alt="" />
                <p>List Items</p>
            </div>
            </Link>

            <Link to = "orders">
            <div onClick={()=>{setCurrentState('orders')}} className={currentState==='orders'?'active':'orders-sidebar'}>
                <img src={order} alt="" />
                <p>Orders</p>
            </div>
            </Link>
            
        </div>
    );
}
export default SideBar