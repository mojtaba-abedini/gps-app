
"use client"

import FloatDropdown from "@/components/float-dropdown";
import dynamic from "next/dynamic";


const MapHistoryNoSSR = dynamic(() => import("../../../components/map-history"), {
  ssr: false,
});


const History = () => {

  return (
    <>

      <MapHistoryNoSSR />
      <FloatDropdown />
    </>
  )
}


export default History;