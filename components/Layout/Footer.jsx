import { GoLocation } from "react-icons/go";
import { IoMdCall } from "react-icons/io";
import { MdMarkEmailRead } from "react-icons/md";
import { BiAlarm } from "react-icons/bi";
export default function Footer() {
    return (
        <footer
            className="mt-5 py-10 pb-24 text-white  text-opacity-75 text-sm bg-no-repeat bg-cover bg-left-bottom footer_bg_image"
        >
            <div className="max-w-screen-xl mx-auto space-y-8 px-2">
                <div className="grid md:grid-cols-2 gap-2 gap-y-8">
                    <div className="space-y-3">
                        <div className="w-max">
                            <a href="/" title="Price in Kenya" className="nuxt-link-active">
                                <picture placeholder="" className="cursor-pointer hover:opacity-80 text-transparent">
                                    <img srcSet="https://api.priceinkenya.com/images/app-logo-desktop.svg" width="233" height="38" alt="Price in Kenya" />
                                </picture>
                            </a>
                        </div>
                        <p>
                            Established as a reviews website in mid 2012, Price in Kenya is the market leader for home electronics. 10 years on, we remain your independent and trusted online and physical store serving Nairobi, Mombasa, Kisumu and
                            most Kenyan towns.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            <img src="https://api.priceinkenya.com/media/126934/conversions/app-gallery-original.webp" className="w-[130px]" />
                            <img src="https://api.priceinkenya.com/media/126935/conversions/play-store-original.webp" className="w-[130px]" />
                            <img src="https://api.priceinkenya.com/media/126936/conversions/apple-store-original.webp" className="w-[130px]" />

                        </div>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center space-x-5">
                            <GoLocation />
                            <address>
                                <a href="https://g.page/r/CYlWdPoEKvZDEAE" rel="external nofollow noopener noreferrer" target="_blank" title="Find us on Google Maps!" className="hover:underline">
                                    Bihi Towers, Ground Floor, Suite G8, Moi Avenue, Nairobi CBD, Kenya
                                </a>
                            </address>
                        </div>
                        <div className="flex items-center space-x-5">
                            <IoMdCall />
                            <div>
                                <a href="tel:+254718794014" title="Call us" className="hover:underline not-italic">0718 794 014</a><br />
                                <a href="tel:+254711102363" title="Call us" className="hover:underline not-italic">0711 102 363</a><br />
                            </div>
                        </div>
                        <div className="flex items-center space-x-5">
                            <MdMarkEmailRead />
                            <div>
                                <a href="mailto:sales@priceinkenya.com" title="Email us" className="hover:underline not-italic">sales@priceinkenya.com - customer care</a><br />
                                <a href="mailto:admin@priceinkenya.com" title="Email us" className="hover:underline not-italic">admin@priceinkenya.com - any website issue</a>
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
                        <a href="/user/cart" className="hover:underline">Shopping cart</a> <a href="/user/liked" className="hover:underline">Likes</a> <a href="/user/viewed" className="hover:underline">Recently viewed</a>
                        <a href="/compares" className="hover:underline">Latest comparisons</a> <a href="/price-list" className="hover:underline">Price list</a>
                    </nav>
                </div>
            </div>
        </footer>

    )
}
