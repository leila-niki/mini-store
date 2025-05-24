import CartItem from "../../components/cartItem/CartItem";
import PaymentDetails from "../../components/paymentDetails/PaymentDetails";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";

const Cart = () => {
    const {cartItems} = useShoppingCartContext();
    if(!cartItems) {
        return <div className="container mx-auto">Loading...</div>
    };

    return(
        <div className="container mx-auto">
            <div>
                {cartItems.length === 0 && <p className="text-center py-4">سبد خرید شما خالی است</p>}
                {cartItems.length > 0 && cartItems?.map((item) => (
                    <CartItem key={item.id} {...item} />
                ))}
            </div>
            {cartItems.length > 0 &&  
                <PaymentDetails cartItems={cartItems}/>
            }
        </div>
    )
}


export default Cart;