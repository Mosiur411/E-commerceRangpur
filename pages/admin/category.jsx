import React, { useState } from 'react'

export default function category() {
  const [show, setShow] = useState(true)
  const [categoryAdd, setCategoryAdd] = useState(false)

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

  const [inputs, setInputs] = useState({});
  const [handlePath, handleChangePath] = useState();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }


  const handleSubmit = async (event) => {
    event.preventDefault();
    const checkPath = handlePath.replace(/\s/g, '',);
    const pathData = checkPath.toLowerCase();
    const data = {...inputs,path:pathData}
    console.log(data)

  }

  return (
    <main>
      {/* category type    */}
      <div className='flex justify-start items-start gap-2 p-2'>
        <button onClick={() => handelShow()} class={`${show ? 'bg-blue-700 text-white' : ''} py-2.5  px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200   focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700`}>Show</button>
        <button onClick={() => handelCategory()} class={`${categoryAdd ? 'bg-blue-700 text-white' : ''} py-2.5  px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200   focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700`}>Category add</button>

      </div>
      {/* Category control */}
      <section className='px-10 py-5'>
        {
          show && <div>show</div>
        }
        {
          categoryAdd && <div>
            <section class="flex items-center bg-gray-500  font-poppins dark:bg-gray-800 ">
              <div class="justify-center flex-1 max-w-2xl px-4  mx-auto ">
                <h2 class="pb-2 text-xl font-bold text-center text-gray-800 md:text-3xl dark:text-gray-300">
                  Category From
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
                        <label htmlFor="path"
                          class="block mb-2 font-bold text-gray-700 uppercase dark:text-gray-400">
                          Path</label>
                        <input type="text" className='lowercase' id='path' placeholder="path"
                          name="path"
                          onChange={(e) => handleChangePath(e.target.value)}

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
                        <label htmlFor="Stock"
                          class="block mb-2 font-bold text-gray-700 uppercase dark:text-gray-400">
                          Stock
                        </label>
                        <input type="number" id='Stock' placeholder="Stock"
                          name="stock"
                          value={inputs.stock || ""}
                          onChange={handleChange}
                          required
                          class="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-100 border rounded lg:mb-0 dark:text-gray-400 dark:border-gray-800 dark:bg-gray-800 " />
                      </div>
                      <div class="w-full px-3 md:w-1/2 md:mb-0">
                        <label htmlFor="extraStock"
                          class="block mb-2 font-bold text-gray-700 uppercase dark:text-gray-400">
                          ExtraStock</label>
                        <input type="number" id='extraStock' placeholder="extraStock"
                          name="extraStock"
                          value={inputs.extraStock || ""}
                          onChange={handleChange}
                          class="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-100 border rounded dark:placeholder-gray-500 lg:mb-0 dark:text-gray-400 dark:border-gray-800 dark:bg-gray-800 " />
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
