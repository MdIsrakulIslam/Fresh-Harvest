import React from 'react';
import image2 from '../../assets/image.png';
import image3 from '../../assets/arrow.jpg';
import image4 from '../../assets/veg.png';
import image5 from '../../assets/appstore.jpg';
import image6 from '../../assets/googleplay.jpg';

export default function Bannar() {
  return (
    <div className="w-full bg-[#F5F5F5] py-10 px-5 lg:px-20 flex flex-col lg:flex-row items-center lg:items-start">
      {/* Left Section - Text & Offer */}
      <div className="lg:w-1/2 text-center lg:text-left">
        <h4 className='bg-[#749B3F] w-fit border rounded-lg text-white font-bold px-4 py-2 mx-auto lg:mx-0'>
          Welcome to Fresh Harvest
        </h4>
        <h1 className="text-4xl lg:text-6xl font-bold text-[#222] mt-4">
          Fresh Fruits and Vegetables
        </h1>
        <p className="py-4 text-gray-600 max-w-lg mx-auto lg:mx-0">
          At Fresh Harvest, we are passionate about providing you with the freshest and most flavorful fruits and vegetables.
        </p>
        <button className="bg-[#FF6A1A] text-white px-6 py-3 rounded-lg text-lg font-semibold">
          Shop Now
        </button>
      

        {/* Special Offer Section */}
        <div className='flex items-center bg-white shadow-lg p-4 rounded-lg mt-8 max-w-md mx-auto lg:mx-0'>
          <div>
            <p className='text-[#176D38] font-bold text-lg'>Special Offer</p>
            <h3 className='font-bold text-xl'>Fresh Salad</h3>
            <p className='text-lg'><span className='text-[#176D38] font-bold'>Up to</span> <strong>70%</strong> off</p>
            <p className='bg-[#176D38] text-white border rounded-lg font-bold inline-block px-3 py-1 mt-2'>
              CODE: <span className='text-[#FAC714]'>FRESH25</span>
            </p>
          </div>
          <div className='ml-4'>
            <img src={image4} alt="Fresh Salad" className='w-20 h-auto' />
          </div>
        </div>

        {/* Download App Section */}
        <div className='mt-10'>
          <p className='font-bold text-lg'>Download App:</p>
          <div className='flex gap-4 mt-2 justify-center lg:justify-start'>
            <img src={image5} alt="App Store" className='w-36' />
            <img src={image6} alt="Google Play" className='w-36' />
          </div>
        </div>
      </div>

      {/* Right Section - Image */}
      <div className="lg:w-1/2 flex justify-center mt-10 lg:mt-0 relative">
        <img
          src={image2}
          className="w-full max-w-lg h-auto rounded-lg shadow-2xl"
          alt="Fresh Harvest"
        />
        {/* Decorative Arrow */}
        
      </div>
    </div>
  );
}
