
"use client"
import React from 'react'
import { useTheme } from "next-themes";


const Reports =()=>{
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;

    return (
        <div class="h-screen flex items-center justify-center z-40">Report Page</div>
    )
}


export default Reports;