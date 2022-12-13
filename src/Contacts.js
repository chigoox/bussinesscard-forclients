import React from "react";


export default function Contacts(){
    const email = "MYemail@mail.com"
    const phone = "(123) 456-7890"
    const addy = "123 myadress pl"
    return(
        <div id="contactcontainer">
            <h1>Contacts</h1>
            <h5>Phone: {phone}</h5>
            <h5>Email: {email}</h5>
            <h5>Address: {addy}</h5>
        </div>
    )

}