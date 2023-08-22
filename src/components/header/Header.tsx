import React from 'react'
import logo from "../../images/logo.png";
import Image from 'next/image';

const Header = () => {
  return (
    <div>
        <div>
            <Image className="" src={logo} alt='logoImg'/>
        </div>
    </div>
  )
}

export default Header