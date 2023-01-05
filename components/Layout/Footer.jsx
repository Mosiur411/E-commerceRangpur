import { GoLocation } from "react-icons/go";
import { IoMdCall } from "react-icons/io";
import { MdMarkEmailRead } from "react-icons/md";
import { BiAlarm } from "react-icons/bi";
import Link from 'next/link'
import Image from "next/image";

export default function Footer() {
    return (
        <footer
            className="mt-5 py-10 pb-24 text-white  text-opacity-75 text-sm bg-no-repeat bg-cover bg-left-bottom footer_bg_image"
        >
            <div className="max-w-screen-xl mx-auto space-y-8 px-2">
                <div className="grid md:grid-cols-2 gap-2 gap-y-8">
                    <div className="space-y-3">
                        <div className="w-max">
                            <Link href="/" title="Price in Kenya" className="nuxt-link-active">
                                <picture placeholder="" className="cursor-pointer hover:opacity-80 text-transparent">
                                    <Image srcSet="https://api.priceinkenya.com/images/app-logo-desktop.svg" width="233" height="38" alt="Price in Kenya" />
                                </picture>
                            </Link >
                        </div>
                        <p>
                            Established as a reviews website in mid 2012, Price in Kenya is the market leader for home electronics. 10 years on, we remain your independent and trusted online and physical store serving Nairobi, Mombasa, Kisumu and
                            most Kenyan towns.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            <Image src="https://api.priceinkenya.com/media/126934/conversions/app-gallery-original.webp" width="233" height="38" alt="Price in Kenya" />
                            <Image src="https://api.priceinkenya.com/media/126935/conversions/play-store-original.webp" className="w-[130px]" width="233" height="38" alt="Price in Kenya" />
                            <Image src="https://api.priceinkenya.com/media/126936/conversions/apple-store-original.webp" className="w-[130px]" width="233" height="38" alt="Price in Kenya" />

                        </div>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center space-x-5">
                            <GoLocation />
                            <address>
                                <Link href="https://g.page/r/CYlWdPoEKvZDEAE" rel="external nofollow noopener noreferrer" target="_blank" title="Find us on Google Maps!" className="hover:underline">
                                    Bihi Towers, Ground Floor, Suite G8, Moi Avenue, Nairobi CBD, Kenya
                                </Link >
                            </address>
                        </div>
                        <div className="flex items-center space-x-5">
                            <IoMdCall />
                            <div>
                                <Link href="tel:+254718794014" title="Call us" className="hover:underline not-italic">0718 794 014</Link ><br />
                                <Link href="tel:+254711102363" title="Call us" className="hover:underline not-italic">0711 102 363</Link ><br />
                            </div>
                        </div>
                        <div className="flex items-center space-x-5">
                            <MdMarkEmailRead />
                            <div>
                                <Link href="mailto:sales@priceinkenya.com" title="Email us" className="hover:underline not-italic">sales@priceinkenya.com - customer care</Link ><br />
                                <Link href="mailto:admin@priceinkenya.com" title="Email us" className="hover:underline not-italic">admin@priceinkenya.com - any website issue</Link >
                            </div>
                        </div>
                        <div className="flex items-center space-x-5">
                            <BiAlarm />
                            <div>
                                <p>Monday - Saturday 8am - 7pm</p>
                                <p>Saturdays 9am - 6pm</p>
                                <p>Closed Sundays</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 gap-2 border-t border-gray-300 items-center py-2 text-xs font-normal">
                    <div className="flex flex-wrap gap-2"><p>Copyright © 2012-2022 Price in Kenya. All rights reserved.</p></div>
                    <nav className="flex flex-wrap gap-y-2 gap-x-3 lg:gap-x-5">
                        <Link href="/user/cart" className="hover:underline">Shopping cart</Link > <Link href="/user/liked" className="hover:underline">Likes</Link > <Link href="/user/viewed" className="hover:underline">Recently viewed</Link >
                        <Link href="/compares" className="hover:underline">Latest comparisons</Link > <Link href="/price-list" className="hover:underline">Price list</Link >
                    </nav>
                </div>
            </div>
        </footer>

    )
}
