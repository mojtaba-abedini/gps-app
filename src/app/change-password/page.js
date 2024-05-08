
"use client"

import React, { useEffect, useState } from "react";
import { SnackbarProvider, enqueueSnackbar } from 'notistack';
import { Input, Button } from "@nextui-org/react";
import axios from "axios";
import { useRouter } from 'next/navigation'
import FloatDropdown from "@/components/float-dropdown";
const ChangePassword = () => {
    const router = useRouter()
    const [oldPass, setOldPass] = useState("")
    const [newPass, setNewPass] = useState("")
    const [newPassRep, setNewPassRep] = useState("")
    const [isLoading, setIsLoading] = useState(false)


    const Enter = () => {
        if (oldPass === "") enqueueSnackbar('رمز عبور فعلی را وارد کنید', { variant: "error",anchorOrigin:{horizontal: 'right', vertical: 'bottom'} })
        else if (newPass === "") enqueueSnackbar('رمز عبور جدید را وارد کنید', { variant: "error",anchorOrigin:{horizontal: 'right', vertical: 'bottom'} })
        else if (newPassRep === "") enqueueSnackbar('تکرار رمز عبور جدید را وارد کنید', { variant: "error",anchorOrigin:{horizontal: 'right', vertical: 'bottom'} })
        else if (newPass !== newPassRep) enqueueSnackbar('رمز عبور جدید با تکرار آن برابر نمی باشد', { variant: "error",anchorOrigin:{horizontal: 'right', vertical: 'bottom'} })
        else {
            setIsLoading(true)
            var data = JSON.stringify({

                old_password: oldPass,
                new_password: newPass


            });
            var config = {
                method: "post",
                url: "/change_password",
                headers: {
                    "Content-Type": "application/json",
                },
                data: data,
            };

            axios(config)
                .then(function () {

                    setIsLoading(false);
                })
                .catch(function (error) { console.log(error); });
        }
    }


    return (
        <>
            <SnackbarProvider autoHideDuration={5000} />
            <div className="flex h-screen items-center justify-center">
                <div className="grid grid-cols-1 gap-3 w-full md:w-2/5 lg:w-1/4 px-5 mt-5 mb-20 z-50">

                    <Input onChange={(e) => setOldPass(e.target.value)} variant="faded" type="text" label="رمز عبور فعلی را وارد کنید" />
                    <Input onChange={(e) => setNewPass(e.target.value)} variant="faded" type="text" label="رمز عبور جدید را وارد کنید" />
                    <Input onChange={(e) => setNewPassRep(e.target.value)} variant="faded" type="text" label="رمز عبور جدید را مجدد وارد کنید" />
                    <Button onClick={Enter} isLoading={isLoading} className="bg-[#14b8a6] text-white">ذخیره</Button>


                </div>
            </div>
            <FloatDropdown />
        </>
    )
}


export default ChangePassword;