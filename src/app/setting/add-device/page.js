
"use client"

import React from "react";
import {Select, SelectItem,Input,Button} from "@nextui-org/react";

const AddDevice = ()=>{

     const devices = [
        {label: "Cat", value: "cat", description: "The second most popular pet in the world"},
        {label: "Dog", value: "dog", description: "The most popular pet in the world"},
        {label: "Elephant", value: "elephant", description: "The largest land animal"},
       
      ];



    return (
        <div className="flex lg:h-screen items-center justify-center">
        <div className="grid grid-cols-1 gap-3 w-full md:w-1/4 px-5 mt-5 mb-20 z-50">
     
                <Select 
                   classNames="select"
                    label="مدل دستگاه" 
                    variant="faded"
                >
                    {devices.map((device) => (
                    <SelectItem key={device.value} value={device.value}>
                        {device.label}
                    </SelectItem>
                    ))}
                </Select>

                <Input  variant="faded" type="text" label="نام وسیله نقلیه / شخص" />
                <Input  variant="faded" type="text" label="شناسه دستگاه (IMEI , ID)" />
                <Input  variant="faded" type="text" label="شماره سیم کارت دستگاه" />

                <Button className="bg-[#14b8a6] text-white">افزودن دستگاه</Button>


   
            </div>
        </div>
    )
}


export default AddDevice;