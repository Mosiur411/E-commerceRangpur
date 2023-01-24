import Head from 'next/head'
import Featured from '../components/Pages/Product/Featured'
import Brands from '../components/Pages/Product/Brands'
import PopularCategories from '../components/Pages/Product/PopularCategories'
import Link from 'next/link'
import { useBrandQuery, useCateGorQuery, useHomeQuery } from '../app/features/api/ProductControl'
import Loading from '../components/Shared/Loading/Loading'
export default function Home() {
  const { data: cateGories, } = useCateGorQuery()
  const { data: brand, } = useBrandQuery()
  const { data: home } = useHomeQuery()
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Home" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main role="main" className="px-2 text-gray-800 max-w-screen-xl mx-auto min-h-screen">
        <article>

          {/* PopularCategories  */}
          <section className="my-1 mt-5">
            <header className="flex flex-wrap gap-2 justify-between items-center my-1">
              <div>
                <h2 className=" font-medium leading-tight text-base max-w-full">Popular categories</h2>
                <p className="text-sm text-gray-700">Popular categories on Price in Kenya</p>
              </div>
              <div className="hidden sm:inline-block">
                <Link href="/page/categories" className="" title="Featured product categories"><span className="py-1.5 px-4 text-sm bg-white font-medium rounded-md text-gray-600 hover:text-gray-700 hover:shadow-md">All categories</span></Link >
              </div>
            </header>
            <div className="hidden lg:block">
              <div className="bg-white border py-8 rounded-md">
                <ol className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2.5 text-sm">
                  {!cateGories && <Loading />}
                  {
                    cateGories?.slice(0, 5).map(data => <PopularCategories key={data?._id} img={data?.img} title={data?.title} quantity={data?.stock} extraQuantity={data?.extraStock} path={data.path} />)
                  }
                </ol>
              </div>
            </div>
            <div className="lg:hidden">
              <div className="bg-white border py-8 rounded-md">
                <ol className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2.5 text-sm">
                  {
                    cateGories?.slice(0, 5).map(data => <PopularCategories key={data?._id} img={data?.img} title={data?.title} quantity={data?.stock} extraQuantity={data?.extraStock} path={data.path} />)
                  }
                </ol>
              </div>
            </div>
            <div className="sm:hidden my-3 flex justify-center">
              <Link href="page/categories" className="" title="Featured product categories"><span className="py-1.5 px-4 text-sm bg-white font-medium rounded-md text-gray-600 hover:text-gray-700 hover:shadow-md">All categories</span></Link >
            </div>
          </section>
          <header className="my-1 mt-5">
            {
              home?.results?.map((data) => <div key={data?._id}>
                <h1 className="text-2xl font-medium leading-tight max-w-full">{data?.title}</h1>
                <p className="text-sm text-gray-700">{data?.distinction}</p>
              </div>)
            }

          </header>
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-2.5 bg-white border rounded-md py-5">
            {
              home?.result?.map((data) => <Featured key={data?.key} img={data?.img} title={data?.title} model={data?.model} />)
            }

          </ul>


          <div className="space-y-6 mt-6">

            <section>
              <header className="flex flex-wrap gap-2 justify-between items-center my-1">
                <div>
                  <h2 className="text-xl font-medium leading-tight max-w-full">Brands</h2>
                  <p className="text-sm text-gray-700">Find products by brands</p>
                </div>
                <div className="hidden sm:inline-block">
                  <Link href="/page/brands" className="" title="All product brands"><span className="py-1.5 px-4 text-sm bg-white font-medium rounded-md text-gray-600 hover:text-gray-700 hover:shadow-md">All brands</span></Link >
                </div>
              </header>
              <ol className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2.5 text-sm">
                {/* {!brand && <Loading />} */}

                {
                  brand?.map(data => <Brands key={data?._id} quantity={data?.quantity} ExtraQuantity={data?.ExtraQuantity} rating={data?.rating} img={data?.img} path={data?.path} />)
                }
              </ol>
              <div className="sm:hidden my-3 flex justify-center">
                <Link href="/page/brands" className="" title="All product brands"><span className="py-1.5 px-4 text-sm bg-white font-medium rounded-md text-gray-600 hover:text-gray-700 hover:shadow-md">All brands</span></Link >
              </div>
            </section>
            <section>
              <header className="flex flex-wrap gap-2 justify-between items-center my-1">
                <div>
                  <h2 className="text-xl font-medium leading-tight  max-w-full">Product categories</h2>
                  <p className="text-sm text-gray-700">Find products by category</p>
                </div>
                <div className="hidden sm:inline-block">
                  <Link href="/page/categories" className="" title="All product categories"><span className="py-1.5 px-4 text-sm bg-white font-medium rounded-md text-gray-600 hover:text-gray-700 hover:shadow-md">All categories</span></Link >
                </div>
              </header>
              <div className="bg-white border py-8 rounded-md">
                <ol className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2.5 text-sm">
                  {/* {!cateGories && <Loading />} */}
                  {
                    cateGories?.slice(0, 10).map(data => <PopularCategories key={data?._id} img={data?.img} title={data?.title} quantity={data?.stock} extraQuantity={data?.extraStock} path={data.path} />)
                  }
                </ol>
              </div>
              <div className="sm:hidden my-3 flex justify-center">
                <Link href="/page/categories" className="" title="All product categories"><span className="py-1.5 px-4 text-sm bg-white font-medium rounded-md text-gray-600 hover:text-gray-700 hover:shadow-md">All categories</span></Link >
              </div>
            </section>
          </div>
        </article>
      </main>
    </>
  )
}
