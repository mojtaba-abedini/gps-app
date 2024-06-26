
"use client"
import '../../globals.css'
import { Button, Input,Text } from "@nextui-org/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpdatePerson = () => {
    const [inputValues, setInputValues] = useState({
        Name: "",
        Family: "",
        NationalCode: "",
        Image: null,
        Mobile: ""
    })


    const [info, setInfo] = useState(null)
    const [deviceId, setDeviceId] = useState(null)

    useEffect(() => {
        const storage = localStorage.getItem("info")
        if (info === null) setInfo(JSON.parse(storage))
        if (deviceId === null) setDeviceId(localStorage.getItem("deviceId"))
        if (deviceId !== null && inputValues.Name==="")GetPersonInfo()
    }, [deviceId,inputValues])

  

    

    const GetPersonInfo = () => {
        var data = JSON.stringify({
            DeviceId: deviceId
        });
        var config = {
            method: "post",
            url: "/get_driver_info_by_device_id",
            headers: {
                Authorization: `Bearer ${info.token}`,
                "Content-Type": "application/json",
            },
            data: data,
        };

        axios(config)
            .then(function (response) {
                toast.success("اطلاعات راننده با موفقیت دریافت شد.", { position: "bottom-right",rtl:true });
     
                setInputValues({
                    ...inputValues,
                    Name: response.data['driver_info'][0].PersonName,
                    Family:  response.data['driver_info'][0].PersonFamily,
                    NationalCode: response.data['driver_info'][0].DeviceUserName,
                    Mobile: response.data['driver_info'][0].PersonMobile,

                })
              
            })
            .catch(function (error) {
                toast.error(error.message, { position: "bottom-right",rtl:true });
             });

    }



    const EditPerson = () => {
        var data = JSON.stringify({
            PersonId: 1,
            PersonName: inputValues.Name,
            PersonFamily: inputValues.Family,
            PersonMobile: inputValues.Mobile,
            PersonGender: 1,
            PersonFatherName: 1,
            PersonBirthDate: 1,
            PersonBirthCity: 1,
            PersonAddress: 1,
            PersonAddressPostCode: 1,
            PersonLivingCountry: 1,
            PersonLivingCity: 1,
            PersonEducation: 1,
            PersonNationalId: 1,
            PersonPhoneNumber: 1,
            PersonPicPath: inputValues.Image,
            PersonSignPath: 1
        });
        var config = {
            method: "post",
            url: "/person_update",
            headers: {
                Authorization: `Bearer ${info.token}`,
                "Content-Type": "application/json",
            },
            data: data,
        };

        axios(config)
            .then(function (response) {
                toast.success(response.data.message, { position: "bottom-right" ,rtl:true});
            })
            .catch(function (error) {

                toast.error(error.message, { position: "bottom-right",rtl:true });
             });

    }



    return (


        <div className="flex h-screen items-center justify-center">

            <div className="grid grid-cols-1 gap-3 w-full md:w-2/5 lg:w-1/4 px-5 mt-5 mb-20 z-50">
                <ToastContainer />
                <Input value={inputValues.Name} onChange={(e) => setInputValues({ ...inputValues, Name: e.target.value })} variant="faded" type="text" label="نام" />
                <Input value={inputValues.Family}  onChange={(e) => setInputValues({ ...inputValues, Family: e.target.value })} variant="faded" type="text" label="نام خانوادگی" />
                <Input value={inputValues.NationalCode}  onChange={(e) => setInputValues({ ...inputValues, NationalCode: e.target.value })} variant="faded" type="text" label="کد ملی" />
                <Input value={inputValues.Mobile}  onChange={(e) => setInputValues({ ...inputValues, Mobile: e.target.value })} variant="faded" type="text" label="تلفن همراه" />
               
                 <input name="file-input" onChange={(e) => setInputValues({ ...inputValues, Image: e.target.files[0] })} class="p-3  block w-full text-lg text-gray-900 border-2 border-gray-200 rounded-xl cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="profile-file-input" type="file"/>
                 <label id="file-input-label" for="profile-file-input" className='text-md text-gray-600 p-4 block w-full text-lg text-gray-900 border-2 border-gray-200 rounded-xl cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400'>{inputValues.Image === null ? "تصویر پروفایل" : inputValues.Image.name}</label>


                <Button onClick={EditPerson} className="bg-[#14b8a6] text-white">ذخیره</Button>

            </div>

        </div>
    )

}

export default UpdatePerson;