import React from 'react'
import { AiOutlineHome, AiFillSetting, AiOutlineUsergroupAdd } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import { RiSendPlaneFill } from "react-icons/ri";
import { MdManageAccounts } from "react-icons/md";
import { IoIosColorPalette } from "react-icons/io";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { useRouter } from 'next/router';
export default function Sidebar() {
    const router = useRouter()
    return (
        <main>
            <main className="min-w-fit sliderHeight sticky  dark:bg-slate-900  top-[74px] p-5 shadow-2xl rounded-sm flex flex-col justify-between h-[94vh] ">
                {/* ================ menu styles ============  */}
                <section className="flex flex-col gap-4">
                    {/* admin control  website  start*/}
                    <div onClick={() => router.push('/admin/addproduct')} className="flex gap-5 items-center cursor-pointer hover:bg-gray-500 rounded px-2 py-1 hover:text-white" >
                        <MdOutlineProductionQuantityLimits size={20} />
                        <span className="text-[20px]">Add Product</span>
                    </div>
                    <div onClick={() => router.push('/dashboard/User')} className="flex gap-5 items-center cursor-pointer hover:bg-gray-500 rounded px-2 py-1 hover:text-white" >
                        <AiOutlineUsergroupAdd size={20} />
                        <span className="text-[20px]">User</span>
                    </div>


                    {/* admin control  website   ent */}
                    <div className="flex gap-5 items-center cursor-pointer hover:bg-gray-500 rounded px-2 py-1 hover:text-white" >
                        <AiOutlineHome size={20} />
                        <span className="text-[20px]">Buy </span>
                    </div>
                    <div className="flex gap-5 items-center cursor-pointer hover:bg-gray-500 rounded px-2 py-1 hover:text-white">
                        <RiSendPlaneFill size={20} />
                        <span className="text-[20px]">Request</span>
                    </div>
                    <div onClick={() => router.push('/UserDetails/userProfile')} className="flex gap-5 items-center cursor-pointer hover:bg-gray-500 rounded px-2 py-1 hover:text-white">
                        <MdManageAccounts size={20} />
                        <span className="text-[20px] ">Profile</span>
                    </div>
                    <div className="flex gap-5 items-center cursor-pointer hover:bg-gray-500 rounded px-2 py-1 hover:text-white">
                        <AiFillSetting size={20} />
                        <span className="text-[20px] cursor-pointer">Setting</span>
                    </div>
                    <div className="flex gap-5 items-center cursor-pointer hover:bg-gray-500 rounded px-2 py-1 hover:text-white">
                        <IoIosColorPalette size={20} />
                        <span className="text-[20px]">Theme</span>
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
