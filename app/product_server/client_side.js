"use client"
export default function Btn_function({price}){
    return (
        <div>
            <button onClick={()=>alert(price)}>Click me </button>
        </div>
    )
}