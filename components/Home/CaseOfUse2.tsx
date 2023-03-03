import React from 'react'
import {AiOutlineCheck}from 'react-icons/ai'
import {motion}from 'framer-motion'

function CaseOfUse2() {

    let list = [
        "Servicios y productos",
        "Agenda y atención",
        "Órdenes de pedido",
        "Campañas, promociones y publicaciones",
        "Expediente médico",
        "Indicadores"
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
            <p className='text-secondary text-4xl font-bold'>Administra tus servicios y habilita a tus proveedores o aliados</p>
            <p className='text-slate-500 text-base font-normal'>Noodus provee un portal y app móvil para que tu y tu red de proveedores gestionen sus servicios e interactúen en la comunidad. Algunas funciones son:</p>
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
        className="w-1/2 h-[70vh] bg-secondary rounded-xl p-5">
            <img src="/images/use2.png" className="w-full h-full object-contain object-center"/>
        </motion.div>
    </div>
  )
}

export default CaseOfUse2