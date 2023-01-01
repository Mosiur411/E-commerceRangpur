import React from 'react'
import ButtonBar from './Buttonbar'
import Navbar from './Navbar'

export default function Layout({ children }) {
    return (
        <>
            <Navbar></Navbar>
            {children}
            <ButtonBar></ButtonBar>
        </>
    )
}
