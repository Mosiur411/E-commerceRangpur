import Head from 'next/head'
import Featured from '../components/Pages/Product/Featured'
import StockProducts from '../components/Pages/Product/StockProducts'
import Upcoming from '../components/Pages/Product/Upcoming'
import RecentlyViewed from '../components/Pages/Product/RecentlyViewed'
import Brands from '../components/Pages/Product/Brands'
import PopularCategories from '../components/Pages/Product/PopularCategories'
import Link from 'next/link'
import { useBrandQuery, useCateGorQuery } from '../app/features/api/ProductControl'
import Loading from '../components/Shared/Loading/Loading'
export default function Home() {
  const { data: cateGories, isLoading: cateGoriesLoading } = useCateGorQuery()
  const { data: brand, isLoading: BandLoading } = useBrandQuery()
  console.log(cateGories)

  if (cateGoriesLoading || BandLoading) {
    return <Loading />
  }

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
            <h1 className="text-2xl font-medium leading-tight max-w-full">Featured</h1>
            <p className="text-sm text-gray-700">Latest deals from Price in Kenya</p>
          </header>
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-2.5 bg-white border rounded-md py-5">
            <Featured img={"https://api.priceinkenya.com/media/125240/conversions/xiaomiredminote11pro4gh-original.webp"} title={"Xiaomi Redmi Note 11 Pro 4G"} quantity={39} model={"KES 33,500"} />
            <Featured img={"https://api.priceinkenya.com/media/128997/conversions/iphone14promaxd-original.webp"} title={"Xiaomi Redmi A1 Plus"} quantity={27} model={"KES 10,999"} />
            <Featured img={"https://api.priceinkenya.com/media/123983/conversions/nokia-x10-6gb128gb-nFlgcppvie-original.webp"} title={"Nokia X10"} quantity={36} model={"KES 21,900"} />
            <Featured img={"https://api.priceinkenya.com/media/123986/conversions/nokia-x20-8gb128gb-asf0OEBLnB-original.webp"} title={"Nokia X20"} quantity={47} model={"KES 27,000"} />
            <Featured img={"https://api.priceinkenya.com/media/128039/conversions/camon19promondrianq-original.webp"} title={"Tecno Camon 19 Pro Mondrian Edition"} quantity={33} model={"KES 34,300"} />
            <Featured img={"https://api.priceinkenya.com/media/127254/conversions/GalaxyZFold4c-original.webp"} title={"Samsung Galaxy Z Fold 4 5G"} quantity={19} model={"KES 180,000"} />
            <Featured img={"https://api.priceinkenya.com/media/125240/conversions/xiaomiredminote11pro4gh-original.webp"} title={"Xiaomi Redmi Note 11 Pro 4G"} quantity={39} model={"KES 33,500"} />
            <Featured img={"https://api.priceinkenya.com/media/128997/conversions/iphone14promaxd-original.webp"} title={"Xiaomi Redmi A1 Plus"} quantity={27} model={"KES 10,999"} />
            <Featured img={"https://api.priceinkenya.com/media/123983/conversions/nokia-x10-6gb128gb-nFlgcppvie-original.webp"} title={"Nokia X10"} quantity={36} model={"KES 21,900"} />
            <Featured img={"https://api.priceinkenya.com/media/123986/conversions/nokia-x20-8gb128gb-asf0OEBLnB-original.webp"} title={"Nokia X20"} quantity={47} model={"KES 27,000"} />
          </ul>
          <div className="space-y-6 mt-6">
            <section>
              <header className="flex flex-wrap gap-2 justify-between items-center my-1">
                <div>
                  <h2 className="text-xl font-medium leading-tight max-w-full">What`&lsquo;;`s new</h2>
                  <p className="text-sm text-gray-700">Recently in stock products</p>
                </div>
                <div className="hidden sm:inline-block">
                  <Link href="/page/whats-new" className="" title="What's new"><span className="py-1.5 px-4 text-sm bg-white font-medium rounded-md text-gray-600 hover:text-gray-700 hover:shadow-md">All new arrivals</span></Link >
                </div>
              </header>
              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-2.5 bg-white border rounded-md py-5">
                <StockProducts img={"https://api.priceinkenya.com/media/128643/conversions/iphone14plusa-original.webp"} title={"Apple iPhone 14 Plus"} quantity={7} model={"KES 131,000"} />
                <StockProducts img={"https://api.priceinkenya.com/media/128613/conversions/iphone14plusa-original.webp"} title={"Apple iPhone 14 Plus"} quantity={7} model={"KES 131,000"} />
                <StockProducts img={"https://api.priceinkenya.com/media/128592/conversions/iphone14j-original.webp"} title={"Apple iPhone 14 Plus"} quantity={7} model={"KES 131,000"} />
                <StockProducts img={"https://api.priceinkenya.com/media/128670/conversions/iphone14proa-original.webp"} title={"Apple iPhone 14 Plus"} quantity={7} model={"KES 131,000"} />
                <StockProducts img={"https://api.priceinkenya.com/media/128697/conversions/iphone14promaxd-original.webp"} title={"Apple iPhone 14 Plus"} quantity={7} model={"KES 131,000"} />
                <StockProducts img={"https://api.priceinkenya.com/media/128844/conversions/iphone14j-original.webp"} title={"Apple iPhone 14 Plus"} quantity={7} model={"KES 131,000"} />
                <StockProducts img={"https://api.priceinkenya.com/media/128874/conversions/iphone14j-original.webp"} title={"Apple iPhone 14 Plus"} quantity={7} model={"KES 131,000"} />
                <StockProducts img={"https://api.priceinkenya.com/media/128895/conversions/iphone14plusa-original.webp"} title={"Apple iPhone 14 Plus"} quantity={7} model={"KES 131,000"} />
                <StockProducts img={"https://api.priceinkenya.com/media/128922/conversions/iphone14proa-original.webp"} title={"Apple iPhone 14 Plus"} quantity={7} model={"KES 131,000"} />
                <StockProducts img={"https://api.priceinkenya.com/media/128946/conversions/iphone14proa-original.webp"} title={"Apple iPhone 14 Plus"} quantity={7} model={"KES 131,000"} />
              </ul>
              <div className="sm:hidden my-3 flex justify-center">
                <Link href="/page/whats-new" className="" title="What's new"><span className="py-1.5 px-4 text-sm bg-white font-medium rounded-md text-gray-600 hover:text-gray-700 hover:shadow-md">All new arrivals</span></Link >
              </div>
            </section>
            <section>
              <header className="flex flex-wrap gap-2 justify-between items-center my-1">
                <div>
                  <h2 className="text-xl font-medium leading-tight max-w-full">Upcoming</h2>
                  <p className="text-sm text-gray-700">Products to be available soon</p>
                </div>
                <div className="hidden sm:inline-block">
                  <Link href="/page/upcoming-products" className="" title="Upcoming products"><span className="py-1.5 px-4 text-sm bg-white font-medium rounded-md text-gray-600 hover:text-gray-700 hover:shadow-md">All upcoming</span></Link >
                </div>
              </header>
              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-2.5 bg-white border rounded-md py-5">
                <Upcoming img={"https://api.priceinkenya.com/media/130589/conversions/xiaomi13proj-original.webp"} title={"Xiaomi 13 Pro"} quantity={3} model={"KES 110,999"} />
                <Upcoming img={"https://api.priceinkenya.com/media/130636/conversions/oppofindn2flipc-original.webp"} title={"Xiaomi 13 Pro"} quantity={3} model={"KES 110,999"} />
                <Upcoming img={"https://api.priceinkenya.com/media/130603/conversions/vivoy35a-original.webp"} title={"Xiaomi 13 Pro"} quantity={3} model={"KES 110,999"} />
                <Upcoming img={"https://api.priceinkenya.com/media/130568/conversions/xiaomi13j-original.webp"} title={"Xiaomi 13 Pro"} quantity={3} model={"KES 110,999"} />
                <Upcoming img={"https://api.priceinkenya.com/media/130542/conversions/oppoa17a-original.webp"} title={"Xiaomi 13 Pro"} quantity={3} model={"KES 110,999"} />
                <Upcoming img={"https://api.priceinkenya.com/media/130457/conversions/phantomx2a-original.webp"} title={"Xiaomi 13 Pro"} quantity={3} model={"KES 110,999"} />
                <Upcoming img={"https://api.priceinkenya.com/media/130589/conversions/xiaomi13proj-original.webp"} title={"Xiaomi 13 Pro"} quantity={3} model={"KES 110,999"} />
                <Upcoming img={"https://api.priceinkenya.com/media/130636/conversions/oppofindn2flipc-original.webp"} title={"Xiaomi 13 Pro"} quantity={3} model={"KES 110,999"} />
                <Upcoming img={"https://api.priceinkenya.com/media/130603/conversions/vivoy35a-original.webp"} title={"Xiaomi 13 Pro"} quantity={3} model={"KES 110,999"} />
                <Upcoming img={"https://api.priceinkenya.com/media/130589/conversions/xiaomi13proj-original.webp"} title={"Xiaomi 13 Pro"} quantity={3} model={"KES 110,999"} />
              </ul>
              <div className="sm:hidden my-3 flex justify-center">
                <Link href="/page/upcoming-products" className="" title="Upcoming products"><span className="py-1.5 px-4 text-sm bg-white font-medium rounded-md text-gray-600 hover:text-gray-700 hover:shadow-md">All upcoming</span></Link >
              </div>
            </section>
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
                  <h2 className="text-xl font-medium leading-tight ">Recently viewed</h2>
                  <p className="text-sm text-gray-700">Product view history</p>
                </div>
                <div className="hidden sm:inline-block">
                  <Link href="/user/viewed" className="" title="My recently viewed products"><span className="py-1.5 px-4 text-sm bg-white font-medium rounded-md text-gray-600 hover:text-gray-700 hover:shadow-md">All recently viewed</span></Link >
                </div>
              </header>
              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-2.5 bg-white border rounded-md py-5">
                <RecentlyViewed img={"https://api.priceinkenya.com/media/123573/conversions/samsunggalaxys215gc-original.webp"} title={"Samsung Galaxy S21 5G"} model={"KES 70,500"} quantity={421} />
                <RecentlyViewed img={"https://api.priceinkenya.com/media/129210/conversions/redmia1plusb-original.webp"} title={"Xiaomi Redmi A1 Plus"} model={"KES 10,999"} quantity={133} />
              </ul>
              <div className="sm:hidden my-3 flex justify-center">
                <Link href="/user/viewed" className="" title="My recently viewed products"><span className="py-1.5 px-4 text-sm bg-white font-medium rounded-md text-gray-600 hover:text-gray-700 hover:shadow-md">All recently viewed</span></Link >
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
