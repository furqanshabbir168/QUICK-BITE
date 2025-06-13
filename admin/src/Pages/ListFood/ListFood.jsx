import React, { useEffect, useState } from "react";
import './ListFood.css';
import axios from "axios";
import { toast } from "react-toastify";
import cross from '../../assets/cross-icon.png';


function ListFood () {

    const url = 'http://localhost:4000';

    const [listFood , setListFood ] = useState([]);

    async function fetchList() {
        const response = await axios.get(`${url}/api/food/list`)
        
        if(response){
            setListFood(response.data.data);
        }else{
            toast.error(response.data.message);
        }
    }

    async function remove(foodId) {
        const response = await axios.delete(`${url}/api/food/remove`,{
            data:{id:foodId}
        })
        await fetchList();
        if(response){
            toast.success(response.data.message)
        } else{
            toast.error(response.data.message);
        }
    }

    useEffect(()=>{
        fetchList();
    },[])

    


    return(
        <div className="listfood">
            <div className="list-heading">
                <h1>All Listed Food</h1>
                <b>Product</b>
                <b>Name</b>
                <b>Price</b>
                <b>Category</b>
                <b>Action</b>
            </div>
            {listFood.map((product)=>{
                return <div key={product._id} className="listed-product">
                    <img className="image" src={`${url}/images/${product.image}`} alt="" />
                    <p>{product.name}</p>
                    <p>{product.price}$</p>
                    <p>{product.category}</p>
                    <img onClick={()=>{remove(product._id)}} className="cross" src={cross} alt="" />
                </div>
            })}
        </div>
    );
}
export default ListFood