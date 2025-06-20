import axios from "axios"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import ProductCard from "../../components/productCard"

export default function ProductPage(){
    const [products,setProduct] = useState([])
    const [loadingStatus,setLoadingStatus] = useState("loading")
    const [query,setQuery] = useState("");

    useEffect(
        ()=>{
           if(loadingStatus==="loading"){
              axios.get(import.meta.env.VITE_BACKEND_URL+"/api/products").then(

                (res)=>{console.log(res.data)
                setProduct(res.data)
                setLoadingStatus("loaded");
                
                }

              ).catch(
                (err)=> toast.error("Faile to fetch products")
              )
            }

           
        },[]);

        function search(e){
            const query = e.target.value;
            setQuery(query);
            setLoadingStatus("loading");
            if(query == ""){
                axios.get(import.meta.env.VITE_BACKEND_URL+"/api/products").then(

                    (res)=>{
                    setProduct(res.data)
                    setLoadingStatus("loaded");
                   
                    }
    
                  ).catch(
                    (err)=> toast.error("Faile to fetch products")
                  )
            }else{
                axios.get(import.meta.env.VITE_BACKEND_URL+"/api/products/search/"+query).then(

                    (res)=>{
                    setProduct(res.data)
                    setLoadingStatus("loaded");
                    
                    }
    
                  ).catch(
                    (err)=> toast.error("Faile to fetch Post")
                  )
            }
        }

    return(
        <div className="w-full h-full relative">
            
        {loadingStatus=="loaded"&&<div className="w-full h-full overflow-y-scroll flex flex-wrap justify-center pt-2 relative">
            
           {
                products.map(
                    (product)=>
                        <ProductCard key={product.productId} product={product} />
                )
            }
        </div>}
        {loadingStatus == "loading" && (
          <div className="w-full h-full flex items-center justify-center">
            <div className="flex space-x-2">
              <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.4s]"></div>
              <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
              <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce"></div>
            </div>
          </div>
        )}
        
        </div>
    )
}