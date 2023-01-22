import React, { useState } from 'react'
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useAdminProductAddMutation, useBrandQuery, useCateGorQuery } from '../../app/features/api/ProductControl'
import HtmlDescription from '../../components/Shared/HtmlDescription';
export default function addProduct() {
  const { data: cateGories, isLoading: cateGoriesLoading } = useCateGorQuery()
  const { data: brand, isLoading: BandLoading } = useBrandQuery()
  const [productAdd, { isSuccess, data }] = useAdminProductAddMutation()
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }
  const [Description, setDescription] = useState('')
  const [ShortDescription, setShortDescription] = useState('')
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (inputs) {
      if (Description && ShortDescription) {
        const data = { ...inputs, description: Description || '', shortDescription: ShortDescription || '' }
        await productAdd(data)
      }
    }
  }
  useEffect(() => {
    if (isSuccess) {
      toast("Product Add Success")
    }
  }, [isSuccess])

  return (
    <main>
      <section class="flex items-center bg-gray-500  font-poppins dark:bg-gray-800 ">
        <div class="justify-center flex-1 max-w-2xl px-4  mx-auto ">
          <h2 class="pb-2 text-xl font-bold text-center text-gray-800 md:text-3xl dark:text-gray-300">
            Product From
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
                  <input type="text" id='Title' placeholder="productTitle"
                    name="name"
                    value={inputs.name || ""}
                    onChange={handleChange}
                    required
                    class="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-100 border rounded lg:mb-0 dark:text-gray-400 dark:border-gray-800 dark:bg-gray-800 " />
                </div>
                <div class="w-full px-3 md:w-1/2 md:mb-0">
                  <label htmlFor="Model"
                    class="block mb-2 font-bold text-gray-700 uppercase dark:text-gray-400">
                    Model</label>
                  <input type="text" id='Model' placeholder="productModel"
                    name="model"
                    value={inputs.model || ""}
                    onChange={handleChange}

                    required
                    class="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-100 border rounded dark:placeholder-gray-500 lg:mb-0 dark:text-gray-400 dark:border-gray-800 dark:bg-gray-800 " />
                </div>
              </div>
              <div class="px-3 mb-6">
                <label htmlFor="images" class="block mb-2 font-bold text-gray-700 uppercase dark:text-gray-400">
                  Images URL</label>
                <input type="text" placeholder="url" id='images'
                  name="img"
                  value={inputs.img || ""}
                  onChange={handleChange}

                  required
                  class="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-100 border rounded dark:placeholder-gray-500 dark:text-gray-400 dark:border-gray-800 dark:bg-gray-800 " />
              </div>
              <div class="flex flex-wrap mb-6">
                <div class="w-full px-3 md:w-1/2 md:mb-0">
                  <label htmlFor="price"
                    class="block mb-2 font-bold text-gray-700 uppercase dark:text-gray-400">
                    Price
                  </label>
                  <input type="number" id='Title' placeholder="price"
                    name="price"
                    value={inputs.price || ""}
                    onChange={handleChange}
                    required
                    class="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-100 border rounded lg:mb-0 dark:text-gray-400 dark:border-gray-800 dark:bg-gray-800 " />
                </div>
                <div class="w-full px-3 md:w-1/2 md:mb-0">
                  <label htmlFor="unPrice"
                    class="block mb-2 font-bold text-gray-700 uppercase dark:text-gray-400">
                    unPrice</label>
                  <input type="number" placeholder="productModel"
                    name="unPrice"
                    value={inputs.unPrice || ""}
                    onChange={handleChange}
                    class="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-100 border rounded dark:placeholder-gray-500 lg:mb-0 dark:text-gray-400 dark:border-gray-800 dark:bg-gray-800 " />
                </div>
              </div>
              {/* Category  */}
              <div class="flex flex-wrap mb-6">
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
                        cateGories?.map(data => <option value={data?.path} selected className='uppercase'>{data?.path}</option>)
                      }

                    </select>
                  </div>
                </div>
                <div class="w-full px-3 md:w-1/2 md:mb-0">
                  <label htmlFor="subCategory"
                    class="block mb-2 font-bold text-gray-700 uppercase dark:text-gray-400">
                    Sub Category
                  </label>
                  <div>
                    <select className="block w-full max-w-sm pl-3 pr-10 py-2 transition duration-100 ease-in-out border rounded-md shadow-sm focus:ring-2 focus:ring-primary-100 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed text-base md:text-sm focus:border focus:border-primary-100 border-gray-300 placeholder-gray-400 focus:border-primary-100"
                      name="subCategory"
                      value={inputs.subCategory || ""}
                      onChange={handleChange}
                      required
                    >
                      {
                        cateGories?.map(data => <option value={data?.path} selected className='uppercase'>{data?.path}</option>)
                      }

                    </select>
                  </div>
                </div>
              </div>
              {/*  brand  */}

              <div class="flex flex-wrap mb-6">
                <div class="w-full px-3 md:w-1/2 md:mb-0">
                  <label htmlFor="Brand"
                    class="block mb-2 font-bold text-gray-700 uppercase dark:text-gray-400">
                    Brand
                  </label>
                  <div>
                    <select className="block w-full max-w-sm pl-3 pr-10 py-2 transition duration-100 ease-in-out border rounded-md shadow-sm focus:ring-2 focus:ring-primary-100 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed text-base md:text-sm focus:border focus:border-primary-100 border-gray-300 placeholder-gray-400 focus:border-primary-100"
                      name="brand"
                      value={inputs.brand || ""}
                      onChange={handleChange}
                      required
                    >
                      {
                        brand?.map(data => <option value={data?.path} selected className='uppercase'>{data?.path}</option>)
                      }

                    </select>
                  </div>
                </div>
                <div class="w-full px-3 md:w-1/2 md:mb-0">
                  <label htmlFor="inStock"
                    class="block mb-2 font-bold text-gray-700 uppercase dark:text-gray-400">
                    IN STOCK</label>
                  <input type="number" id='inStock' placeholder="productModel"
                    name="inStock"
                    value={inputs.inStock || ""}
                    onChange={handleChange}
                    required
                    class="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-100 border rounded dark:placeholder-gray-500 lg:mb-0 dark:text-gray-400 dark:border-gray-800 dark:bg-gray-800 " />
                </div>
              </div>

              <div class="px-3 mb-6">
                <label htmlFor="buyLink" class="block mb-2 font-bold text-gray-700 uppercase dark:text-gray-400">
                  Buy Link</label>
                <input type="text" placeholder="url" id='buyLink'
                  name="byuLink"
                  value={inputs.byuLink || ""}
                  onChange={handleChange}
                  required
                  class="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-100 border rounded dark:placeholder-gray-500 dark:text-gray-400 dark:border-gray-800 dark:bg-gray-800 " />
              </div>
              <div class="px-3 mb-6">
                <label for="Description" class="block mb-2 font-bold text-gray-700 uppercase dark:text-gray-400">
                  Description</label>
                <HtmlDescription Description={setDescription} />
              </div>
              <div class="px-3 mb-6">
                <label for="ShortDescription" class="block mb-2 font-bold text-gray-700 uppercase dark:text-gray-400">
                  Short Description</label>
                <div className='bg-white' >
                  <HtmlDescription Description={setShortDescription} />
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








    </main>
  )
}
