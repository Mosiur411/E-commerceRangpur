import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { useGetProductMutation } from "../app/features/api/product"
import Featured from "../components/Pages/Product/Featured"

export default function content() {
    const [brand, setBrand] = useState('')
    const [page, setPage] = useState(0)
    const [limit, setLimit] = useState(10)
    const [GetData, { data }] = useGetProductMutation()
    const router = useRouter()
    const path = [router?.asPath]
    const pathName = path?.join('/')
    // if (!page) {
    //     return;
    // }
    useEffect(() => {
        if (pathName) {
            GetData({ pathName, brand, page, limit })
        }
    }, [router, brand, page, limit])
    return (
        <div className="bg-[#F1F1F1]">
            <main class="px-2 text-gray-800 max-w-screen-xl mx-auto min-h-screen ">
                <header class="flex flex-wrap gap-2 justify-between items-center my-5 mb-1">
                    <div>
                        <h1 class="text-2xl font-medium leading-tight max-w-full">Smartphones {page}</h1>
                        <p class="text-sm text-gray-700">
                            Shop for Smartphones from Price in Kenya or download <br />
                            our <a href="/price-list/phones" title="Smartphones Price list" class="font-semibold hover:text-gray-600">Smartphones Price list. </a>
                        </p>
                    </div>
                    <div class="flex flex-wrap items-center gap-x-3 gap-y-2">
                        <div>
                            <select class="block w-full max-w-sm pl-3 pr-10 py-2 transition duration-100 ease-in-out border rounded-md shadow-sm focus:ring-2 focus:ring-primary-100 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed text-base md:text-sm focus:border focus:border-primary-100 border-gray-300 placeholder-gray-400 focus:border-primary-100"
                                onClick={(e) => setBrand(e.target.value)}
                            >
                                <option value='' selected >Brand</option>
                                <option value="apple">Apple</option>
                                <option value="dell">Dell</option>
                                <option value="samsung">Samsung</option>
                                <option value="xiaomi">Xiaomi</option>
                                <option value="huawei">Huawei</option>
                                <option value="onePlus">OnePlus</option>
                                <option value="lG">LG</option>
                                <option value="tecno">Tecno</option>
                                <option value="infinix">Infinix</option>
                                <option value="oppo">Oppo</option>
                                <option value="nokia">Nokia</option>
                                <option value="vivo">Vivo</option>
                                <option value="realme">Realme</option>
                                <option value="google">Google</option>
                                <option value="lava">Lava</option>
                                <option value="itel">Itel</option>
                                <option value="lenovo">Lenovo</option>
                                <option value="energizer">Energizer</option>
                                <option value="hTC">HTC</option>
                                <option value="nothing">Nothing</option>
                                <option value="motorola">Motorola</option>
                            </select>
                        </div>
                        <div>
                            <select
                                class="block w-full max-w-sm pl-3 pr-10 py-2 transition duration-100 ease-in-out border rounded-md shadow-sm focus:ring-2 focus:ring-primary-100 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed text-base md:text-sm focus:border focus:border-primary-100 border-gray-300 placeholder-gray-400 focus:border-primary-100"
                            >
                                <option selected="selected" value="">Series</option>
                            </select>
                        </div>
                        <div>
                            <select
                                class="block w-full max-w-sm pl-3 pr-10 py-2 transition duration-100 ease-in-out border rounded-md shadow-sm focus:ring-2 focus:ring-primary-100 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed text-base md:text-sm focus:border focus:border-primary-100 border-gray-300 placeholder-gray-400 focus:border-primary-100 font-medium"
                            >
                                <option value="">Sort by</option>
                                <option value="1">Latest</option>
                                <option value="2">Price</option>
                                <option value="3">Rating</option>
                                <option value="4" selected="selected">Likes</option>
                                <option value="5">Sales</option>
                                <option value="6">Views</option>
                            </select>
                        </div>
                        <div>
                            <select
                                class="block w-full max-w-sm pl-3 pr-10 py-2 transition duration-100 ease-in-out border rounded-md shadow-sm focus:ring-2 focus:ring-primary-100 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed text-base md:text-sm focus:border focus:border-primary-100 border-gray-300 placeholder-gray-400 focus:border-primary-100"
                            >
                                <option selected="selected" value="">Direction</option>
                                <option value="asc">Low to high</option>
                                <option value="desc">High to low</option>
                            </select>
                        </div>
                    </div>
                </header>
                <section>
                    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-2.5 bg-white border rounded-md py-5">
                        {
                            data?.result?.map(data => {
                                return (
                                    <Featured img={data?.img} title={data.name} quantity={data?.quantity} model={data?.price} />
                                )
                            })
                        }
                    </ul>
                </section>

                <div class="flex flex-col items-center justify-center gap-5">
                    <div class="space-y-1 w-full max-w-sm">
                        <p class="text-sm text-gray-600 text-center">Showing 1 of 4 pages</p>
                        <div class="h-1.5 bg-gray-300 rounded-md"><div class="h-full bg-primary rounded-md" ></div></div>
                    </div>
                    <div class="flex gap-3 md:gap-x-8">
                        <div class="w-20">
                            <select
                                onClick={(e) => setLimit(e.target.value)}
                                class="block w-full max-w-sm pl-3  py-2 transition duration-100 ease-in-out border rounded-md shadow-sm focus:ring-2 focus:ring-primary-100 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed text-base md:text-sm focus:border focus:border-primary-100 border-gray-300 placeholder-gray-400 focus:border-primary-100"
                            >
                                <option >Items</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                        </div>
                        <button
                            class={`${page == 0 ? "hidden" : "block"} block max-w-sm transition duration-100 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed text-sm rounded-md font-medium hover:shadow-md px-7 py-1.5 text-gray-600 bg-white border shadow-none active:bg-gray-100 focus:border-primary-100 focus:ring-offset-0 focus:ring-2 focus:ring-primary-100 focus:outline-none`}
                            onClick={() => setPage(page - 1)}
                        >
                            Prev
                        </button>
                        <button
                            onClick={() => setPage(page + 1)}
                            class="block max-w-sm transition duration-100 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed text-sm rounded-md font-medium hover:shadow-md px-7 py-1.5 text-gray-600 bg-white border shadow-none active:bg-gray-100 focus:border-primary-100 focus:ring-offset-0 focus:ring-2 focus:ring-primary-100 focus:outline-"
                        >
                            next
                        </button>
                    </div>
                </div>





                <section class="space-y-1">
                    <header>
                        <h2 class="font-medium leading-tight text-base max-w-full">Price range</h2>
                        <p class="text-sm text-gray-700">All Smartphones by price range</p>
                    </header>
                    <ol class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-1.5 text-sm">
                        <li class="overflow-hidden hover:shadow-lg hover:border-gray-300 transition-all duration-200 ease-in-out space-y-2 flex flex-col bg-white border rounded-md">
                            <a href="/phones/1563-10k?stock_status=1" class="" title="All Below KSh 10K Smartphones from Price in Kenya">
                                <div class="flex flex-col p-4 space-y-1">
                                    <p>Below KSh 10K</p>
                                    <p class="text-gray-500">21 items</p>
                                </div>
                            </a>
                        </li>
                        <li class="overflow-hidden hover:shadow-lg hover:border-gray-300 transition-all duration-200 ease-in-out space-y-2 flex flex-col bg-white border rounded-md">
                            <a href="/phones/1564-10k?stock_status=1" class="" title="All KSh 10K - 20K Smartphones from Price in Kenya">
                                <div class="flex flex-col p-4 space-y-1">
                                    <p>KSh 10K - 20K</p>
                                    <p class="text-gray-500">83 items</p>
                                </div>
                            </a>
                        </li>
                        <li class="overflow-hidden hover:shadow-lg hover:border-gray-300 transition-all duration-200 ease-in-out space-y-2 flex flex-col bg-white border rounded-md">
                            <a href="/phones/1565-20k?stock_status=1" class="" title="All KSh 20K - 30K Smartphones from Price in Kenya">
                                <div class="flex flex-col p-4 space-y-1">
                                    <p>KSh 20K - 30K</p>
                                    <p class="text-gray-500">80 items</p>
                                </div>
                            </a>
                        </li>
                        <li class="overflow-hidden hover:shadow-lg hover:border-gray-300 transition-all duration-200 ease-in-out space-y-2 flex flex-col bg-white border rounded-md">
                            <a href="/phones/1569-30k?stock_status=1" class="" title="All KSh 30K - 40K Smartphones from Price in Kenya">
                                <div class="flex flex-col p-4 space-y-1">
                                    <p>KSh 30K - 40K</p>
                                    <p class="text-gray-500">32 items</p>
                                </div>
                            </a>
                        </li>
                        <li class="overflow-hidden hover:shadow-lg hover:border-gray-300 transition-all duration-200 ease-in-out space-y-2 flex flex-col bg-white border rounded-md">
                            <a href="/phones/1570-40k?stock_status=1" class="" title="All KSh 40K - 50K Smartphones from Price in Kenya">
                                <div class="flex flex-col p-4 space-y-1">
                                    <p>KSh 40K - 50K</p>
                                    <p class="text-gray-500">38 items</p>
                                </div>
                            </a>
                        </li>
                        <li class="overflow-hidden hover:shadow-lg hover:border-gray-300 transition-all duration-200 ease-in-out space-y-2 flex flex-col bg-white border rounded-md">
                            <a href="/phones/1571-50k?stock_status=1" class="" title="All KSh 50K - 60K Smartphones from Price in Kenya">
                                <div class="flex flex-col p-4 space-y-1">
                                    <p>KSh 50K - 60K</p>
                                    <p class="text-gray-500">26 items</p>
                                </div>
                            </a>
                        </li>
                        <li class="overflow-hidden hover:shadow-lg hover:border-gray-300 transition-all duration-200 ease-in-out space-y-2 flex flex-col bg-white border rounded-md">
                            <a href="/phones/1572-60k?stock_status=1" class="" title="All KSh 60K - 70K Smartphones from Price in Kenya">
                                <div class="flex flex-col p-4 space-y-1">
                                    <p>KSh 60K - 70K</p>
                                    <p class="text-gray-500">11 items</p>
                                </div>
                            </a>
                        </li>
                        <li class="overflow-hidden hover:shadow-lg hover:border-gray-300 transition-all duration-200 ease-in-out space-y-2 flex flex-col bg-white border rounded-md">
                            <a href="/phones/1573-70k?stock_status=1" class="" title="All KSh 70K - 80K Smartphones from Price in Kenya">
                                <div class="flex flex-col p-4 space-y-1">
                                    <p>KSh 70K - 80K</p>
                                    <p class="text-gray-500">15 items</p>
                                </div>
                            </a>
                        </li>
                        <li class="overflow-hidden hover:shadow-lg hover:border-gray-300 transition-all duration-200 ease-in-out space-y-2 flex flex-col bg-white border rounded-md">
                            <a href="/phones/1574-80k?stock_status=1" class="" title="All KSh 80K - 90K Smartphones from Price in Kenya">
                                <div class="flex flex-col p-4 space-y-1">
                                    <p>KSh 80K - 90K</p>
                                    <p class="text-gray-500">17 items</p>
                                </div>
                            </a>
                        </li>
                        <li class="overflow-hidden hover:shadow-lg hover:border-gray-300 transition-all duration-200 ease-in-out space-y-2 flex flex-col bg-white border rounded-md">
                            <a href="/phones/1575-90k?stock_status=1" class="" title="All KSh 90K - 100K Smartphones from Price in Kenya">
                                <div class="flex flex-col p-4 space-y-1">
                                    <p>KSh 90K - 100K</p>
                                    <p class="text-gray-500">14 items</p>
                                </div>
                            </a>
                        </li>
                        <li class="overflow-hidden hover:shadow-lg hover:border-gray-300 transition-all duration-200 ease-in-out space-y-2 flex flex-col bg-white border rounded-md">
                            <a href="/phones/1576-100k?stock_status=1" class="" title="All KSh 100K - 200K Smartphones from Price in Kenya">
                                <div class="flex flex-col p-4 space-y-1">
                                    <p>KSh 100K - 200K</p>
                                    <p class="text-gray-500">48 items</p>
                                </div>
                            </a>
                        </li>
                        <li class="overflow-hidden hover:shadow-lg hover:border-gray-300 transition-all duration-200 ease-in-out space-y-2 flex flex-col bg-white border rounded-md">
                            <a href="/phones/1577-200k?stock_status=1" class="" title="All KSh 200K - 300K Smartphones from Price in Kenya">
                                <div class="flex flex-col p-4 space-y-1">
                                    <p>KSh 200K - 300K</p>
                                    <p class="text-gray-500">3 items</p>
                                </div>
                            </a>
                        </li>
                    </ol>
                </section>

            </main>
        </div>
    )
}
