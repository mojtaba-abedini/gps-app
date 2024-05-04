
"use client"

import React, { useEffect, useState } from "react";
import { Input, Button } from "@nextui-org/react";
import axios from "axios";
import { useRouter } from 'next/navigation'
const Register = () => {
    const router = useRouter()
    const [code, setCode] = useState("")
    const [password, setPassword] = useState("")
    const [isLoading, setIsLoading] = useState(false)


    const Enter = () => {
        setIsLoading(true)
        var data = JSON.stringify({
            mobile: localStorage.getItem("mobile"),
            password : password,
            code:code

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
           
                router.push("/", { scroll: false });
                setIsLoading(false);
            })
            .catch(function (error) { console.log(error);});
    }


    return (
        <div className="flex h-screen items-center justify-center">
            <div className="grid grid-cols-1 gap-3 w-full md:w-2/5 lg:1/4 px-5 mt-5 mb-20 z-50">

                <Input onChange={(e) => setCode(e.target.value)} variant="faded" type="text" label="کد ارسال شده را وارد کنید"/>
                <Input onChange={(e) => setPassword(e.target.value)} variant="faded" type="text" label="رمز عبور را وارد کنید"/>
                <Button onClick={Enter} isLoading={isLoading} className="bg-[#14b8a6] text-white">ورود به برنامه</Button>


            </div>
        </div>
    )
}


export default Register;