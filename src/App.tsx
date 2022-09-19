import React, { useState,useEffect} from 'react';
import { Product } from './components/Product';
import {IProduct} from "./models";
//import {products} from "./data/products";
import axios from "axios";



function App() {
  const [products,setProducts]=useState<IProduct[]>([]);
  const [loading,setLoading]=useState(false);
  const [error,setError]=useState();

  async function fetchProducts() {
    
      setLoading(true);
      await axios.get<IProduct[]>('https://fakestoreapi.com/products?limit=5')
       .then (response=>{setProducts(response.data)})
       .then (()=>{setLoading(false)})
       .catch (error=>{
          setError(error.message); 
          setLoading(false);
        })

      
  
  }

  useEffect(()=>{
    fetchProducts()
  },[])
   
  return (
    <div className='container mx-auto max-w-2xl pt-100'> 
      {loading?<p>Loading...</p>:null}
      {error?<p>{error}</p>:null}
      {products.map(product=><Product product={product} key={product.id}/>)}
    </div>
  );
}

export default App;
