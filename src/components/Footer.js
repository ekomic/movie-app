import React from 'react'
import {FaFacebook, FaTwitter, FaInstagram} from "react-icons/fa"

const Footer = () => {
  return (
    <div className='w-full bg-zinc-700 text-gray-300 mt-24'>
      <div className='max-w-[1240px] mx-auto pl-6 grid gap-4 grid-cols-2 md:grid-cols-3'>
      <div className=''>
        <h6 className="text-2xl py-3 font-raleway">Explore</h6>
        <p className='text-[1rem]'>Stream millions of movies</p>
        
      </div>
      <div>
        <h6 className="text-2xl py-3 font-raleway">Help</h6>
        <p>Check our FAQs for any help</p>
      </div>
      <div>
        <h6 className="text-2xl py-3 font-raleway">Socials</h6>
       
        <div className='flex gap-7 items-center sm:w-[300px] pt-2 text-[20px]'>
        <FaFacebook/>
        <FaTwitter/>
        <FaInstagram/>
        </div>
      
      </div>
      </div>
      <div className='container justify-center align-items-center mt-10 pb-7'>
      <form>
        <h3 className='text-[1rem] mb-5 text-center tracking-wide uppercase'>Kindly Subscribe to our newsletter</h3>
        <input className='text-1xl rounded-l-md text-black py-2 px-6 b-radius-md outline-none' type='text' placeholder="email address" />
        <button className='py-2 px-3 shadow-md shadow-black bg-zinc-700 rounded-r-md hover:bg-yellow-700 transition delay-70 ease-in-out'>Subscribe</button>
      </form>
      </div>
    </div>
  )
}

export default Footer