import Button from "../button/Button";

const CartItem = () => {
    return (
        <div className="flex flex-row-reverse mt-5 border-b border-slate-300 pb-2">
            <img 
                className="rounded w-28" 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/500px-Image_created_with_a_mobile_phone.png" 
                alt=""
            />
            <div className="mr-4">
                <h3 className="text-right">عنوان محصول</h3>
                <div className="mt-2">
                    <Button variant="danger" className="mx-2">Remove</Button>
                    <Button variant="primary" className="mx-2">+</Button>
                    <span>{2}</span>
                    <Button variant="primary" className="mx-2">-</Button>
                </div>
            </div>
        </div>
    )
}

export default CartItem;