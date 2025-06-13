import React, { useContext, useState } from "react";
import './Item.css'
import addicon from '../../assets/add.png'
import plus from '../../assets/add-1.png'
import minus from '../../assets/minus.png'
import { StoreContext } from "../../Context/StoreContext";

function Item ({id,name,description,image, pricePKR, priceUSD}) {


    const {cartItem , addToCart , removeFromCart} = useContext(StoreContext);


    return(
        <div>
                    <img src={image} alt="" />
                    <div className="counter">
                    <div className="item">
{!cartItem[id]?<><img className="add" onClick={()=>addToCart(id)} src={addicon} alt="" /></>:<><img className="minus" onClick={()=>removeFromCart(id)} src={minus} alt="" /><><p className="count">{cartItem[id]}</p></><><img className="plus" onClick={()=>addToCart(id)} src={plus} alt="" /></></>}
                    </div>
                    </div>
                    <h2>{name}</h2>
                    <p>{description}</p>
                    <h3>{priceUSD} $</h3>
                    <h3>{pricePKR} PKR</h3>
        </div>
      
    );
}
export default Item