
"use client"

import dynamic from "next/dynamic";


const MapHistoryNoSSR = dynamic(() => import("../../../components/map-history"), {
  ssr: false,
});



const History = ()=>{




    return(
        <MapHistoryNoSSR/>
    )
}


export default History;