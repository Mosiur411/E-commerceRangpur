import Image from "next/image"
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
        <div className="px-2 text-gray-800 max-w-screen-xl mx-auto min-h-screen ">
            <div className="grid md:grid-cols-2 lg:grid-cols-9 gap-6 bg-white border rounded-md p-3 py-8 mt-3">
                <div className="lg:col-span-3 lg:row-span-2 h-full space-y-3.5 pb-2 flex flex-col items-center overflow-hidden">
                    <div>
                        <div className="flex flex-col items-center space-y-5">
                            <div className="flex items-center justify-center overflow-hidden">
                                <Image src={data?.img} width='400' height="100" alt="img" />
                            </div>
                            <div className="grid grid-cols-4 gap-2 max-w-sm items-center">
                                <div>
                                    <Image src={data?.img} className="w-20" width='100' height="100" alt="img" />
                                </div>
                                <div>
                                    <Image src={data?.img} className="w-20" width='100' height="100" alt="img" />
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
    )
}
