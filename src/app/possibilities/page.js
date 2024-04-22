
"use client"


import { useTheme } from "next-themes";
import '../globals.css'

import '@majidh1/jalalidatepicker';
import '@majidh1/jalalidatepicker/dist/jalalidatepicker.min.css'

import { useState } from "react";
const Possibilities = () => {
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;
    const [valueFrom, setValueFrom] = useState("");
    const [valueTo, setValueTo] = useState("");


    jalaliDatepicker.startWatch({
        minDate: "attr",
        maxDate: "attr"
    });
    /* Below is a js demo | you don't need to use */
    setTimeout(function () {
        var elm = document.getElementById("date-from");
        elm.focus();
        jalaliDatepicker.hide();
        jalaliDatepicker.show(elm);
        jalaliDatepicker.updateOptions({time:true,hasSecond:false,persianDigits:true});
    }, 1000);
    

    function jalali_to_gregorian(jy, jm, jd) {
        jy = Number(jy);
        jm = Number(jm);
        jd = Number(jd);
        var gy = (jy <= 979) ? 621 : 1600;
        jy -= (jy <= 979) ? 0 : 979;
        var days = (365 * jy) + ((parseInt(jy / 33)) * 8) + (parseInt(((jy % 33) + 3) / 4))
            + 78 + jd + ((jm < 7) ? (jm - 1) * 31 : ((jm - 7) * 30) + 186);
        gy += 400 * (parseInt(days / 146097));
        days %= 146097;
        if (days > 36524) {
            gy += 100 * (parseInt(--days / 36524));
            days %= 36524;
            if (days >= 365) days++;
        }
        gy += 4 * (parseInt((days) / 1461));
        days %= 1461;
        gy += parseInt((days - 1) / 365);
        if (days > 365) days = (days - 1) % 365;
        var gd = days + 1;
        var sal_a = [0, 31, ((gy % 4 == 0 && gy % 100 != 0) || (gy % 400 == 0)) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        var gm
        for (gm = 0; gm < 13; gm++) {
            var v = sal_a[gm];
            if (gd <= v) break;
            gd -= v;
        }
        return [gy, gm, gd];
    }
    function SetDate(){
        // const jalali = document.getElementById("date-to").value
        // var date = jalali.split("/");
        // const gregorian = jalali_to_gregorian(date[0], date[1], date[2]).join("/")
        // setValueTo(gregorian);
        // console.log(valueTo);



            // var miladiInput = document.getElementById(this.getAttribute("data-jdp-miladi-input"));
         const jalali = document.getElementById("date-from").value
            var miladiInput = document.getElementById("miladi_date");
           
            var date = jalali.split(' ')[0].split("/");
            setValueFrom(jalali_to_gregorian(date[0], date[1], date[2]).join("/"))
            console.log(valueFrom);

    }





    return (

        <div class="h-screen flex items-center justify-center z-40">
           <div className="grid grid-cols-2 gap-5">
           <input  id="date-from" data-jdp data-jdp-miladi-input="miladi_date" type="text" class="form-control" placeholder="تاریخ را وارد کنید" />
           {/* <input id="date-from"  type="text" data-jdp data-jdp-miladi-input="miladi_date" placeholder="لطفا یک تاریخ وارد نمایید"/> */}
            <button onClick={SetDate}>نمایش تا تاریخ</button>
           </div>
        </div>
    )
}


export default Possibilities;
