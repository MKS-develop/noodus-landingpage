import Link from 'next/link'
import React from 'react'
import { AiFillInstagram, AiFillFacebook, AiFillLinkedin } from "react-icons/ai";

function Footer() {
  return (
    <div className='w-full bg-white flex justify-between items-center relative border-t p-[2rem_5%]'>
      <img src='./images/logo.png' className='w-[9rem]'/>
      <div className="w-fit flex justify-between items-center gap-5">
        <Link className='transition font-normal hover:font-semibold text-secondary text-sm' href={"/"}>Nosotros</Link>
        <Link className='transition font-normal hover:font-semibold text-secondary text-sm' href={"/"}>Contáctanos</Link>
      </div>
      <div className="w-fit flex justify-between items-center gap-5">
        <Link className='transition font-normal hover:font-semibold text-secondary text-2xl' href={"/"}>
          <AiFillInstagram/>
        </Link>
        <Link className='transition font-normal hover:font-semibold text-secondary text-2xl' href={"/"}>
          <AiFillFacebook/>
        </Link>
        <Link className='transition font-normal hover:font-semibold text-secondary text-2xl' href={"/"}>
          <AiFillLinkedin/>
        </Link>
      </div>
    </div>
  )
}

export default Footer