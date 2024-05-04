
"use client"

import React, { useEffect, useState } from "react";
import {
    Select, SelectItem, Input, Button, Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    useDisclosure,
    Card,
    CardBody,
    CardFooter
} from "@nextui-org/react";
import axios from "axios";
import { useRouter } from 'next/navigation'
const AddDevice = () => {
    const router = useRouter()
    const [info, setInfo] = useState(null)
    const [isOpen, setIsOpen] = useState(false);
    const [devices, setDevices] = useState(null);
    const [selected, setSelected] = useState("")
    const [inputValue, setInputValue] = useState({
        DeviceIMEI: "",
        DeviceSimCardNumber: "",
        DeviceSimCardOperatorId: "1",
        DeviceGPSModelId: "1",
        DeviceName: ""
    })



    useEffect(() => {
        const storage = localStorage.getItem("info")
        if (info === null) setInfo(JSON.parse(storage))
        if (devices === null && info !== null) loadDevices()

    }, [isOpen, selected, devices])


    const SelectItem = (item) => {
        setSelected(item)
        setIsOpen(false)
    }



    function createDevice() {
        var data = JSON.stringify({
            DeviceIMEI: inputValue.DeviceIMEI,
            DeviceSimCardNumber: inputValue.DeviceSimCardNumber,
            DeviceSimCardOperatorId: "100",
            DeviceGPSModelId: "100",
            DeviceName: inputValue.DeviceName

        });

        const config = {
            method: "post",
            url: "/create_device",
            headers: {
                Authorization: `Bearer ${info.token}`,
                "Content-Type": "application/json",
            },
            data: data,
        };
        axios(config)
            .then(function (response) {
                console.log(response.data);


            })
            .catch(function (error) {

                console.log(error);
            });
    }







    const loadDevices = () => {

        const config = {
            method: "post",
            url: "/get_all_devices",
            headers: {
                Authorization: `Bearer ${info.token}`,
                "Content-Type": "application/json",
            },

        };
        axios(config)
            .then(function (response) {

                setDevices(response.data.devices);


            })
            .catch(function (error) {
                console.log(error);
            });

    }




    return (
        <div className="flex h-screen items-center justify-center">
            <div className="grid grid-cols-1 gap-3 w-full md:w-2/5 lg:1/4 px-5 mt-5 mb-20 z-50">



                <Input
                    value={selected.ModelName}
                    endContent={
                        <button className="focus:outline-none mb-1" type="button" onClick={() => setIsOpen(true)}>
                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
                            </svg>
                        </button>
                    }
                    variant="faded" type="text" label="مدل دستگاه" />
                <Input onChange={(e) => setInputValue({ ...inputValue, DeviceName: e.target.value })} variant="faded" type="text" label="نام وسیله نقلیه / شخص" />
                <Input onChange={(e) => setInputValue({ ...inputValue, DeviceIMEI: e.target.value })} variant="faded" type="text" label="شناسه دستگاه (IMEI , ID)" />
                <Input onChange={(e) => setInputValue({ ...inputValue, DeviceSimCardNumber: e.target.value })} variant="faded" type="text" label="شماره سیم کارت دستگاه" />

                <Button onClick={createDevice} className="bg-[#14b8a6] text-white">افزودن دستگاه</Button>



                <Modal className="p-2" hideCloseButton={true} placement="bottom-center" isOpen={isOpen}>
                    <ModalContent>
                        <Button onClick={() => setIsOpen(false)} variant="light" isIconOnly >
                            <svg className="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6" />
                            </svg>
                        </Button>

                        <>
                            <h1 className="text-center mb-3">مدل دستگاه را انتخاب کنید</h1>
                            <ModalBody className="grid grid-cols-2 mb-36 md:mb-5">

                                {devices !== null ? devices.map((item, index) => (
                                    <Card shadow="sm" key={index} isPressable onPress={() => SelectItem(item)}>

                                        <CardBody className="text-small justify-between">
                                            <b className="text-center">{item.ModelName}</b>
                                            <p className="text-default-500 text-center">{item.ModelId}</p>
                                        </CardBody>
                                    </Card>
                                )) : null}
                            </ModalBody>

                        </>

                    </ModalContent>
                </Modal>



            </div>
        </div>
    )
}


export default AddDevice;