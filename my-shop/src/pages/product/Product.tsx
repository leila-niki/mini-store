import { useParams } from "react-router-dom";
import Button from "../../components/button/Button";

const Product = () => {
    const params = useParams;

    return(
        <div className="container mx-auto">
            <div className="h-96 shadow mt-4 grid grid-cols-12">
                <div className="col-span-10 text-right p-4">
                    <h1>عنوان محصول</h1>
                    <div>
                        <p>قیمت: ۲۵ هزار تومان</p>
                        <p> تسیازس سنیتزسنی سیتازسی سنیتاز</p>
                    </div>
                </div>
                <div className="col-span-2 p-4 bg-sky-200">
                    <img className="rounded " src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/500px-Image_created_with_a_mobile_phone.png" alt=""/>
                    <Button className="mt-2 w-full py-3" variant="primary">add to cart</Button>
                </div> 
            </div>
        </div>
    )
}

export default Product;