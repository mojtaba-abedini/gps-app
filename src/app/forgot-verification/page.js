
"use client"

import React, { useEffect, useState } from "react";
import { Input, Button } from "@nextui-org/react";
import axios from "axios";
import { useRouter } from 'next/navigation'
const ForgotVerification = () => {
    const router = useRouter()
    const [mobile, setMobile] = useState("")
    const [isLoading, setIsLoading] = useState(false)


    const Verify = () => {
        setIsLoading(true)
        var data = JSON.stringify({
            mobile: mobile

        });
        var config = {
            method: "post",
            url: "/verification",
            headers: {
                "Content-Type": "application/json",
            },
            data: data,
        };

        axios(config)
            .then(function () {

                localStorage.setItem("mobile", mobile);
                router.push("/forgot-password", { scroll: false });
                setIsLoading(false);
            })
            .catch(function (error) { });
    }


    return (
        <div className="flex h-screen items-center justify-center">
            <div className="grid grid-cols-1 gap-3 w-full md:w-2/5 lg:w-1/4 px-5 mt-5 mb-20 z-50">

                <Input onChange={(e) => setMobile(e.target.value)} variant="faded" type="text" label="شماره تلفن همراه خود را وارد کنید" />
                <Button onClick={Verify} isLoading={isLoading} className="bg-[#14b8a6] text-white">دریافت رمز یکبار مصرف</Button>

            </div>
        </div>
    )
}


export default ForgotVerification;