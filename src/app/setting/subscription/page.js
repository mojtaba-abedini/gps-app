
"use client"
import React, { useEffect, useState } from "react";
import { Card, CardBody, Button, Select, SelectItem } from "@nextui-org/react";
import axios from "axios";
import Loading from "@/components/loading";

import '../../globals.css'

const Subscription = () => {

    const [info, setInfo] = useState(null)
    const [devices, setDevices] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [defaultValue, setDefaultValue] = useState("")
    const [price,setPrice]=useState([])


    useEffect(() => {
        const storage = localStorage.getItem("info")
        if (info === null) setInfo(JSON.parse(storage))
        if (devices === null && info !== null) LoadDevice()
    


    }, [info, devices,price])




    function LoadDevice() {

        setIsLoading(true)

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

                setDevices(response.data.devices)
                setIsLoading(false)

            })
            .catch(function (error) {
                console.log(error.message);
                setIsLoading(false)

            });
    }



    function GetAmount(Period,DeviceId) {

        setIsLoading(true)

        var data = JSON.stringify({
            GPSModelId: DeviceId,
            Period: Period,
        });

        const config = {
            method: "post",
            url: "/get_amount_account",
            headers: {
                Authorization: `Bearer ${info.token}`,
                "Content-Type": "application/json",
            }, data: data

        };
        axios(config)
            .then(function (response) {

              
               setPrice(response.data.price)
           
                setIsLoading(false)

            })
            .catch(function (error) {
                console.log(error.message);
                setIsLoading(false)

            });
    }





    return (
        <div className="flex lg:h-screen items-center justify-center">
            {isLoading ? <Loading /> : <div className="grid grid-cols-1 gap-3 w-full md:w-1/4 px-5 mt-5 mb-20 z-50">

                {devices !== null ? devices.map((item, index) => (
                    <Card key={index}>
                        <CardBody>
                            <div className="grid grid-cols-2 gap-5 items-center justify-center py-3 pr-5 ">
                                <div className="text-right text-md">IMEI</div>
                                <div className="text-right text-md pr-5">{item.DeviceIMEI}</div>
                                <div className="text-right text-md">نام دستگاه</div>
                                <div className="text-right text-md pr-5">{item.DeviceName}</div>
                                <div className="text-right text-md">تاریخ اتمام اشتراک</div>
                                <div className="text-right text-md pr-5">{item.DeviceValidDateTo}</div>

                                <Select className="p-0" fullWidth size="sm" variant="faded" defaultSelectedKeys={defaultValue} onChange={(e) => {GetAmount(e.target.value, "3");setDefaultValue(e.target.value)}}>
                                    <SelectItem key={"12"} value="یکساله">یکساله</SelectItem>
                                    <SelectItem key={"6"} value="شش ماهه">شش ماهه</SelectItem>
                                    <SelectItem key={"3"} value="سه ماهه">سه ماهه</SelectItem>
                                    <SelectItem key={"1"} value="یک ماهه">یک ماهه</SelectItem>
                                </Select>
                                <div className="text-right text-md pr-5">{`${price.length !== 0 ? price : 0} ریال`}</div>




                            </div>
                        </CardBody>
                    </Card>
                )) : <div className="text-center">دستگاهی وجود ندارد</div>


                }







            </div>
            }
            <div className="fixed  bottom-10 w-full md:w-1/4  mb-5 z-50 p-5">
                <div className="grid grid-cols-1 w-full gap-3">
                    <Card>
                        <CardBody className="text-center text-md grid grid-cols-1 gap-3">
                            <p>موجودی کیف پول : 0 ریال</p>
                            <p>مبلغ قابل پرداخت : 0 ریال</p>
                        </CardBody>
                    </Card>

                    <Button className="bg-[#14b8a6] text-white">پرداخت</Button>
                </div>

            </div>
        </div>
    )
}


export default Subscription;