import React, { useContext } from "react";
import './CartProductDetails.css';
import { StoreContext } from "../../Context/StoreContext";
import remove from '../../assets/cross.png';

function CartProductDetails() {
  const { cartItem, allFoodData, removeFromCart } = useContext(StoreContext);
  const {url} = useContext(StoreContext);

  return (
    <div className="cart">
      <div className="cart-titles">
        <p>Product</p>
        <p>Title</p>
        <p>Price PKR</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <div>
        {allFoodData.map((product) => {
          const quantity = cartItem[product._id];
          if (quantity > 0) {
            const totalPrice = (product.price*275 || 0) * quantity;
            return (
              <div className="cart-details" key={product._id}>
                <div><img src={`${url}/images/${product.image}`} alt={product.name} /></div>
                <div><p>{product.name}</p></div>
                <div><p>{Math.floor(product.price*275)} PKR</p></div>
                <div><p>{quantity}</p></div>
                <div><p>{Math.floor(totalPrice)} PKR</p></div>
                <div>
                  <img
                    onClick={() => removeFromCart(product._id)}
                    className="cross"
                    src={remove}
                    alt="Remove"
                  />
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}

export default CartProductDetails;
