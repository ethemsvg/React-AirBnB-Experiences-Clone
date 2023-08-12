import React from "react"
import photogrid from "../images/photo-grid.png"

export default function Hero(){

        const titleStyle = {
            fontFamily:"Poppins",
            fontWeight:"bold",            
        }

        const textStyle ={
            fontFamily:"Poppins",
            fontSize:"20px",
        }

        return(
            <div className="col-12">
                <div className="d-flex justify-content-center align-items-center">
                    <img className="img-fluid py-4 px-2 mx-5" src={photogrid} alt="Hero Image" />
                </div>

                <div  className="px-2" >
                    <h1 style={titleStyle}>
                        Online Experiences
                    </h1>
                    <div class="col-lg-6 col-12">
                    <p style={textStyle}>
                    Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.

                    </p>
                    </div>
                    
                </div>

            </div>


        )

}