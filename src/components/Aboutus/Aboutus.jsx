import React from 'react'
import image1 from '../../assets/human.png'
import image2 from '../../assets/Logo.jpg'

export default function Aboutus() {
  return (
    <div className='flex mt-10 gap-10 py-5'>
    <div>
    <img src={image1} className='w-[2080px] h-[470px] relative' alt="" />
    <div className='flex bg-white w-[150px] h-[40px] p-2 absolute -mt-40 ml-60'>
      <img src={image2}  className='w-[30px] h-[28px]' alt="" />
      <p className='w-[120px] h-[13px]'>Fresh Harvests</p>
    </div>
    </div>
    <div className='mt-44'>
    <p className='text-[#749B3F] bg-slate-300 w-[90px] font-bold border rounded-md text-center'>About us</p>
    <h2 className='font-bold text-3xl mt-3'>
    About Fresh Harvest
    </h2>
    <p className='mt-5'>Welcome to Fresh Harvest, your premier destination for high-quality and fresh produce. We are passionate about providing you with the finest fruits, vegetables, and salad ingredients to nourish your body and delight your taste buds. With a commitment to excellence, sustainability, and customer satisfaction, Fresh Harvest is here to revolutionize your grocery shopping experience.</p>
    <button className="btn text-[#FF6A1A] border border-[#FF6A1A]">Read More</button>

    </div>

    </div>
  )
}
