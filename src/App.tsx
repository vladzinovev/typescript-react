import React, { useState} from 'react';
import { Product } from './components/Product';
import {products} from "./data/products";


function App() {
  
  return (
    <div className='container mx-auto max-w-2xl pt-100'> 
      {products.map(product=><Product product={product} key={product.id}/>)}
    </div>
  );
}

export default App;
