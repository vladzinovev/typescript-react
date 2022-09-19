import React, { useState,useEffect} from 'react';
import { Product } from './components/Product';
import { useProducts } from './hooks/products';
import { Loader } from './components/Loader';
import { ErrorMessage } from './components/ErrorMessage';
import { CreateProduct } from './components/CreateProduct';
import { Modal } from './components/Modal';
import {IProduct} from './models' ;



function App() {
  const {products, error, loading, addProduct} = useProducts();
  const [modal, setModal]=useState(false);
  
  const createHandler = (product : IProduct)=>{
    setModal(false)
    addProduct(product)
  }
  return (
    <div className='container mx-auto max-w-2xl pt-100'> 
      {loading?<Loader/>:null}
      {error? <ErrorMessage error={error}/>:null}
      {products.map(product=><Product product={product} key={product.id}/>)}
      
      {modal ? <Modal title='Create new product' onClose={()=>setModal(false)}>
        <CreateProduct onCreate={()=>setModal(false)}/>
      </Modal>:null}
    </div>
  );
}

export default App;
