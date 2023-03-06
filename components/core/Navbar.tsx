import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div className='w-full bg-white flex justify-between items-center fixed top-0 left-0 z-20 border-b p-[0.7rem_5%]'>
      <Link href={"/"}>
        <img src='./images/logo.png' className='w-[9rem]'/>
      </Link>
      <div className="w-[20%] flex justify-between items-center">
        <Link className='transition font-normal hover:font-semibold text-secondary text-sm' href={"/"}>Noodus</Link>
        <Link className='btn btn-primary' href={"/contact"}>Contáctanos</Link>
      </div>
    </div>
  )
}

export default Navbar