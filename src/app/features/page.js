
"use client"


import { useTheme } from "next-themes";
import '../globals.css'


import BottomNavigation from "@/components/bottomNavigation";
const Features = () => {
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;
    


    return (

        <>
            <div className="h-screen flex items-center justify-center z-40">
    
                <h1>Features</h1>
          
            </div>

            <BottomNavigation active={2}  />
        </>

    )
}


export default Features;
