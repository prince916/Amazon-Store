import React from 'react'
import logo from "../../images/logo.png";
import CartIcon from "../../images/CartIcon.gif";
import Image from 'next/image';
import { BiCaretDown } from "react-icons/bi";
import { SlLocationPin } from "react-icons/sl";
import { HiOutlineSearch } from "react-icons/hi";

const Header = () => {
  return (
    <div className="w-full h-20 bg-amazon_blue text-lightText sticky top-0 z-50">
      <div className="h-full w-full mx-auto inline-flex items-center justify-between gap-1 mdl:gap-3 px-4">
        {/* logo */}
        <div className='px-2 border border-transparent hover:border-white cursor-pointer
        duration-300 flex items-center justify-center h-[70%]'>
          <Image className="w-28 object-cover mt-2" src={logo} alt='logoImg' />
        </div>
        {/* Delivery */}
        <div className='px-2 border border-transparent hover:border-white cursor-pointer
        duration-300 items-center justify-center h-[70%] hidden xl:inline-flex gap-1'>
          <SlLocationPin />
          <div className='text-sm font-bold'>
            <p>Deliver to</p>
            <p className='text-white font-bold uppercase'>Kolkata</p>
          </div>
        </div>
        {/* Searchbar */}
        <div className='flex-1 h-10 hidden md:inline-flex items-center justify-between relative'>
          <input className='w-full h-full rounded-md px-2 placeholder:text-sm text-base
          text-black border-[3px] border-transparent outline-none
          focus-visible:border-amazon_yellow' placeholder='search products here...' type='text' />
          <span className="w-12 h-full bg-amazon_yellow text-black text-2xl flex items-center justify-center absolute right-0 rounded-tr-md rounded-br-md">
            <HiOutlineSearch />
          </span>
        </div>
        {/* Signin */}
        <div className='text-xs text-gray-100 flex flex-col justify-center 
        px-2 cursor-pointer border border-transparent hover:border-white duration-300 h-[70%]'>
          <p>Hello, sign in</p>
          <p className='text-white font-bold flex items-center'>
            Accounts & Lists{" "}
            <span>
              <BiCaretDown />
            </span>
          </p>
        </div>
        {/* Favourites */}
        <div className='text-xs text-gray-100 flex flex-col justify-center 
        px-2 cursor-pointer border border-transparent hover:border-white duration-300 h-[70%]'>
          <p>Marked</p>
          <p className='text-white font-bold'>
            & Favourites
          </p>
        </div>
        {/* cart */}
        <div className='text-xs text-gray-100 flex flex-col justify-center 
        px-2 cursor-pointer border border-transparent hover:border-white duration-300 h-[70%]'>
          <Image className='w-[50px] h-full' src={CartIcon} alt='CartImg' />
        </div>
      </div>
    </div>
  )
}

export default Header