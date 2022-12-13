import React from "react";



export default function Social(){
    const link1 = "https://cdn-icons-png.flaticon.com/512/4138/4138124.png"
    const link2 = "https://cdn-icons-png.flaticon.com/512/145/145802.png"
    const link3 = "https://cdn-icons-png.flaticon.com/512/4494/4494497.png"
    const alt = "alt"
    return(
        <div id="socialcontainer">
            <img src={link1} alt={alt}></img>
            <img src={link2} alt={alt}></img>
            <img src={link3} alt={alt}></img>
        </div>
    )
}