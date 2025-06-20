import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaPlus, FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
export default function AdminProductsPage() {
  const [products, setProducts] = useState([]);
  const [productsLoaded, setProductsLoaded] = useState(false);

  useEffect(() => {
    if(!productsLoaded){
      axios.get(import.meta.env.VITE_BACKEND_URL+"/api/products").then((res) => {
        
        setProducts(res.data);
        console.log(res.data);
        setProductsLoaded(true);
      });
    }    
  }, [productsLoaded]);

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 p-6 relative">

      <Link to={"/admin/products/addProduct"} className="absolute right-[25px] bottom-[25px] text-[25px]  border-[#3b82f6] border-[2px] text-[#3b82f6] p-5 rounded-xl hover:rounded-full"><FaPlus /></Link>



      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Add Post Page
        </h1>
        {
          productsLoaded?<div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className="text-left px-6 py-4 border-b text-gray-700 font-medium">
                  Post ID
                </th>
                <th className="text-left px-6 py-4 border-b text-gray-700 font-medium">
                  Date & time
                </th>
                <th className="text-left px-6 py-4 border-b text-gray-700 font-medium">
                  Event Name
                </th>
                <th className="text-left px-6 py-4 border-b text-gray-700 font-medium">
                  Description
                </th>
                <th className="text-center px-6 py-4 border-b text-gray-700 font-medium">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr
                  key={index}
                  className={`hover:bg-gray-50 ${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  }`}
                >
                  <td className="px-6 py-4 border-b text-gray-600">
                    {product.productId}
                  </td>
                  <td className="px-6 py-4 border-b text-gray-600">
                    {product.dateTime}
                  </td>
                  <td className="px-6 py-4 border-b text-gray-600">
                    {product.postName}
                  </td>
                  <td className="px-6 py-4 border-b text-gray-600 truncate max-w-xs">
                    {product.description}
                  </td>
                  <td className="px-6 py-4 border-b text-gray-600 text-center">
                    <button
                      className="text-red-500 hover:text-red-700 mr-2"
                      title="Delete"

                      onClick={()=>{
                        const token = localStorage.getItem("token");

                        axios.delete(import.meta.env.VITE_BACKEND_URL+`/api/products/${product.productId}`, {
                          headers: {
                            Authorization: `Bearer ${token}`,
                          },
                        }).then((res) => {
                          console.log(res.data);
                          toast.success("Post deleted successfully");
                          setProductsLoaded(false);
                        });
                  
                      }}
                    >
                      <FaTrash />
                    </button>
                    <button
                      className="text-blue-500 hover:text-blue-700"
                      title="Edit"
                      onClick={()=>{
                        navigate("/admin/products/editProduct" , {state : {product : product}});
                      }}
                    >
                      <FaPencil />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>:<div className="w-full h-full flex justify-center items-center">
          <div className="w-[60px] h-[60px] border-[4px] border-gray-200 border-b-[#3b82f6] animate-spin rounded-full"></div>
        </div>
  
        }
        
        
      </div>
    </div>
  );
}

