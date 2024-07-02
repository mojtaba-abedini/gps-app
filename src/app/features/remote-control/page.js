"use client"


import { Button, Card, CardBody } from "@nextui-org/react";
import Image from "next/image";
import { useState } from "react";

const RemoteControl = () => {

const [carState,setCarState]=useState(false)

    return (
        <>
            <div className="flex h-screen items-center justify-center">
                <Image alt="image or icon" className="mb-20"  width={225} src={`${carState ? "/images/remote-car-on.png" : "/images/remote-car.png"}`} />
                <div className="flex fixed bottom-20 gap-2">
                    <div className="grid grid-cols-1 gap-2">
                        <Button size="lg" className="p-3">
                            <Image alt="image or icon" className="m-2" width={32} src="/images/lock-off.png" />
                        </Button>
                        <Button size="lg" className="p-3">
                            <Image alt="image or icon" className="m-2" width={32} src="/images/trunk.png" />
                        </Button>
                    </div>
                    <div className="grid grid-cols-1 gap-2">
                        <Button size="lg" className="p-3" onClick={()=>setCarState(true)}>
                            <Image alt="image or icon" className="m-2" width={32} src="/images/power-on.png" />
                        </Button>
                        <Button size="lg" className="p-3" onClick={()=>setCarState(false)}>
                            <Image alt="image or icon" className="m-2" width={32} src="/images/power-off.png" />
                        </Button>
                    </div>
                    <div className="grid grid-cols-1 gap-2">
                        <Button size="lg" className="p-3">
                            <Image alt="image or icon" className="m-2" width={32} src="/images/lock-on.png" />
                        </Button>
                        <Button size="lg" className="p-3">
                            <Image alt="image or icon" className="m-2" width={32} src="/images/sound.png" />
                        </Button>
                    </div>
                </div>
            </div>




        </>
    )
}

export default RemoteControl;