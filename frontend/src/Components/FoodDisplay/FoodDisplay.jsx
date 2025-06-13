import React, { useContext, useState } from "react";
import './FoodDisplay.css'
import { StoreContext } from "../../Context/StoreContext";
import Item from "../Item/Item";

function FoodDisplay ({category}) {

    const {allFoodData} = useContext(StoreContext);
    const {url} = useContext(StoreContext);



    return(
        <div className="food-display">
            {allFoodData.filter((product)=>product.category===category || category==='all')
            .map((product)=>{
                return <Item key={product._id} id={product._id} name={product.name} description={product.description} priceUSD={product.price} pricePKR={Math.floor(product.price*275)} image={`${url}/images/${product.image}`}/>
            })}
        </div>
    );
}
export default FoodDisplay