import Button from "../button/Button";
import type { CartItemType } from "../../types/server";

function PaymentDetails({cartItems}: {cartItems:CartItemType[]}) {

    const totalPrice: number = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const discount: number = totalPrice > 1000 ? 100 : 0;

    return(
        <>
            <div className="text-right bg-gray-100 rounded p-6">
                <p>قیمت کل: $ {totalPrice}</p>
                <p>تخفیف: $ {discount}</p>
                <p>قیمت نهایی: $ {totalPrice - discount}</p>
            </div>
            <Button className="mt-2" variant="success">ثبت سفارش</Button>
        </>
    )
}

export default PaymentDetails