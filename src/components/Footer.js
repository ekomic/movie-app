import React from 'react'
// import {FaFacebook, FaTwitter, FaInstagram} from "@heroicons/react/outline"

const Footer = () => {
  return (
    <div className='w-full bg-zinc-700 text-gray-300 mt-24'>
      <div className='mx-auto pl-6 grid gap-4 grid-cols md:grid-cols-3 max-w-[50rem]'>
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
        <p>Follow our pages</p>
      
      </div>
      </div>
      <div className='container mt-10 pb-7'>
      <form>
        <h3 className='text-[1.1rem] mb-5 text-center tracking-wide'>Kindly Subscribe to our newsletter</h3>
        <input className='text-1xl text-black py-2 px-6 b-radius-md outline-none' type='text' placeholder="email address" />
        <button className='py-2 px-3 bg-yellow-700'>Subscribe</button>
      </form>
      </div>
    </div>
  )
}

export default Footer