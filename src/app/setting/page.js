
"use client"

import BottomNavigation from '@/components/bottomNavigation';
import '../globals.css'
import { useTheme } from "next-themes";
import {
    Button,

    Modal,
    ModalContent,
    ModalBody,
    ModalFooter,

} from "@nextui-org/react";


import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import FloatDropdown from '@/components/float-dropdown';
const Setting = () => {
    const { theme, setTheme } = useTheme();
    const [notification, setNotification] = useState(null)
    const [isOpen, setIsOpen] = useState(false)
    const router = useRouter()


    useEffect(() => {

        
    }, [notification])


    const ChangeNotification =()=>{
        setNotification(!notification)
        localStorage.setItem("notification", !notification) 
    }

    return (
        <>
            <div className="flex h-screen items-center justify-center z-40">

                <div className="grid grid-cols-1 gap-3 w-full md:w-2/5 lg:w-1/4 px-5 mt-5 mb-20">


                    <Button onClick={() => router.push('/setting/add-device')} className="bg-[#14b8a6] dark:bg-[#1e293b]  text-white py-6 text-md" startContent={<svg className="w-8 h-8 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 8H4m8 3.5v5M9.5 14h5M4 6v13c0 .6.4 1 1 1h14c.6 0 1-.4 1-1V9c0-.6-.4-1-1-1h-5a1 1 0 0 1-.8-.4l-1.9-2.2a1 1 0 0 0-.8-.4H5a1 1 0 0 0-1 1Z" />
                    </svg>} endContent={<div className='w-full flex  justify-end'></div>}>افزودن دستگاه</Button>

                    <Button onClick={() => theme == "dark" ? setTheme('light') : setTheme("dark")} className="bg-[#14b8a6] dark:bg-[#1e293b]  text-white py-6 text-md" startContent={<svg className="w-8 h-8 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 8H4m8 3.5v5M9.5 14h5M4 6v13c0 .6.4 1 1 1h14c.6 0 1-.4 1-1V9c0-.6-.4-1-1-1h-5a1 1 0 0 1-.8-.4l-1.9-2.2a1 1 0 0 0-.8-.4H5a1 1 0 0 0-1 1Z" />
                    </svg>} endContent={<div className='w-full flex  justify-end'>{theme === "light" ? "روشن" : "تیره"}</div>}>تم نرم افزار</Button>


                    <Button onClick={ChangeNotification} className={`${notification === true ? "bg-[#14b8a6] dark:bg-[#1e293b]" : "bg-orange-400 dark:bg-orange-400"}  text-white py-6 text-md`} startContent={<svg className="w-8 h-8 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 8H4m8 3.5v5M9.5 14h5M4 6v13c0 .6.4 1 1 1h14c.6 0 1-.4 1-1V9c0-.6-.4-1-1-1h-5a1 1 0 0 1-.8-.4l-1.9-2.2a1 1 0 0 0-.8-.4H5a1 1 0 0 0-1 1Z" />
                    </svg>} endContent={<div className='w-full flex  justify-end'>{notification === true ? "فعال" : "غیر فعال"}</div>}>اعلان ها</Button>




                    <Button onClick={() => router.push('/setting/subscription')} className="bg-[#14b8a6] dark:bg-[#1e293b]  text-white py-6 text-md" startContent={<svg className="w-8 h-8 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 8H4m8 3.5v5M9.5 14h5M4 6v13c0 .6.4 1 1 1h14c.6 0 1-.4 1-1V9c0-.6-.4-1-1-1h-5a1 1 0 0 1-.8-.4l-1.9-2.2a1 1 0 0 0-.8-.4H5a1 1 0 0 0-1 1Z" />
                    </svg>} endContent={<div className='w-full flex  justify-end'></div>}>اشتراک</Button>

                    <Button onClick={() => router.push('/change-password')} className="bg-[#14b8a6] dark:bg-[#1e293b]  text-white py-6 text-md" startContent={<svg className="w-8 h-8 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 8H4m8 3.5v5M9.5 14h5M4 6v13c0 .6.4 1 1 1h14c.6 0 1-.4 1-1V9c0-.6-.4-1-1-1h-5a1 1 0 0 1-.8-.4l-1.9-2.2a1 1 0 0 0-.8-.4H5a1 1 0 0 0-1 1Z" />
                    </svg>} endContent={<div className='w-full flex  justify-end'></div>}>تغییر رمز عبور</Button>

                    <Button onClick={() => router.push('/setting/contact-us')} className="bg-[#14b8a6] dark:bg-[#1e293b]  text-white py-6 text-md" startContent={<svg className="w-8 h-8 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 8H4m8 3.5v5M9.5 14h5M4 6v13c0 .6.4 1 1 1h14c.6 0 1-.4 1-1V9c0-.6-.4-1-1-1h-5a1 1 0 0 1-.8-.4l-1.9-2.2a1 1 0 0 0-.8-.4H5a1 1 0 0 0-1 1Z" />
                    </svg>} endContent={<div className='w-full flex  justify-end'></div>}>تماس با ما</Button>

                    <Button onClick={() => router.push('/setting/contact-us')} className="bg-[#14b8a6] dark:bg-[#1e293b]  text-white py-6 text-md" startContent={<svg className="w-8 h-8 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 8H4m8 3.5v5M9.5 14h5M4 6v13c0 .6.4 1 1 1h14c.6 0 1-.4 1-1V9c0-.6-.4-1-1-1h-5a1 1 0 0 1-.8-.4l-1.9-2.2a1 1 0 0 0-.8-.4H5a1 1 0 0 0-1 1Z" />
                    </svg>} endContent={<div className='w-full flex  justify-end'></div>}>پشتیبانی آنلاین</Button>

                    <Button onClick={() => router.push('/setting/contact-us')} className="bg-[#14b8a6] dark:bg-[#1e293b]  text-white py-6 text-md" startContent={<svg className="w-8 h-8 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 8H4m8 3.5v5M9.5 14h5M4 6v13c0 .6.4 1 1 1h14c.6 0 1-.4 1-1V9c0-.6-.4-1-1-1h-5a1 1 0 0 1-.8-.4l-1.9-2.2a1 1 0 0 0-.8-.4H5a1 1 0 0 0-1 1Z" />
                    </svg>} endContent={<div className='w-full flex  justify-end'></div>}>راهنمای استفاده</Button>

                    <Button onClick={() => setIsOpen(true)} className="bg-[#14b8a6] dark:bg-[#1e293b]  text-white py-6 text-md" startContent={<svg className="w-8 h-8 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 8H4m8 3.5v5M9.5 14h5M4 6v13c0 .6.4 1 1 1h14c.6 0 1-.4 1-1V9c0-.6-.4-1-1-1h-5a1 1 0 0 1-.8-.4l-1.9-2.2a1 1 0 0 0-.8-.4H5a1 1 0 0 0-1 1Z" />
                    </svg>} endContent={<div className='w-full flex  justify-end'></div>}>خروج از حساب کاربری</Button>




                    <Modal className="p-5" isOpen={isOpen} hideCloseButton={true} placement="bottom-center">
                        <ModalContent className="max-sm:pb-28">
                            <>
                                <ModalBody>
                                    <h1>آیا مایل به خروج از نرم افزار هستید؟</h1>
                                </ModalBody>
                                <ModalFooter>
                                    <div className="grid grid-cols-2 w-full gap-5 ">
                                        <Button
                                            onClick={() => { setIsOpen(false); localStorage.removeItem("info"); router.push("/login", { scroll: false }); }}
                                            className="bg-[#14b8a6] dark:bg-[#1e293b] text-white"
                                        >
                                            بلی
                                        </Button>
                                        <Button
                                            onClick={() => setIsOpen(false)}
                                            className="bg-[#14b8a6] dark:bg-[#1e293b] text-white"
                                        >
                                            خیر
                                        </Button>
                                    </div>
                                </ModalFooter>
                            </>
                        </ModalContent>
                    </Modal>


                    <FloatDropdown />


                </div>
            </div>

        </>

    )
}


export default Setting;