import React from 'react'
import { motion } from "framer-motion";

function Header() {
  return (
    <div className='w-full sm:h-[80vh] md:h-[90vh] lg:h-[90vh] relative flex flex-wrap justify-between items-center bg-white px-[5%] overflow-hidden'>
        <motion.div 
        initial={{ translateX: "-2.5%", opacity: 0 }}
        animate={{ translateX: 0, opacity: 1 }}
        transition={{
          ease: "easeInOut",
          duration: 0.5
        }}
        className='sm:w-full md:w-[40%] lg:w-[40%] h-fit flex flex-col justify-start items-start gap-5'>
            <p className="text-secondary text-4xl font-bold">Conecta, integra y gestiona tu comunidad de salud</p>
            <p className="text-slate-500 text-base font-normal">La experiencia del paciente es la diferencia. No se trata solo de satisfacer a tus pacientes, sino de integrar el servicio en tu estrategia de crecimiento y monetización.</p>
            <div className="w-full flex justify-start items-center gap-5">
                <div className='btn btn-outline-secondary'>Ver demo</div>
                <div className='btn btn-primary'>Contáctanos</div>
            </div>
        </motion.div>
        <motion.div 
        initial={{ translateX: "2.5%", opacity: 0 }}
        animate={{ translateX: 0, opacity: 1 }}
        transition={{
          ease: "easeInOut",
          duration: 0.5
        }}
        className='sm:w-full md:w-[60%] lg:w-[60%] h-full flex flex-col justify-center items-center z-10'>
            <div className="w-full h-full relative">
                <img src='./images/header-img.png' className='w-full h-full object-contain object-center'/>
            </div>
        </motion.div>
        <img src='./images/header-gradient.svg' className='w-1/2 h-full object-contain object-center absolute right-0 top-0 z-0'/>

    </div>
  )
}

export default Header