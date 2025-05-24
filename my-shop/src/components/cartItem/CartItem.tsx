import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../button/Button";
import { getProductById } from "../../services/productApi";
import type { ProductType } from "../../types/server";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";
import type { CartItemType } from "../../types/server";

type ProductItem  = ProductType;

const CartItem = ({id, quantity}: CartItemType) => {
    const {handleIncreaseFromProductQty, handleRemoveFromCart, handleDecreaseFromProductQty} = useShoppingCartContext()
    const [product, setProduct] = useState<ProductItem>({} as ProductItem);

    useEffect(() => {
        getProductById(`${id}`)
        .then((response) => setProduct(response))
        .catch((error) => console.error("Error fetching product data:", error));
    }, []);

    const {title, image}: ProductItem = product;

    return (
        <div className="flex flex-row-reverse items-center mt-5 border-b border-slate-300 pb-2">
            <Link to={`/product/${id}`}>
                <img 
                    className="rounded w-24" 
                    src={image}
                    alt={title}
                />
            </Link>
            <div className="mr-4 flex flex-col items-end">
                <h3 className="text-right">{title}</h3>
                <div className="mt-2">
                    <Button variant="danger" className="mx-2" onClick={() => handleRemoveFromCart(id)}>حذف</Button>
                    <Button variant="primary" className="mx-2" onClick={() => handleIncreaseFromProductQty(id)}>+</Button>
                    <span>{quantity}</span>
                    <Button variant="primary" className="mx-2" onClick={() => handleDecreaseFromProductQty(id)}>-</Button>
                </div>
            </div>
        </div>
    )
}

export default CartItem;