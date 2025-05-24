import { Link } from "react-router-dom";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";
import { useLoginContext } from "../../context/LoginContext";
import Button from "../button/Button";


const Navbar = () => {

    const {getCartQty} = useShoppingCartContext();
    const {handleLogOut} = useLoginContext()

    return (
        <div className="h-14 border-b border-gray-300 shadow flex items-center">
            <div className="container mx-auto flex justify-between items-center flex-row-reverse">
                <ul className="flex flex-row-reverse">
                    <li className="ml-4">
                        <Link to="/">خانه</Link>
                    </li>
                    <li className="ml-4">
                        <Link to="/store">فروشگاه</Link>
                    </li>
                </ul>
                <div>
                    <Button variant="primary" className="mx-2 px-4 py-2 cursor-pointer" onClick={handleLogOut}>خروج</Button>
                    <Link to="/cart">
                        <button>
                            {getCartQty() > 0 && 
                                <span className="bg-red-500 text-sm text-white rounded-full inline-block w-6 h-6 mx-2 leading-6">
                                    {getCartQty()}
                                </span>
                            }
                            سبد خرید 
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar;