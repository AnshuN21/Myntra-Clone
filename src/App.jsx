/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from './pages/home/Home';
import Order from './pages/order/Order';
import Cart from './pages/cart/Cart';
import Dashboard from './pages/admin/dashboard/Dashboard';
import NoPage from './pages/nopage/NoPage';
import MyState from './context/data/myState';
import Login from './components/pages/registration/Login';
import Signup from './components/pages/registration/SignUp';
import ProductInfo from './pages/productInfo/ProductInfo';
import AddProduct from './pages/admin/page/Addproduct';
import UpdateProduct from './pages/admin/page/UpdateProduct';

import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Allproducts from './pages/allproducts/AllProducts';

function App() {
  

  return (
    <MyState>
    <Router>
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path="/order" element={
            // <ProtectedRoutes>
              <Order />
            // </ProtectedRoutes>
          } />
      <Route path='/cart' element={<Cart />} />
      <Route path="/dashboard" element={
            <ProtectedRoutesForAdmin> <Dashboard /> </ProtectedRoutesForAdmin>
          } />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/productinfo/:id" element={<ProductInfo />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/addproduct" element={<AddProduct />} />
      <Route path="/updateproduct" element={<UpdateProduct />} />
      <Route path="/allproducts" element={<Allproducts />} />

      <Route path='/*' element={<NoPage/>}/>

     </Routes>
          <ToastContainer />
    </Router>
    </MyState>
  )
}
// user

export const ProtectedRoutes = ({ children }) => {
  if (localStorage.getItem('currentUser')) {
    return children
  }
  else {
    return <Navigate to='/login' />
  }
}

// admin

export const ProtectedRoutesForAdmin = ({ children }) => {
  const admin = JSON.parse(localStorage.getItem('user'))
  console.log(admin.user.email)
  if (admin.user.email === 'knupadhyay784@gmail.com') {
    return children
  }
  else {
    return <Navigate to='/login' />
  }
}

export default App
