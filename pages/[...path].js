import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"
import { useProductGetQuery } from "../app/features/api/ProductControl"
import Featured from "../components/Pages/Product/Featured"

export default function Content() {
    const [brand, setBrand] = useState()
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(0)
    const router = useRouter()
    const path = router.query.path
    const pathName = path?.join('/')

    const filterInfo = {
        pathName: pathName,
        brand: brand,
        limit: limit,
        page: page
    }
    const { data } = useProductGetQuery(filterInfo)

    return (
        <>
            <Head>
                <title>Product</title>
                <meta name="description" content="Product" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="bg-[#F1F1F1]">
                <main className="px-2 text-gray-800 max-w-screen-xl mx-auto min-h-screen ">
                    <header className="flex flex-wrap gap-2 justify-between items-center my-5 mb-1">
                        <div>
                            <h1 className="text-2xl font-medium leading-tight max-w-full">Smartphones </h1>
                            <p className="text-sm text-gray-700">
                                Shop for Smartphones from Price in Kenya or download <br />
                                our  <Link href="/price-list/phones" title="Smartphones Price list" className="font-semibold hover:text-gray-600">Smartphones Price list.  </Link>
                            </p>
                        </div>
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                            <div>
                                <select className="block w-full max-w-sm pl-3 pr-10 py-2 transition duration-100 ease-in-out border rounded-md shadow-sm focus:ring-2 focus:ring-primary-100 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed text-base md:text-sm focus:border focus:border-primary-100 border-gray-300 placeholder-gray-400 focus:border-primary-100"
                                    onChange={(e) => setBrand(e.target.value)}
                                >
                                    <option value='' selected >Brand</option>
                                    <option value="vivo">vivo</option>
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
                        </div>
                    </header>
                    <section>
                        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-2.5 bg-white border rounded-md py-5">
                            {
                                data?.map(data => {
                                    return (
                                        <Featured key={data?._id} img={data?.img} title={data.name} quantity={data?.quantity} price={data?.price} model={data?.model} />
                                    )
                                })
                            }
                        </ul>
                    </section>

                    <div className="flex flex-col items-center justify-center gap-5">
                        <div className="flex gap-3 md:gap-x-8">
                            <div className="w-20">
                                <select
                                    onChange={(e) => setLimit(e.target.value)}
                                    className="block w-full max-w-sm pl-3  py-2 transition duration-100 ease-in-out border rounded-md shadow-sm focus:ring-2 focus:ring-primary-100 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed text-base md:text-sm focus:border focus:border-primary-100 border-gray-300 placeholder-gray-400 focus:border-primary-100"
                                >
                                    <option >Items</option>
                                    <option value="5">5</option>
                                    <option value="20">20</option>
                                    <option value="100">100</option>
                                </select>
                            </div>
                            <button
                                className={`${page == 0 ? "hidden" : "block"} block max-w-sm transition duration-100 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed text-sm rounded-md font-medium hover:shadow-md px-7 py-1.5 text-gray-600 bg-white border shadow-none active:bg-gray-100 focus:border-primary-100 focus:ring-offset-0 focus:ring-2 focus:ring-primary-100 focus:outline-none`}
                                onClick={() => setPage(page - 1)}
                            >
                                Prev
                            </button>
                            <button
                                onClick={() => setPage(page + 1)}
                                className="block max-w-sm transition duration-100 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed text-sm rounded-md font-medium hover:shadow-md px-7 py-1.5 text-gray-600 bg-white border shadow-none active:bg-gray-100 focus:border-primary-100 focus:ring-offset-0 focus:ring-2 focus:ring-primary-100 focus:outline-"
                            >
                                next
                            </button>
                        </div>
                    </div>





                    <section className="space-y-1">
                        <header>
                            <h2 className="font-medium leading-tight text-base max-w-full">Price range</h2>
                            <p className="text-sm text-gray-700">All Smartphones by price range</p>
                        </header>
                        <ol className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-1.5 text-sm">
                            <li className="overflow-hidden hover:shadow-lg hover:border-gray-300 transition-all duration-200 ease-in-out space-y-2 flex flex-col bg-white border rounded-md">
                                <Link href="/phones/1563-10k?stock_status=1" className="" title="All Below KSh 10K Smartphones from Price in Kenya">
                                    <div className="flex flex-col p-4 space-y-1">
                                        <p>Below KSh 10K</p>
                                        <p className="text-gray-500">21 items</p>
                                    </div>
                                </Link>
                            </li>
                            <li className="overflow-hidden hover:shadow-lg hover:border-gray-300 transition-all duration-200 ease-in-out space-y-2 flex flex-col bg-white border rounded-md">
                                <Link href="/phones/1564-10k?stock_status=1" className="" title="All KSh 10K - 20K Smartphones from Price in Kenya">
                                    <div className="flex flex-col p-4 space-y-1">
                                        <p>KSh 10K - 20K</p>
                                        <p className="text-gray-500">83 items</p>
                                    </div>
                                </Link>
                            </li>
                            <li className="overflow-hidden hover:shadow-lg hover:border-gray-300 transition-all duration-200 ease-in-out space-y-2 flex flex-col bg-white border rounded-md">
                                <Link href="/phones/1565-20k?stock_status=1" className="" title="All KSh 20K - 30K Smartphones from Price in Kenya">
                                    <div className="flex flex-col p-4 space-y-1">
                                        <p>KSh 20K - 30K</p>
                                        <p className="text-gray-500">80 items</p>
                                    </div>
                                </Link>
                            </li>
                            <li className="overflow-hidden hover:shadow-lg hover:border-gray-300 transition-all duration-200 ease-in-out space-y-2 flex flex-col bg-white border rounded-md">
                                <Link href="/phones/1569-30k?stock_status=1" className="" title="All KSh 30K - 40K Smartphones from Price in Kenya">
                                    <div className="flex flex-col p-4 space-y-1">
                                        <p>KSh 30K - 40K</p>
                                        <p className="text-gray-500">32 items</p>
                                    </div>
                                </Link>
                            </li>
                            <li className="overflow-hidden hover:shadow-lg hover:border-gray-300 transition-all duration-200 ease-in-out space-y-2 flex flex-col bg-white border rounded-md">
                                <Link href="/phones/1570-40k?stock_status=1" className="" title="All KSh 40K - 50K Smartphones from Price in Kenya">
                                    <div className="flex flex-col p-4 space-y-1">
                                        <p>KSh 40K - 50K</p>
                                        <p className="text-gray-500">38 items</p>
                                    </div>
                                </Link>
                            </li>
                            <li className="overflow-hidden hover:shadow-lg hover:border-gray-300 transition-all duration-200 ease-in-out space-y-2 flex flex-col bg-white border rounded-md">
                                <Link href="/phones/1571-50k?stock_status=1" className="" title="All KSh 50K - 60K Smartphones from Price in Kenya">
                                    <div className="flex flex-col p-4 space-y-1">
                                        <p>KSh 50K - 60K</p>
                                        <p className="text-gray-500">26 items</p>
                                    </div>
                                </Link>
                            </li>
                            <li className="overflow-hidden hover:shadow-lg hover:border-gray-300 transition-all duration-200 ease-in-out space-y-2 flex flex-col bg-white border rounded-md">
                                <Link href="/phones/1572-60k?stock_status=1" className="" title="All KSh 60K - 70K Smartphones from Price in Kenya">
                                    <div className="flex flex-col p-4 space-y-1">
                                        <p>KSh 60K - 70K</p>
                                        <p className="text-gray-500">11 items</p>
                                    </div>
                                </Link>
                            </li>
                            <li className="overflow-hidden hover:shadow-lg hover:border-gray-300 transition-all duration-200 ease-in-out space-y-2 flex flex-col bg-white border rounded-md">
                                <Link href="/phones/1573-70k?stock_status=1" className="" title="All KSh 70K - 80K Smartphones from Price in Kenya">
                                    <div className="flex flex-col p-4 space-y-1">
                                        <p>KSh 70K - 80K</p>
                                        <p className="text-gray-500">15 items</p>
                                    </div>
                                </Link>
                            </li>
                            <li className="overflow-hidden hover:shadow-lg hover:border-gray-300 transition-all duration-200 ease-in-out space-y-2 flex flex-col bg-white border rounded-md">
                                <Link href="/phones/1574-80k?stock_status=1" className="" title="All KSh 80K - 90K Smartphones from Price in Kenya">
                                    <div className="flex flex-col p-4 space-y-1">
                                        <p>KSh 80K - 90K</p>
                                        <p className="text-gray-500">17 items</p>
                                    </div>
                                </Link>
                            </li>
                            <li className="overflow-hidden hover:shadow-lg hover:border-gray-300 transition-all duration-200 ease-in-out space-y-2 flex flex-col bg-white border rounded-md">
                                <Link href="/phones/1575-90k?stock_status=1" className="" title="All KSh 90K - 100K Smartphones from Price in Kenya">
                                    <div className="flex flex-col p-4 space-y-1">
                                        <p>KSh 90K - 100K</p>
                                        <p className="text-gray-500">14 items</p>
                                    </div>
                                </Link>
                            </li>
                            <li className="overflow-hidden hover:shadow-lg hover:border-gray-300 transition-all duration-200 ease-in-out space-y-2 flex flex-col bg-white border rounded-md">
                                <Link href="/phones/1576-100k?stock_status=1" className="" title="All KSh 100K - 200K Smartphones from Price in Kenya">
                                    <div className="flex flex-col p-4 space-y-1">
                                        <p>KSh 100K - 200K</p>
                                        <p className="text-gray-500">48 items</p>
                                    </div>
                                </Link>
                            </li>
                            <li className="overflow-hidden hover:shadow-lg hover:border-gray-300 transition-all duration-200 ease-in-out space-y-2 flex flex-col bg-white border rounded-md">
                                <Link href="/phones/1577-200k?stock_status=1" className="" title="All KSh 200K - 300K Smartphones from Price in Kenya">
                                    <div className="flex flex-col p-4 space-y-1">
                                        <p>KSh 200K - 300K</p>
                                        <p className="text-gray-500">3 items</p>
                                    </div>
                                </Link>
                            </li>
                        </ol>
                    </section>

                </main>
            </div>



        </>

    )
}
