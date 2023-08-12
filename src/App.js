import logo from './logo.svg';
import React from "react"
import Navbar from "./components/Navbar"
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from "./components/Hero"
import Card from "./components/Card"
import cardData from "./content.js"

export default function App() {

  


    const cardElements = cardData.map((card) => {
      return <Card img={card.img} title={card.title} rate={card.rate} voters={card.voters} country={card.country} price={card.price}  />
    })

    
    
    return (
        <div className="container col-12 col-lg-6">
          <div className="d-flex flex-column justify-content-center ">
            <div>
            <Navbar />
            </div>
            <div>
            <Hero />
            </div>
            <div className="d-flex justify-content-start" >
              <div className="d-flex align-items-center ">
                {cardElements}
              </div>
            </div>
            
          </div>
          
        </div>
    )
}