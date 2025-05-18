const ProductsItem = () => {
    return (
        <div className="border border-gray-300 shadow rounded pb-2">
            <img className="rounded-t" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/500px-Image_created_with_a_mobile_phone.png" />
            <div className="flex justify-between flex-row-reverse px-4  mt-2">
                <h3>عنوان محصول</h3>
                <span>55$</span>
            </div>
            <div className="px-4 mt-1">
            <p className="line-clamp-2 text-right">
            تسیزنستیزنظتسینزستینز تسیاتسایز ثایذشثای یازشهیازش ایزشهسثیا 
            </p>
            </div>
        </div>
    )
}

export default ProductsItem;