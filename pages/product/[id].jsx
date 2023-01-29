import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"
import { useProductIDQuery } from "../../app/features/api/ProductControl"

export default function Product() {
    const router = useRouter()
    const model = router.query.id
    const { data } = useProductIDQuery(model)
    const htmlString = data?.description
    const htmlStringShort = data?.shortDescription
    return (
        <>
            <Head>

                <title>{data?.title}</title>
                <meta data-n-head="ssr" charset="utf-8" />
                <meta data-n-head="ssr" name="viewport" content="width=device-width, initial-scale=1" />
                <meta data-n-head="ssr" data-hid="robots" name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large" />
                <meta data-n-head="ssr" data-hid="og:site_name" property="og:site_name" content="Price in Kenya" />
                <meta data-n-head="ssr" data-hid="og:locale" name="og:locale" content="en_US" />
                <meta data-n-head="ssr" data-hid="og:image:width" property="og:image:width" content="500" />
                <meta data-n-head="ssr" data-hid="og:image:height" property="og:image:height" content="500" />
                <meta data-n-head="ssr" data-hid="twitter:card" name="twitter:card" content="summary_large_image" />
                <meta data-n-head="ssr" data-hid="twitter:domain" name="twitter:domain" content="priceinkenya.com" />
                <meta data-n-head="ssr" data-hid="twitter:creator" name="twitter:creator" content="@Priceinkenya" />
                <meta data-n-head="ssr" data-hid="twitter:site" name="twitter:site" content="@Priceinkenya" />
                <meta data-n-head="ssr" data-hid="p:domain_verify" name="p:domain_verify" content="d06040627d364f0eb2e9cb2d6bdf1e86" />
                <meta data-n-head="ssr" data-hid="google-site-verification" name="google-site-verification" content="uxhLAOEoSLhBEIIaOVFPznYXFY7c9GjNhiLCZA0PMas" />
                <meta
                    data-n-head="ssr"
                    data-hid="description"
                    name="description"
                    content="Xiaomi Redmi Note 11 Pro 4G 8GB/128GB from Price in Kenya @KES 33500. Key features:
          120Hz Super AMOLED display, Gorilla Glass 5, Dual stereo speakers, UFS 2.2 storage, 67W fast charging, IP53 dust and splash resistant."
                />
                <meta data-n-head="ssr" data-hid="og:type" name="og:type" content="product" />
                <meta data-n-head="ssr" data-hid="og:url" property="og:url" content="https://www.priceinkenya.com/product/112012-xiaomi-redmi-note-11-pro" />
                <meta data-n-head="ssr" data-hid="og:title" name="og:title" content="Xiaomi Redmi Note 11 Pro 4G 8GB/128GB In Stock @Price in Kenya" />
                <meta
                    data-n-head="ssr"
                    data-hid="og:description"
                    name="og:description"
                    content="Xiaomi Redmi Note 11 Pro 4G 8GB/128GB from Price in Kenya @KES 33500. Key features:
          120Hz Super AMOLED display, Gorilla Glass 5, Dual stereo speakers, UFS 2.2 storage, 67W fast charging, IP53 dust and splash resistant."
                />
                <meta data-n-head="ssr" data-hid="og:image" property="og:image" content="https://api.priceinkenya.com/media/125240/conversions/xiaomiredminote11pro4gh-original.webp" />
                <meta data-n-head="ssr" data-hid="og:image:secure_url" property="og:image:secure_url" content="https://api.priceinkenya.com/media/125240/conversions/xiaomiredminote11pro4gh-original.webp" />
                <meta data-n-head="ssr" data-hid="og:image:alt" property="og:image:alt" content="Xiaomi Redmi Note 11 Pro 4G 8GB/128GB In Stock @Price in Kenya" />
                <meta data-n-head="ssr" data-hid="og:image:type" property="og:image:type" content="image/jpeg" />
                <meta data-n-head="ssr" data-hid="twitter:url" property="twitter:url" content="https://www.priceinkenya.com/product/112012-xiaomi-redmi-note-11-pro" />
                <meta data-n-head="ssr" data-hid="twitter:title" name="twitter:title" content="Xiaomi Redmi Note 11 Pro 4G 8GB/128GB In Stock @Price in Kenya" />
                <meta
                    data-n-head="ssr"
                    data-hid="twitter:description"
                    name="twitter:description"
                    content="Xiaomi Redmi Note 11 Pro 4G 8GB/128GB from Price in Kenya @KES 33500. Key features:
          120Hz Super AMOLED display, Gorilla Glass 5, Dual stereo speakers, UFS 2.2 storage, 67W fast charging, IP53 dust and splash resistant."
                />
                <meta data-n-head="ssr" data-hid="twitter:image" name="twitter:image" content="https://api.priceinkenya.com/media/125240/conversions/xiaomiredminote11pro4gh-original.webp" />
                <meta data-n-head="ssr" data-hid="product:brand" name="product:brand" content="undefined" />
                <meta data-n-head="ssr" data-hid="product:price:amount" name="product:price:amount" content="33500" />
                <meta data-n-head="ssr" data-hid="product:availability" name="product:availability" content="instock" />
                <link data-n-head="ssr" rel="icon" type="image/png" sizes="128x128" href="/icons/favicon-128x128.png" />
                <link data-n-head="ssr" rel="icon" type="image/png" sizes="96x96" href="/icons/favicon-96x96.png" />
                <link data-n-head="ssr" rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
                <link data-n-head="ssr" rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
                <link data-n-head="ssr" rel="icon" type="image/x-icon" href="/icons/favicon.ico" />
                <link data-n-head="ssr" data-hid="gf-prefetch" rel="dns-prefetch" href="https://fonts.gstatic.com/" />
                <link data-n-head="ssr" data-hid="gf-preconnect" rel="preconnect" href="https://fonts.gstatic.com/" crossorigin="" />
                <link data-n-head="ssr" data-hid="gf-preload" rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700;800&amp;display=swap" />
                <link data-n-head="ssr" rel="preload" as="image" imagesrcset="https://api.priceinkenya.com/images/app-logo-desktop.svg" />
                <link data-n-head="ssr" rel="preload" as="image" imagesrcset="https://api.priceinkenya.com/images/whatsapp.svg" />
                <link data-n-head="ssr" data-hid="preconnect" rel="preconnect" href="//i.ytimg.com" />
                <link data-n-head="ssr" data-hid="canonical" rel="canonical" href="https://www.priceinkenya.com/product/112012-xiaomi-redmi-note-11-pro" />
                <link
                    data-n-head="ssr"
                    rel="preload"
                    as="image"
                    imagesrcset="/_ipx/b_%23ffffff,f_webp,q_75,fit_contain,s_640x640/https://api.priceinkenya.com/media/125240/conversions/xiaomiredminote11pro4gh-original.webp 640w, /_ipx/b_%23ffffff,f_webp,q_75,fit_contain,s_300x300/https://api.priceinkenya.com/media/125240/conversions/xiaomiredminote11pro4gh-original.webp 300w"
                    imagesizes="(max-width: 640px) 100vw, 300px"
                />
            </Head>
            <div className="px-2 text-gray-800 max-w-screen-xl mx-auto min-h-screen ">
                <div className="grid md:grid-cols-2 lg:grid-cols-9 gap-6 bg-white border rounded-md p-3 py-8 mt-3">
                    <div className="lg:col-span-3 lg:row-span-2 h-full space-y-3.5 pb-2 flex flex-col items-center overflow-hidden">
                        <div>
                            <div className="flex flex-col items-center space-y-5">
                                <div className="flex items-center justify-center overflow-hidden">
                                    <img src={data?.img} width='400' height="100" alt="img" />
                                </div>
                                <div className="grid grid-cols-4 gap-2 max-w-sm items-center">
                                    <div>
                                        <img src={data?.img} className="w-20" width='100' height="100" alt="img" />
                                    </div>
                                    <div>
                                        <img src={data?.img} className="w-20" width='100' height="100" alt="img" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-4 h-full space-y-3 overflow-hidden">
                        <header className="max-w-md">
                            <h1 className=" leading-tight  max-w-full text-xl font-bold">{data?.name}</h1>
                            <div className="space-y-2 mt-4"><div dangerouslySetInnerHTML={{ __html: htmlStringShort }} /></div>
                        </header>
                        <Link href="/brand/nokia" className=" flex items-start w-max" title="All Nokia products">
                            <p className="font-bold"> {data?.brand}</p>
                        </Link>
                    </div>
                    <div className="lg:col-span-2 h-full space-y-5 overflow-hidden">
                        <div className="space-y-2">
                            <div className="flex flex-wrap gap-3 gap-y-0 items-baseline">
                                <p className=" text-primary text-xl text-[#008800] font-bold leading-tight  max-w-full text-secondary">
                                    KES {data?.price}
                                </p>
                                <p className="text-xs uppercase">In Stock</p>
                            </div>
                            <div className="p-0.5">
                                <a href={data?.byuLink} className="" title="Buy Nokia 6.1 Plus X6">
                                    <div
                                        className=" block max-w-sm text-center px-7 py-3 rounded-md text-white font-medium bg-[#AB4725] hover:shadow-md active:shadow-md focus:border-[#AB4725] focus:ring-offset-0 focus:ring-2 focus:ring-[#AB4725] focus:outline-none"
                                    >
                                        BUY
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/*  ============= ds=========== */}
                <div dangerouslySetInnerHTML={{ __html: htmlString }} />
            </div>
        </>
    )
}
