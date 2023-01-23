import React from 'react'
import { useCateGorQuery } from '../../../app/features/api/ProductControl'
export default function index() {
    const { data: cateGories, isLoading: cateGoriesLoading } = useCateGorQuery()

    return (

        <div>
            <from>
                <div>
                    <input type='text' />
                    <div>
                        <select className="block w-full max-w-sm pl-3 pr-10 py-2 transition duration-100 ease-in-out border rounded-md shadow-sm focus:ring-2 focus:ring-primary-100 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed text-base md:text-sm focus:border focus:border-primary-100 border-gray-300 placeholder-gray-400 focus:border-primary-100"
                            name="brand"
                        // value={inputs.brand || ""}
                        // onChange={handleChange}
                        // required
                        >
                            {
                                cateGories?.map(data => <option value={data?.path} selected className='uppercase'>{data?.path}</option>)
                            }

                        </select>
                    </div>
                </div>
            </from>






        </div>
    )
}
