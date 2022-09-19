import React, { useState,useEffect} from 'react';
import { Product } from './components/Product';
import { useProducts } from './hooks/products';



function App() {
  const {products, error, loading } = useProducts();
   
  return (
    <div className='container mx-auto max-w-2xl pt-100'> 
      {loading?<p>Loading...</p>:null}
      {error?<p>{error}</p>:null}
      {products.map(product=><Product product={product} key={product.id}/>)}
    </div>
  );
}

export default App;
