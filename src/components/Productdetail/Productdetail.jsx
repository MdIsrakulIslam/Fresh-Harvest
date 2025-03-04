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
        <div className='flex gap-14'>
        <div>
        <img src={image_url} className='w-[566px] h-[566px]' alt="" />
        </div>
       <div>
         <h2 className='font-bold text-6xl'>{name}</h2>
         <div className="rating mt-4 gap-3">
                <input type="radio" name="rating-4" className="mask mask-star-2 bg-[#FFB848]" />
                <input type="radio" name="rating-4" className="mask mask-star-2 bg-[#FFB848]"/>
                <input type="radio" name="rating-4" className="mask mask-star-2 bg-[#FFB848]" />
                <input type="radio" name="rating-4" className="mask mask-star-2 bg-[#FFB848]" />
                <input type="radio" name="rating-4" className="mask mask-star-2 bg-[#FFB848]" />
                5.0 (1 review)
                </div>
        <p className='text-[#FF6A1A] font-bold mt-4'>${price}/kg</p>
        <p className='mt-4'>{description}</p>
        <div className='mt-5'>
        <button onClick={()=>handleMarkAsCard(id)} className="btn btn-accent mr-5">Add to card</button>
        <button onClick={()=>handleWishAdd(id)} className="btn btn-accent mr-5">Add to wishlist</button>
        </div>
        </div>
        
    </div>

    </div>
  )
}
