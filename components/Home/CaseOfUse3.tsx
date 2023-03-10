import React from 'react'
import {AiOutlineCheck}from 'react-icons/ai'
import {motion}from 'framer-motion'

function CaseOfUse3() {

    let list = [
        "Configurar servicios de la comunidad (programas de cuidado y prevención, gamificación, planes, membresías, programa de fidelidad, contenidos, etc.)",
        "Administrar tu red de proveedores y servicios propios",
        "Monitorear la operación",
        "Generar indicadores de gestión y servicios"
    ]

    const Tile = ({ data }:any) => {
        return(
            <div className='w-full border-b flex gap-3 justify-start items-center py-3'>
                <div className="w-[2rem] h-[2rem] bg-secondary/30 text-secondary flex flex-col justify-center items-center text-base rounded-full">
                    <AiOutlineCheck/>
                </div>
                <p className='text-slate-500 text-base font-normal'>{data}</p>
            </div>
        )
    }

  return (
    <div className='w-full px-[5%] my-[5rem] flex justify-between items-center gap-10'>
        <motion.div 
        viewport={{ once: true }}
        initial={{ translateX: "-2.5%", opacity: 0 }}
        whileInView={{ translateX: "0%", opacity: 1 }}
        transition={{
          ease: "easeInOut",
          duration: 0.5
        }}
        className="w-1/2 flex flex-col justify-start items-start gap-8">
            <p className='text-secondary text-4xl font-bold'>Administra, monitorea y recibe los Kpi’s de la operación de tu comunidad y tus servicios</p>
            <p className='text-slate-500 text-base font-normal'>Noodus habilita un panel de control para administrar y monitorear la operación y los servicios</p>
            <div className="w-full flex flex-col justify-start items-start">
                {list.map(value => <Tile data={value}/> )}
            </div>
            
        </motion.div>
        <motion.div 
        viewport={{ once: true }}
        initial={{ translateX: "2.5%", opacity: 0 }}
        whileInView={{ translateX: "0%", opacity: 1 }}
        transition={{
          ease: "easeInOut",
          duration: 0.5
        }}
        className="w-1/2 h-[70vh] bg-purple-800 rounded-xl p-5">
            <img src="/images/use3.png" className="w-full h-full object-contain object-center"/>
        </motion.div>
    </div>
  )
}

export default CaseOfUse3