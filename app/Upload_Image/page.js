"use client"
import { useState } from "react"

export  default function Upload_image()
{

    const [file,setfile]=useState("");

    const  submit =async(e)=>{
        e.preventDefault();
        console.log(file);
        const data=new FormData();
        data.set('file',file);
        let result = await fetch("api/upload",{
        method:"POST",
        body:data
    });
        console.log(result);   
        result= await result.json();
        if(result.success)
        {
            alert("File uploads")
        }    
    }
    return (
        <div>
            <h1>
                Upload Image
            </h1>
            <form onSubmit={submit}>
             <input type="file" name="file" onChange={(e)=>setfile(e.target.files?.[0])}/>
             <button type="submit" >Upload Image</button>
            </form>
        </div>
    )
}