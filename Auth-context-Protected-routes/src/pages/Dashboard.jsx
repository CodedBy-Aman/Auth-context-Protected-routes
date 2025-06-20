import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

const Dashboard = () => {

    const {logout} = useContext(AuthContext)
  return (
    <div className='flex flex-col gap-20 justify-center items-center '>
        <h1 className='text-4xl font-md decoration underline text-center'>Dashboard</h1>
        <button onClick={logout} className='px-4 py-2 bg-blue-700 hover:bg-blue-500 hover:scale-95 tracking-wide cursor-pointer'>Log-out</button>
    </div>
  )
}
 
export default Dashboard