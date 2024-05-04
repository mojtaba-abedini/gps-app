"use client";
import React, { useEffect, useMemo, useState } from "react";
// import Map, { Marker, Source, Layer } from "react-map-gl";
import axios from 'axios'
import "mapbox-gl/dist/mapbox-gl.css";
import BottomPlayer from "./bottomPlayer";
import "./mapStyle.css";
import { Button } from "@nextui-org/react";

// import { useRouter } from 'next/navigation'
import { Card, CardBody } from "@nextui-org/react";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,

} from 'react-leaflet'

import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

import '@majidh1/jalalidatepicker';
import '@majidh1/jalalidatepicker/dist/jalalidatepicker.min.css'
import { useTheme } from "next-themes";


function MapHistory() {

  const [map, setMap] = useState(null)
const theme = useTheme()
  const [position, setPosition] = useState([])
  const [pointData, setPointData] = useState([])
  const [polyline, setPolyline] = useState(null)
  const [play, setPlay] = useState(false)
  const [index, setIndex] = useState(0)
  const [speed, setSpeed] = useState(200)
  const [info, setInfo] = useState(null)
  const [valueFrom, setValueFrom] = useState("");
  const [valueTo, setValueTo] = useState("");
  const [progress, setProgress] = useState(0);
  const limeOptions = { color: 'red' }


  const icon = L.icon({
    iconUrl: "/images/marker-icon.png",
    iconSize: [28, 46],
    iconAnchor: [14, 46]
  });

  let timer;

  jalaliDatepicker.startWatch({
    minDate: "attr",
    maxDate: "attr",

  });

  jalaliDatepicker.updateOptions({ time: true, hasSecond: false, persianDigits: true });


  function jalali_to_gregorian(jy, jm, jd) {
    jy = Number(jy);
    jm = Number(jm);
    jd = Number(jd);
    var gy = (jy <= 979) ? 621 : 1600;
    jy -= (jy <= 979) ? 0 : 979;
    var days = (365 * jy) + ((parseInt(jy / 33)) * 8) + (parseInt(((jy % 33) + 3) / 4))
      + 78 + jd + ((jm < 7) ? (jm - 1) * 31 : ((jm - 7) * 30) + 186);
    gy += 400 * (parseInt(days / 146097));
    days %= 146097;
    if (days > 36524) {
      gy += 100 * (parseInt(--days / 36524));
      days %= 36524;
      if (days >= 365) days++;
    }
    gy += 4 * (parseInt((days) / 1461));
    days %= 1461;
    gy += parseInt((days - 1) / 365);
    if (days > 365) days = (days - 1) % 365;
    var gd = days + 1;
    var sal_a = [0, 31, ((gy % 4 == 0 && gy % 100 != 0) || (gy % 400 == 0)) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var gm
    for (gm = 0; gm < 13; gm++) {
      var v = sal_a[gm];
      if (gd <= v) break;
      gd -= v;
    }
    return [gy, gm, gd];
  }



  function SetDate() {

    const from = document.getElementById("date-from").value
    var dateFrom = from.split(' ')[0].split("/");

    const to = document.getElementById("date-to").value
    var dateTo = to.split(' ')[0].split("/");

    setValueFrom(jalali_to_gregorian(dateFrom[0], dateFrom[1], dateFrom[2]).join("/") + " " + from.split(' ')[1])
    setValueTo(jalali_to_gregorian(dateTo[0], dateTo[1], dateTo[2]).join("/") + " " + to.split(' ')[1])

    setPointData([])
    setPosition([])

  }



  function SetViewMap({ map }) {
    map.setView([position[1], position[0]])
  }



  useEffect(() => {
    const storage = localStorage.getItem("info")
    if (info === null) setInfo(JSON.parse(storage))
    if (pointData.length === 0 && info !== null) LoadData()
    if (pointData.length !== 0 && position.length === 0) setPosition([(pointData[0].DataLongitude) / 10000000, (pointData[0].DataLatitude) / 10000000])
    if (pointData.length !== 0 && polyline === null) getPolyline()


    if (play) {

      timer = setInterval(() => {
        if (index < (polyline.length)) {
          setIndex(prevIndex => prevIndex + 1)
          setPosition([polyline[index][1], polyline[index][0]]);
          setProgress((index/polyline.length)*100)


        } else setPlay(false)

      }, speed);

      return () => clearInterval(timer);
    }


  }, [pointData, play, position, index])



  function getPolyline() {

    let arr = []

    pointData.map(item => {
      arr.push([(item.DataLatitude) / 10000000, (item.DataLongitude) / 10000000])
    })
    setPolyline(arr)


  }


  function LoadData() {

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

      })
      .catch(function (error) {
        console.log(error);

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
    setPosition([polyline[index][1], polyline[index][0]])
  }

  const clickPause = () => {
    setPlay(false)
    clearTimeout(timer)
  }
  const clickPlay = () => {
    setPlay(true)

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
      </MapContainer>
    ),
    [position],
  )





  return (
    <>
      <div className="fixed bottom-32 mb-2 w-full z-20">
        <div className="w-full flex items-center justify-center p-3">
          <div className="grid  grid-cols-3 gap-2">
            <input className="text-md rounded-lg py-1.5 px-3 w-full form-control" id="date-from" data-jdp data-jdp-miladi-input="miladi_date" type="text" placeholder="تاریخ را وارد کنید" />
            <input className="text-md rounded-lg py-1.5 px-3 w-full form-control" id="date-to" data-jdp data-jdp-miladi-input="miladi_date" type="text" placeholder="تاریخ را وارد کنید" />
            {/* <DatePicker
             
              isGregorian={false}
              timePicker={true}
              value={filters.from}
              onChange={(value) => setfilters({ ...filters, from: value })}
            />
            <DatePicker
              className="text-md rounded-lg py-1.5 px-3  w-full"
              isGregorian={false}
              timePicker={true}
              value={filters.to}
              onChange={(value) => setfilters({ ...filters, to: value })}
            /> */}
            <Button onClick={SetDate} className="bg-[#14b8a6] dark:bg-[#1e293b] text-white">
              مشاهده مسیر
            </Button>
          </div>
        </div>
      </div>

      <BottomPlayer progress={progress} clickPlay={play} onClickPause={() => clickPause()} onClickPlay={() => clickPlay()} onClickBackward={() => clickBackward()} onClickForward={() => clickForward()} onClickRefresh={() => { clickRefresh() }} />

      {(position.length !== 0 ) ? <>

{ pointData[index] !== undefined ? <div className="fixed left-0 grid grid-cols-1 gap-1 p-3 z-30">

<Card className="shadow-lg rounded-lg dark:bg-[#1e293b] min-w-24">
  <CardBody>
    <div className="grid grid-cols-1 items-center">
      <div className="flex items-center justify-center">
        <img className="mb-2" width={35} src="/images/time.png"/>
      </div>

      <div className="flex items-center justify-center text-sm text-center">{(pointData[index].DataDeviceTime).split(".")[0]}</div>
    </div>
  </CardBody>
</Card>

{/* <Card className="shadow-lg rounded-lg dark:bg-[#1e293b] min-w-24">
  <CardBody>
    <div className="grid grid-cols-1 items-center">
      <div className="flex items-center justify-center">
      <img className="mb-2" width={35} src="/images/key.png"/>
      </div>
    
      <div className="flex items-center justify-center text-sm">{pointData[index].VehiclePower === "0" ? "بکسل" : "روشن"}</div>
    </div>
  </CardBody>
</Card> */}
<Card className="shadow-lg rounded-lg dark:bg-[#1e293b] min-w-24">
  <CardBody>
    <div className="grid grid-cols-1 items-center">
      <div className="flex items-center justify-center">
      <img className="mb-2" width={35} src="/images/speed.png"/>
      </div>
     
      <div className="flex items-center justify-center text-sm">{pointData[index].DataSpeed}</div>
    </div>
  </CardBody>
</Card>
<Card className="shadow-lg rounded-lg dark:bg-[#1e293b] min-w-24">
  <CardBody>
    <div className="grid grid-cols-1 items-center">
      <div className="flex items-center justify-center">
      <img className="mb-2" width={35} src="/images/location-1.png"/>
      </div>
    
      <div className="flex items-center justify-center text-sm">{pointData[index].DataLatitude / 10000000}</div>
    </div>
  </CardBody>
</Card>
<Card className="shadow-lg rounded-lg dark:bg-[#1e293b] min-w-24">
  <CardBody>
    <div className="grid grid-cols-1 items-center">
      <div className="flex items-center justify-center">
      <img className="mb-2" width={35} src="/images/location-2.png"/>
      </div>
      
      <div className="flex items-center justify-center text-sm">{pointData[index].DataLongitude / 10000000}</div>
    </div>
  </CardBody>
</Card>




</div> : null}
       



        {/* <Map


          mapboxAccessToken="pk.eyJ1IjoibW9qdGFiYWFiZWRpbmkiLCJhIjoiY2xyN3k2ZXlxMmtpbzJrcDg0bWtweWpjeSJ9.GVno0k-LRh5KsiThR0LNDQ"
          initialViewState={{
            longitude: position[0],
            latitude: position[1],
            zoom: 14,
            pitch: 40,
          }}
          mapStyle="mapbox://styles/mojtabaabedini/cl6570r2a000v14p3jocvm9g3"
        >
          <Source id="polylineLayer" type="geojson" data={dataOne}>
            <Layer
              id="lineLayer"
              type="line"
              source="my-data"
              layout={{
                "line-join": "round",
                "line-cap": "round",
              }}
              paint={{
                "line-color": "rgba(3, 170, 238, 0.5)",
                "line-width": 5,
              }}
            />
          </Source>


          <Marker longitude={position[0]} latitude={position[1]}>

          </Marker>
        </Map> */}

        {map ? <SetViewMap map={map} /> : null}
        {displayMap}



      </> :

        valueFrom === "" && valueTo === "" ? <div role="status" className="flex items-center justify-center h-screen">
          <div>دیتایی وجود ندارد</div>

          <span class="sr-only">Loading...</span>
        </div> :
          <div role="status" className="flex items-center justify-center h-screen">

            <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-[#14b8a6]" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
            </svg>
            <span class="sr-only">Loading...</span>
          </div>

      }</>
  );
};

export default MapHistory;