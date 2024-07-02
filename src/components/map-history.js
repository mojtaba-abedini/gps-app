"use client";
import React, { useEffect, useMemo, useState } from "react";
// import Map, { Marker, Source, Layer } from "react-map-gl";
import axios from 'axios'

import BottomPlayer from "./bottomPlayer";
import "./mapStyle.css";
import { Button } from "@nextui-org/react";
import TimePicker from "react-multi-date-picker/plugins/time_picker"
import persian from "react-date-object/calendars/persian"
import "react-multi-date-picker/styles/colors/teal.css"
import persian_fa from "react-date-object/locales/persian_fa"
import "react-multi-date-picker/styles/backgrounds/bg-dark.css"
import "react-multi-date-picker/styles/layouts/mobile.css"
// import { useRouter } from 'next/navigation'
import { Card, CardBody } from "@nextui-org/react";
import DatePicker from "react-multi-date-picker"
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,

} from 'react-leaflet'

import 'leaflet/dist/leaflet.css'
import L from 'leaflet'


import { useTheme } from "next-themes";

import moment from "jalali-moment";
import { useRouter } from "next/navigation";
import Loading from "./loading";
import Image from "next/image";


function MapHistory() {

  const [width, setWidth] = useState()

  const [start, setStart] = useState(null)
  const [end, setEnd] = useState(null)
  const [map, setMap] = useState(null)
  const theme = useTheme()
  const [position, setPosition] = useState([])
  const [pointData, setPointData] = useState([])
  const [polyline, setPolyline] = useState(null)
  const [play, setPlay] = useState(false)
  const [index, setIndex] = useState(0)
  const [speed, setSpeed] = useState(1)
  const [info, setInfo] = useState(null)
  const [valueFrom, setValueFrom] = useState("");
  const [valueTo, setValueTo] = useState("");
  const [valueFromPersian, setValueFromPersian] = useState();
  const [valueToPersian, setValueToPersian] = useState();
  const [progress, setProgress] = useState(0);
  const limeOptions = { color: '#009688', weight: 5 }
  const [isLoding, setisLoading] = useState(false)
  const router = useRouter()
  const icon = L.icon({
    iconUrl: "/images/location-2.png",
    iconSize: [26, 44],
    iconAnchor: [13, 44]
  });
  const startIcon = L.icon({
    iconUrl: "/images/start-flag.png",
    iconSize: [50, 40],
    iconAnchor: [25, 40]
  });
  const endIcon = L.icon({
    iconUrl: "/images/end-flag.png",
    iconSize: [50, 40],
    iconAnchor: [25, 40]
  });
  let timer;



  function SetDate() {

    setPointData([])
    setPolyline(null)
    setPosition([])
    LoadData()

  }


  function SetViewMap({ map }) {
    map.setView([position[1], position[0]])
  }


  // function handleResize() {
  //   setWidth(window.innerWidth)
  // }

  useEffect(() => {

    // setWidth(window.innerWidth)
    // window.addEventListener('resize', handleResize)


    const storage = localStorage.getItem("info")
    if (storage === null) router.push('/login')

    if (info === null) setInfo(JSON.parse(storage))

    // if (pointData.length === 0 && info !== null) LoadData()
    if (pointData.length !== 0 && position.length === 0) {
      setPosition([(pointData[0].DataLongitude) / 10000000, (pointData[0].DataLatitude) / 10000000]);
      setStart([(pointData[0].DataLongitude) / 10000000, (pointData[0].DataLatitude) / 10000000]);
      setEnd([(pointData[pointData.length - 1].DataLongitude) / 10000000, (pointData[pointData.length - 1].DataLatitude) / 10000000])
    }
    if (pointData.length !== 0 && polyline === null) getPolyline()


    if (play) {
      timer = setInterval(() => {
        if (polyline != null && index < (polyline.length)) {
          setIndex(prevIndex => prevIndex + 1)
          setPosition([polyline[index][1], polyline[index][0]]);
          setProgress((index / polyline.length) * 100)
        } else setPlay(false)
      }, 500 / speed);

      return () => clearInterval(timer);
    }


  }, [pointData, play, position, index, polyline, start, end, width])



  function getPolyline() {

    let arr = []

    pointData.map(item => {
      arr.push([(item.DataLatitude) / 10000000, (item.DataLongitude) / 10000000])
    })
    setPolyline(arr)


  }


  function LoadData() {
    setisLoading(true)

    var data = JSON.stringify({
      DeviceId: 1,
      DateFrom: valueFrom,
      DateTo: valueTo,
    });


    const config = {
      method: "post",
      url: "/get_data",
      headers: {
        Authorization: `Bearer ${info.token}`,
        "Content-Type": "application/json",
      },
      data: data,
    };
    axios(config)
      .then(function (response) {
        setPointData(response.data.data)
        setisLoading(false)

      })
      .catch(function (error) {
        console.log(error);
        setisLoading(false)

      });
  }


  function clickBackward() {

    if (index !== 0) {

      setIndex(index - 1)
      if (polyline[index] != undefined) setPosition([polyline[index][1], polyline[index][0]])
    }
  }
  function clickForward() {

    if (index < (polyline.length) - 1) {
      setIndex(index + 1)
      if (polyline[index] != undefined) setPosition([polyline[index][1], polyline[index][0]])
    }
  }


  const clickRefresh = () => {
    setIndex(0)
    setProgress(0)
    setPosition([polyline[0][1], polyline[0][0]])

  }



  const clickPause = () => {
    setPlay(false)
    clearTimeout(timer)
  }
  const clickPlay = () => {
    setPlay(true)

  }


  const ChangeSpeed = () => {
    console.log(speed);
    if (speed < 9) setSpeed(speed + 1)
    else {
      setSpeed(1)
    }

  }


  function SetFromDate(e) {

    const time = e.hour + ":" + e.minute + ":" + e.second
    const persianDate = e.year + "/" + e.month.number + "/" + e.day;
    setValueFromPersian(persianDate)
    const georgianDate = moment.from(persianDate, 'fa', 'YYYY/MM/DD').format('YYYY/MM/DD')

    setValueFrom(georgianDate + " " + time);
  }


  function SetToDate(e) {
    let time = e.hour + ":" + e.minute + ":" + e.second
    if (time === "0:0:0") time = "23:59:59"
    const persianDate = e.year + "/" + e.month.number + "/" + e.day;
    setValueToPersian(persianDate)
    const georgianDate = moment.from(persianDate, 'fa', 'YYYY/MM/DD').format('YYYY/MM/DD')

    setValueTo(georgianDate + " " + time);
  }





  const displayMap = useMemo(
    () => (
      <MapContainer
        className={theme}
        center={position.length > 0 ? [position[1], position[0]] : [51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={true}
        ref={setMap}>
        <Polyline pathOptions={limeOptions} positions={polyline} />

        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position.length > 0 ? [position[1], position[0]] : [51.505, -0.09]} icon={icon}>
        </Marker>
        <Marker position={start !== null ? [start[1], start[0]] : null} icon={startIcon}>
          <Popup><div className="text-red-500">شروع</div></Popup>
        </Marker>
        <Marker position={end !== null ? [end[1], end[0]] : null} icon={endIcon}>
        </Marker>


      </MapContainer>
    ),
    [position],
  )





  return (
    <>
      <div className="fixed bottom-32 mb-2 w-full z-20">
        <div className="w-full flex items-center justify-center p-3">
          <div className="grid  grid-cols-3 gap-2">
            <DatePicker

              className={`${theme === "dark" ? "bg-dark teal" : "teal "} ${width < 640 ? "rmdp-mobile" : ""}`}
              calendar={persian}
              locale={persian_fa}
              value={valueFromPersian}
              onChange={(e) => SetFromDate(e)}
              format={"YYYY/MM/DD"}
              plugins={[
                <TimePicker key={1} position="bottom" />
              ]}

            />
            <DatePicker
              className={`${theme === "dark" ? "bg-dark teal" : "teal"} ${width < 640 ? "rmdp-mobile" : ""}`}
              calendar={persian}
              locale={persian_fa}
              value={valueToPersian}
              onChange={(e) => SetToDate(e)}

              plugins={[
                <TimePicker key={2} position="bottom" />
              ]}

            />

            <Button onClick={SetDate} className="bg-[#14b8a6] dark:bg-[#1e293b] text-white">
              مشاهده مسیر
            </Button>
          </div>
        </div>
      </div>

      <BottomPlayer speed={speed} progress={progress} clickPlay={play} onClickRefresh={() => clickRefresh()} onClickPause={() => clickPause()} onClickPlay={() => clickPlay()} onClickBackward={() => clickBackward()} onClickForward={() => clickForward()} onClickChangeSpeed={() => { ChangeSpeed() }} />

      {(position.length !== 0) ? <>

        {pointData[index] !== undefined ? <div className="fixed left-0 grid grid-cols-1 gap-1 p-3 z-30">

          <Card className="shadow-lg rounded-lg dark:bg-[#1e293b] w-24">
            <CardBody>
              <div className="grid grid-cols-1 items-center">
                <div className="flex items-center justify-center">
                  <img alt="image or icon" className="mb-2" width={35} src="/images/time.png" />
                </div>

                <div className="flex items-center justify-center text-sm text-center">{(pointData[index].DataDeviceTime).split(".")[0]}</div>
              </div>
            </CardBody>
          </Card>

          <Card className="shadow-lg rounded-lg dark:bg-[#1e293b] w-24">
            <CardBody>
              <div className="grid grid-cols-1 items-center">
                <div className="flex items-center justify-center">
                  <img alt="image or icon" className="mb-2" width={35} src="/images/speed.png" />
                </div>

                <div className="flex items-center justify-center text-sm">{pointData[index].DataSpeed}</div>
              </div>
            </CardBody>
          </Card>


        </div> : null}


        {map ? <SetViewMap map={map} /> : null}
        {displayMap}



      </> : isLoding ? <Loading /> :

        <div role="status" className="flex pb-28  items-center justify-center h-screen">
          <img alt="image or icon" className="pb-20" src="/images/no-data.svg" height={300}

            objectFit="cover" width={600} />


        </div>


      }</>
  );
};

export default MapHistory;