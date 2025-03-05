import React from 'react'
import image1 from '../../assets/mirror.png'

export default function Testimonial() {
  return (
    <div>
        <div className='text-center px-4 sm:px-6 lg:px-8 mt-20'>
  <p className='text-[#749B3F] bg-slate-300 w-[120px] font-bold border rounded-md text-center mx-auto'>Testimonial</p>
  <h2 className='font-bold text-2xl sm:text-3xl mt-3'>What Our Customers Say</h2>
  <p className='mt-3 max-w-md mx-auto'>Don't just take our word for it—here's what some of our customers have to say about their experience with Fresh Harvest:</p>
</div>
<div className='flex flex-col lg:flex-row mt-10 gap-10 items-center px-4 sm:px-6 lg:px-8'>
  <div>
    <img src={image1} className='w-[250px] sm:w-[287px] h-[350px] sm:h-[400px] mt-10 lg:mt-20' alt='' />
  </div>
  <div className='bg-slate-100 w-full lg:w-[650px] border rounded-md p-6 sm:p-8'>
    <p className='text-sm sm:text-base'>"I absolutely love Fresh Harvest! The quality of their produce is outstanding. It's always fresh, flavorful, and delicious. The convenience of ordering online and having it delivered to my doorstep saves me so much time. Fresh Harvest has become my go-to for all my fruit and vegetable needs."</p>
    <p className='mt-4 sm:mt-8 font-bold'>Jane Doe - <span className='font-normal'>Professional chef</span></p>
  </div>
</div>
</div>
  )
}
