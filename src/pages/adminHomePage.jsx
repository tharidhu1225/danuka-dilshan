import { Link, Route, Routes, useNavigate } from "react-router-dom";
import { BsGraphUp, BsBoxSeam, BsCart4, BsPeopleFill } from "react-icons/bs";
import AdminProductsPage from "./admin/adminProductsPage";
import AddProductForm from "./admin/addProductForm";
import EditProductForm from "./admin/editProductForm";
import AdminOrdersPage from "./admin/adminOrderPage";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import AdminUsers from "./admin/viewAllUsers";

export default function AdminHomePage() {
  const [user,setUser] = useState(null)
  const navigate = useNavigate();
  useEffect(()=>{
    const token = localStorage.getItem("token");
    console.log(token)
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
        if(res.data.type!="admin"){
          console.log(res.data.type)
          toast.error("Unauthorized access")
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
    <div className="bg-blue-200 w-full h-screen flex">
      <div className="w-[20%] h-screen bg-blue-500 flex flex-col items-center py-4">
        <Link 
          className="flex flex-row items-center mb-4 text-white hover:text-blue-200" 
          to="/admin/dashboard"
        >
          <BsGraphUp className="mr-2" /> Dashboard
        </Link>

        <Link 
          className="flex flex-row items-center mb-4 text-white hover:text-blue-200" 
          to="/admin/products"
        >
          <BsBoxSeam className="mr-2" /> Blogs
        </Link>

        <Link 
          className="flex flex-row items-center text-white hover:text-blue-200" 
          to="/admin/customers"
        >
          <BsPeopleFill className="mr-2" /> Customers
        </Link>
      </div>

      <div className="w-[80%] h-screen ">

        {user!=null&&<Routes path="/*">
          <Route path="/" element={<h1>Dashboard</h1>} />
          <Route path="/products" element={<AdminProductsPage/>} />
          <Route path="/products/addProduct" element={<AddProductForm/>} />
          <Route path="/products/editProduct" element={<EditProductForm/>} />
          <Route path="/customers" element={<AdminUsers/>} />
          <Route path="/*" element={<h1>404 not found the admin page</h1>}/>
        </Routes>}
        {
          user==null&&<div className="w-full h-full flex justify-center items-center">
            {/* animating loading page */}
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-accent"></div>

          </div>
        }
      </div>
    </div>
  );
}
