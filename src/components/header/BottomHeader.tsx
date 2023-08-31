import React from 'react'
import { LuMenu } from 'react-icons/lu'

const BottomHeader = () => {
  return (
    <div className='w-full h-10 bg-amazon_light text-sm text-white flex items-center px-4'>
      <p className='flex items-center gap-1 h-8 border border-transparent
      hover:border-white cursor-pointer duration-300 px-2'>
        <LuMenu />All
      </p>
      <p className='hidden md:inline-flex items-center gap-1 h-8 border border-transparent
      hover:border-white cursor-pointer duration-300 px-2'>
        Today's deals
      </p>
      <p className='hidden md:inline-flex items-center gap-1 h-8 border border-transparent
      hover:border-white cursor-pointer duration-300 px-2'>
        Customer Service
      </p>
      <p className='hidden md:inline-flex items-center gap-1 h-8 border border-transparent
      hover:border-white cursor-pointer duration-300 px-2'>
        Registry
      </p>
      <p className='hidden md:inline-flex items-center gap-1 h-8 border border-transparent
      hover:border-white cursor-pointer duration-300 px-2'>
        Gift Card
      </p>
      <p className='hidden md:inline-flex items-center gap-1 h-8 border border-transparent
      hover:border-white cursor-pointer duration-300 px-2'>
        Sell
      </p>
      <p className='hidden md:inline-flex items-center gap-1 h-8 border border-transparent text-amazon_yellow
      hover:border-red-600 hover:text-red-400 cursor-pointer duration-300 px-2'>
        Sign Out
      </p>
    </div>
  )
}

export default BottomHeader