import React from "react"
import airbnblogo from "../images/airbnb-logo.png"

export default function Navbar() {

    const imgStyle = {
        fontFamily: "Inter",
        color: "#08ccfc",
        width:"100px",
        
    };

    const navbarStyle = {
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)", 
    }

    return (
        <nav class="py-3" style={navbarStyle}>

        <div className="col-12 col-lg-6 ">
            <div className="d-flex justify-content-start align-items-center">
            <img className="mx-3 my-3" src={airbnblogo} style={imgStyle}/>

            </div>
        </div>  
        </nav> 

        
    )
}