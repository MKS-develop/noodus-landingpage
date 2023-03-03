import React from 'react'
import { motion } from "framer-motion";
interface IProp {
    data: {
      img: string | undefined
      title: string | undefined
      description: string | undefined
    }
    customKey: number
}

let list_cols = [
    {
      img: "/images/2.svg",
      title: "Integra",
      description: "tu propia comunidad de pacientes y conéctala con tu Marketplace de servicios, productos   y de tus proveedores o aliados"
    },
    {
      img: "/images/3.svg",
      title: "Entrega",
      description: "apps y servicios de valor a tus pacientes para fidelizarlos y mantenerlos conectados y en constante interacción"
    },
    {
      img: "/images/1.svg",
      title: "Gestiona",
      description: "y monitorea la actividad de tu comunidad, ventas, servicios, solicitudes y otros indicadores claves de tu negocio"
    }
]

const ColComponent = ({data: prop, customKey: i}:IProp) => {

    const {img, title, description} = prop

    return(
      <motion.div 
      viewport={{ once: true }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ ease: "easeOut", duration: 0.5, delay: i }}
      className='flex justify-between items-start gap-5'>
        
        <div className="w-[12.5%]">
          <img src={img} className='w-full object-contain object-center'/>
        </div>
        <div className="w-[88.5%] flex flex-col justify-start items-start">
          <p className='font-bold text-secondary text-lg '>{title}</p>
          <p className='text-slate-500 text-base font-normal '>{description}</p>
        </div>
      </motion.div>
    )
}

function Values() {
  return (
    <div className='w-full px-[5%] my-[5rem] flex flex-col justify-center items-center gap-[5rem]'>
        <motion.p
        viewport={{ once: true }}
        initial={{ translateY: "2.5%", opacity: 0 }}
        whileInView={{ translateY: "0%", opacity: 1 }}
        transition={{
          ease: "easeInOut",
          duration: 0.5
        }}
        className='w-[70%] text-secondary text-4xl font-bold text-center'>Escala una comunidad próspera que funcione para tu negocio</motion.p>
        <div className="w-full grid grid-cols-3 mx-auto gap-10 relative px-[10%]">
          {list_cols.map((col, i)=> <ColComponent data={col} customKey={i}/> )}
        </div>
    </div>
  )
}

export default Values