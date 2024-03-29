import Head from 'next/head'
import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

interface Props {
    title: string
    children: React.ReactNode
}

const Layout = (props:Props) => {
    const {title, children} = props
    return (
        <div className='h-fit'>
            <Head>
                <title>{`${title} - Noodus`}</title>
                <link rel="icon" href={'iso.png'} />
            </Head>
            <div className={`relative block w-full bg-white`}>
                <Navbar/>
                <div className="box-border mt-[4%]">
                    {children}
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Layout