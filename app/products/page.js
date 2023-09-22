'use client'
import {useEffect,useState} from 'react'

export default function ProductList() {

  const [product,setproduct]=useState([])
    useEffect (async ()=>{
    let data=await fetch ("https://dummyjson.com/products");
    data=await data.json();
     console.log(data);
    setproduct(data.products)
    },[])

  return (
    <>
      
    <h1 className='heading'>Product List</h1>
     {
          product.map((item)=>(
          <h3> Name :{item.title}, Price :  {item.price}</h3>
          ))        
     }
    </>
  );
}