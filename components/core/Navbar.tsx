import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div className='w-full bg-white flex justify-between items-center fixed top-0 left-0 z-20 border-b p-[0.7rem_5%]'>
      <img src='./images/logo.png' className='w-[9rem]'/>
      <div className="w-[50%] flex justify-between items-center">
        <Link className='transition font-normal hover:font-semibold text-secondary text-sm' href={"/"}>Noodus</Link>
        <Link className='transition font-normal hover:font-semibold text-secondary text-sm' href={"/"}>Casos de uso</Link>
        <Link className='transition font-normal hover:font-semibold text-secondary text-sm' href={"/"}>Soluciones</Link>
        <Link className='transition font-normal hover:font-semibold text-secondary text-sm' href={"/"}>Contáctanos</Link>
        <div className="btn btn-outline-primary">Ver demo</div>
      </div>
    </div>
  )
}

export default Navbar