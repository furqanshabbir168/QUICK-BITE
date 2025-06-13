import React, { useEffect, useState } from "react";
import './AddItems.css';
import upload from '../../assets/upload-image.png'
import axios from 'axios';
import { toast } from "react-toastify";

function AddItems(){

    const url = 'http://localhost:4000';

    const [ image , setImage ] = useState(false);
    const[ data , setData ] = useState({
        name : '',
        description :'',
        category : 'Burger',
        price : ''
    });
    function onChangeHandle (event) {
        const name = event.target.name;
        const value = event.target.value;
        setData(data=>({...data,[name]:value}))
    }
    async function onSubmitHandle(event) {
        event.preventDefault();
        const formData = new FormData();
        formData.append('name',data.name);
        formData.append('description',data.description);
        formData.append('price',Number(data.price));
        formData.append('category',data.category);
        formData.append('image',image);

        try{
            const response = await axios.post(`${url}/api/food/add`,formData);
        if(response){
            setData({
                name : '',
        description :'',
        category : 'Burger',
        price : ''
            })
            setImage(false)
            toast.success(response.data.message)
        }else{}
        } catch(error){
            console.log(error);
            toast.error(response.data.message);
        }
        
    }
    return (
        <div className="additems">
            <form className="additems-form" onSubmit={onSubmitHandle}>
                <div className="upload-img">
                    <p>Upload Image</p>
                    <label htmlFor="image">
                        <img src={image?URL.createObjectURL(image):upload} alt="" />
                    </label>
                    <input onChange={(e)=>{setImage(e.target.files[0])}} type="file" id="image" name="image" hidden required />
                </div>
                <div className="upload-name">
                    <p>Name</p>
                    <input onChange={onChangeHandle} value={data.name} name="name" type="text" placeholder="Product Name" required/>
                </div>
                <div className="upload-description">
                    <p>Product Description</p>
                    <textarea onChange={onChangeHandle} value={data.description} name="description" id="" required></textarea>
                </div>
                <div className="category-price">
                    <div className="product-category">
                        <p>Product Category</p>
                        <select onChange={onChangeHandle} value={data.category} name="category" id="" required>
                            <option value="Burger">Burger</option>
                            <option value="Shawarma">Shawarma</option>
                            <option value="French Fries">French Fries</option>
                            <option value="Sandwich">Sandwich</option>
                            <option value="Pizza">Pizza</option>
                            <option value="Chicken Wings">Chicken Wings</option>
                            <option value="Ice Cream">Ice Cream</option>
                            <option value="Cold Drinks">Cold Drinks</option>
                        </select>
                    </div>
                    <div className="product-price">
                        <p>Product Price</p>
                        <input onChange={onChangeHandle} value={data.price} type="number" name="price" id="" placeholder="100$" required/>
                    </div>
                </div>
                <div className="button">
                    <button type="submit">Add</button>
                </div>
            </form>
        </div>
    );
}
export default AddItems