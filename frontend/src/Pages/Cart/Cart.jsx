import CartOrderDetails from "../../Components/CartOrderDetails/CartOrderDetails";
import CartProductDetails from "../../Components/CartProductDetails/CartProductDetails";


function Cart(){
    return(
        <div>
            <CartProductDetails/>
            <CartOrderDetails/>
        </div>
    );
}
export default Cart