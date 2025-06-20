import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
 const {login, isLoggedIn} = useContext(AuthContext)
  const handleLogin = () => {
    navigate("/dashboard");
    login();
    
  };
  return (
    <div className='flex flex-col gap-20 justify-center items-center '>
        <h1 className='text-4xl font-md decoration underline text-center'>
            Login Page
        </h1>
        {isLoggedIn? (<h1 className='text-2xl font-normal'>You are already logged in.</h1> ) : <button onClick={handleLogin} className='cursor-pointer px-4 py-2 bg-blue-700 hover:bg-blue-500 hover:scale-95 tracking-wide'>Log-In</button>}
    </div>
  )
}

export default Login