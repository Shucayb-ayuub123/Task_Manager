import React from 'react'

import SingUp from './Pages/SingUp'
import Login from './Pages/Login'
import { Route , Routes } from 'react-router-dom'
const App = () => {
  return (
    <div className='p-4'>
      <Routes>
        <Route path='/Singup' element={<SingUp />}></Route>
        <Route path='/Login' element={<Login />}></Route>
      </Routes>
    </div>
  )
}

export default App