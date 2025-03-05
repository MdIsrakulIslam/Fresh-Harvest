import React, { useEffect, useState } from 'react'
import Product from '../components/Product/Product'

export default function Products() {
    const [products, setProducts]=useState([])

    useEffect(()=>{
        fetch('./product.json')
        .then(res =>res.json())
        .then(data=> setProducts(data))

    },[])
  return (
    <div>
         <div className='text-center flex flex-col items-center px-4 sm:px-6 lg:px-8'>
  <p className='text-[#749B3F] bg-slate-300 w-[120px] text-center mt-10 sm:mt-14 lg:mt-[140px] font-bold border rounded-md'>Our Products</p>
  <p>product: {products.length}</p>
  <h2 className='font-bold text-2xl sm:text-3xl'>Our Fresh Products</h2>
  <p className='mt-3 max-w-md text-center'>We pride ourselves on offering a wide variety of fresh and flavorful fruits, vegetables, and salad ingredients.</p>
  <div className='flex gap-4 sm:gap-6 mt-3 flex-wrap justify-center'>
    <button className='btn btn-sm'>All</button>
    <button className='btn btn-sm'>Fruits</button>
    <button className='btn btn-sm'>Vegetables</button>
    <button className='btn btn-sm'>Salad</button>
  </div>
</div>

         <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
            {
                products.map(product=> <Product key={product.id} product={product}></Product>)
            }

            
         </div>

    </div>
  )
}
