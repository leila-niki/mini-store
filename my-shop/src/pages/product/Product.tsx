import { Navigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductById } from "../../services/productApi";
import type { ProductType } from "../../types/server";
import ProductQty from "./ProductQty";

const Product = () => {
    const {id} = useParams<{id: string}>();
    const [productData, setProductData] = useState<ProductType | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    

    if (!id || isNaN(Number(id))) {
        return  <Navigate to="/store" replace/>
    }

    useEffect(() => {
        getProductById(id as string)
        .then((response) => {
            console.log("response")
            setProductData(response);
            setIsLoading(false);
        })
        .catch((error) => {
            setError(error?.response?.data)
            setIsLoading(false);
        });

    },[id]);

    if(error === "Not Found" && productData === null) {
        return <div className="container mx-auto text-center my-4">همچین محصولی یافت نشد!</div>
    }

    if(isLoading) {
        return <div className="container mx-auto">Loading...</div>
    };

    if(!productData) {
        return <div className="container mx-auto text-center my-4">محصولی یافت نشد!</div>
    }


    const {title, price, description, image}: ProductType = productData;

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
                    <ProductQty price={price}/>
                </div> 
            </div>
        </div>
    )
}

export default Product;