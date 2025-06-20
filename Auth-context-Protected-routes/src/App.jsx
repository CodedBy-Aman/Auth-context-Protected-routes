import React from 'react'
import MainRoutes from './routes/MainRoutes'
import Nav from './component/Nav'

const App = () => {
  return (
    <div className='w-screen h-screen px-[5%] py-5 bg-red-300  '>
      
      <Nav/>
<MainRoutes/>
    </div>
  )
}

export default App