import React from 'react'
import Bannar from '../Bannar/Bannar'
import Products from '../../Products/Products'
import Aboutus from '../aboutus/aboutus'
import Testimonial from '../Testimonial/Testimonial'
import Blogs from '../Blogs/Blogs'

export default function Home() {
  return (
    <div>
        <Bannar></Bannar>
        <Products></Products>
        <Aboutus></Aboutus>
        <Testimonial></Testimonial>
        <Blogs></Blogs>
    </div>
  )
}
