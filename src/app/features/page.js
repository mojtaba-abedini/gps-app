
"use client"

import DatePicker from "react-multi-date-picker"
import { useTheme } from "next-themes";
import '../globals.css'
import TimePicker from "react-multi-date-picker/plugins/time_picker"
import persian from "react-date-object/calendars/persian"
import "react-multi-date-picker/styles/colors/teal.css"
import persian_fa from "react-date-object/locales/persian_fa"
import "react-multi-date-picker/styles/backgrounds/bg-dark.css"
import BottomNavigation from "@/components/bottomNavigation";
import { useState } from "react";
const Features = () => {
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;
    let [value, setValue] = useState(new Date())


    return (

        <>
            <div className="h-screen flex items-center justify-center z-40">

                <DatePicker
  className="bg-dark"
                    calendar={persian}
                    locale={persian_fa}
                    value={value}
                    onChange={setValue}

                    plugins={[
                        <TimePicker position="bottom" />
                      ]}

                />

            </div>

            <BottomNavigation active={2} />
        </>

    )
}


export default Features;
