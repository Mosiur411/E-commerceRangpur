import React from 'react'

export default function ButtonBar() {
    return (
        <main>
            <nav className="fixed max-h-20 bg-white bottom-0 inset-x-0 bg-cool-gray-500 text-xs text-gray-600 shadow-inner">
                <div className="max-w-screen-xl mx-auto lg:px-2 gap-x-4 flex justify-between overflow-x-scroll">
                    <a href="/" title="Price in Kenya" className="w-full block py-2 px-3 lg:pb-5 text-center hover:bg-gray-200 transition duration-300 nuxt-link-active">
                        <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-1 mx-auto">
                            <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                        Home
                    </a>
                    <a href="/page/brands" title="All brands" className="w-full block py-2 px-3 lg:pb-5 text-center hover:bg-gray-200 transition duration-300">
                        <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-1 mx-auto">
                            <path
                                d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                        </svg>
                        Brands
                    </a>
                    <a href="/page/categories" title="All categories" className="w-full block py-2 px-3 lg:pb-5 text-center hover:bg-gray-200 transition duration-300">
                        <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-1 mx-auto">
                            <path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                        Categories
                    </a>
                    <a href="/page/search" title="Search" className="w-full block py-2 px-3 lg:pb-5 text-center hover:bg-gray-200 transition duration-300">
                        <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-1 mx-auto">
                            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                        Search
                    </a>
                    <a href="/price-list" title="Price list" className="w-full block py-2 px-3 lg:pb-5 text-center hover:bg-gray-200 transition duration-300">
                        <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-1 mx-auto">
                            <path d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                        Pricelist
                    </a>
                    <a href="/user/liked" title="My likes" className="w-full block py-2 px-3 lg:pb-5 text-center hover:bg-gray-200 transition duration-300">
                        <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-1 mx-auto">
                            <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                        Liked
                    </a>
                    <a href="/user/cart" title="Price in Kenya" className="w-full block py-2 px-3 lg:pb-5 text-center hover:bg-gray-200 transition duration-300">
                        <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-1 mx-auto">
                            <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                        Cart
                    </a>
                </div>
            </nav>



        </main>
    )
}
