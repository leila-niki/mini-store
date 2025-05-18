import ProductsItem from "../../components/productItem/ProductsItem";
import { Link } from "react-router-dom";

const Store = () => {
    return(
        <div>
            <h1 className="text-right mt-5">جدیدترین محصولات</h1>
            <div className="container mx-auto grid grid-cols-4 gap-4">
                <Link to={`/product/${1}`}>
                    <ProductsItem />
                </Link>
                <Link to={`/product/${2}`}>
                    <ProductsItem />
                </Link>
                <Link to={`/product/${3}`}>
                    <ProductsItem />
                </Link>
                <Link to={`/product/${4}`}>
                    <ProductsItem />
                </Link>
            </div>
        </div>
    )
}

export default Store;