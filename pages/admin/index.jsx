import { useEffect } from 'react'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { useAdminDeletePostMutation, useAdminGetProductQuery, useBrandQuery, useCateGorQuery } from '../../app/features/api/ProductControl'
import ProductUpdate from '../../components/Pages/Dashboard/ProductUpdate'

export default function Index() {
  const [FilterInput, serFilterInput] = useState("phone")
  const { data: cateGories, isLoading: cateGoriesLoading } = useCateGorQuery()
  const { data } = useAdminGetProductQuery(FilterInput)
  const [removeProduct, { isSuccess }] = useAdminDeletePostMutation()
  useEffect(() => {
    if (isSuccess) {
      toast("Delete Product ")
    }
  }, [isSuccess])


  /*  update handel */
  const [modelHandel, SetModelHandel] = useState(false)



  return (
    <main>
      <div class="w-full px-3 md:w-1/2 md:mb-0">
        <label htmlFor="parentsCategoty"
          class="block mb-2 font-bold text-gray-700 uppercase dark:text-gray-400">
          Parents Category
        </label>
        <div>
          <select className="block w-full max-w-sm pl-3 pr-10 py-2 transition duration-100 ease-in-out border rounded-md shadow-sm focus:ring-2 focus:ring-primary-100 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed text-base md:text-sm focus:border focus:border-primary-100 border-gray-300 placeholder-gray-400 focus:border-primary-100"
            onChange={(e) => serFilterInput(e.target.value)}
          >
            {
              cateGories?.map(data => <option  key={data?._id} value={data?.path} selected className='uppercase'>{data?.path}</option>)
            }

          </select>
        </div>
      </div>
      <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
        <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">Name</th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">State</th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">Brand</th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">Design/type/price </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 border-t border-gray-100">
            {
              data?.map(data => <tr key={data?._id} className="hover:bg-gray-50">
                <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
                  <div className="relative h-10 w-10">
                    <img
                      className="h-full w-full rounded-full object-cover object-center"
                      src={data?.img}
                      alt="No Images" width={100} height={100}
                    />
                    <span className="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white"></span>
                  </div>
                  <div className="text-sm">
                    <div className="font-medium text-gray-700">{data?.name}</div>
                    <div className="text-gray-400">{data?.model}</div>
                  </div>
                </th>
                <td className="px-6 py-4">
                  <span
                    className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-green-600"></span>
                    Active
                  </span>
                </td>
                <td className="px-6 py-4">{data?.brand}</td>
                <td className="px-6 py-4">
                  <div className="flex gap-2">
                    <span
                      className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600"
                    >
                      Design
                    </span>
                    <span
                      className="inline-flex items-center gap-1 rounded-full bg-indigo-50 px-2 py-1 text-xs font-semibold text-indigo-600"
                    >
                      {data?.type}
                    </span>
                    <span
                      className="inline-flex items-center gap-1 rounded-full bg-violet-50 px-2 py-1 text-xs font-semibold text-violet-600"
                    >
                      {data?.price}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex justify-end gap-4">
                    <button onClick={() => removeProduct(data?._id)} x-data="{ tooltip: 'Delete' }" >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="h-6 w-6"
                        x-tooltip="tooltip"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                      </svg>
                    </button>{/* onClick={() => SetModelHandel()} */}
                    <button onClick={() => SetModelHandel(!modelHandel)} x-data="{ tooltip: 'Edite' }" >

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="h-6 w-6"
                        x-tooltip="tooltip"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                        />
                      </svg>
                    </button>
                    {
                      modelHandel && <ProductUpdate data={data} SetModelHandel={SetModelHandel} modelHandel={modelHandel} />
                    }

                  </div>
                </td>
              </tr>
              )
            }
          </tbody>
        </table>
      </div>


    </main>
  )
}
