import { useRouter } from 'next/router'
import React, { useState } from 'react'
import ButtonBar from './ButtonBar'
import Footer from './Footer'
import Navbar from './Navbar'

export default function Layout({ children }) {
    const router = useRouter()
    const handel = router.query
    const dashboard = router.asPath
    if (!dashboard) {
        return
    }

    let content;

    if (dashboard === '/admin') {
        content = <div>hi</div>
    } else {
        content = <div>
            <Navbar />
            {children}
            <Footer />
            <ButtonBar />
        </div>
    }

    return (
        <div className='bg-[#F1F1F1]'>
            {content}
        </div>
    )
}
