import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import { addToStoreAddList, addToStoreWistList } from '../../utility/addtodb';

export default function Productdetail() {
    const {id}=useParams();
    const pid= parseInt(id)
    const data = useLoaderData();

    const product = data.find(product =>product.id===pid)
    const {name, price, description,image_url }=product

    const handleMarkAsCard =(pid)=>
    {
        addToStoreAddList(pid)
    }
      const handleWishAdd =(pid)=>
      {
        addToStoreWistList(pid)
      }

  return (
    <div>
        <div className='flex flex-col lg:flex-row gap-10 py-5 px-4 sm:px-6 lg:px-8 items-center mt-20'>
  <div className='w-full lg:w-1/2'>
    <img src={image_url} className='w-full max-w-sm sm:max-w-md lg:max-w-lg h-auto' alt='' />
  </div>
  <div className='w-full lg:w-1/2 text-center lg:text-left'>
    <h2 className='font-bold text-3xl sm:text-5xl lg:text-6xl'>{name}</h2>
    <div className='rating mt-4 flex justify-center lg:justify-start gap-3'>
      <input type='radio' name='rating-4' className='mask mask-star-2 bg-[#FFB848]' />
      <input type='radio' name='rating-4' className='mask mask-star-2 bg-[#FFB848]' />
      <input type='radio' name='rating-4' className='mask mask-star-2 bg-[#FFB848]' />
      <input type='radio' name='rating-4' className='mask mask-star-2 bg-[#FFB848]' />
      <input type='radio' name='rating-4' className='mask mask-star-2 bg-[#FFB848]' />
      <span>5.0 (1 review)</span>
    </div>
    <p className='text-[#FF6A1A] font-bold mt-4 text-lg sm:text-xl'>${price}/kg</p>
    <p className='mt-4 text-sm sm:text-base'>{description}</p>
    <div className='mt-5 flex flex-col sm:flex-row justify-center lg:justify-start gap-4'>
      <button onClick={() => handleMarkAsCard(id)} className='btn btn-accent'>Add to Cart</button>
      <button onClick={() => handleWishAdd(id)} className='btn btn-outline btn-accent'>Add to Wishlist</button>
    </div>
  </div>
</div>

    </div>
  )
}
