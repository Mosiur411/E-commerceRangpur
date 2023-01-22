import React, { useState } from 'react'
import { useEffect } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { toast } from 'react-toastify';
import { useBrandUpdateMutation } from '../../../app/features/api/ProductControl';

export default function BrandUpdate({ data: passData, SetModelHandel, modelHandel, id }) {
    const [inputs, setInputs] = useState({});
    const [handlePath, handleChangePath] = useState();
    const [BrandUpdate, { isSuccess }] = useBrandUpdateMutation()

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (Object.keys(inputs).length >= 1) {
            const data = { ...inputs, id: passData?._id }
            await BrandUpdate(data)
        }
    }
    useEffect(() => {
        if (isSuccess) {
            toast('Success  Update')
        }
    }, [isSuccess])
    return (
        <section className="w-full h fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity 50">
            <main className='w-full flex justify-center items-center  '>
                <div className="relative w-[800px] flex flex-col py-3 min-w-0 break-words  bg-white  shadow-lg rounded-lg border-0">
                    <button onClick={() => SetModelHandel(!modelHandel)} className=" px-3 text-right text-2xl mt-12" ><AiOutlineCloseCircle size={20} /></button>
                    <div class="p-3  rounded shadow-md dark:bg-gray-700 ">

                        <form onSubmit={handleSubmit} class="" id="myForm">
                            <div class="flex flex-wrap mb-6">
                                <div class="w-full px-3 md:w-1/2 md:mb-0">
                                    <label htmlFor="Title"
                                        class="block mb-2 font-bold text-gray-700 uppercase dark:text-gray-400">
                                        Brand Name
                                    </label>
                                    <input type="text" id='Title' placeholder="productTitle"
                                        name="title"
                                        value={inputs.title || passData?.title}
                                        onChange={handleChange}
                                        required
                                        class="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-100 border rounded lg:mb-0 dark:text-gray-400 dark:border-gray-800 dark:bg-gray-800 " />
                                </div>
                                <div class="w-full px-3 md:w-1/2 md:mb-0">
                                    <label htmlFor="path"
                                        class="block mb-2 font-bold text-gray-700 uppercase dark:text-gray-400">
                                        Path</label>
                                    <input type="text" className='lowercase' id='path'
                                        name="path"
                                        value={passData?.path}
                                        onChange={(e) => handleChangePath(e.target.value)}
                                        class="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-100 border rounded dark:placeholder-gray-500 lg:mb-0 dark:text-gray-400 dark:border-gray-800 dark:bg-gray-800 " />
                                </div>
                            </div>
                            <div class="px-3 mb-6">
                                <label htmlFor="images" class="block mb-2 font-bold text-gray-700 uppercase dark:text-gray-400">
                                    Images URL</label>
                                <input type="text" placeholder="url" id='images'
                                    name="img"
                                    value={inputs.img || passData?.img}
                                    onChange={handleChange}

                                    required
                                    class="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-100 border rounded dark:placeholder-gray-500 dark:text-gray-400 dark:border-gray-800 dark:bg-gray-800 " />
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
            </main>
        </section>
    )
}
