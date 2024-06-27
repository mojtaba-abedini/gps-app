"use client"

import { Button, Modal, ModalBody, ModalContent, ModalFooter, Textarea } from "@nextui-org/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DeviceConfig = () => {


    const [info, setInfo] = useState(null)
    const [deviceId, setDeviceId] = useState(null)
    const [configValue, setConfigValue] = useState("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.")
    const [isOpen,setIsOpen]=useState(false)

    useEffect(() => {
        const storage = localStorage.getItem("info")
        if (info === null) setInfo(JSON.parse(storage))
        if (deviceId === null) setDeviceId(localStorage.getItem("deviceId"))


    }, [deviceId])




    const SaveConfig = () => {

    }



    return (

        <>


            <div className="flex h-screen items-center justify-center">

                <div className="grid grid-cols-1 gap-3 w-full md:w-2/5 lg:w-1/4 px-5 mt-5 mb-20 z-50">
                    <ToastContainer />
                    <Textarea minRows={10} value={configValue} onChange={(e) => setConfigValue(e.target.value)} variant="faded" type="textarea" />

                    <Button onClick={() => setIsOpen(!isOpen)} className="bg-[#14b8a6] text-white">پیکر بندی</Button>

                </div>







            </div>
            <Modal className="p-5" isOpen={isOpen} hideCloseButton={true} placement="bottom-center">
                <ModalContent className="max-sm:pb-28">
                    <>
                        <ModalBody>
                            <h1>آیا از پیکربندی دستگاه خود اطمینان دارید؟</h1>
                        </ModalBody>
                        <ModalFooter>
                            <div className="grid grid-cols-2 w-full gap-5 ">
                                <Button
                                    onClick={() => { setIsOpen(false) }}
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

        </>
    )

}

export default DeviceConfig;