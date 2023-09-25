import Image from 'next/image';
import React from 'react';
import logo from "../images/logo.png";

const Footer = () => {
  return (
    <div className='w-full h-20 bg-amazon_blue flex items-center justify-center text-white gap-3'>
      <Image className='w-24' src={logo} alt='logo' />
      <p>
        All Rights Reserved{" "}
        <a className='hover:text-white hover:underline decoration-[1px] 
            cursor-pointer duration-300' href="https:/reactbd.com" target='_blank'>@reactbd.com</a>
      </p>
    </div>
  )
}

export default Footer;