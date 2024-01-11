"use client"

import dynamic from "next/dynamic";


const MapWithNoSSR = dynamic(() => import("../components/map"), {
  ssr: false,
});

export default function Home() {




  return (
    <div>
      <MapWithNoSSR />
    </div>
  );
}
