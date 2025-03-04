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
         <div className='text-center justify-center'>
         <p className='text-[#749B3F] bg-slate-300 w-[120px] text-center ml-[515px]  mt-[140px] font-bold border rounded-md'>Our Products</p>
         <p>product: {products.length}</p>
         <h2 className='font-bold text-3xl'>Our Fresh Products</h2>
         <p className='mt-3'>We pride ourselves on offering a wide variety of fresh and flavorful fruits, vegetables, and salad ingredients.</p>
         <div className='flex gap-6 ml-[420px] mt-3'>
         <button className="btn btn-sm">All</button>
         <button className="btn btn-sm">Fruits</button>
         <button className="btn btn-sm">Vegetables</button>
         <button className="btn btn-sm">Salad</button>
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
