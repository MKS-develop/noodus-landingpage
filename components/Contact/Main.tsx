import React, { FormEventHandler, useRef, useState } from 'react'
import { MdEmail } from 'react-icons/md'
import { IoIosSend } from 'react-icons/io'
import emailjs from '@emailjs/browser'
import { AiFillCheckCircle, AiFillCloseCircle } from 'react-icons/ai'

function Main() {

    const form = useRef<any>()
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        emailjs.sendForm('service_w27v64k', 'template_x9g192q', form.current, 
        'oE-PwvCO-iwKedSHI'
        //'772InehuZSa1PHUKO'
        ).then((result)=>{
            if(result.text === "OK"){
                console.log(result)
                setSuccess(true)
                setError(false)
            }else{
                console.log(result)
                setError(true)
                setSuccess(false)
            }
        }).catch((e)=>{
            console.log(e)
            setError(true)
            setSuccess(false)
        })
    }

    return (
        <div className='h-[75vh] flex justify-center items-center py-8 px-[20%] box-border gap-5'>
        {success && <div className='cursor-pointer absolute top-5 right-5 bg-white text-sm py-3 px-5 w-fit text-green-700 border rounded-md shadow-md flex gap-3 justify-start items-center' onClick={()=>{ setSuccess(false) }}>
            <AiFillCheckCircle size={25}/>
            <p className='text-slate-900'>Correo enviado exitosamente</p>
        </div>}
        {error && <div className='cursor-pointer absolute top-5 right-5 bg-white text-sm py-3 px-5 w-fit text-red-700 border rounded-md shadow-md flex gap-3 justify-start items-center' onClick={()=>{ setError(false) }}>
            <AiFillCloseCircle size={25}/>
            <p className='text-slate-900'>Ha ocurrido un error inesperado</p>
        </div>}
            <div className='w-1/2 h-full bg-secondary flex flex-col justify-between items-start rounded-2xl p-7 gap-5'>
                <p className='text-3xl font-semibold text-white'>Hola, envíanos un <span className='text-primary'>mensaje</span> para obtener ayuda en tu negocio.</p>
                <div className='text-base font-light text-white flex justify-start items-center gap-3'>
                    <MdEmail/>
                    <p>contacto@noodus.io</p>
                </div>
            </div>
            <form ref={form} onSubmit={(e)=> handleSubmit(e)} className='w-1/2 h-full bg-white flex flex-col justify-between items-start px-5 gap-5'>
                <div className='w-full h-auto flex flex-col justify-between items-start gap-5'>
                    
                    <div className='w-full flex flex-col justify-start items-start gap-1'>
                        <p className='input-label'>Pertenecemos a la siguiente área</p>
                        <select name="area" placeholder='Escribe tu nombre y apellido' className='input'>
                            <option>Selecciona tu área</option>
                            <option value={"Aseguradora"}>Aseguradora</option>
                            <option value={"Hospital"}>Hospital</option>
                            <option value={"Clínica privada"}>Clínica privada</option>
                            <option value={"Gobierno"}>Gobierno</option>
                            <option value={"Otra"}>Otra</option>
                        </select>
                    </div>
                    <div className='w-full flex flex-col justify-start items-start gap-1'>
                        <p className='input-label'>Tu nombre completo</p>
                        <input name="from_name" type='text' placeholder='Escribe tu nombre y apellido' className='input'/>
                    </div>
                    <div className='w-full flex flex-col justify-start items-start gap-1'>
                        <p className='input-label'>Tu correo electrónico</p>
                        <input name="from_email" type='email' placeholder='ejemplo@mail.com' className='input'/>
                    </div>
                    <div className='w-full flex flex-col justify-start items-start gap-1'>
                        <p className='input-label'>Tu mensaje</p>
                        <textarea name="message" placeholder='Nos aseguraremos de leerlo...' className='input'/>
                    </div>

                </div>
                <button type='submit' className='btn btn-primary btn-block'>
                    <IoIosSend/>
                    <p>Enviar mensaje</p>
                </button>
            </form>
        </div>
    )
}

export default Main