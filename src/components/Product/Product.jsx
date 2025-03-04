import React from 'react'
import { Link } from 'react-router-dom';

export default function Product({product}) {
    const{ image_url,name,price,id}=product;

  return (
    <div className="card bg-base-100  shadow-xl">
  <figure className="px-10 pt-10">
    <img
      src={image_url}
      alt="Shoes"
      className="rounded-xl h-[208px] w-[258px]" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <p>${price}/kg</p>
    <Link to={`/products/${id}`}>
    <div className="card-actions">
      <button className="btn ">Add to Cart</button>
    </div>
    </Link>
  </div>
</div>
        
  )
}
