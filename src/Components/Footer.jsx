import React from 'react'
import {MdFacebook} from 'react-icons/md'
import {VscTwitter} from 'react-icons/vsc'
import {IoLogoInstagram} from 'react-icons/io'
const Footer = () => {
  return (
    <footer className='bg-primary py-12'>
      <div className="container mx-auto flex justify-between items-center">
        <p className='text-white text-center'>CopyRight &copy; Slim's Shop 2023. All right reserved.</p>
        <div className='w-[200px]  flex justify-evenly items-center '>
          <MdFacebook className='text-white text-sm'/>
          <VscTwitter className='text-white text-sm'/>
          <IoLogoInstagram className='text-white text-sm'/>
        </div>
      </div>
    </footer>
  )
}

export default Footer