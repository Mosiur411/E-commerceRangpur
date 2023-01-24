import { useRouter } from 'next/router'
import React, { useState } from 'react'
import Sidebar from '../Pages/Dashboard/Sidebar'
import AdminNavbar from './AdminNavbar'
import ButtonBar from './ButtonBar'
import Footer from './Footer'
import Login from './Login'
import Navbar from './Navbar'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
export default function Layout({ children }) {
    const [user] = useAuthState(auth);

    const router = useRouter()
    const dashboard = router.asPath
    if (!dashboard) {
        return
    }
    let content;
    if (dashboard === '/admin') {
        content = <div >
            {user?.accessToken ? <div>
                <AdminNavbar />
                <div className="flex">
                    <div>
                        <Sidebar />
                    </div>
                    <div className="flex-1 bg-slate-400">
                        <main>{children}</main>
                    </div>
                </div>
            </div> : <Login />}

        </div>
    } else if (dashboard === '/admin/addproduct') {
        content = <div >
            <AdminNavbar />
            <div className="flex">
                <div>
                    <Sidebar />
                </div>
                <div className="flex-1 bg-slate-700">
                    <main>{children}</main>
                </div>
            </div>

        </div>
    } else if (dashboard === '/admin/category') {
        content = <div >
            <AdminNavbar />
            <div className="flex">
                <div>
                    <Sidebar />
                </div>
                <div className="flex-1 ">
                    <main>{children}</main>
                </div>
            </div>

        </div>
    } else if (dashboard === '/admin/brand') {
        content = <div >
            <AdminNavbar />
            <div className="flex">
                <div>
                    <Sidebar />
                </div>
                <div className="flex-1 ">
                    <main>{children}</main>
                </div>
            </div>

        </div>
    } else if (dashboard === '/admin/homeporductadd') {
        content = <div >
            <AdminNavbar />
            <div className="flex">
                <div>
                    <Sidebar />
                </div>
                <div className="flex-1 ">
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
