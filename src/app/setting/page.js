
"use client"


import { useTheme } from "next-themes";


const Setting =()=>{
    const { theme, setTheme } = useTheme();
  

   

    return (
        <div class="h-screen flex items-center justify-center z-40">
            <div className="grid grid-cols-1 gap-4 w-85 px-5">

            <div class=" text-gray-900 bg-white border  border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                    <button type="button" class="relative inline-flex items-center w-full px-4 py-4 text-sm font-medium border-b border-gray-200 rounded-t-lg hover:bg-gray-100 hover:text-teal-500 focus:z-10 focus:ring-2 focus:text-teal-500 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                    <svg className="w-4 h-4 me-2.5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 8h6m-3 3V5m-6-.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0ZM5 11h3a4 4 0 0 1 4 4v2H1v-2a4 4 0 0 1 4-4Z"/>
                    </svg>
                        افزودن کاربر
                    </button>
                    <button type="button" class="relative inline-flex items-center w-full px-4 py-4 text-sm font-medium border-b border-gray-200 hover:bg-gray-100 hover:text-teal-500 focus:z-10 focus:ring-2 focus:text-teal-500 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                    <svg className="w-4 h-4 me-2.5  text-gray-800 dark:text-white " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 11h4m-2 2V9M2 5h14a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm5.443-4H2a1 1 0 0 0-1 1v3h9.943l-2.7-3.6a1 1 0 0 0-.8-.4Z"/>
                    </svg>
                        افزودن دستگاه
                    </button>
                    <button onClick={() => theme == "dark"? setTheme('light'): setTheme("dark")} type="button" class="relative inline-flex items-center w-full px-4 py-4 text-sm font-medium border-b border-gray-200 hover:bg-gray-100 hover:text-teal-500 focus:z-10 focus:ring-2 focus:text-teal-500 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                       {theme == "light"?<svg className="w-4 h-4 me-2.5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.509 5.75c0-1.493.394-2.96 1.144-4.25h-.081a8.5 8.5 0 1 0 7.356 12.746A8.5 8.5 0 0 1 8.509 5.75Z"/>
                    </svg>:<svg className="w-4 h-4 me-2.5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 3V1m0 18v-2M5.05 5.05 3.636 3.636m12.728 12.728L14.95 14.95M3 10H1m18 0h-2M5.05 14.95l-1.414 1.414M16.364 3.636 14.95 5.05M14 10a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"/>
                    </svg>}
                        {theme == "light"? "حالت شب" : "حالت روز"}
                    </button>
                    <button type="button" class="relative inline-flex items-center w-full px-4 py-4 text-sm font-medium rounded-b-lg hover:bg-gray-100 hover:text-teal-500 focus:z-10 focus:ring-2 focus:text-teal-500 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white">
                    <svg className="w-4 h-4 me-2.5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 21">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 3.464V1.1m0 2.365a5.338 5.338 0 0 1 5.133 5.368v1.8c0 2.386 1.867 2.982 1.867 4.175C15 15.4 15 16 14.462 16H1.538C1 16 1 15.4 1 14.807c0-1.193 1.867-1.789 1.867-4.175v-1.8A5.338 5.338 0 0 1 8 3.464ZM4.54 16a3.48 3.48 0 0 0 6.92 0H4.54Z"/>
                </svg>
                        اعلان ها
                    </button>
                </div>



                 {/* <Button onClick={()=>console.log('clicked')} title="افزودن کاربر"/>
                 <Button onClick={()=>console.log('clicked')} title="افزودن دستگاه"/>
                 <Button onClick={() => theme == "dark"? setTheme('light'): setTheme("dark")} title={theme == "light"? "حالت شب" : "حالت روز"}/>  */}

            </div>
        </div>
    )
}


export default Setting;