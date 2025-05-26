import { useShoppingCartContext } from "../../context/ShoppingCartContext";
import { useParams } from "react-router-dom";
import Button from "../../components/button/Button";

interface ProductQtyProps {
    price: number;
}

const ProductQty = ({price} : ProductQtyProps) => {

    const {id} = useParams<{id: string}>();

    const {handleAddToCart,handleIncreaseFromProductQty, handleDecreaseFromProductQty, getProductQty, handleRemoveFromCart} = useShoppingCartContext();
    if(getProductQty(Number(id))) {
        return(
            <div className="flex items-center flex-row-reverse mt-4">
                <Button className="my-2 w-10 py-1 cursor-pointer" variant="primary" onClick={() => handleIncreaseFromProductQty(Number(id as string))}>+</Button>
                <span className="block px-4 text-center">{getProductQty(Number(id as string))}</span>
                <Button className="my-2 w-10 py-1 cursor-pointer" variant="primary" onClick={() => handleDecreaseFromProductQty(Number(id as string))}>-</Button>
                <Button className="mr-auto" variant="danger" onClick={() => handleRemoveFromCart(Number(id))}>حذف</Button>
            </div>
        )
    }

    return(
        <Button className="my-2 w-full py-3 cursor-pointer" variant="primary" onClick={() => handleAddToCart(Number(id), price)}>افزودن به سبد خرید</Button>
    )
    
}

export default ProductQty;