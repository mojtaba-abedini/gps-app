"use client";
import React, { useEffect, useState } from "react";
import Map, { Marker, Source, Layer } from "react-map-gl";
import axios from 'axios'
import "mapbox-gl/dist/mapbox-gl.css";
import BottomPlayer from "./bottomPlayer";
import "./mapStyle.css";



const MyMap = () => {
  const [position, setPosition] = useState([])
  const [pointData,setPointData]=useState([])
  const [dataOne,setDataOne]=useState({})
  const polyline = []
  const [play,setPlay]=useState(false)
  const [index,setIndex]=useState(0)
  const [speed,setSpeed]= useState(200)
  let timer;

  useEffect(()=>{

    if (pointData.length === 0) LoadData()
    if (pointData.length !== 0 && position.length === 0) setPosition([(pointData[0].DataLongitude)/10000000,(pointData[0].DataLatitude)/10000000])
  
    if (pointData.length !== 0 && polyline.length===0) getPolyline()

    if (polyline.length !== 0) setDataOne({
              type: "Feature",
              properties: {},
              geometry: {
                type: "LineString",
                coordinates: polyline,
              },
    })


  


    if(play === true) {

       timer = setInterval(()=>{
        if (index < (polyline.length) )setIndex(prevIndex => prevIndex +1 )
        setPosition(polyline[index]);

      },speed);

      return ()=>  clearInterval(timer);}
    

  },[pointData,play,position,index])



  function  getPolyline(){
    
    pointData.map(item => {
      polyline.push([(item.DataLongitude)/10000000,(item.DataLatitude)/10000000])
    })

  }


  function LoadData() {
    var data = JSON.stringify({
      DeviceId:1,
      DateFrom: "2024-01-05 21:27",
      DateTo: "2024-01-06 04:30",
    });

    const config = {
      method: "post",
      url: "/get_data",
      headers: {
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

  
  function clickBackward(){
 
    getPolyline()
    if (index !== 0){
      setIndex(index-1)
      setPosition(polyline[index])
     
      
    }
  }
  function clickForward(){
    getPolyline()
    if (index < (polyline.length)-1){
      setIndex(index +1)
      setPosition(polyline[index])
       
  }
  }


  const clickRefresh=()=>{
    getPolyline()
    setIndex(0)

    setPosition(polyline[index])
  }
 
  const clickPause=()=>{

    setPlay(false)
    clearTimeout(timer)
  }
  const clickPlay=()=>{

    setPlay(true)
  }

  return (
   (position.length !== 0 ) ? <>
   
   
   
   <BottomPlayer clickPlay={play} onClickPause={()=>clickPause()} onClickPlay={()=>clickPlay()}  onClickBackward={()=>clickBackward()}  onClickForward={()=>clickForward()}  onClickRefresh={()=>{clickRefresh()}}/>
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
        {/* <img alt="image or icon" width={25} src="/images/marker-icon.png" /> */}
      </Marker>
    </Map>

    
    
    
    </> : <div role="status" className="flex items-center justify-center h-screen">
                <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                  </svg>
                    <span className="sr-only">Loading...</span>
                </div>
  );
};

export default MyMap;
