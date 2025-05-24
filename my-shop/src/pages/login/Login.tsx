import { useState } from "react";
import { useLoginContext } from "../../context/LoginContext";

interface InputValue {
    username: string;
    password: string;
}


const Login = () => {
    const {handleLogin} = useLoginContext()

    const [inputValue, setInputValue]= useState<InputValue>({username:"", password:""});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setInputValue({...inputValue, [name]: value});
    }

    return(
        <div>
            <h1 className="text-center my-4">ورود به حساب کاربری</h1>
            <div className="container mx-auto">
                <form className="w-full max-w-sm mx-auto">
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2 text-right">نام کاربری</label>
                        <input type="text" name="username" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={handleChange}/>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2 text-right">رمز عبور</label>
                        <input type="password" name="password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={handleChange}/>
                    </div>
                    <div className="flex items-center justify-between">
                        <button type="submit" className="ml-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={(e) => handleLogin(e)}>ورود</button>
                    </div>
                </form>
            </div>
        </div>
    )   
}

export default Login;