
"use client"

import BottomNavigation from '@/components/bottomNavigation';
import '../globals.css'
import { useTheme } from "next-themes";

import Link from "next/link";

import { useState } from "react";
import FloatDropdown from '@/components/float-dropdown';

const Reports = () => {
    const { theme, setTheme } = useTheme();
    const [notification, setNotification] = useState(true)



    return (
        <>
     
            <div class="flex h-screen items-center justify-center z-40">

                <div className="grid grid-cols-1 gap-3 w-full md:w-2/5 lg:1/4 px-5 mt-5 mb-20">


                    <Link href="/reports/history" className="bg-[#14b8a6] dark:bg-[#1e293b] text-white shadow-lg py-2.5 px-5 rounded-md text-md">
                        <div className="flex justify-between">
                            <div className="flex">
                                <svg class="w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 8H4m8 3.5v5M9.5 14h5M4 6v13c0 .6.4 1 1 1h14c.6 0 1-.4 1-1V9c0-.6-.4-1-1-1h-5a1 1 0 0 1-.8-.4l-1.9-2.2a1 1 0 0 0-.8-.4H5a1 1 0 0 0-1 1Z" />
                                </svg>
                                <div className="mr-2 flex items-center justify-center">مشاهده مسیرهای گذشته</div>
                            </div>
                            <div></div>

                        </div>
                    </Link>


                    {/* <Button onClick={()=>console.log('clicked')} title="افزودن کاربر"/>
                        <Button onClick={()=>console.log('clicked')} title="افزودن دستگاه"/>
                        <Button onClick={() => theme == "dark"? setTheme('light'): setTheme("dark")} title={theme == "light"? "حالت شب" : "حالت روز"}/>  */}

                </div>
            </div>
<FloatDropdown/>
          
            <BottomNavigation active={4} />
        </>
    )
}


export default Reports;