import { useRouter } from "next/router"
import { useBrandProductQuery } from "../../app/features/api/ProductControl";
import Featured from "../../components/Pages/Product/Featured";

export default function Brand() {
  const router = useRouter()
  const path = router.query.brand;
  if (!path) {
    return;
  }
  const BrandInfo = {
    type: path[0],
    brand: path[1]
  }
  const { data } = useBrandProductQuery(BrandInfo)
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
      </section>
    </main>

  )
}
