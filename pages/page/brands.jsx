import Link from 'next/link'
import React from 'react'
import { useBrandQuery } from '../../app/features/api/ProductControl'
import Brands from '../../components/Pages/Product/Brands'
import Loading from '../../components/Shared/Loading/Loading'

export default function BrandsAll() {
    const { data: brand, } = useBrandQuery()

    return (
        <main role="main" className="px-2 text-gray-800 max-w-screen-xl mx-auto min-h-screen">
            <div>
                <section>
                    <header className="flex flex-wrap gap-2 justify-between items-center my-1">
                        <div>
                            <h2 className="text-xl font-medium leading-tight max-w-full">Brands</h2>
                            <p className="text-sm text-gray-700">Find products by brands</p>
                        </div>
                    </header>
                    <ol className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2.5 text-sm">
                        {!brand && <Loading />}

                        {
                            brand?.map(data => <Brands key={data?._id} quantity={data?.quantity} ExtraQuantity={data?.ExtraQuantity} rating={data?.rating} img={data?.img} path={data?.path} />)
                        }
                    </ol>
                    <div className="sm:hidden my-3 flex justify-center">
                        <Link href="/page/brands" className="" title="All product brands"><span className="py-1.5 px-4 text-sm bg-white font-medium rounded-md text-gray-600 hover:text-gray-700 hover:shadow-md">All brands</span></Link >
                    </div>
                </section>
            </div>
        </main>
    )
}
