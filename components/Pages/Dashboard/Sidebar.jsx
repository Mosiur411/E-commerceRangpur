import React from 'react'
import { AiOutlineHome, AiOutlineUsergroupAdd } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import { RiSendPlaneFill } from "react-icons/ri";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { useRouter } from 'next/router';
export default function Sidebar() {
    const router = useRouter()
    return (
        <main className='py-1 bg-white shadow  z-10 sticky top-[45px]'>
            <main className="min-w-fit p-5 shadow-2xl rounded-sm flex flex-col justify-between h-[93.1vh] ">
                {/* ================ menu styles ============  */}
                <section className="flex flex-col gap-4">
                    <div onClick={() => router.push('/admin')} className="flex gap-5 items-center cursor-pointer hover:bg-gray-500 rounded px-2 py-1 hover:text-white" >
                        <AiOutlineHome size={20} />
                        <span className="text-[20px]"> Dashboard</span>
                    </div>
                    <div onClick={() => router.push('/admin/addproduct')} className="flex gap-5 items-center cursor-pointer hover:bg-gray-500 rounded px-2 py-1 hover:text-white" >
                        <MdOutlineProductionQuantityLimits size={20} />
                        <span className="text-[20px]">Add Product</span>
                    </div>
                    <div onClick={() => router.push('/admin/category')} className="flex gap-5 items-center cursor-pointer hover:bg-gray-500 rounded px-2 py-1 hover:text-white" >
                        <AiOutlineUsergroupAdd size={20} />
                        <span className="text-[20px]">Category </span>
                    </div>
                    <div onClick={() => router.push('/admin/brand')} className="flex gap-5 items-center cursor-pointer hover:bg-gray-500 rounded px-2 py-1 hover:text-white">
                        <RiSendPlaneFill size={20} />
                        <span className="text-[20px]">Brand</span>
                    </div>
                    <div onClick={() => setDelete(!Delete)} className="flex gap-5 items-center cursor-pointer hover:bg-gray-500 rounded px-2 py-1 hover:text-white">
                        <FiLogOut size={20} />
                        <span className="text-[20px]">Log out</span>
                    </div>
                </section>
            </main >

        </main>
    )
}
