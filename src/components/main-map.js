"use client";
import React, { useEffect, useMemo, useState } from "react";
// import Map, { Marker, Source, Layer } from "react-map-gl";
import axios from 'axios'


import {
  MapContainer,
  TileLayer,
  Marker,


} from 'react-leaflet'

import 'leaflet/dist/leaflet.css'
import L from 'leaflet'


import "./mapStyle.css";
import { useRouter } from 'next/navigation'

import { Card, CardBody } from "@nextui-org/react";

import FloatDropdown from "./float-dropdown";
import { useTheme } from "next-themes";
import Image from "next/image";


const MainMap = () => {
  const theme = useTheme()

  const icon = L.icon({
    iconUrl: "/images/location-2.png",
    iconSize: [26, 44],
    iconAnchor: [13, 44]
  });
  const parkIcon = L.icon({
    iconUrl: "/images/parking.png",
    iconSize: [38, 46],
    iconAnchor: [19, 46]
  });
  const towingIcon = L.icon({
    iconUrl: "/images/towing.png",
    iconSize: [38, 46],
    iconAnchor: [19, 46]
  });

  const carIcon = L.icon({
    iconUrl: "/images/car.png",
    iconSize: [38, 46],
    iconAnchor: [19, 46]
  });

  const racingIcon = L.icon({
    iconUrl: "/images/racing.png",
    iconSize: [38, 46],
    iconAnchor: [19, 46]
  });





  const [position, setPosition] = useState([])
  const [data, setData] = useState({})
  const [info, setInfo] = useState(null)
  const [status, setStatus] = useState("")

  const [map, setMap] = useState(null)
  useEffect(() => {

    const storage = localStorage.getItem("info")
    if (info === null) setInfo(JSON.parse(storage))
    if (info !== null) LoadData()


    if (status === "در حال حرکت") {
      var timer = setInterval(() => {
        LoadData()
      }, 10000);

      return () => clearInterval(timer);
    }

    if (status === "کارکرد درجا") {
      var timer = setInterval(() => {
        LoadData()
      }, 30000);

      return () => clearInterval(timer);
    }

    if (status === "پارک") {
      var timer = setInterval(() => {
        LoadData()
      }, 60000);

      return () => clearInterval(timer);
    }

    if (status === "بکسل") {
      var timer = setInterval(() => {
        LoadData()
      }, 10000);

      return () => clearInterval(timer);
    }






  }, [info, status])




  function LoadData() {
    var data = JSON.stringify({
      imei: "350317174465199",
    });

    const config = {
      method: "post",
      url: "/getDataByIMEI",
      headers: {
        Authorization: `Bearer ${info.token}`,
        "Content-Type": "application/json",
      },
      data: data,
    };
    axios(config)
      .then(function (response) {

        setData(response.data)
        if (response.data.VehiclePower === "True" && parseInt(response.data.DataSpeed) > 0) setStatus("در حال حرکت")
        if (response.data.VehiclePower === "True" && parseInt(response.data.DataSpeed) === 0) setStatus("کارکرد درجا")
        if (response.data.VehiclePower === "False" && parseInt(response.data.DataSpeed) > 0) setStatus("بکسل")
        if (response.data.VehiclePower === "False" && parseInt(response.data.DataSpeed) === 0) setStatus("پارک")
        setPosition([response.data.DataLong / 10000000, response.data.DataLat / 10000000])
        console.log("this status " + status);

      })
      .catch(function (error) {
        console.log(error.message);

      });
  }

  function SetViewMap({ map }) {
    map.setView([position[1], position[0]])
  }

  const displayMap = useMemo(
    () => (
      <MapContainer

        center={position.length > 0 ? [position[1], position[0]] : [51.505, -0.09]}
        zoom={16}
        scrollWheelZoom={true}
        ref={setMap}>


        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position.length > 0 ? [position[1], position[0]] : [51.505, -0.09]} icon={status === "در حال حرکت" ? racingIcon : status === "کارکرد درجا" ? carIcon : status === "بکسل" ? towingIcon : status === "پارک" ? parkIcon : icon}>
        </Marker>



      </MapContainer>
    ),
    [position],
  )




  return (
    (position.length !== 0) ? <>

      {position[0] !== "" && position[0] ?

        <>
          <div className="fixed lg:pr-0 flex max-lg:bottom-14  lg:grid lg:grid-cols-2 lg:w-48  lg:absolute  lg:left-0 lg:top-0  w-full p-3 z-50 gap-1 lg:gap-1 max-md:overflow-x-auto ">

            <Card className="shadow-lg rounded-lg dark:bg-[#1e293b] w-22  max-sm:min-w-24">
              <CardBody>
                <div className="grid grid-cols-1 items-center">
                  <div className="flex items-center justify-center">
                    <img alt="image or icon" className="mb-2" width={35} src="/images/time.png" />
                  </div>

                  <div className="flex items-center justify-center text-sm">{data._DataTimeStamp}</div>
                </div>
              </CardBody>
            </Card>

            <Card className="shadow-lg rounded-lg dark:bg-[#1e293b] w-22  max-sm:min-w-24">
              <CardBody>
                <div className="grid grid-cols-1 items-center">
                  <div className="flex items-center justify-center">
                    <img alt="image or icon" className="mb-2" width={35} src="/images/key.png" />
                  </div>

                  <div className="flex items-center justify-center text-sm">{data.VehiclePower === "True" ? "روشن" : "خاموش"}</div>
                </div>
              </CardBody>
            </Card>
            <Card className="shadow-lg rounded-lg dark:bg-[#1e293b] w-22  max-sm:min-w-24">
              <CardBody>
                <div className="grid grid-cols-1 items-center">
                  <div className="flex items-center justify-center">
                    <img alt="image or icon" className="mb-2" width={35} src="/images/height.png" />
                  </div>

                  <div className="flex items-center justify-center text-sm">{data.DataAlt}</div>
                </div>
              </CardBody>
            </Card>
            <Card className="shadow-lg rounded-lg dark:bg-[#1e293b] w-22 max-sm:min-w-24">
              <CardBody>
                <div className="grid grid-cols-1 items-center">
                  <div className="flex items-center justify-center">
                    <img alt="image or icon" className="mb-2" width={35} src="/images/angle.png" />
                  </div>

                  <div className="flex items-center justify-center text-sm">{data.DataAngle}</div>
                </div>
              </CardBody>
            </Card>
            <Card className="shadow-lg rounded-lg dark:bg-[#1e293b] w-22 max-sm:min-w-24">
              <CardBody>
                <div className="grid grid-cols-1 items-center">
                  <div className="flex items-center justify-center">
                    <img alt="image or icon" className="mb-2" width={35} src="/images/speed.png" />
                  </div>

                  <div className="flex items-center justify-center text-sm">{data.DataSpeed}</div>
                </div>
              </CardBody>
            </Card>
            <Card className="shadow-lg rounded-lg dark:bg-[#1e293b] w-22 max-sm:min-w-24">
              <CardBody>
                <div className="grid grid-cols-1 items-center">
                  <div className="flex items-center justify-center">
                    <img alt="image or icon" className="mb-2" width={35} src="/images/gps.png" />
                  </div>

                  <div className="flex items-center justify-center text-sm">{data.DataSatellites}</div>
                </div>
              </CardBody>
            </Card>
            <Card className="shadow-lg rounded-lg dark:bg-[#1e293b] w-22 max-sm:min-w-24">
              <CardBody>
                <div className="grid grid-cols-1 items-center">
                  <div className="flex items-center justify-center">
                    <img alt="image or icon" className="mb-2" width={35} src="/images/voltage.png" />
                  </div>

                  <div className="flex items-center justify-center text-sm">{data.DataDeviceBatteryVoltage}</div>
                </div>
              </CardBody>
            </Card>
          </div>


          <div className="w-full">

            {map ? <SetViewMap map={map} /> : null}
            {displayMap}


            <FloatDropdown />
          </div>
        </> :
        <>
          <FloatDropdown />
          <MapContainer
            className={theme}
            center={position.length > 0 ? [35.715298, 51.404343] : [51.505, -0.09]}
            zoom={13}
            scrollWheelZoom={true}
          >


            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />



{/* 
            <Marker position={position.length > 0 ? [35.715298, 51.404343] : [51.505, -0.09]} icon={status === "در حال حرکت" ? racingIcon : status === "کارکرد درجا" ? carIcon : status === "بکسل" ? towingIcon : status === "پارک" ? parkIcon : icon}>

            </Marker> */}
          </MapContainer>









        </>
      }


    </> : <div role="status" className="flex items-center justify-center pb-20 h-screen">
      <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-[#14b8a6] dark:fill-[#1e293b]" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
      </svg>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default MainMap;
