import React from 'react'
import image1 from '../../assets/human.png'
import image2 from '../../assets/Logo.jpg'

export default function Aboutus() {
  return (
    <div className='flex flex-col lg:flex-row mt-10 gap-10 py-5 px-4 sm:px-6 lg:px-8 items-center'>
  <div className='relative w-full lg:w-auto'>
    <img src={image1} className='w-full lg:w-[1080px] h-[270px] sm:h-[370px] lg:h-[470px]' alt='' />
    <div className='flex bg-white w-[150px] h-[40px] p-2 absolute bottom-10 left-10 sm:left-20 lg:left-60 shadow-md'>
      <img src={image2} className='w-[30px] h-[28px]' alt='' />
      <p className='w-[120px] h-[13px]'>Fresh Harvests</p>
    </div>
  </div>
  <div className='text-center lg:text-left mt-10 lg:mt-44 max-w-lg'>
    <p className='text-[#749B3F] bg-slate-300 w-[90px] font-bold border rounded-md text-center mx-auto lg:mx-0'>About us</p>
    <h2 className='font-bold text-2xl sm:text-3xl mt-3'>About Fresh Harvest</h2>
    <p className='mt-5 text-sm sm:text-base'>Welcome to Fresh Harvest, your premier destination for high-quality and fresh produce. We are passionate about providing you with the finest fruits, vegetables, and salad ingredients to nourish your body and delight your taste buds. With a commitment to excellence, sustainability, and customer satisfaction, Fresh Harvest is here to revolutionize your grocery shopping experience.</p>
    <button className='btn text-[#FF6A1A] border border-[#FF6A1A] mt-4'>Read More</button>
  </div>
</div>

  )
}
