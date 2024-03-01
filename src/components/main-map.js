"use client";
import React, { useEffect, useState } from "react";
import Map, { Marker, Source, Layer } from "react-map-gl";
import axios from 'axios'
import "mapbox-gl/dist/mapbox-gl.css";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import "./mapStyle.css";

import Lottie from "lottie-react";
import {Card, CardBody} from "@nextui-org/react";
import ArrowAnimation from '../images/arrow.json'

const MainMap = () => {

const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [position, setPosition] = useState([])
   const [data,setData]=useState({})

  useEffect(()=>{

    LoadData()
   

  },[])


 
  function LoadData() {
    var data = JSON.stringify({
      DeviceId:1,
      DateFrom: "2024-01-05 00:00",
      DateTo: "2024-01-06 23:59",
    });

    const config = {
      method: "post",
      url: "/get_current_location",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    axios(config)
      .then(function (response) {
        console.log(response.data.current_location);
        setData(response.data.current_location)
        
        setPosition([response.data.current_location.DataLongitude/10000000,response.data.current_location.DataLatitude/10000000])
      })
      .catch(function (error) {
       console.log(error);
      });
  }

  


  return (
   (position.length !== 0 ) ? <>
   
    <div className="flex w-full items-center justify-center">
    <Button isIconOnly   onPress={onOpen} className="bg-white rounded-full w-8 fixed bottom-20 max-w-fit z-50">
      <Lottie  animationData={ArrowAnimation} autoplay={true} loop={true} ></Lottie>
    </Button>
    </div>


    <Modal 
   backdrop='blur' 

      size="full"
      classNames={{
                backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
                base: "bg-white dark:bg-[#19172c] rounded-full ",
              }}
        isOpen={isOpen} 
        placement="bottom"
        onOpenChange={onOpenChange} 
      >
        <ModalContent >
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-center md:mt-5">اطلاعات خودرو</ModalHeader>
              <ModalBody>
                <div className="grid grid-cols-3 gap-3">
                <Card className="shadow-lg rounded-lg dark:bg-[#1e293b]">
                    <CardBody>
                        <div className="grid grid-cols-1 items-center">
                            <div className="flex items-center justify-center">
                                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M12 8a1 1 0 0 0-1 1v10H9a1 1 0 1 0 0 2h11c.6 0 1-.4 1-1V9c0-.6-.4-1-1-1h-8Zm4 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z" clip-rule="evenodd"/>
                                <path fill-rule="evenodd" d="M5 3a2 2 0 0 0-2 2v6h6V9a3 3 0 0 1 3-3h8c.4 0 .7 0 1 .2V5a2 2 0 0 0-2-2H5Zm4 10H3v2c0 1.1.9 2 2 2h4v-4Z" clip-rule="evenodd"/>
                            </svg>
                            </div>
                            <div className="flex items-center justify-center text-sm ">وضعیت خودرو</div>
                            <div className="flex items-center justify-center text-sm">خاموش</div>
                        </div>
                    </CardBody>
                </Card>
                <Card className="shadow-lg rounded-lg dark:bg-[#1e293b]">
                    <CardBody>
                        <div className="grid grid-cols-1 items-center">
                            <div className="flex items-center justify-center">
                                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M12 8a1 1 0 0 0-1 1v10H9a1 1 0 1 0 0 2h11c.6 0 1-.4 1-1V9c0-.6-.4-1-1-1h-8Zm4 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z" clip-rule="evenodd"/>
                                <path fill-rule="evenodd" d="M5 3a2 2 0 0 0-2 2v6h6V9a3 3 0 0 1 3-3h8c.4 0 .7 0 1 .2V5a2 2 0 0 0-2-2H5Zm4 10H3v2c0 1.1.9 2 2 2h4v-4Z" clip-rule="evenodd"/>
                            </svg>
                            </div>
                            <div className="flex items-center justify-center text-sm">{data.DataSpeed}</div>
                            <div className="flex items-center justify-center text-sm">km/h</div>
                        </div>
                    </CardBody>
                </Card>
                <Card className="shadow-lg rounded-lg dark:bg-[#1e293b]">
                    <CardBody>
                        <div className="grid grid-cols-1 items-center">
                            <div className="flex items-center justify-center">
                                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M12 8a1 1 0 0 0-1 1v10H9a1 1 0 1 0 0 2h11c.6 0 1-.4 1-1V9c0-.6-.4-1-1-1h-8Zm4 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z" clip-rule="evenodd"/>
                                <path fill-rule="evenodd" d="M5 3a2 2 0 0 0-2 2v6h6V9a3 3 0 0 1 3-3h8c.4 0 .7 0 1 .2V5a2 2 0 0 0-2-2H5Zm4 10H3v2c0 1.1.9 2 2 2h4v-4Z" clip-rule="evenodd"/>
                            </svg>
                            </div>
                            <div className="flex items-center justify-center text-sm">{data.DataAngel}</div>
                            <div className="flex items-center justify-center text-sm">درجه</div>
                        </div>
                    </CardBody>
                </Card>
                <Card className="shadow-lg rounded-lg dark:bg-[#1e293b]">
                    <CardBody>
                        <div className="grid grid-cols-1 items-center">
                            <div className="flex items-center justify-center">
                                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M12 8a1 1 0 0 0-1 1v10H9a1 1 0 1 0 0 2h11c.6 0 1-.4 1-1V9c0-.6-.4-1-1-1h-8Zm4 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z" clip-rule="evenodd"/>
                                <path fill-rule="evenodd" d="M5 3a2 2 0 0 0-2 2v6h6V9a3 3 0 0 1 3-3h8c.4 0 .7 0 1 .2V5a2 2 0 0 0-2-2H5Zm4 10H3v2c0 1.1.9 2 2 2h4v-4Z" clip-rule="evenodd"/>
                            </svg>
                            </div>
                            <div className="flex items-center justify-center text-sm">خاموش</div>
                        </div>
                    </CardBody>
                </Card>
                <Card className="shadow-lg rounded-lg dark:bg-[#1e293b]">
                    <CardBody>
                        <div className="grid grid-cols-1 items-center">
                            <div className="flex items-center justify-center">
                                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M12 8a1 1 0 0 0-1 1v10H9a1 1 0 1 0 0 2h11c.6 0 1-.4 1-1V9c0-.6-.4-1-1-1h-8Zm4 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z" clip-rule="evenodd"/>
                                <path fill-rule="evenodd" d="M5 3a2 2 0 0 0-2 2v6h6V9a3 3 0 0 1 3-3h8c.4 0 .7 0 1 .2V5a2 2 0 0 0-2-2H5Zm4 10H3v2c0 1.1.9 2 2 2h4v-4Z" clip-rule="evenodd"/>
                            </svg>
                            </div>
                            <div className="flex items-center justify-center text-sm">خاموش</div>
                        </div>
                    </CardBody>
                </Card>
                <Card className="shadow-lg rounded-lg dark:bg-[#1e293b]">
                    <CardBody>
                        <div className="grid grid-cols-1 items-center">
                            <div className="flex items-center justify-center">
                                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M12 8a1 1 0 0 0-1 1v10H9a1 1 0 1 0 0 2h11c.6 0 1-.4 1-1V9c0-.6-.4-1-1-1h-8Zm4 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z" clip-rule="evenodd"/>
                                <path fill-rule="evenodd" d="M5 3a2 2 0 0 0-2 2v6h6V9a3 3 0 0 1 3-3h8c.4 0 .7 0 1 .2V5a2 2 0 0 0-2-2H5Zm4 10H3v2c0 1.1.9 2 2 2h4v-4Z" clip-rule="evenodd"/>
                            </svg>
                            </div>
                            <div className="flex items-center justify-center text-sm">خاموش</div>
                        </div>
                    </CardBody>
                </Card>

                </div>
                
              </ModalBody>
              <ModalFooter>
                <Button  variant="light" onPress={onClose} className="text-sm mb-5 ml-5">
                  بستن
                </Button>
              
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>



   <Map
      mapboxAccessToken="pk.eyJ1IjoibW9qdGFiYWFiZWRpbmkiLCJhIjoiY2xyN3k2ZXlxMmtpbzJrcDg0bWtweWpjeSJ9.GVno0k-LRh5KsiThR0LNDQ"
      initialViewState={{
        longitude: position[0],
        latitude: position[1],
        zoom: 14,
        pitch: 40,
      }}
      mapStyle="mapbox://styles/mojtabaabedini/cl6570r2a000v14p3jocvm9g3"
    >


      <Marker longitude={position[0]} latitude={position[1]}>
        {/* <img width={25} src="/images/marker-icon.png" /> */}
      </Marker>
    </Map>

    
    
    
    </> : <div role="status" className="flex items-center justify-center h-screen">
                <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                  </svg>
                    <span class="sr-only">Loading...</span>
                </div>
  );
};

export default MainMap;
