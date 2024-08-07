"use client"

import BottomNavigation from "@/components/bottomNavigation";
import dynamic from "next/dynamic";
import { useRouter } from 'next/navigation'
import { useEffect } from 'react';

const MapWithNoSSR = dynamic(() => import("../components/main-map"), {
  ssr: false,
});

export default function Home() {
  const router = useRouter()

  useEffect(() => {



    // if ('serviceWorker' in navigator) {
    //   navigator.serviceWorker
    //     .register('/service-worker.js')
    //     .then((registration) => console.log('scope is: ', registration.scope));
    // }



    const info = localStorage.getItem("info")
    if (localStorage.getItem("notification") === null) localStorage.setItem("notification", false)
    if (info === null) router.push("/login")
  }, [])

  return (
    <div>
      <MapWithNoSSR />
      <BottomNavigation active={1} />
    </div>
  );
}


