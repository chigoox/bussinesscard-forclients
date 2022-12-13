import React from "react";



export default function PicCard(){
    const piclink = "https://www.stylevore.com/wp-content/uploads/2019/04/Looking-Good-niamonet.clark-Follow-blackprettymelanin.com.jpeg"
    const name = "Karesha"
    return(
        <div id="piccontainer">
            <img src={piclink} alt="" />
            <div id="name">
                <h1>{name}</h1>
            </div>
        </div>
    )
}