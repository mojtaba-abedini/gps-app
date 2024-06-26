"use client"

import { Button, Input } from "@nextui-org/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpdateDevice = () => {

    const [inputValues, setInputValues] = useState({
        DeviceName: "",
        PhoneNumber: "",
        OperatorUserName: "",
        OperatorPassword: ""
    })

    const [info, setInfo] = useState(null)
    const [deviceId, setDeviceId] = useState(null)

    useEffect(() => {
        const storage = localStorage.getItem("info")
        if (info === null) setInfo(JSON.parse(storage))
        if (deviceId === null) setDeviceId(localStorage.getItem("deviceId"))
        if (deviceId !== null && inputValues.DeviceName==="")GetDiveceInfo()
        
    }, [deviceId])





  
 


    const GetDiveceInfo = () => {
        var data = JSON.stringify({
            DeviceId: deviceId
        });
        var config = {
            method: "post",
            url: "/get_gps_info_by_device_id",
            headers: {
                Authorization: `Bearer ${info.token}`,
                "Content-Type": "application/json",
            },
            data: data,
        };

        axios(config)
            .then(function (response) {
                toast.success("اطلاعات دستگاه با موفقیت دریافت شد.", { position: "bottom-right",rtl:true });
     
                setInputValues({
                    ...inputValues,
                    DeviceName: response.data['gps_info'][0].VehicleName,
                    PhoneNumber:  response.data['gps_info'][0].DeviceSimCardNumber,
                    OperatorUserName: response.data['gps_info'][0].DeviceUserName,
                    OperatorPassword: response.data['gps_info'][0].DevicePassword,
                })
              
            })
            .catch(function (error) {
                toast.error(error.message, { position: "bottom-right",rtl:true });
             });

    }


    const SaveDevice = () => {
        var data = JSON.stringify({
            DeviceIMEI: 1,
            DeviceSimCardNumber: inputValues.PhoneNumber,
            DeviceSimCardOperatorId: 1,
            DeviceGPSTypeId: 1,
            DeviceVehicleId: 1,
            DeviceName: inputValues.DeviceName,
            DeviceUserName: inputValues.OperatorUserName,
            DevicePassword: inputValues.OperatorPassword,
            DeviceId: 1
        });
        var config = {
            method: "post",
            url: "/device_update",
            headers: {
                Authorization: `Bearer ${info.token}`,
                "Content-Type": "application/json",
            },
            data: data,
        };

        axios(config)
            .then(function (response) {
                toast.success("اطلاعات دستگاه با موفقیت ویرایش شد", { position: "bottom-right",rtl:true  });
            })
            .catch(function (error) {

                toast.error(error.message, { position: "bottom-right" });
             });

    }



    return (


        <div className="flex h-screen items-center justify-center">

            <div className="grid grid-cols-1 gap-3 w-full md:w-2/5 lg:w-1/4 px-5 mt-5 mb-20 z-50">
                <ToastContainer />
                <Input value={inputValues.DeviceName} onChange={(e) => setInputValues({ ...inputValues, DeviceName: e.target.value })} variant="faded" type="text" label="نام دستگاه" />
                <Input value={inputValues.PhoneNumber} onChange={(e) => setInputValues({ ...inputValues, PhoneNumber: e.target.value })} variant="faded" type="text" label="شماره همراه" />
                <Input value={inputValues.OperatorUserName} onChange={(e) => setInputValues({ ...inputValues, OperatorUserName: e.target.value })} variant="faded" type="text" label="نام کاربری" />
                <Input value={inputValues.OperatorPassword} onChange={(e) => setInputValues({ ...inputValues, OperatorPassword: e.target.value })} variant="faded" type="text" label="رمز عبور" />

                <Button onClick={SaveDevice} className="bg-[#14b8a6] text-white">ذخیره</Button>

            </div>

        </div>
    )

}

export default UpdateDevice;