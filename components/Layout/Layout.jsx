import React from 'react'
import ButtonBar from './ButtonBar'
import Footer from './Footer'
import Navbar from './Navbar'

export default function Layout({ children }) {
    return (
        <div className='bg-[#F1F1F1]'>
            <Navbar />
            {children}
            <Footer />
            <ButtonBar />
        </div>
    )
}
