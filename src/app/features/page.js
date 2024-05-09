
"use client"


import { useTheme } from "next-themes";
import '../globals.css'
import "react-multi-date-picker/styles/colors/teal.css"
import "react-multi-date-picker/styles/backgrounds/bg-dark.css"
import BottomNavigation from "@/components/bottomNavigation";
import FloatDropdown from "@/components/float-dropdown";
const Features = () => {
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;



    return (

        <>
            <div className="h-screen flex items-center justify-center z-40">

             <div>Features</div>

            </div>

            <FloatDropdown />

            <BottomNavigation active={2} />
        </>

    )
}


export default Features;
