import React, { useEffect, useState } from 'react'
import Blog from '../Blog/Blog'

export default function Blogs() {
    const [blogs,setBlogs] =useState([])

    useEffect(()=>{
        fetch('./garden.json')
        .then(res=>res.json())
        .then(data=> setBlogs(data))
    },[])
      return (
    <div>
      <div className='text-center justify-center'>
         <p className='text-[#749B3F] bg-slate-300 w-[120px] text-center ml-[515px]  mt-[140px] font-bold border rounded-md'>Our Blog</p>
         <p>blog:{blogs.length}</p>
         
         <h2 className='font-bold text-3xl'>Fresh Harvest Blogs</h2>
         <p className='mt-3'>Welcome to the Fresh Harvest Blog, your go-to resource for all things related to fresh produce, healthy eating, and culinary inspiration.</p>
         </div>

       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {

            blogs.map(blog=><Blog blog={blog} key={blog.id}></Blog>)
        }
       </div>
    </div>
  )
}
