import React from 'react'
import Order from './pages/order/Order'
import Cart from './pages/cart/Cart'
import Dashboard from './pages/dashboard/Dashboard'
import NoPage from './pages/nopage/NoPage'
import MyContext from  './context/data/myConext'
import Home from './pages/home/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'



const App = () => {
  return (
    <MyContext>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/order' element={<Order/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/order' element={<Order/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='*' element={<NoPage/>}/>

    </Routes>
    </BrowserRouter>
    </MyContext>
  )
}

export default App
