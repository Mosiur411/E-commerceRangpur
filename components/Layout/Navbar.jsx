import { AiOutlineDown, AiOutlineSearch } from "react-icons/ai";
import Link from 'next/link'
import { useState } from "react";
import BrandSearch from "../Shared/Search/BrandSearch";
import CategoriesSearch from "../Shared/Search/CategoriesSearch";
import Image from 'next/image'
import { useSearchProductQuery } from "../../app/features/api/ProductControl";

export default function Navbar() {
    const [Brand, setBrand] = useState(false)
    const [Categories, setCategories] = useState(false)
    const [search, search_modal] = useState()
    const { data: SearchData } = useSearchProductQuery(search)

    return (
        <>
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
                                            {/* <span className="block truncate text-gray-400">Quick search / preview</span>
                                        <AiOutlineSearch /> */}
                                        </input>
                                    </div>
                                </div>
                            </div>
                            <nav className="hidden lg:flex space-x-1 text-white text-xs">
                                <div className="inline-flex flex-col" onMouseOver={() => setBrand(true)} onMouseLeave={() => setBrand(false)}>
                                    <button aria-haspopup="true" aria-label="Brands menu" className="rounded-md font-medium py-2 px-4 text-sm hover:bg-warm-gray-500 hover:text-gray-700 flex items-center">
                                        <p>Brands</p>
                                        <AiOutlineDown />
                                    </button>
                                    <div className="absolute top-10 ">
                                        {
                                            Brand && <BrandSearch />
                                        }

                                    </div>
                                </div>
                                <div onMouseOver={() => setCategories(true)} onMouseLeave={() => setCategories(false)} className="inline-flex flex-col">
                                    <button aria-haspopup="true" aria-label="Categories menu" className="rounded-md font-medium py-2 px-4 text-sm hover:bg-warm-gray-500 hover:text-gray-700 flex items-center">
                                        <p>Categories</p>
                                        <AiOutlineDown />
                                    </button>
                                    <div className="absolute top-12">
                                        {
                                            Categories && <CategoriesSearch />
                                        }

                                    </div>
                                </div>
                                <Link href="/user/cart" title="Shopping cart" className="rounded-md font-medium py-2 px-4 text-sm hover:bg-warm-gray-500 hover:text-gray-700">Cart </Link >
                                <div className="inline-flex flex-col">
                                    <button aria-haspopup="true" aria-label="User profile menu" className="rounded-md font-medium py-2 px-4 text-sm hover:bg-warm-gray-500 hover:text-gray-700 flex items-center">
                                        <p className="line-clamp-1">Account</p>
                                        <AiOutlineDown />
                                    </button>

                                </div>
                            </nav>
                            <div className="flex items-center space-x-1">
                                <Link href="tel:+254718794014" title="Call us" className="text-white text-sm font-medium hidden lg:block hover:bg-warm-gray-500 hover:text-gray-700 p-2 rounded-md"><span className="line-clamp-1">0718 794 014</span></Link >
                                <Link href="https://wa.me/254718794014" rel="external nofollow noopener noreferrer" target="_blank" title="Message us on WhatsApp" className="hover:bg-gray-800 rounded-md w-8 h-8 flex items-center justify-center">
                                    <picture placeholder="" className="cursor-pointer hover:opacity-80 text-transparent">

                                        <img srcSet="https://api.priceinkenya.com/images/whatsapp.svg" width="21" height="21" alt="Whatsapp" />
                                    </picture>
                                </Link >
                            </div>
                        </div>
                    </div>
                </header>
            </div>
            {/* ================ search data ============= */}
            {search && <div className="w-[384px] h-[500px] bg-white shadow-md overflow-y-scroll overflow-x-hidden absolute top-[41px] left-[24.7%] rounded z-50 p-2">

                {
                    SearchData?.map(data => <div key={data?._id} className="flex justify-start items-center gap-3 cursor-pointer mb-2">
                        <Image src={data?.img} className="rounded-full" width={40} height={40} alt="Image" />
                        <Link href={`/product/${data?.model}`} onClick={() => search_modal()}>{data?.name} </Link>

                    </div>)
                }

            </div>}


        </>
    )
}
