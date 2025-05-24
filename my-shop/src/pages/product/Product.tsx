import { useParams } from "react-router-dom";
import Button from "../../components/button/Button";
import { useEffect, useState } from "react";
import { getProductById } from "../../services/productApi";
import type { ProductType } from "../../types/server";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";


type ProductItem = ProductType;


const Product = () => {
    const {id} = useParams<{id: string}>();
    const [productData, setProductData] = useState<ProductItem>();
    const {handleAddToCart,handleIncreaseFromProductQty, handleDecreaseFromProductQty, getProductQty, handleRemoveFromCart} = useShoppingCartContext();

    useEffect(() => {
        getProductById(id as string)
        .then((response) => setProductData(response))
        .catch((error) => console.error("Error fetching product data:", error));

    },[id]);

    if(!productData) {
        return <div className="container mx-auto">Loading...</div>
    };

    const {title, price, description, image}: ProductItem = productData;

    return(
        <div className="container mx-auto">
            <div className="h-96 shadow mt-4 grid grid-cols-12">
                <div className="col-span-10 text-right p-4">
                    <h1>{title}</h1>
                    <div>
                        <p>قیمت: {price} هزار تومان</p>
                        <p>{description}</p>
                    </div>
                </div>
                <div className="col-span-2 p-4 bg-slate-200">
                    <img className="rounded h-[180px] mx-auto" src={image} alt={title}/>
                    {getProductQty(Number(id as string)) ? 
                        <div className="flex items-center flex-row-reverse mt-4">
                            <Button className="my-2 w-10 py-1 cursor-pointer" variant="primary" onClick={() => handleIncreaseFromProductQty(Number(id as string))}>+</Button>
                            <span className="block px-4 text-center">{getProductQty(Number(id as string))}</span>
                            <Button className="my-2 w-10 py-1 cursor-pointer" variant="primary" onClick={() => handleDecreaseFromProductQty(Number(id as string))}>-</Button>
                            <Button className="mr-auto" variant="danger" onClick={() => handleRemoveFromCart(Number(id))}>حذف</Button>
                        </div>
                        : <Button className="my-2 w-full py-3 cursor-pointer" variant="primary" onClick={() => handleAddToCart(Number(id as string), price)}>افزودن به سبد خرید</Button>
                    }
                </div> 
            </div>
        </div>
    )
}

export default Product;