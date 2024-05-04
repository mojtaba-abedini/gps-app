
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
import Link from "next/link";

import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import FloatDropdown from '@/components/float-dropdown';
const Setting = () => {
    const { theme, setTheme } = useTheme();
    const [notification, setNotification] = useState(null)
    const [isOpen, setIsOpen] = useState(false)
    const router = useRouter()


    useEffect(()=>{
      
    },[notification])

    return (
        <>
            <div className="flex lg:h-screen items-center justify-center z-40">

                <div className="grid grid-cols-1 gap-3 w-full md:w-2/5 lg:w-1/4 px-5 mt-5 mb-20">


                    <Link href="/setting/add-device" className="bg-[#14b8a6] dark:bg-[#1e293b] text-white shadow-lg py-2.5 px-5 rounded-md text-md">
                        <div className="flex justify-between">
                            <div className="flex">
                                <svg className="w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 8H4m8 3.5v5M9.5 14h5M4 6v13c0 .6.4 1 1 1h14c.6 0 1-.4 1-1V9c0-.6-.4-1-1-1h-5a1 1 0 0 1-.8-.4l-1.9-2.2a1 1 0 0 0-.8-.4H5a1 1 0 0 0-1 1Z" />
                                </svg>
                                <div className="mr-2 flex items-center justify-center">افزودن دستگاه</div>
                            </div>
                            <div></div>

                        </div>
                    </Link>

                    <Link onClick={() => theme == "dark" ? setTheme('light') : setTheme("dark")} href="#" className=" text-md bg-[#14b8a6] dark:bg-[#1e293b] text-white shadow-lg py-2.5 px-5 rounded-md">
                        <div className="flex justify-between">
                            <div className="flex">
                                <svg className="w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 8H4m8 3.5v5M9.5 14h5M4 6v13c0 .6.4 1 1 1h14c.6 0 1-.4 1-1V9c0-.6-.4-1-1-1h-5a1 1 0 0 1-.8-.4l-1.9-2.2a1 1 0 0 0-.8-.4H5a1 1 0 0 0-1 1Z" />
                                </svg>
                                <div className="mr-2 flex items-center justify-center">تم نرم افزار</div>
                            </div>
                            <div className="flex text-sm justify-center items-center">{theme === "light" ? "روشن" : "تیره"}</div>
                        </div>
                    </Link>

                    <Link onClick={()=>{setNotification(!notification);localStorage.setItem("notification",!notification)}} href="#" className={`text-md ${notification === true  ? "bg-[#14b8a6] dark:bg-[#1e293b]" : "bg-orange-400 dark:bg-orange-400"} text-white shadow-lg py-2.5 px-5 rounded-md`}>
                        <div className="flex justify-between">
                            <div className="flex">
                                <svg className="w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 8H4m8 3.5v5M9.5 14h5M4 6v13c0 .6.4 1 1 1h14c.6 0 1-.4 1-1V9c0-.6-.4-1-1-1h-5a1 1 0 0 1-.8-.4l-1.9-2.2a1 1 0 0 0-.8-.4H5a1 1 0 0 0-1 1Z" />
                                </svg>
                                <div className="mr-2 flex items-center justify-center">اعلان ها</div>
                            </div>
                            <div className="flex text-sm justify-center items-center">{notification === true ? "فعال" : "غیر فعال"}</div>
                        </div>
                    </Link>
                    <Link href="/setting/subscription" className="bg-[#14b8a6] dark:bg-[#1e293b] text-white shadow-lg py-2.5 px-5 rounded-md  text-md">
                        <div className="flex justify-between">
                            <div className="flex">
                                <svg className="w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 8H4m8 3.5v5M9.5 14h5M4 6v13c0 .6.4 1 1 1h14c.6 0 1-.4 1-1V9c0-.6-.4-1-1-1h-5a1 1 0 0 1-.8-.4l-1.9-2.2a1 1 0 0 0-.8-.4H5a1 1 0 0 0-1 1Z" />
                                </svg>
                                <div className="mr-2 flex items-center justify-center">اشتراک</div>
                            </div>
                            <div></div>
                        </div>
                    </Link>
                    <Link href="/change-password" className="bg-[#14b8a6] dark:bg-[#1e293b] text-white shadow-lg py-2.5 px-5 rounded-md  text-md">
                        <div className="flex justify-between">
                            <div className="flex">
                                <svg className="w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 8H4m8 3.5v5M9.5 14h5M4 6v13c0 .6.4 1 1 1h14c.6 0 1-.4 1-1V9c0-.6-.4-1-1-1h-5a1 1 0 0 1-.8-.4l-1.9-2.2a1 1 0 0 0-.8-.4H5a1 1 0 0 0-1 1Z" />
                                </svg>
                                <div className="mr-2 flex items-center justify-center">تغییر رمز ورود</div>
                            </div>
                            <div></div>
                        </div>
                    </Link>


                    <Link href="/setting/contact-us" className="bg-[#14b8a6] dark:bg-[#1e293b] text-white shadow-lg py-2.5 px-5 rounded-md  text-md">
                        <div className="flex justify-between">
                            <div className="flex">
                                <svg className="w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 8H4m8 3.5v5M9.5 14h5M4 6v13c0 .6.4 1 1 1h14c.6 0 1-.4 1-1V9c0-.6-.4-1-1-1h-5a1 1 0 0 1-.8-.4l-1.9-2.2a1 1 0 0 0-.8-.4H5a1 1 0 0 0-1 1Z" />
                                </svg>
                                <div className="mr-2 flex items-center justify-center">تماس با ما</div>
                            </div>
                            <div></div>
                        </div>
                    </Link>

                    <Link href="/setting/contact-us" className="bg-[#14b8a6] dark:bg-[#1e293b] text-white shadow-lg py-2.5 px-5 rounded-md  text-md">
                        <div className="flex justify-between">
                            <div className="flex">
                                <svg className="w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 8H4m8 3.5v5M9.5 14h5M4 6v13c0 .6.4 1 1 1h14c.6 0 1-.4 1-1V9c0-.6-.4-1-1-1h-5a1 1 0 0 1-.8-.4l-1.9-2.2a1 1 0 0 0-.8-.4H5a1 1 0 0 0-1 1Z" />
                                </svg>
                                <div className="mr-2 flex items-center justify-center">پشتیبانی آنلاین</div>
                            </div>
                            <div></div>
                        </div>
                    </Link>

                    <Link href="/setting/contact-us" className="bg-[#14b8a6] dark:bg-[#1e293b] text-white shadow-lg py-2.5 px-5 rounded-md  text-md">
                        <div className="flex justify-between">
                            <div className="flex">
                                <svg className="w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 8H4m8 3.5v5M9.5 14h5M4 6v13c0 .6.4 1 1 1h14c.6 0 1-.4 1-1V9c0-.6-.4-1-1-1h-5a1 1 0 0 1-.8-.4l-1.9-2.2a1 1 0 0 0-.8-.4H5a1 1 0 0 0-1 1Z" />
                                </svg>
                                <div className="mr-2 flex items-center justify-center">راهنمای استفاده</div>
                            </div>
                            <div></div>
                        </div>
                    </Link>

                    <Link onClick={() => setIsOpen(true)} href="#" className="bg-[#14b8a6] dark:bg-[#1e293b] text-white shadow-lg py-2.5 px-5 rounded-md  text-md">
                        <div className="flex justify-between">
                            <div className="flex">
                                <svg className="w-6 h-6 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 8H4m8 3.5v5M9.5 14h5M4 6v13c0 .6.4 1 1 1h14c.6 0 1-.4 1-1V9c0-.6-.4-1-1-1h-5a1 1 0 0 1-.8-.4l-1.9-2.2a1 1 0 0 0-.8-.4H5a1 1 0 0 0-1 1Z" />
                                </svg>
                                <div className="mr-2 flex items-center justify-center">خروج از حساب کاربری</div>
                            </div>
                            <div></div>
                        </div>
                    </Link>




                    <Modal className="p-5" isOpen={isOpen} hideCloseButton={true} placement="center">
                        <ModalContent>
                            <>
                                <ModalBody>
                                    <h1>آیا مایل به خروج از نرم افزار هستید؟</h1>
                                </ModalBody>
                                <ModalFooter>
                                    <div className="grid grid-cols-2 w-full gap-5 ">
                                        <Button
                                            onClick={() => { setIsOpen(false); localStorage.removeItem("info"); router.push("/login", { scroll: false }); }}
                                            color="primary"
                                        >
                                            بلی
                                        </Button>
                                        <Button
                                            onClick={() => setIsOpen(false)}
                                            color="primary"
                                        >
                                            خیر
                                        </Button>
                                    </div>
                                </ModalFooter>
                            </>
                        </ModalContent>
                    </Modal>


                    <FloatDropdown/>




                    {/* <Button onClick={()=>console.log('clicked')} title="افزودن کاربر"/>
     <Button onClick={()=>console.log('clicked')} title="افزودن دستگاه"/>
     <Button onClick={() => theme == "dark"? setTheme('light'): setTheme("dark")} title={theme == "light"? "حالت شب" : "حالت روز"}/>  */}

                </div>
            </div>

        </>

    )
}


export default Setting;