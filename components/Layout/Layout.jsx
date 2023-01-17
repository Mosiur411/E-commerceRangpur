import { useRouter } from 'next/router'
import React, { useState } from 'react'
import Sidebar from '../Pages/Dashboard/Sidebar'
import AdminNavbar from './AdminNavbar'
import ButtonBar from './ButtonBar'
import Footer from './Footer'
import Navbar from './Navbar'

export default function Layout({ children }) {
    const router = useRouter()
    const dashboard = router.asPath
    console.log("router", router)
    if (!dashboard) {
        return
    }
    let content;
    if (dashboard === '/admin') {
        content = <div >
            <AdminNavbar />
            <div className="flex">
                <div>
                    <Sidebar />
                </div>
                <div className="flex-1">
                    <main>{children}</main>
                </div>
            </div>

        </div>
    } else if (dashboard === '/admin/addproduct') {
        content = <div >
            <AdminNavbar />
            <div className="flex">
                <div>
                    <Sidebar />
                </div>
                <div className="flex-1">
                    <main>{children}</main>
                </div>
            </div>

        </div>
    }
    else {
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
