import {useEffect, useState} from 'react'
import {IProduct} from '../models'
import axios from 'axios'

export function useProducts() {
  const [products,setProducts]=useState<IProduct[]>([]);
  const [loading,setLoading]=useState(false);
  const [error,setError]=useState('');

  function addProduct(product: IProduct) {
    setProducts(prev => [...prev, product])
  }

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

  return { products, error, loading, addProduct }
}