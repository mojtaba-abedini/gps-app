
"use client"


import { useTheme } from "next-themes";


import '@majidh1/jalalidatepicker';
import '@majidh1/jalalidatepicker/dist/jalalidatepicker.min.css'

import { useState } from "react";
const Possibilities = () => {
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;
    const [value, setValue] = useState(0);


    jalaliDatepicker.startWatch({
        minDate: "attr",
        maxDate: "attr"
    });
    /* Below is a js demo | you don't need to use */
    setTimeout(function () {
        var elm = document.getElementsByTagName("input")[0];
        elm.focus();
        jalaliDatepicker.hide();
        jalaliDatepicker.show(elm);
    }, 1000);



    return (

        <div class="h-screen flex items-center justify-center z-40">
            <input type="text" time data-jdp placeholder="لطفا یک تاریخ وارد نمایید" />
        </div>
    )
}


export default Possibilities;
