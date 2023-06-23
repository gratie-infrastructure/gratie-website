"use client";
import './globals.css'
import {Inter} from 'next/font/google'
import {CssBaseline, ThemeProvider} from "@mui/material";
import {theme} from "@/utils/theme";
import React from "react";

const inter = Inter({subsets: ['latin']});
export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline enableColorScheme={true}/>
            <html lang="en">
            <body className={inter.className}>{children}</body>
            </html>
        </ThemeProvider>
    )
}
