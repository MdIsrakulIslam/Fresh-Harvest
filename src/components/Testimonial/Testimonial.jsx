import React from 'react'
import image1 from '../../assets/mirror.png'

export default function Testimonial() {
  return (
    <div>
        <div className='text-center justify-center'>
         <p className='text-[#749B3F] bg-slate-300 w-[120px] text-center ml-[515px]  mt-[140px] font-bold border rounded-md'>Testimonial</p>
       
         <h2 className='font-bold text-3xl'>What Our Customers Say</h2>
         <p className='mt-3 w-[300px] ml-[420px]'>Don't just take our word for it—here's what some of our customers have to say about their experience with Fresh Harvest:</p>
         </div>
         <div className='flex mt-10 gap-20 '>
             <div>
             <img src={image1} className='w-[287px] h-[400px] mt-20 ml-10' alt="" />
            </div>
             <div className='mt-40 bg-slate-100 w-[650px] h-[200px] border rounded-md p-8'>
             
             
             <p className='mt-1 w-[580px]'>"I absolutely love Fresh Harvest! The quality of their produce is outstanding. It's always fresh, flavorful, and delicious. The convenience of ordering online and having it delivered to my doorstep saves me so much time. Fresh Harvest has become my go-to for all my fruit and vegetable needs.</p>
             <p className='mt-8'>
               <strong>   Jane Doe -</strong> Professional chef
             </p>
         
             </div>
         
             </div>
    </div>
  )
}
