"use client"

import dynamic from "next/dynamic";
import { useRouter } from 'next/navigation'
import { useEffect } from 'react';

const MapWithNoSSR = dynamic(() => import("../components/main-map"), {
  ssr: false,
});

export default function Home() {
  const router = useRouter()
  
  useEffect(() => {
    const info = localStorage.getItem("info")
  
    if (info === null) router.push("/login")
  })

  return (
    <div>
      <MapWithNoSSR />
    </div>
  );
}
