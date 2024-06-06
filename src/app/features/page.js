
"use client"


import { useTheme } from "next-themes";
import '../globals.css'
import "react-multi-date-picker/styles/colors/teal.css"
import "react-multi-date-picker/styles/backgrounds/bg-dark.css"
import BottomNavigation from "@/components/bottomNavigation";
import FloatDropdown from "@/components/float-dropdown";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
const Features = () => {
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;
    const router = useRouter();


    return (

        <>
            <div className="flex h-screen items-center justify-center z-40">
                <div className="grid grid-cols-1 gap-3 w-full md:w-2/5 lg:w-1/4 px-5 mt-5 mb-20">


                    <Button onClick={() => router.push('/features/notification-setting')} className="bg-[#14b8a6] dark:bg-[#1e293b]  text-white py-6 text-md" startContent={<svg className="w-8 h-8 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 8H4m8 3.5v5M9.5 14h5M4 6v13c0 .6.4 1 1 1h14c.6 0 1-.4 1-1V9c0-.6-.4-1-1-1h-5a1 1 0 0 1-.8-.4l-1.9-2.2a1 1 0 0 0-.8-.4H5a1 1 0 0 0-1 1Z" />
                    </svg>} endContent={<div className='w-full flex  justify-end'></div>}>تنظیم هشدارها</Button>

                    <Button onClick={() => router.push('/features/remote-control')} className="bg-[#14b8a6] dark:bg-[#1e293b]  text-white py-6 text-md" startContent={<svg className="w-8 h-8 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 8H4m8 3.5v5M9.5 14h5M4 6v13c0 .6.4 1 1 1h14c.6 0 1-.4 1-1V9c0-.6-.4-1-1-1h-5a1 1 0 0 1-.8-.4l-1.9-2.2a1 1 0 0 0-.8-.4H5a1 1 0 0 0-1 1Z" />
                    </svg>} endContent={<div className='w-full flex  justify-end'></div>}>کنترل از راه دور</Button>




                </div>
            </div>

            <FloatDropdown />

            <BottomNavigation active={2} />
        </>

    )
}


export default Features;
