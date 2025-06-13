import { createContext, useEffect, useState } from "react";
import axios from 'axios';

export const StoreContext = createContext(null);

function StoreContextProvider(props) {

    const [cartItem, setCartItem] = useState({});
    const [token, setToken] = useState('');
    const url = 'http://localhost:4000';
    const [allFoodData, setAllFoodData] = useState([]);

    async function fetchFoodData() {
        const response = await axios.get(`${url}/api/food/list`);
        setAllFoodData(response.data.data);
    }

    const addToCart = async (itemId) => {
        if (!cartItem[itemId]) {
            setCartItem((prev) => ({ ...prev, [itemId]: 1 }));
        } else {
            setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        }
        if (token) {
            await axios.post(`${url}/api/cart/add`, { itemId }, { headers: { token } });
        }
    };

    const removeFromCart = async (itemId) => {
        setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
        if (token) {
            await axios.post(`${url}/api/cart/remove`, { itemId }, { headers: { token } });
        }
    };

    
    // ✅ Function to calculate total amount (optional if you use cartTotal directly)
    const cartTotalAmount = () => {
    let totalAmount = 0;
    for (const productId in cartItem) {
        const quantity = cartItem[productId];
        if (quantity > 0) {
            const productInfo = allFoodData.find((item) => item._id === productId);
            if (productInfo) {
                totalAmount += productInfo.price*275 * quantity;
            }
        }
    }
    return totalAmount;
};

async function loadCartData(token) {
        const response = await axios.post(`${url}/api/cart/get`, {}, { headers: { token } });
        setCartItem(response.data.cartData);
    }


        

     useEffect(()=>{
        async function loadData() {
            await fetchFoodData();
            if(localStorage.getItem("token")){
            setToken(localStorage.getItem("token"));
            await loadCartData(localStorage.getItem("token"));
        }
        }
        loadData();
    },[])

    // ✅ Context values
    const ContextValue = {
        allFoodData,
        cartItem,
        setCartItem,
        addToCart,
        removeFromCart,
        cartTotalAmount,
        url,
        token,
        setToken,
    };

    return (
        <StoreContext.Provider value={ContextValue}>
            {props.children}
        </StoreContext.Provider>
    );
}

export default StoreContextProvider;
