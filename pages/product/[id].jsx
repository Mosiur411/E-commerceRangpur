import { useRouter } from "next/router"
import { useProductIDQuery } from "../../app/features/api/ProductControl"

export default function Product() {
    const router = useRouter()
    const id = router.query.id
    const { data } = useProductIDQuery(id)
    return (
        <div class="px-2 text-gray-800 max-w-screen-xl mx-auto min-h-screen ">
            <div class="grid md:grid-cols-2 lg:grid-cols-9 gap-6 bg-white border rounded-md p-3 py-8 mt-3">
                <div class="lg:col-span-3 lg:row-span-2 h-full space-y-3.5 pb-2 flex flex-col items-center overflow-hidden">
                    <div>
                        <div class="flex flex-col items-center space-y-5">
                            <div class="flex items-center justify-center overflow-hidden">
                                <img src={data?.img} />
                            </div>
                            <div class="grid grid-cols-4 gap-2 max-w-sm items-center">
                                <div>
                                    <img src={data?.img} className="w-20" />
                                </div>
                                <div>
                                    <img src={data?.img} className="w-20" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <p class="text-gray-600"><span class="text-xs">801</span> sales</p>
                    <button class="flex items-center justify-center gap-x-1 text-xs p-2 group rounded-full bg-gray-100 hover:bg-primary-50 text-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-500 w-6 h-6">
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                        </svg>
                        <span class="font-medium text-gray-500">216</span>
                    </button>
                    <div class="text-center p-1.5">
                        <select
                            class="block w-full max-w-sm pl-3 pr-10 py-2 transition duration-100 ease-in-out border rounded-md shadow-sm focus:ring-2 focus:ring-primary-100 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed text-base md:text-sm focus:border focus:border-primary-100 border-gray-300 placeholder-gray-400 focus:border-primary-100"
                        >
                            <option value="">Your rating</option>
                            <option value="5 - Highly recommended">5 - Highly recommended</option>
                            <option value="4 - Recommended">4 - Recommended</option>
                            <option value="3 - Worth a look">3 - Worth a look</option>
                            <option value="2 - Maybe consider">2 - Maybe consider</option>
                            <option value="1 - Not worth it">1 - Not worth it</option>
                        </select>
                    </div>
                </div>
                <div class="lg:col-span-4 h-full space-y-3 overflow-hidden">
                    <header class="max-w-md">
                        <h1 class=" leading-tight  max-w-full text-xl font-bold">{data?.name}</h1>
                        <div class="space-y-2 mt-4"><p>Order Nokia 6.1 Plus X6 from Price in Kenya with fast delivery across the country and in-store pickup in Nairobi.</p></div>
                    </header>
                    <a href="/brand/nokia" class=" flex items-start w-max" title="All Nokia products">
                        <img src="https://api.priceinkenya.com/media/126750/conversions/nokia-logo-original.webp" className="w-20" />
                    </a>
                    <div class="space-y-3">
                        <h2 class="font-medium leading-tight text-base max-w-full">
                            <span class="font-normal">
                                Featured specifications for Nokia 6.1 Plus X6
                            </span>
                        </h2>
                        <dl>
                            <div class="px-2 py-2 flex gap-2 bg-cool-gray-500 rounded">
                                <dt class="font-medium whitespace-nowrap">Available</dt>
                                <dd class="line-clamp-1">May, 2018</dd>
                            </div>
                            <div class="px-2 py-2 flex gap-2">
                                <dt class="font-medium whitespace-nowrap">Operating system</dt>
                                <dd class="line-clamp-1">Android 8.1 Oreo, Upgradeable to Android 10</dd>
                            </div>
                            <div class="px-2 py-2 flex gap-2 bg-cool-gray-500 rounded">
                                <dt class="font-medium whitespace-nowrap">Chipset</dt>
                                <dd class="line-clamp-1">Qualcomm Snapdragon 636</dd>
                            </div>
                            <div class="px-2 py-2 flex gap-2">
                                <dt class="font-medium whitespace-nowrap">Camera resolution</dt>
                                <dd class="line-clamp-1">16MP F2.0 + 5MP F2.4</dd>
                            </div>
                            <div class="px-2 py-2 flex gap-2 bg-cool-gray-500 rounded">
                                <dt class="font-medium whitespace-nowrap">Front camera resolution</dt>
                                <dd class="line-clamp-1">16MP F2.0</dd>
                            </div>
                            <div class="px-2 py-2 flex gap-2">
                                <dt class="font-medium whitespace-nowrap">Display size</dt>
                                <dd class="line-clamp-1">5.8 inches, 1080 x 2220 pixels</dd>
                            </div>
                            <div class="px-2 py-2 flex gap-2 bg-cool-gray-500 rounded">
                                <dt class="font-medium whitespace-nowrap">Display type</dt>
                                <dd class="line-clamp-1">IPS screen, 16M colors</dd>
                            </div>
                            <div class="px-2 py-2 flex gap-2">
                                <dt class="font-medium whitespace-nowrap">RAM</dt>
                                <dd class="line-clamp-1">4GB LPPDDR4x</dd>
                            </div>
                            <div class="px-2 py-2 flex gap-2 bg-cool-gray-500 rounded">
                                <dt class="font-medium whitespace-nowrap">Storage</dt>
                                <dd class="line-clamp-1">64GB e-MMC 5.1</dd>
                            </div>
                            <div class="px-2 py-2 flex gap-2">
                                <dt class="font-medium whitespace-nowrap">Battery</dt>
                                <dd class="line-clamp-1">3060mAh, Li-Ion</dd>
                            </div>
                        </dl>
                    </div>
                </div>
                <div class="lg:col-span-2 h-full space-y-5 overflow-hidden">
                    <div class="space-y-2">
                        <div class="flex flex-wrap gap-3 gap-y-0 items-baseline">
                            <p class=" text-primary text-xl text-[#008800] font-bold leading-tight  max-w-full text-secondary">
                            KES {data?.price}
                            </p>
                            <p class="text-xs uppercase">In Stock</p>
                        </div>
                        <div class="p-0.5">
                            <a href="/user/cart?product=nokia-61-plus-x6" class="" title="Buy Nokia 6.1 Plus X6">
                                <div
                                    class=" block max-w-sm text-center px-7 py-3 rounded-md text-white font-medium bg-[#AB4725] hover:shadow-md active:shadow-md focus:border-[#AB4725] focus:ring-offset-0 focus:ring-2 focus:ring-[#AB4725] focus:outline-none"
                                >
                                    BUY
                                </div>
                            </a>
                            <p class="text-xs mt-5"><strong>Kindly note </strong> that though we strive to keep all products up to date, price and availability are subject to change without prior notice.</p>
                        </div>
                    </div>
                    <aside class="space-y-5">
                        <hr />
                        <ul>
                            <li class="py-0.5 flex items-center gap-1.5">
                                <span class="inline-block">•</span>
                                <p class="inline-block">Quick shipping across Kenya</p>
                            </li>
                            <li class="py-0.5 flex items-center gap-1.5">
                                <span class="inline-block">•</span>
                                <p class="inline-block">In-store pickup in Nairobi</p>
                            </li>
                            <li class="py-0.5 flex items-center gap-1.5">
                                <span class="inline-block">•</span>
                                <p class="inline-block">Payment on delivery accepted</p>
                            </li>
                            <li class="py-0.5 flex items-center gap-1.5">
                                <span class="inline-block">•</span>
                                <p class="inline-block">Top-notch products and services</p>
                            </li>
                        </ul>
                        <hr />
                        <div class="flex space-x-5 items-center">
                            <img alt="home page" height="20" src="/_nuxt/6653b9d300ec411af54d8ed138e9e9b4.svg" width="20" class="text-transparent" />
                            <address>
                                <a href="https://g.page/r/CYlWdPoEKvZDEAE" rel="external nofollow noopener noreferrer" target="_blank" title="Find us on Google Maps!" class="hover:underline">
                                    Bihi Towers, Ground Floor, Suite G8, Moi Avenue, Nairobi CBD.
                                </a>
                                <br />
                                <a href="tel:+254718794014" title="Call us" class="hover:underline not-italic">0718 794 014</a><br />
                                <a href="tel:+254711102363" title="Call us" class="hover:underline not-italic">0711 102 363</a><br />
                            </address>
                        </div>
                        <div class="flex flex-wrap gap-2">
                            <a href="https://apps.apple.com/ke/app/price-in-kenya/id1581082296" title="Apple App Store" rel="external nofollow noopener noreferrer" target="_blank">
                                <img src="https://api.priceinkenya.com/media/126935/conversions/play-store-original.webp" className="w-20" />
                            </a>
                            <a href="https://play.google.com/store/apps/details?id=com.price_in_kenya" title="Google Play Store" rel="external nofollow noopener noreferrer" target="_blank">
                                <img src="https://api.priceinkenya.com/media/126935/conversions/play-store-original.webp" className="w-20" />
                            </a>
                        </div>
                    </aside>
                </div>
                <div class="lg:col-span-4 lg:col-start-4 h-full space-y-2 overflow-hidden">
                    <h2 class="font-medium leading-tight text-base max-w-full">Nokia 6.1 Plus X6 key features</h2>
                    <ul class="divide-y divide-gray-300">
                        <li class="py-0.5"><p class="line-clamp-1">16MP dual camera</p></li>
                        <li class="py-0.5"><p class="line-clamp-1">16MP selfie</p></li>
                        <li class="py-0.5"><p class="line-clamp-1">Fingerprint ID</p></li>
                        <li class="py-0.5"><p class="line-clamp-1">Gorilla Glass 3</p></li>
                        <li class="py-0.5"><p class="line-clamp-1">USB Type C</p></li>
                        <li class="py-0.5"><p class="line-clamp-1">Fast charging</p></li>
                    </ul>
                </div>
                <aside class="lg:col-span-2 h-full space-y-2 overflow-hidden">
                    <p class="font-medium leading-tight text-base max-w-full">How to pay</p>
                    <p>
                        M-PESA Paybill<br />
                        Business no. 247247<br />
                        Account no. 794794
                    </p>
                </aside>
            </div>





        </div>
    )
}
