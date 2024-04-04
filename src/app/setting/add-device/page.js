
"use client"

import React, { useEffect, useState } from "react";
import {Select, SelectItem,Input,Button,Modal, 
    ModalContent, 
    ModalHeader, 
    ModalBody,
    useDisclosure,
    Card,
    CardBody, 
    CardFooter
    } from "@nextui-org/react";
import axios from "axios";

const AddDevice = ()=>{

    const [isOpen, setIsOpen] = useState(false);
    const [devices,setDevices]=useState([]);
    const [selected,setSelected]=useState("")
    const [inputValue,setInputValue]=useState({
        DeviceIMEI:"",
        DeviceSimCardNumber:"",
        DeviceSimCardOperatorId:"1",
        DeviceGPSModelId:"1",
        DeviceName:""
    })

 
        const static_devices=[
            {
                "ModelId": "1",
                "ModelName": "Teltonika",
                "ParentId": null,
                "ModelPicPath": null,
                "DIn": null,
                "DOut": null,
                "AIn": null
            },
            {
                "ModelId": "2",
                "ModelName": "FMB",
                "ParentId": "1",
                "ModelPicPath": null,
                "DIn": null,
                "DOut": null,
                "AIn": null
            },
            {
                "ModelId": "3",
                "ModelName": "FMB 920",
                "ParentId": "2",
                "ModelPicPath": null,
                "DIn": "1",
                "DOut": "1",
                "AIn": "1"
            },
            {
                "ModelId": "4",
                "ModelName": "FMB680",
                "ParentId": "2",
                "ModelPicPath": "/uploads/gps/1706198360_63_1659690131.png",
                "DIn": "1",
                "DOut": "1",
                "AIn": "1"
            }
        ]
 

    useEffect(()=>{
        // loadDevices()
    },[isOpen,selected])


    const SelectItem=(item)=>{
            setSelected(item)
            setIsOpen(false)
    }



    function createDevice() {
        var data = JSON.stringify({
            DeviceIMEI:inputValue.DeviceIMEI,
            DeviceSimCardNumber:inputValue.DeviceSimCardNumber,
            DeviceSimCardOperatorId:"100",
            DeviceGPSModelId:"100",
            DeviceName:inputValue.DeviceName
       
        });
    
        const config = {
          method: "post",
          url: "/create_device",
          headers: {
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







    const loadDevices=()=>{
   
          const config = {
            method: "post",
            url: "/get_all_devices",
            headers: {
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
        <div className="flex lg:h-screen items-center justify-center">
         <div className="grid grid-cols-1 gap-3 w-full md:w-1/4 px-5 mt-5 mb-20 z-50">
     
                

                <Input 
                value={selected.ModelName}
                    endContent={
                        <button className="focus:outline-none mb-1" type="button" onClick={()=>setIsOpen(true)}>
                          <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
                           </svg>
                        </button>
                      }
                variant="faded" type="text" label="مدل دستگاه" />
                <Input onChange={(e)=>setInputValue({...inputValue,DeviceName:e.target.value})}  variant="faded" type="text" label="نام وسیله نقلیه / شخص" />
                <Input onChange={(e)=>setInputValue({...inputValue,DeviceIMEI:e.target.value})}  variant="faded" type="text" label="شناسه دستگاه (IMEI , ID)" />
                <Input  onChange={(e)=>setInputValue({...inputValue,DeviceSimCardNumber:e.target.value})} variant="faded" type="text" label="شماره سیم کارت دستگاه" />

                <Button onClick={createDevice} className="bg-[#14b8a6] text-white">افزودن دستگاه</Button>



                <Modal  placement="bottom-center" isOpen={isOpen}>
                    <ModalContent>
                    {(onClose) => (
                        
                        <>
                        <ModalHeader className="flex flex-col gap-1 text-center">مدل دستگاه را انتخاب کنید</ModalHeader>
                        <ModalBody className="grid grid-cols-2 mb-36 md:mb-5">
                            {static_devices.map((item, index) => (
                                <Card shadow="sm" key={index} isPressable onPress={()=>SelectItem(item)}>
                                
                                <CardBody className="text-small justify-between">
                                    <b className="text-center">{item.ModelName}</b>
                                    <p className="text-default-500 text-center">{item.ModelId}</p>
                                </CardBody>
                                </Card>
                            ))}
                        </ModalBody>
                        
                        </>
                    )}
                    </ModalContent>
                </Modal>


   
            </div>
        </div>
    )
}


export default AddDevice;