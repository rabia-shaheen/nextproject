'use client'
import Script from "next/script";

export default function userdetails(){
    return (
        <div>
            <Script
            src='/location.js'
            onLoad={()=>{
                console.log("File Loaded")
            }}
            />
            <h1> Get User Gelocation </h1>
        </div>
    )
}