import React from 'react'
import logo from "../../images/logo.png";
import Image from 'next/image';

const Header = () => {
  return (
    <div className="w-full h-20 bg-amazon_blue text-lightText sticky top-0 z-50">
      <div className="h-full w-full mx-auto inline-flex items-center justify-between gap-1 mdl:gap-3 px-4">
        {/* logo */}
        <Image className="w-28 object-cover mt-1" src={logo} alt='logoImg' />
        {/* Delivery */}
        {/* Searchbar */}
        {/* Login */}
        {/* Favourites */}
        {/* cart */}
      </div>
    </div>
  )
}

export default Header