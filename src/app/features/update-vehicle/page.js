
"use client"

import { Button, Input,Text } from "@nextui-org/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpdateVehicle = () => {
    const [inputValues, setInputValues] = useState({
      Pelak:"",
      MotorNumber:"",
      VIN:"",
      FuelUsagePer100:"",
      FuelUsagePerStandBy:""
    })

    useEffect(() => {
        const storage = localStorage.getItem("info")
        if (info === null) setInfo(JSON.parse(storage))
    }, [])


    const [info, setInfo] = useState(null)



    const SaveDevice = () => {
        var data = JSON.stringify({
          VehicleAmvalCode: 1,
          VehicleCode: 1,
          VehicleFuelTypeId: 1,
          VehicleIconId: 1,
          VehicleModelYear: 1,
          VehicleMotorNo: inputValues.MotorNumber,
          VehicleName: 1,
          VehicleOrganizationId: 1,
          VehiclePelak: inputValues.Pelak,
          VehicleShasiNo: 1,
          VehicleTypeId: 1,
          VehicleVIN:inputValues.VIN,
          FuelUsagePer100: inputValues.FuelUsagePer100,
          FuelUsagePerStandBy: inputValues.FuelUsagePerStandBy,
          VehicleOwnerUserId: 1,
          VehicleId: 1
        });
        var config = {
            method: "post",
            url: "/vehicle_update",
            headers: {
                Authorization: `Bearer ${info.token}`,
                "Content-Type": "application/json",
            },
            data: data,
        };

        axios(config)
            .then(function (response) {
                toast.success(response.data.message, { position: "bottom-right" });
            })
            .catch(function (error) {
                toast.error(error.message, { position: "bottom-right" });

             });

    }



    return (


        <div className="flex h-screen items-center justify-center">

            <div className="grid grid-cols-1 gap-3 w-full md:w-2/5 lg:w-1/4 px-5 mt-5 mb-20 z-50">
                <ToastContainer />
                <Input onChange={(e) => setInputValues({ ...inputValues, Pelak: e.target.value })} variant="faded" type="text" label="پلاک" />
                <Input onChange={(e) => setInputValues({ ...inputValues, MotorNumber: e.target.value })} variant="faded" type="text" label="شماره موتور" />
                <Input onChange={(e) => setInputValues({ ...inputValues, VIN: e.target.value })} variant="faded" type="text" label="شماره VIN" />
                <Input onChange={(e) => setInputValues({ ...inputValues, FuelUsagePer100: e.target.value })} variant="faded" type="text" label="مصرف بنزین در 10 کیلومتر" />
                <Input onChange={(e) => setInputValues({ ...inputValues, FuelUsagePerStandBy: e.target.value })} variant="faded" type="text" label="مصرف بنزین در حالت درجا" />
               
      

                <Button onClick={SaveDevice} className="bg-[#14b8a6] text-white">ذخیره</Button>

            </div>

        </div>
    )

}

export default UpdateVehicle;