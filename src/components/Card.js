import React from "react"
import star from "../images/star.png"
import katie from "../images/katie-zaferes.png"


export default function Card(props) {

    const textStyle = {
        fontSize:"12px",
    }

    const imgStyle={
        borderRadius:"9px",
        height:"250px",
    }

    const grayText={
        color:"gray",
    }

    const scaling = {
        maxWidth:"40%",
        height:"20px",
      }
    

    console.log(props)
    return (
        <div class="d-flex flex-column mx-2" style={scaling}>
            <div> 
                <img src={`../images/${props.img}`} style={imgStyle} alt="card"/>
            </div>

            <div class="d-flex flex-column justify-content-center ">
                <p class="d-flex justify-content-start align-items-center">
                <img src={star}></img>
                <span> {props.rate} </span> 
                <span style={grayText}>
                    <span> ({props.voters}) </span>
                    <span> • {props.country}</span>
                </span>
                
                </p>

                <p >
                 {props.title}
                </p>

                <p >
                <span><b>From {props.price}$</b></span> / Person
                </p>
                
            </div>

        </div>
        
        
    )
}