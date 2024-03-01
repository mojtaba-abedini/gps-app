
"use client"
import React from "react";
import {Card, CardBody,Button,Select,SelectItem} from "@nextui-org/react";

const Subscription = ()=>{
    return (
        <div className="flex lg:h-screen items-center justify-center">
         <div className="grid grid-cols-1 gap-3 w-full md:w-1/4 px-5 mt-5 mb-20 z-50">
     
                <Card>
                <CardBody>
                   <div className="grid grid-cols-3 gap-2 items-center justify-center py-3 pr-5 ">
                    <div className="text-right text-md col-span-2">شناسه دستگاه</div>
                    <div  className="text-right text-md">1255444412454</div>
                    <div className="text-right text-md col-span-2">نام دستگاه</div>
                    <div  className="text-right text-md">سعید فرزانه</div>
                    <div  className="text-right text-md col-span-2">تاریخ اتمام اشتراک</div>
                    <div  className="text-right text-md">1403/05/28</div>
                    <div  classNames="col-span-2"><Select fullWidth size="sm" label="زمان تمدید" variant="faded">
                        <SelectItem  key={1} value="یکساله">یکساله</SelectItem>
                        <SelectItem  key={2} value="شش ماهه">شش ماهه</SelectItem>
                        <SelectItem  key={3} value="سه ماهه">سه ماهه</SelectItem>
                        <SelectItem  key={4} value="یک ماهه">یک ماهه</SelectItem>
                    </Select></div>
                    
                    <div  className="text-right text-md">0 ریال</div>

                   </div>
                </CardBody>
                </Card>



                

   
            </div>
            
            <div className="fixed  bottom-10 w-full md:w-1/4  mb-5 z-50 p-5">
                               <div className="grid grid-cols-1 w-full gap-3">
                                    <Card>
                                    <CardBody className="text-center text-md grid grid-cols-1 gap-3">
                                        <p>موجودی کیف پول : 0 ریال</p>
                                        <p>مبلغ قابل پرداخت : 0 ریال</p>
                                    </CardBody>
                                    </Card>

                                    <Button className="bg-[#14b8a6] text-white">پرداخت</Button>
                               </div>

                </div>
        </div>
    )
}


export default Subscription;