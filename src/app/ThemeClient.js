"use client"

import { ThemeProvider } from "next-themes";
import { NextUIProvider } from "@nextui-org/react";
import axios from 'axios';
axios.defaults.baseURL = 'https://tracker.mmaghsoudi.ir/api/v1/';

export default function ThemeClient({ children }) {
    return (
        <NextUIProvider>
            <ThemeProvider attribute="class">
                {children}
            </ThemeProvider>
        </NextUIProvider>
    )
}





