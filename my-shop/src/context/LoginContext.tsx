import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

interface LoginProviderType {
    children: React.ReactNode;
}

interface LoginContextType {
    isLogin: boolean;
    handleLogin: (e: React.MouseEvent<HTMLButtonElement>) => void;
    handleLogOut: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const LoginContext = createContext({} as LoginContextType);


export const useLoginContext = () => {
    const context = useContext(LoginContext);

    if (!context) {
        throw new Error("useLoginContext must be used within a LoginProvider");
    }
    return context;
}

export function LoginProvider({ children }: LoginProviderType) {
    const [isLogin, setIsLogin] = useState<boolean>(localStorage.getItem("token") ? true : false);
    const navigate = useNavigate()

    const handleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        localStorage.setItem("token", "1234567890abcdef"); // Simulating a token for login
        setIsLogin(true);
        navigate("/cart");
    }

    const handleLogOut = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setIsLogin(false);
        localStorage.removeItem("token");
        navigate("/login");
    };

    return (
        <LoginContext.Provider value={{isLogin, handleLogin, handleLogOut}}>
            {children}
        </LoginContext.Provider>
    )

}