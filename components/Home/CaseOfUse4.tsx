import React from 'react'
import {AiOutlineCheck}from 'react-icons/ai'

function CaseOfUse4() {

    let list = [
        "Publicación de servicios y productos",
        "Integración con pasarelas de pago",
        "Comunicaciones y promociones",
        "Calificación y gestión los proveedores",
        "Servicios adicionales de valor",
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
        <div className="w-1/2 flex flex-col justify-start items-start gap-8">
            <p className='text-secondary text-4xl font-bold'>Crea tu marketplace de servicios y productos, conectando tu comunidad</p>
            <p className='text-slate-500 text-base font-normal'>Noodus va mucho más allá que un marketplace, conectamos y entregamos servicios de valor para los tus usuarios y para tu red proveedores</p>
            <div className="w-full flex flex-col justify-start items-start">
                {list.map(value => <Tile data={value}/> )}
            </div>
            
        </div>
        <div className="w-1/2 h-[70vh] bg-primary rounded-xl"></div>
    </div>
  )
}

export default CaseOfUse4