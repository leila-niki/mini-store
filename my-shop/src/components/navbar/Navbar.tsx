import { Link } from "react-router-dom";

const Navbar = () => {
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
                    <Link to="/cart">
                        <button>سبد خرید</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar;