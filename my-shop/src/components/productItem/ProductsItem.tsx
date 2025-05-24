import type { ProductType } from "../../types/server";

type ProductItem = ProductType

const ProductsItem = ({title, price, description,image}: ProductItem) => {
    return (
        <div className="border border-gray-300 shadow rounded pb-2" style={{direction:"rtl"}}>
            <div className="w-full h-50 flex justify-center items-center">
                <img className="rounded-t w-[110px]" src={image} alt={title}/>
            </div>
            <div className="flex justify-between flex-row-reverse font-bold px-4  mt-2">
                <h3 className="line-clamp-1 w-52">{title}</h3>
                <span>{price}$</span>
            </div>
            <div className="px-4 mt-1">
            <p className="line-clamp-2 text-gray-500 text-right">
                {description}
            </p>
            </div>
        </div>
    )
}

export default ProductsItem;