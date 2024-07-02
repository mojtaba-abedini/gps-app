"use client"

import { Button, Card, CardBody, Input, Modal, ModalBody, ModalContent } from '@nextui-org/react'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'



const BottomNavigation = ({ active }) => {


    const [isOpenFeatures, setIsOpenFeatures] = useState(false);
    const [isOpenReports, setIsOpenReports] = useState(false);
    const [isOpenSetting, setIsOpenSetting] = useState(false);
    const { theme, setTheme } = useTheme();
    const [notification, setNotification] = useState(null)
    const [isOpen, setIsOpen] = useState(false)


    const svgActive = "w-5 h-5 mb-2 text-teal-500 dark:text-teal-600 group-hover:text-teal-600 dark:group-hover:text-teal-500"
    const svgNoActive = "w-4 h-4 mb-2 text-gray-500 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-500"

    const buttonActive = "inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-300 bg-gray-100 dark:bg-gray-300 group"
    const buttonNoActive = "inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"


    const textActive = "text-sm text-teal-500 dark:text-teal-600 group-hover:text-teal-600 dark:group-hover:text-teal-500"
    const textNoActive = "text-sm text-gray-500 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-500"


    const router = useRouter()

    const ChangeNotification = () => {
        setNotification(!notification)
        localStorage.setItem("notification", !notification)
    }

    return (
        <> <div className="w-full z-10" style={{ zIndex: 10 }}>

            <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200  dark:bg-[#1e293b] dark:border-gray-600">
                <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
                    <button onClick={() => { router.push('/', { scroll: false }) }} type="button" className={active === 1 ? buttonActive : buttonNoActive}>

                        <img alt="image or icon" height={active === 1 ? 28 : 23} className="mb-2" width={active === 1 ? 28 : 23} src="/images/home.png" />
                        <span className={active === 1 ? textActive : textNoActive}>پیشخوان</span>
                    </button>
                    <button onClick={() => setIsOpenFeatures(true)} type="button" className={active === 2 ? buttonActive : buttonNoActive}>

                        <img alt="image or icon" height={active === 2 ? 28 : 23} className="mb-2" width={active === 2 ? 28 : 23} src="/images/feature.png" />
                        <span className={active === 2 ? textActive : textNoActive}>امکانات</span>
                    </button>
                    <button onClick={() => setIsOpenSetting(true)} type="button" className={active === 3 ? buttonActive : buttonNoActive}>

                        <img alt="image or icon" height={active === 3 ? 28 : 23} className="mb-2" width={active === 3 ? 28 : 23} src="/images/setting.png" />
                        <span className={active === 3 ? textActive : textNoActive}>تنظمیات</span>
                    </button>
                    <button onClick={() => setIsOpenReports(true)} type="button" className={active === 4 ? buttonActive : buttonNoActive}>

                        <img alt="image or icon" height={active === 4 ? 28 : 23} className="mb-2" width={active === 4 ? 28 : 23} src="/images/report.png" />
                        <span className={active === 4 ? textActive : textNoActive}>گزارشات</span>
                    </button>
                </div>
            </div>
        </div>



            <Modal motionProps={{
                variants: {
                    enter: {
                        y: 0,
                        opacity: 1,
                        transition: {
                            duration: 0.12,
                            ease: "easeOut",
                        },
                    },
                    exit: {
                        y: 200,
                        opacity: 0,
                        transition: {
                            duration: 0.12,
                            ease: "easeIn",
                        },
                    },
                }
            }}   className="p-2" hideCloseButton={true} placement="bottom-center" isOpen={isOpenSetting}>
                <ModalContent className='lg:pb-5'>
                    <Button onClick={() => setIsOpenSetting(false)} variant="light" isIconOnly >
                        <svg className="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6" />
                        </svg>
                    </Button><>
                        <ModalBody className="grid grid-cols-1 mb-10 md:mb-5">



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




                        </ModalBody>
                    </>

                </ModalContent>
            </Modal>


            <Modal motionProps={{
                variants: {
                    enter: {
                        y: 0,
                        opacity: 1,
                        transition: {
                            duration: 0.12,
                            ease: "easeOut",
                        },
                    },
                    exit: {
                        y: 200,
                        opacity: 0,
                        transition: {
                            duration: 0.12,
                            ease: "easeIn",
                        },
                    },
                }
            }} className="p-2" hideCloseButton={true} placement="bottom-center" isOpen={isOpenFeatures}>
                <ModalContent className='lg:pb-5'>
                    <Button onClick={() => setIsOpenFeatures(false)} variant="light" isIconOnly >
                        <svg className="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6" />
                        </svg>
                    </Button><>
                        <ModalBody className="grid grid-cols-1 mb-10 md:mb-5">


                            <Button onClick={() => router.push('/features/update-device')} className="bg-[#14b8a6] dark:bg-[#1e293b]  text-white py-6 text-md" startContent={<svg className="w-8 h-8 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 8H4m8 3.5v5M9.5 14h5M4 6v13c0 .6.4 1 1 1h14c.6 0 1-.4 1-1V9c0-.6-.4-1-1-1h-5a1 1 0 0 1-.8-.4l-1.9-2.2a1 1 0 0 0-.8-.4H5a1 1 0 0 0-1 1Z" />
                            </svg>} endContent={<div className='w-full flex  justify-end'></div>}>ویرایش دستگاه</Button>

                            <Button onClick={() => router.push('/features/update-vehicle')} className="bg-[#14b8a6] dark:bg-[#1e293b]  text-white py-6 text-md" startContent={<svg className="w-8 h-8 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 8H4m8 3.5v5M9.5 14h5M4 6v13c0 .6.4 1 1 1h14c.6 0 1-.4 1-1V9c0-.6-.4-1-1-1h-5a1 1 0 0 1-.8-.4l-1.9-2.2a1 1 0 0 0-.8-.4H5a1 1 0 0 0-1 1Z" />
                            </svg>} endContent={<div className='w-full flex  justify-end'></div>}>ویرایش خودرو</Button>
                            <Button onClick={() => router.push('/features/update-person')} className="bg-[#14b8a6] dark:bg-[#1e293b]  text-white py-6 text-md" startContent={<svg className="w-8 h-8 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 8H4m8 3.5v5M9.5 14h5M4 6v13c0 .6.4 1 1 1h14c.6 0 1-.4 1-1V9c0-.6-.4-1-1-1h-5a1 1 0 0 1-.8-.4l-1.9-2.2a1 1 0 0 0-.8-.4H5a1 1 0 0 0-1 1Z" />
                            </svg>} endContent={<div className='w-full flex  justify-end'></div>}>ویرایش راننده</Button>

                            <Button onClick={() => router.push('/features/notification-setting')} className="bg-[#14b8a6] dark:bg-[#1e293b]  text-white py-6 text-md" startContent={<svg className="w-8 h-8 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 8H4m8 3.5v5M9.5 14h5M4 6v13c0 .6.4 1 1 1h14c.6 0 1-.4 1-1V9c0-.6-.4-1-1-1h-5a1 1 0 0 1-.8-.4l-1.9-2.2a1 1 0 0 0-.8-.4H5a1 1 0 0 0-1 1Z" />
                            </svg>} endContent={<div className='w-full flex  justify-end'></div>}>تنظیم هشدارها</Button>

                            <Button onClick={() => router.push('/features/device-config')} className="bg-[#14b8a6] dark:bg-[#1e293b]  text-white py-6 text-md" startContent={<svg className="w-8 h-8 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 8H4m8 3.5v5M9.5 14h5M4 6v13c0 .6.4 1 1 1h14c.6 0 1-.4 1-1V9c0-.6-.4-1-1-1h-5a1 1 0 0 1-.8-.4l-1.9-2.2a1 1 0 0 0-.8-.4H5a1 1 0 0 0-1 1Z" />
                            </svg>} endContent={<div className='w-full flex  justify-end'></div>}>پیکر بندی دستگاه</Button>

                            <Button onClick={() => router.push('/features/remote-control')} className="bg-[#14b8a6] dark:bg-[#1e293b]  text-white py-6 text-md" startContent={<svg className="w-8 h-8 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 8H4m8 3.5v5M9.5 14h5M4 6v13c0 .6.4 1 1 1h14c.6 0 1-.4 1-1V9c0-.6-.4-1-1-1h-5a1 1 0 0 1-.8-.4l-1.9-2.2a1 1 0 0 0-.8-.4H5a1 1 0 0 0-1 1Z" />
                            </svg>} endContent={<div className='w-full flex  justify-end'></div>}>کنترل از راه دور</Button>




                        </ModalBody>
                    </>

                </ModalContent>
            </Modal>

            <Modal motionProps={{
                variants: {
                    enter: {
                        y: 0,
                        opacity: 1,
                        transition: {
                            duration: 0.12,
                            ease: "easeOut",
                        },
                    },
                    exit: {
                        y: 200,
                        opacity: 0,
                        transition: {
                            duration: 0.12,
                            ease: "easeIn",
                        },
                    },
                }
            }} className="p-2" hideCloseButton={true} placement="bottom-center" isOpen={isOpenReports}>
                <ModalContent className='lg:pb-5'>
                    <Button onClick={() => setIsOpenReports(false)} variant="light" isIconOnly >
                        <svg className="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6" />
                        </svg>
                    </Button><>
                        <ModalBody className="grid grid-cols-1 mb-10 md:mb-5">


                            <Button onClick={() => router.push('/reports/history')} className="bg-[#14b8a6] dark:bg-[#1e293b]  text-white py-6 text-md" startContent={<svg className="w-8 h-8 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 8H4m8 3.5v5M9.5 14h5M4 6v13c0 .6.4 1 1 1h14c.6 0 1-.4 1-1V9c0-.6-.4-1-1-1h-5a1 1 0 0 1-.8-.4l-1.9-2.2a1 1 0 0 0-.8-.4H5a1 1 0 0 0-1 1Z" />
                            </svg>} endContent={<div className='w-full flex  justify-end'></div>}>مشاهده مسیرهای گذشته</Button>


                        </ModalBody>
                    </>

                </ModalContent>
            </Modal>

        </>




    )
}


export default BottomNavigation;