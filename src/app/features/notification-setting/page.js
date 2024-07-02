"use client"

import SelectAlarm from "@/components/select-alarm";
import { Accordion, Slider, AccordionItem, Card, CardBody, Input, Select, SelectItem, Switch } from "@nextui-org/react";
import { useState } from "react";


const NotificationSetting = () => {

    const [isSelected, setIsSelected] = useState({
        shetabShadid: false,
        voltageAnalogeBala: false,
        voltageAnalogePaeen: true,
        pichidanKhatarnak:false,
        satheBattery:true,
        boxel:false,
        tormozShadid:false,
        zarbe:false,
        voroodiDigital:false,
        ghateBishAzHad:false,
        bazShodanDarb:false
    });
    return (
        <>
            <div className="flex h-screen items-start justify-center z-40">
                <div className="grid grid-cols-1 gap-3 w-full md:w-2/5 lg:w-1/4 px-5 mt-5 pb-20 mb-20 overflow-y-scroll">
                    <div id="shetab-shadid" className="mt-2">
                        <Card key={1}>
                            <CardBody>
                                <div className="grid grid-cols-2 gap-5 items-center justify-center py-3 pr-5 pl-4">
                                    <div className="flex gap-3"><img className="mb-2" width={25} src="/images/alarm.png" />
                                        <div className="text-right text-md mt-1">شتاب دهنده سریع</div></div>
                                    <div className="items-start">

                                        <label className="inline-flex items-center cursor-pointer">
                                            <input type="checkbox" value="" className="sr-only peer" checked={isSelected.shetabShadid} onChange={() => setIsSelected({ ...isSelected, shetabShadid: !isSelected.shetabShadid })} />
                                            <div className="relative w-11 h-6 bg-gray-200 rounded-full peer  dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#14b8a6]"></div>
                                        </label>

                                    </div>

                                    <div className={`col-span-2 w-full ${isSelected.shetabShadid ? "visible" : "hidden"}`}>
                                        <Accordion >
                                            <AccordionItem key="1" aria-label="Accordion 1">

                                                <div className="flex items-end pb-2 text-md">متن هشدار</div>
                                                <Input size="sm" className=" mb-5" onChange={() => { }} variant="faded" type="text" />
                                                <div className="flex items-end pb-2 text-md">صدای هشدار</div>
                                                <SelectAlarm />
                                            </AccordionItem>
                                        </Accordion>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </div>


                    <div id="voltage-analoge-bala">
                        <Card key={1}>
                            <CardBody>
                                <div className="grid grid-cols-2 gap-5 items-center justify-center py-3 pr-5 pl-4">
                                    <div className="flex gap-3"><img className="mb-2" width={25} src="/images/alarm.png" />
                                        <div className="text-right text-md mt-1">سطح بالا ولتاژ آنالوگ 1</div></div>
                                    <div className="items-start">

                                        <label className="inline-flex items-center cursor-pointer">
                                            <input type="checkbox" value="" className="sr-only peer" checked={isSelected.voltageAnalogeBala} onChange={() => setIsSelected({ ...isSelected, voltageAnalogeBala: !isSelected.voltageAnalogeBala })} />
                                            <div className="relative w-11 h-6 bg-gray-200 rounded-full peer  dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#14b8a6]"></div>
                                        </label>

                                    </div>

                                    <div className={`col-span-2 w-full ${isSelected.voltageAnalogeBala ? "visible" : "hidden"}`}>

                                        <div>
                                            <Slider
                                                label="مقدار (میلی ولت)"
                                                step={1} maxValue={36000} minValue={0} defaultValue={36000}
                                                classNames={{ base: "max-w-md gap-3", track: "border-s-[#14b8a6]", filler: "bg-gradient-to-r from-[#14b8a6] to-[#00796b]"}}
                                                renderThumb={(props) => ( <div {...props} className="group p-1 top-1/2 bg-background border-small border-default-200 dark:border-default-400/50 shadow-medium rounded-full cursor-grab data-[dragging=true]:cursor-grabbing"> <span className="transition-transform bg-gradient-to-br shadow-small from-[#14b8a6] to-[#00796b] rounded-full w-5 h-5 block group-data-[dragging=true]:scale-80" /></div>)}
                                            />
                                        </div>

                                        <Accordion className="py-0">
                                            <AccordionItem key="1" aria-label="Accordion 1">

                                                <div className="flex items-end pb-2 text-md">متن هشدار</div>
                                                <Input size="sm" className=" mb-5" onChange={() => { }} variant="faded" type="text" />
                                                <div className="flex items-end pb-2 text-md">صدای هشدار</div>
                                                <SelectAlarm />
                                            </AccordionItem>
                                        </Accordion>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </div>

                    <div id="voltage-analoge-paeen">
                        <Card key={1}>
                            <CardBody>
                                <div className="grid grid-cols-2 gap-5 items-center justify-center py-3 pr-5 pl-4">
                                    <div className="flex gap-3"><img className="mb-2" width={25} src="/images/alarm.png" />
                                        <div className="text-right text-md mt-1">سطح پایین ولتاژ آنالوگ 1</div></div>
                                    <div className="items-start">

                                        <label className="inline-flex items-center cursor-pointer">
                                            <input type="checkbox" value="" className="sr-only peer" checked={isSelected.voltageAnalogePaeen} onChange={() => setIsSelected({ ...isSelected, voltageAnalogePaeen: !isSelected.voltageAnalogePaeen })} />
                                            <div className="relative w-11 h-6 bg-gray-200 rounded-full peer  dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#14b8a6]"></div>
                                        </label>

                                    </div>

                                    <div className={`col-span-2 w-full ${isSelected.voltageAnalogePaeen ? "visible" : "hidden"}`}>

                                        <div>
                                            <Slider
                                                label="مقدار (میلی ولت)"
                                                step={1} maxValue={36000} minValue={0} defaultValue={36000}
                                                classNames={{ base: "max-w-md gap-3", track: "border-s-[#14b8a6]", filler: "bg-gradient-to-r from-[#14b8a6] to-[#00796b]"}}
                                                renderThumb={(props) => ( <div {...props} className="group p-1 top-1/2 bg-background border-small border-default-200 dark:border-default-400/50 shadow-medium rounded-full cursor-grab data-[dragging=true]:cursor-grabbing"> <span className="transition-transform bg-gradient-to-br shadow-small from-[#14b8a6] to-[#00796b] rounded-full w-5 h-5 block group-data-[dragging=true]:scale-80" /></div>)}
                                            />
                                        </div>

                                        <Accordion className="py-0">
                                            <AccordionItem key="1" aria-label="Accordion 1">

                                                <div className="flex items-end pb-2 text-md">متن هشدار</div>
                                                <Input size="sm" className=" mb-5" onChange={() => { }} variant="faded" type="text" />
                                                <div className="flex items-end pb-2 text-md">صدای هشدار</div>
                                                <SelectAlarm />
                                            </AccordionItem>
                                        </Accordion>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </div>

                    <div id="pichidan-khatarnak">
                        <Card key={1}>
                            <CardBody>
                                <div className="grid grid-cols-2 gap-5 items-center justify-center py-3 pr-5 pl-4">
                                    <div className="flex gap-3"><img className="mb-2" width={25} src="/images/alarm.png" />
                                        <div className="text-right text-md mt-1">پیچیدن خطرناک</div></div>
                                    <div className="items-start">

                                        <label className="inline-flex items-center cursor-pointer">
                                            <input type="checkbox" value="" className="sr-only peer" checked={isSelected.pichidanKhatarnak} onChange={() => setIsSelected({ ...isSelected, pichidanKhatarnak: !isSelected.pichidanKhatarnak })} />
                                            <div className="relative w-11 h-6 bg-gray-200 rounded-full peer  dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#14b8a6]"></div>
                                        </label>

                                    </div>

                                    <div className={`col-span-2 w-full ${isSelected.pichidanKhatarnak ? "visible" : "hidden"}`}>
                                        <Accordion >
                                            <AccordionItem key="1" aria-label="Accordion 1">

                                                <div className="flex items-end pb-2 text-md">متن هشدار</div>
                                                <Input size="sm" className=" mb-5" onChange={() => { }} variant="faded" type="text" />
                                                <div className="flex items-end pb-2 text-md">صدای هشدار</div>
                                                <SelectAlarm />
                                            </AccordionItem>
                                        </Accordion>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </div>

                    <div id="sathe-battery">
                        <Card key={1}>
                            <CardBody>
                                <div className="grid grid-cols-2 gap-5 items-center justify-center py-3 pr-5 pl-4">
                                    <div className="flex gap-3"><img className="mb-2" width={25} src="/images/alarm.png" />
                                        <div className="text-right text-md mt-1">سطح باطری</div></div>
                                    <div className="items-start">

                                        <label className="inline-flex items-center cursor-pointer">
                                            <input type="checkbox" value="" className="sr-only peer" checked={isSelected.satheBattery} onChange={() => setIsSelected({ ...isSelected, satheBattery: !isSelected.satheBattery })} />
                                            <div className="relative w-11 h-6 bg-gray-200 rounded-full peer  dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#14b8a6]"></div>
                                        </label>

                                    </div>

                                    <div className={`col-span-2 w-full ${isSelected.satheBattery ? "visible" : "hidden"}`}>

                                        <div>
                                            <Slider
                                                label="مقدار (درصد)"
                                                step={1} maxValue={100} minValue={0} defaultValue={20}
                                                classNames={{ base: "max-w-md gap-3", track: "border-s-[#14b8a6]", filler: "bg-gradient-to-r from-[#14b8a6] to-[#00796b]"}}
                                                renderThumb={(props) => ( <div {...props} className="group p-1 top-1/2 bg-background border-small border-default-200 dark:border-default-400/50 shadow-medium rounded-full cursor-grab data-[dragging=true]:cursor-grabbing"> <span className="transition-transform bg-gradient-to-br shadow-small from-[#14b8a6] to-[#00796b] rounded-full w-5 h-5 block group-data-[dragging=true]:scale-80" /></div>)}
                                            />
                                        </div>

                                        <Accordion className="py-0">
                                            <AccordionItem key="1" aria-label="Accordion 1">

                                                <div className="flex items-end pb-2 text-md">متن هشدار</div>
                                                <Input size="sm" className=" mb-5" onChange={() => { }} variant="faded" type="text" />
                                                <div className="flex items-end pb-2 text-md">صدای هشدار</div>
                                                <SelectAlarm />
                                            </AccordionItem>
                                        </Accordion>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </div>

                    <div id="boxel">
                        <Card key={1}>
                            <CardBody>
                                <div className="grid grid-cols-2 gap-5 items-center justify-center py-3 pr-5 pl-4">
                                    <div className="flex gap-3"><img className="mb-2" width={25} src="/images/alarm.png" />
                                        <div className="text-right text-md mt-1">بکسل</div></div>
                                    <div className="items-start">

                                        <label className="inline-flex items-center cursor-pointer">
                                            <input type="checkbox" value="" className="sr-only peer" checked={isSelected.boxel} onChange={() => setIsSelected({ ...isSelected, boxel: !isSelected.boxel })} />
                                            <div className="relative w-11 h-6 bg-gray-200 rounded-full peer  dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#14b8a6]"></div>
                                        </label>

                                    </div>

                                    <div className={`col-span-2 w-full ${isSelected.boxel ? "visible" : "hidden"}`}>
                                        <Accordion >
                                            <AccordionItem key="1" aria-label="Accordion 1">

                                                <div className="flex items-end pb-2 text-md">متن هشدار</div>
                                                <Input size="sm" className=" mb-5" onChange={() => { }} variant="faded" type="text" />
                                                <div className="flex items-end pb-2 text-md">صدای هشدار</div>
                                                <SelectAlarm />
                                            </AccordionItem>
                                        </Accordion>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </div>

                    <div id="tormoz-shadid">
                        <Card key={1}>
                            <CardBody>
                                <div className="grid grid-cols-2 gap-5 items-center justify-center py-3 pr-5 pl-4">
                                    <div className="flex gap-3"><img className="mb-2" width={25} src="/images/alarm.png" />
                                        <div className="text-right text-md mt-1">ترمز شدید</div></div>
                                    <div className="items-start">

                                        <label className="inline-flex items-center cursor-pointer">
                                            <input type="checkbox" value="" className="sr-only peer" checked={isSelected.tormozShadid} onChange={() => setIsSelected({ ...isSelected, tormozShadid: !isSelected.tormozShadid })} />
                                            <div className="relative w-11 h-6 bg-gray-200 rounded-full peer  dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#14b8a6]"></div>
                                        </label>

                                    </div>

                                    <div className={`col-span-2 w-full ${isSelected.tormozShadid ? "visible" : "hidden"}`}>
                                        <Accordion >
                                            <AccordionItem key="1" aria-label="Accordion 1">

                                                <div className="flex items-end pb-2 text-md">متن هشدار</div>
                                                <Input size="sm" className=" mb-5" onChange={() => { }} variant="faded" type="text" />
                                                <div className="flex items-end pb-2 text-md">صدای هشدار</div>
                                                <SelectAlarm />
                                            </AccordionItem>
                                        </Accordion>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                    <div id="zarbe">
                        <Card key={1}>
                            <CardBody>
                                <div className="grid grid-cols-2 gap-5 items-center justify-center py-3 pr-5 pl-4">
                                    <div className="flex gap-3"><img className="mb-2" width={25} src="/images/alarm.png" />
                                        <div className="text-right text-md mt-1">ضربه</div></div>
                                    <div className="items-start">

                                        <label className="inline-flex items-center cursor-pointer">
                                            <input type="checkbox" value="" className="sr-only peer" checked={isSelected.zarbe} onChange={() => setIsSelected({ ...isSelected, zarbe: !isSelected.zarbe })} />
                                            <div className="relative w-11 h-6 bg-gray-200 rounded-full peer  dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#14b8a6]"></div>
                                        </label>

                                    </div>

                                    <div className={`col-span-2 w-full ${isSelected.zarbe ? "visible" : "hidden"}`}>
                                        <Accordion >
                                            <AccordionItem key="1" aria-label="Accordion 1">

                                                <div className="flex items-end pb-2 text-md">متن هشدار</div>
                                                <Input size="sm" className=" mb-5" onChange={() => { }} variant="faded" type="text" />
                                                <div className="flex items-end pb-2 text-md">صدای هشدار</div>
                                                <SelectAlarm />
                                            </AccordionItem>
                                        </Accordion>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </div>

                    <div id="voroodi-digital">
                        <Card key={1}>
                            <CardBody>
                                <div className="grid grid-cols-2 gap-5 items-center justify-center py-3 pr-5 pl-4">
                                    <div className="flex gap-3"><img className="mb-2" width={25} src="/images/alarm.png" />
                                        <div className="text-right text-md mt-1">هشدار ورودی دیجیتال</div></div>
                                    <div className="items-start">

                                        <label className="inline-flex items-center cursor-pointer">
                                            <input type="checkbox" value="" className="sr-only peer" checked={isSelected.voroodiDigital} onChange={() => setIsSelected({ ...isSelected, voroodiDigital: !isSelected.voroodiDigital })} />
                                            <div className="relative w-11 h-6 bg-gray-200 rounded-full peer  dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#14b8a6]"></div>
                                        </label>

                                    </div>

                                    <div className={`col-span-2 w-full ${isSelected.voroodiDigital ? "visible" : "hidden"}`}>
                                        <Accordion >
                                            <AccordionItem key="1" aria-label="Accordion 1">

                                                <div className="flex items-end pb-2 text-md">متن هشدار</div>
                                                <Input size="sm" className=" mb-5" onChange={() => { }} variant="faded" type="text" />
                                                <div className="flex items-end pb-2 text-md">صدای هشدار</div>
                                                <SelectAlarm />
                                            </AccordionItem>
                                        </Accordion>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </div>

                    <div id="ghate-bish-az-had">
                        <Card key={1}>
                            <CardBody>
                                <div className="grid grid-cols-2 gap-5 items-center justify-center py-3 pr-5 pl-4">
                                    <div className="flex gap-3"><img className="mb-2" width={25} src="/images/alarm.png" />
                                        <div className="text-right text-md mt-1">قطع بیش از حد ارتباط</div></div>
                                    <div className="items-start">

                                        <label className="inline-flex items-center cursor-pointer">
                                            <input type="checkbox" value="" className="sr-only peer" checked={isSelected.ghateBishAzHad} onChange={() => setIsSelected({ ...isSelected, ghateBishAzHad: !isSelected.ghateBishAzHad })} />
                                            <div className="relative w-11 h-6 bg-gray-200 rounded-full peer  dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#14b8a6]"></div>
                                        </label>

                                    </div>

                                    <div className={`col-span-2 w-full ${isSelected.ghateBishAzHad ? "visible" : "hidden"}`}>
                                        <Accordion >
                                            <AccordionItem key="1" aria-label="Accordion 1">

                                                <div className="flex items-end pb-2 text-md">متن هشدار</div>
                                                <Input size="sm" className=" mb-5" onChange={() => { }} variant="faded" type="text" />
                                                <div className="flex items-end pb-2 text-md">صدای هشدار</div>
                                                <SelectAlarm />
                                            </AccordionItem>
                                        </Accordion>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                    <div id="baz-shodan-darb">
                        <Card key={1}>
                            <CardBody>
                                <div className="grid grid-cols-2 gap-5 items-center justify-center py-3 pr-5 pl-4">
                                    <div className="flex gap-3"><img className="mb-2" width={25} src="/images/alarm.png" />
                                        <div className="text-right text-md mt-1">باز شدن درب خودرو</div></div>
                                    <div className="items-start">

                                        <label className="inline-flex items-center cursor-pointer">
                                            <input type="checkbox" value="" className="sr-only peer" checked={isSelected.bazShodanDarb} onChange={() => setIsSelected({ ...isSelected, bazShodanDarb: !isSelected.bazShodanDarb })} />
                                            <div className="relative w-11 h-6 bg-gray-200 rounded-full peer  dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#14b8a6]"></div>
                                        </label>

                                    </div>

                                    <div className={`col-span-2 w-full ${isSelected.bazShodanDarb ? "visible" : "hidden"}`}>
                                        <Accordion >
                                            <AccordionItem key="1" aria-label="Accordion 1">

                                                <div className="flex items-end pb-2 text-md">متن هشدار</div>
                                                <Input size="sm" className=" mb-5" onChange={() => { }} variant="faded" type="text" />
                                                <div className="flex items-end pb-2 text-md">صدای هشدار</div>
                                                <SelectAlarm />
                                            </AccordionItem>
                                        </Accordion>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </div>

                </div>

            </div>
    
        </>
    )
}

export default NotificationSetting;