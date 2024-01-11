"use client"

import { useRouter } from 'next/navigation'
import { useState } from 'react'


const BottomNavigation = () => {


    const [active,setActive]=useState(1);


    const svgActive = "w-6 h-6 mb-2 text-teal-500 dark:text-teal-600 group-hover:text-teal-600 dark:group-hover:text-teal-500"
    const svgNoActive = "w-5 h-5 mb-2 text-gray-500 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-500"

    const buttonActive="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-300 bg-gray-100 dark:bg-gray-300 group"
    const buttonNoActive = "inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"


    const textActive="text-sm text-teal-500 dark:text-teal-600 group-hover:text-teal-600 dark:group-hover:text-teal-500"
    const textNoActive = "text-sm text-gray-500 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-500"


    const router = useRouter()
    return (
        <div class="w-full" style={{zIndex:10}}>
            {/* <section id="bottom-navigation" class="md:hidden block fixed inset-x-0 bottom-0 z-10 bg-white shadow"> */}
            <div class="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
                <div class="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
                    <button  onClick={()=>{router.push('/', { scroll: false });setActive(1)}} type="button" class={active === 1 ? buttonActive : buttonNoActive}>
                    <svg class={active === 1 ? svgActive : svgNoActive} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8v10a1 1 0 0 0 1 1h4v-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5h4a1 1 0 0 0 1-1V8M1 10l9-9 9 9"/>
            </svg>
                        <span class={active === 1 ? textActive : textNoActive}>پیشخوان</span>
                    </button>
                    <button onClick={()=>{router.push('/possibilities', { scroll: false });setActive(2)}} type="button" class={active === 2 ? buttonActive : buttonNoActive}>
                    <svg class={active === 2 ? svgActive : svgNoActive} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6.143 1H1.857A.857.857 0 0 0 1 1.857v4.286c0 .473.384.857.857.857h4.286A.857.857 0 0 0 7 6.143V1.857A.857.857 0 0 0 6.143 1Zm10 0h-4.286a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286A.857.857 0 0 0 17 6.143V1.857A.857.857 0 0 0 16.143 1Zm-10 10H1.857a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286A.857.857 0 0 0 7 16.143v-4.286A.857.857 0 0 0 6.143 11Zm10 0h-4.286a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286a.857.857 0 0 0 .857-.857v-4.286a.857.857 0 0 0-.857-.857Z"/>
            </svg>
                        <span class={active === 2 ? textActive : textNoActive}>امکانات</span>
                    </button>
                    <button onClick={()=>{router.push('/setting', { scroll: false });setActive(3)}} type="button" class={active === 3 ? buttonActive : buttonNoActive}>
                        <svg class={active === 3 ? svgActive : svgNoActive} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12.25V1m0 11.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M4 19v-2.25m6-13.5V1m0 2.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M10 19V7.75m6 4.5V1m0 11.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM16 19v-2"/>
                        </svg>
                        <span class={active === 3 ? textActive : textNoActive}>تنظمیات</span>
                    </button>
                    <button onClick={()=>{router.push('/reports', { scroll: false });setActive(4)}}  type="button" class={active === 4 ? buttonActive : buttonNoActive}>
                    <svg class={active === 4 ? svgActive : svgNoActive} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1v14h16M4 10l3-4 4 4 5-5m0 0h-3.207M16 5v3.207"/>
            </svg>
                        <span class={active === 4 ? textActive : textNoActive}>گزارشات</span>
                    </button>
                </div>
            </div>
        </div>
    )
}


export default BottomNavigation;