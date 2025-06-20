import { Route, Routes, useNavigate } from 'react-router-dom';
import Header from '../components/header';
import LoginPage from './loginPage';
import ProductOverview from './home/productOverview';
import ProductPage from './home/product';
import Cart from './home/cart';
import ShippingPage from './home/shipping';
import MyOrdersPage from './home/orders';
import Home from './home/home';
import { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import Error from './home/404NotFount';
export default function HomePage() {
  const [user,setUser] = useState(null)
  const navigate = useNavigate();
  useEffect(()=>{
    const token = localStorage.getItem("token");
    if (!token) {      
      navigate("/")
      return;
    }
    axios
      .get(import.meta.env.VITE_BACKEND_URL + "/api/users/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then((res)=>{
        if(res.data.type!="customer"){
          toast.error("Please Login")
          navigate("/")
        }else{
          setUser(res.data)
        }

      }).catch((err)=>{
        console.error(err)
        toast.error("Failed to fetch user data")
        navigate("/")
      })
    
  },[])
  return (
    <div className="h-screen w-full">
      <Header />
      <div className='w-full h-[calc(100vh-100px)] '>
        <Routes>
          <Route path="/dash" element={<Home/>} />
          <Route path="/blogs" element={<ProductPage/>} />    
          <Route path="/contact" element={<h1>c</h1>} />     
          <Route path="/productInfo/:id" element={<ProductOverview/>} />
        </Routes>  
      </div>
        
    </div>
  ); 
}
