"use client"
import { useState } from "react"
import custome from '../custome.module.css'


export default function Page(){
    const [h3style,setstyle]=useState({backgroundColor:"green"})
    const [h2style,setstyle2]=useState("orchid")
    const [h4style,setstyle4]=useState("red")
    const {red}=custome

    return(
        <div>
            <h1 style={{backgroundColor:"blue"}}>Heading 1</h1>

            <h2 className={h2style=='orchid'?custome.orchid:custome.powder}>Heading 2</h2>
            <button onClick={()=>setstyle2("powder")}> Update H2 Color</button>

            <h2 style={{backgroundColor:h4style=='brown'?'brown':'gold'}}>Heading 4</h2>
            <button onClick={() => setstyle4("brown")}>Update H4 Color</button>


            <h3 style={h3style}>Heading 3 </h3>
            <button onClick={()=>setstyle({backgroundColor:"yellow"})}>Update H3 Color</button>

            <h1 id={custome.orange}>Heading 1</h1>

            <h2 className={red}>Dummy Text</h2>
        </div>
    )
}