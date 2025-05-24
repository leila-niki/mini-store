import { useEffect, useState } from "react";
import ProductsItem from "../../components/productItem/ProductsItem";
import { Link } from "react-router-dom";
import { getProducts } from "../../services/productApi";
import type { ProductType } from "../../types/server";

const Store = () => {
    const [products, setProducts] = useState<ProductType[]>([]);

    useEffect(() => {
        getProducts()
        .then((response) => setProducts(response))
        .catch((error) => console.error("Error fetching products data:", error));
    },[]);
    
    return(
        <div className="container mx-auto my-4">
            <h1 className="text-right my-5">جدیدترین محصولات</h1>
            <div className="grid grid-cols-4 gap-4">
                {products && products?.map((product) => (
                    <Link to={`/product/${product?.id}`} key={product?.id}>
                        <ProductsItem {...product}/>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Store;