import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import { getStoredAddList, getStoredWistList } from '../../utility/addtodb'
import Product from '../Product/Product';

export default function ListedItem() {
     const[cardList,setCardList]=useState([])
    const allitem = useLoaderData();


    useEffect(()=>{
        const storedAddList =getStoredAddList();
        const storedAddListInt= storedAddList.map(pid =>parseInt(pid))
        console.log(storedAddList,storedAddListInt,allitem)
        const cardAllList = allitem.filter(product =>storedAddListInt.includes(product. id))
        setCardList(cardAllList)
    },[])

    const[wishlist,setWishlist]=useState([])
    const allwish =useLoaderData();

    useEffect(()=>{
        const storedWishList= getStoredWistList();
        const storedWishListInt=storedWishList.map(pid=>parseInt(pid))
        const wishItemList =allwish.filter(product=>storedWishListInt.includes(product. id))
        setWishlist(wishItemList)
    },[])
  return (
    <div>
      
      <div role="tablist" className="tabs tabs-lifted">
  <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Card" />
  <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
    Card List:{cardList.length}

    <h2 className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20'>
        {
            cardList.map(product=><Product product={product} key={product.id}></Product>)
        }
    </h2>
  </div>

  <input
    type="radio"
    name="my_tabs_2"
    role="tab"
    className="tab"
    aria-label="Wish"
    defaultChecked />
  <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
  Wish List:{wishlist.length}
  <h2 className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20'>

    {
        wishlist.map(product=><Product product={product} key={product.id}></Product>)
    }
  </h2>
  </div>

  
</div>
    </div>
  )
}
