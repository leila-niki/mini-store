import Button from "../../components/button/Button";
import CartItem from "../../components/cartItem/CartItem";

const Cart = () => {
    return(
        <div className="container mx-auto">
            <div>
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
            </div>
            <div className="text-right bg-gray-100 rounded p-6">
                <p>قیمت کل: ۲۰۰۰ تومان</p>
                <p>تخفیف: ۴۰۰ تومان</p>
                <p>قیمت نهایی: ۱۶۰۰ تومان</p>
            </div>
            <Button className="mt-2" variant="success">ثبت سفارش</Button>
        </div>
    )
}


export default Cart;