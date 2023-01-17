import Link from 'next/link'
import React, { useState } from 'react'

export default function AdminNavbar() {
    const [search, search_modal] = useState()
    return (
        <div>
            <header className="py-1 bg-[#124d9d] shadow  z-10 sticky top-0">
                <div className="flex items-center max-w-screen-xl mx-auto px-2">
                    <button aria-expanded="false" aria-haspopup="true" aria-label="Main menu" className="lg:hidden text-white mr-3 sm:mr-0 px-1.5 py-1.5">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-6 h-6 block"><path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-6 h-6 hidden"><path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                    </button>
                    <div className="flex flex-auto lg:space-x-1 justify-between lg:justify-start items-center">
                        <div>
                            <Link href="/" title="Price in Kenya" className="nuxt-link-active">
                                <picture placeholder="" className="cursor-pointer hover:opacity-80 text-transparent">
                                    <img srcSet="https://api.priceinkenya.com/images/app-logo-desktop.svg" width="171" height="28" alt="Price in Kenya" />
                                </picture>
                            </Link >
                        </div>
                        <div className="hidden lg:flex flex-auto lg:px-3">
                            <div aria-label="Search" role="search" className="w-full max-w-sm lg:mx-auto text-gray-700 text-sm shadow-md relative">
                                <div className="inline-block relative w-full">
                                    <input
                                        onChange={(e) => search_modal(e.target.value)}
                                        type="text"
                                        placeholder="Quick search / preview"
                                        className="w-full max-w-sm flex text-left justify-between items-center px-3 py-2 text-black transition duration-100 ease-in-out border rounded-md shadow-sm focus:border-primary-100 focus:ring-2 focus:ring-primary-100 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed bg-white border-gray-300"
                                    >
                                    </input>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </header>
        </div>
    )
}
