
import React from 'react'
import { MoveRight } from 'lucide-react';
import image1 from '../../assets/garden1.jpg'
import image2 from '../../assets/garden2.jpg'
import image3 from '../../assets/garden3.jpg'

export default function Blog({blog}) {
    const{name, image, date,description,button}=blog
  return (
    <div className="card bg-base-100  shadow-xl mt-10">
  <figure>
    <img
      src={image1}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <p>{date}</p>
    <h2 className="card-title">{description}</h2>
    
    <div className="card-actions ">
      <button className=" text-[#FF6A1A] flex gap-2 font-bold">{button}<MoveRight /></button>
    </div>
  </div>
</div>
  )
}
