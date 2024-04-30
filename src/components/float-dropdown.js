"use client"

import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Avatar, Card, CardBody } from "@nextui-org/react";
import {
    Button,
    Input,
    Modal,
    ModalContent,
    ModalBody,
    ModalFooter,
    ModalHeader,
} from "@nextui-org/react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const FloatDropdown = () => {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false)
    const [isOpenDevice, setIsOpenDevice] = useState(false)
    const [device, setDevice] = useState(null)
    const [info, setInfo] = useState(null)
    const [deviceId, setDeviceId] = useState(null)
    const [selectedName,setSelectedName]=useState("")

    useEffect(() => {

        const storage = localStorage.getItem("info")
        const name = localStorage.getItem("deviceName")

        if (info === null) setInfo(JSON.parse(storage))
        if (device === null && info !== null) LoadDevice()
        if (deviceId === null && info !== null) setDeviceId(localStorage.getItem("deviceId"))
        if (name !== null ) setSelectedName(name)

    }, [info, device,selectedName])


    function ChangeDevice(item) {
        localStorage.setItem("deviceId", item.DeviceId)
        localStorage.setItem("deviceName", item.DeviceName)
        setSelectedName(item.DeviceName)
        setIsOpenDevice(false)
    }



    function LoadDevice() {

        const config = {
            method: "post",
            url: "/get_devices_by_user_id",
            headers: {
                Authorization: `Bearer ${info.token}`,
                "Content-Type": "application/json",
            },

        };
        axios(config)
            .then(function (response) {
                console.log(response.data.devices);
                setDevice(response.data.devices)

            })
            .catch(function (error) {
                console.log(error.message);

            });
    }



    return (
        <div className="flex items-center absolute right-5 top-5 ">
            <Dropdown placement="bottom-end">
                <DropdownTrigger>
                    <Avatar
                        isBordered
                        as="button"
                        className="transition-transform"
                        src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                    />
                </DropdownTrigger>
                <DropdownMenu aria-label="Profile Actions" variant="flat">
                    <DropdownItem key="profile" className="h-12 gap-2">
                      
                        <p className="font-semibold">{selectedName !== "" ? selectedName : "دستگاهی انتخاب نشده"}</p>
                    </DropdownItem>
                    <DropdownItem key="home" onClick={() => router.push("/")}>
                      پیشخوان
                    </DropdownItem>
                    <DropdownItem key="change-device" onClick={() => setIsOpenDevice(!isOpenDevice)}>
                        تغییر دستگاه
                    </DropdownItem>
                    <DropdownItem key="change-password" onClick={()=>router.push("/change-password")}>
                        تغییر رمز ورود
                    </DropdownItem>
                    <DropdownItem key="logout" color="danger" onClick={() => setIsOpen(true)}>
                        خروج از حساب کاربری
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>



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

            <Modal className="p-3" isOpen={isOpenDevice} hideCloseButton={true} placement="center">



                <ModalContent>
                    <>

                        <Button onClick={() => setIsOpenDevice(false)} variant="light" isIconOnly >
                            <svg class="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6" />
                            </svg>
                        </Button>


                        <ModalBody className="grid grid-cols-2 mb-36 md:mb-5">
                            {device !== null ? device.map((item, index) => (
                                <Card shadow="sm" key={index} isPressable onPress={() => ChangeDevice(item)}>
                                    <CardBody className="text-small justify-between">
                                        <b className="text-center">{item.DeviceName}</b>
                                        <p className="text-default-500 text-center">{item.DeviceId}</p>
                                    </CardBody>
                                </Card>
                            )) : null}
                        </ModalBody>


                    </>
                </ModalContent>
            </Modal>



        </div>
    );
};


export default FloatDropdown;
