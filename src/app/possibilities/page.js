
"use client"


import { useTheme } from "next-themes";


const Possibilities =()=>{
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;

    return (
 
       <div class="h-screen flex items-center justify-center z-40">Possibilities Page</div>
    )
}


export default Possibilities;
