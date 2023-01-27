import Image from 'next/image'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import { useCateGorQuery, useHomeDeleteMutation, useHomePostMutation, useHomeQuery } from '../../app/features/api/ProductControl'
import HomeUpdate from '../../components/Pages/Dashboard/HomeUpdate'

export default function HomeProductAdd() {
    const [show, setShow] = useState(true)
    const [HomeData, { isSuccess: HomeIsSuccess }] = useHomePostMutation()
    const [removeBrand, { isSuccess: DeleteSuccess }] = useHomeDeleteMutation()
    const { data: home } = useHomeQuery()

    const [categoryAdd, setCategoryAdd] = useState(false)
    const { data: cateGories, isLoading: cateGoriesLoading } = useCateGorQuery()
    const handelCategory = () => {
        if (categoryAdd) {
            setCategoryAdd(true)
        } else {
            setCategoryAdd(true)
            setShow(false)
        }
    }
    const handelShow = () => {
        if (show) {
            setShow(true)
            setCategoryAdd(false)
        } else {
            setShow(true)
            setCategoryAdd(false)
        }
    }
    useEffect(() => {
        if (HomeIsSuccess) {
            toast("Add Category");
        }
        if (DeleteSuccess) {
            toast("Delete");
        }
    }, [HomeIsSuccess,DeleteSuccess])
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }


    const handleSubmit = async (event) => {
        event.preventDefault();
        if (inputs) {
            HomeData(inputs)
        }

    }
    /*  update handel */
    const [modelHandel, SetModelHandel] = useState(false)
    const [updateDataPass, setUpdateDataPass] = useState({})

    /* ======== const update value ========== */
    const updateValue = (id) => {
        const filterData = home?.results?.find(dt => dt?._id === id)
        if (filterData) {
            setUpdateDataPass(filterData)
            SetModelHandel(!modelHandel)
        }
    }

    return (
        <main>
            {/* category type    */}
            <div className='flex justify-start items-start gap-2 p-2'>
                <button onClick={() => handelShow()} class={`${show ? 'bg-blue-700 text-white' : ''} py-2.5  px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200   focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700`}>Show</button>
                {
                    !home?.results?.length >= 1 && <button onClick={() => handelCategory()} class={`${categoryAdd ? 'bg-blue-700 text-white' : ''} py-2.5  px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200   focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700`}>Home add</button>
                }



            </div>
            {/* Category control */}
            <section className='px-10 py-5'>
                {
                    show && <div>

                        <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
                            <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="px-6 py-4 font-medium text-gray-900">Title</th>
                                        <th scope="col" className="px-6 py-4 font-medium text-gray-900">distinction</th>
                                        <th scope="col" className="px-6 py-4 font-medium text-gray-900"></th>
                                        <th scope="col" className="px-6 py-4 font-medium text-gray-900">Design/type/ </th>
                                        <th scope="col" className="px-6 py-4 font-medium text-gray-900"></th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                                    {
                                        home?.results?.map(data => <tr key={data?._id} className="hover:bg-gray-50">
                                            <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
                                                <div className="text-sm">
                                                    <div className="font-medium text-gray-700">{data?.title}</div>
                                                </div>
                                            </th>
                                            <td className="px-6 py-4">
                                                <span
                                                    className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600"
                                                >
                                                    <span className="h-1.5 w-1.5 rounded-full bg-green-600"></span>
                                                    {data?.distinction}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex gap-2">
                                                    <span
                                                        className="inline-flex items-center gap-1 rounded-full bg-indigo-50 px-2 py-1 text-xs font-semibold text-indigo-600"
                                                    >
                                                        {data?.type}
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex justify-end gap-4">
                                                    <button onClick={() => removeBrand(data?._id)} x-data="{ tooltip: 'Delete' }" >
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
                                                    </button>{/*  onClick={() => SetModelHandel(!modelHandel)}*/}
                                                    <button onClick={() => updateValue(data?._id)} x-data="{ tooltip: 'Edite' }" >

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
                                                        modelHandel && <div>

                                                            <HomeUpdate data={updateDataPass} SetModelHandel={SetModelHandel} modelHandel={modelHandel} />
                                                        </div>
                                                    }
                                                </div>
                                            </td>
                                        </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                }
                {
                    categoryAdd && <div>
                        <section class="flex items-center bg-gray-500  font-poppins dark:bg-gray-800 ">
                            <div class="justify-center flex-1 max-w-2xl px-4  mx-auto ">
                                <h2 class="pb-2 text-xl font-bold text-center text-gray-800 md:text-3xl dark:text-gray-300">
                                    Home Pages Product addd
                                </h2>
                                <div class="w-20 mx-auto mb-6 border-b border-red-700 dark:border-gray-400"></div>
                                <div class="px-3 py-6 rounded shadow-md dark:bg-gray-700 bg-gray-500">
                                    <form onSubmit={handleSubmit} class="" id="myForm">
                                        <div class="flex flex-wrap mb-6">
                                            <div class="w-full px-3 md:w-1/2 md:mb-0">
                                                <label htmlFor="Title"
                                                    class="block mb-2 font-bold text-gray-700 uppercase dark:text-gray-400">
                                                    Title
                                                </label>
                                                <input type="text" id='Title' placeholder="Home Pages Title"
                                                    name="title"
                                                    value={inputs.title || ""}
                                                    onChange={handleChange}
                                                    required
                                                    class="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-100 border rounded lg:mb-0 dark:text-gray-400 dark:border-gray-800 dark:bg-gray-800 " />
                                            </div>
                                            <div class="w-full px-3 md:w-1/2 md:mb-0">
                                                <label htmlFor="distinction"
                                                    class="block mb-2 font-bold text-gray-700 uppercase dark:text-gray-400">
                                                    Distinction</label>
                                                <input type="text" className='lowercase' id='distinction' placeholder="distinction"
                                                    name="distinction"
                                                    value={inputs.distinction || ""}
                                                    onChange={handleChange}
                                                    required
                                                    class="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-100 border rounded dark:placeholder-gray-500 lg:mb-0 dark:text-gray-400 dark:border-gray-800 dark:bg-gray-800 " />
                                            </div>
                                        </div>
                                        <div class="flex flex-wrap mb-6">
                                            <div class="w-full px-3 md:w-1/2 md:mb-0">
                                                <label htmlFor="number"
                                                    class="block mb-2 font-bold text-gray-700 uppercase dark:text-gray-400">
                                                    SHow Product Number
                                                </label>
                                                <input type="number" id='number' placeholder="Product Show number"
                                                    name="number"
                                                    value={inputs.number || ""}
                                                    onChange={handleChange}
                                                    required
                                                    class="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-100 border rounded lg:mb-0 dark:text-gray-400 dark:border-gray-800 dark:bg-gray-800 " />
                                            </div>
                                            <div class="w-full px-3 md:w-1/2 md:mb-0">
                                                <label htmlFor="parentsCategoty"
                                                    class="block mb-2 font-bold text-gray-700 uppercase dark:text-gray-400">
                                                    Parents Category
                                                </label>
                                                <div>
                                                    <select className="block w-full max-w-sm pl-3 pr-10 py-2 transition duration-100 ease-in-out border rounded-md shadow-sm focus:ring-2 focus:ring-primary-100 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed text-base md:text-sm focus:border focus:border-primary-100 border-gray-300 placeholder-gray-400 focus:border-primary-100"
                                                        name="type"
                                                        value={inputs.type || ""}
                                                        onChange={handleChange}
                                                        required
                                                    >
                                                        {
                                                            cateGories?.map(data => <option key={data?._id} value={data?.path} selected className='uppercase'>{data?.path}</option>)
                                                        }

                                                    </select>
                                                </div>



                                            </div>
                                        </div>

                                        <div class="px-3">
                                            <button
                                                class="px-4 py-2 font-medium text-gray-100 bg-blue-600 rounded shadow hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-700">
                                                Send
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </section>

                    </div>
                }



            </section>
        </main>
    )
}
