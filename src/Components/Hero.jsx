import React from 'react'
import { Link } from 'react-router-dom'
// import Post from '../Images/postt.png'

const Hero = () => {
  return (
    <section className='h-[600px] bg-hero bg-no-repeat bg-cover bg-center py-24'>
      <div className="container mx-auto flex justify-around h-full">
        <div className='flex flex-col justify-center'>
          <div className='font-semibold flex items-center uppercase text-white'>
            <div className='w-20 h-[2px] bg-orange-700 mr-3'></div>New Trend
          </div>
          <h1 className='text-[70px] leading-[1.2] font-light bg-gradient-to-r from-blue-900 via-orange-700 to-cyan-800 text-transparent bg-clip-text'>SLIM BRAND STYLES <br/>
          <span className='font-bold text-black'>UNISEX</span>
          </h1>
          <Link to={'/'} className='uppercase self-start font-bold border-b-2 border-white bg-gradient-to-r from-orange-600 via-purple-900 to-cyan-800 text-transparent bg-clip-text'>DISCOVER MORE</Link>
        </div>
        <div className=''>
          {/* <img src={Post} alt=''/> */}
        </div>
      </div>
    </section>
  )
}

export default Hero