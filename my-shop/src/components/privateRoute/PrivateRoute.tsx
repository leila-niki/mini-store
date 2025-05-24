import { Navigate, Outlet } from "react-router-dom";
import { useLoginContext } from "../../context/LoginContext";

const PrivateRoute = () => {

    const {isLogin} = useLoginContext();

    return(
        <>
            {isLogin ? <Outlet /> : <Navigate to="/login"/>}
        </>
    )
}

export default  PrivateRoute;