import React from 'react'
import image2 from '../../assets/image.png';
import image3 from '../../assets/arrow.jpg';
import image4 from '../../assets/veg.png';
import image5 from '../../assets/appstore.jpg';
import image6 from '../../assets/googleplay.jpg';


export default function Bannar() {
  return (
    <div className="hero bg-base-200 w-[1200px] h-[800px]">
     <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src={image2}
      className=" rounded-lg shadow-2xl w-[600px] h-[700px]mr-14" />
    <div className='ml-14 -mt-52'>
      <h4 className='bg-[#749B3F] w-52 border rounded-lg text-white font-bold'>Welcome to fresh Harvest</h4>
      <h1 className="text-5xl font-bold">Fresh Fruits and Vegetables</h1>
      <p className="py-6">
      At Fresh Harvests, we are passionate about providing you with the freshest and most flavorful fruits and vegetables
      </p>
      <button className="btn bg-[#FF6A1A] text-white">Shop Now</button>
    </div>
   
  </div>
  <div> 
    <img src={image3} className='mt-40 w-[55px] h[38px] mr-[900px]  ' alt="" />
    </div>
    <div className='flex w-[300px] h-[150px] mt-64 bg-[#EBEBEB] mr-[500px] broder rounded-md gap-4 ' >
      <div className='mt-5 pl-2'>
        <p className='text-[#176D38] font-bold'>Special Offer</p>
        <h3 className='font-bold'>Fresh Salad</h3>
        <p><span className='text-[#176D38] font-bold'>Up to</span> <strong>70%</strong> off</p>
        
       <p className='bg-[#176D38] text-white border rounded-lg font-bold' > CODE : <span className='text-[#FAC714]'>FRESH25</span></p>
        </div>
        <div>
          <img src={image4} alt="" />
        </div>
        
     
    </div>

   <div className='mt-[500px] mr-[770px]'>
    <p>Download App:</p>
    <div className='flex'>
      <img src={image5} alt="" />
      <img src={image6} alt="" />
    </div>
   </div>



</div>
  )
}
