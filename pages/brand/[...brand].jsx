import Link from "next/link";
import { useRouter } from "next/router"
import { useEffect } from "react";
import { useBrandProductQuery, useCateGorQuery } from "../../app/features/api/ProductControl";
import Featured from "../../components/Pages/Product/Featured";
import PopularCategories from "../../components/Pages/Product/PopularCategories";

export default function Brand() {
  const { data: cateGories, isLoading: cateGoriesLoading } = useCateGorQuery()
  const router = useRouter()
  const path = router.query.brand;
  if (!path) {
    return;
  }

  const BrandInfo = {
    brand: path[0],
    // brand: path[1]
  }
  useEffect(() => { }, [path])
  const { data } = useBrandProductQuery(BrandInfo)
  console.log(BrandInfo)



  return (
    <main className="px-2 text-gray-800 max-w-screen-xl mx-auto min-h-screen">
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

        <section className="my-1 mt-5">
          <header className="flex flex-wrap gap-2 justify-between items-center my-1">
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

        </section>





      </section>
    </main>

  )
}
