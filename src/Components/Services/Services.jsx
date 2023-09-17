import React from 'react'
import './Services.css'
import Glassesimoji from '../../img/glassesimoji.png'
import Heartemoji from '../../img/heartemoji.png'
import Humble from '../../img/humble.png'
import Card from '../Card/Card'
import Glasses from '../../img/glasses.png'

const Services = () => {
  return (
    <div className="services">

        {/* left side */}
        <div className="awesome">
        <span>My Awesome</span>
        <span>Services</span>
        <span>
            satyakam is a full stack developer
            <br />
            satyakam is expert in mern stack
        </span>
        <button className="button s-button">Download CV</button>
        <div className="blur s-blurl" style={{background: "#abcdf94"}}></div>
        </div>
        {/* right side*/}
        <div className="cards">
            <div style={{left: '14rem'}}>
                <Card
                emoji = {Heartemoji}
                heading = {'Design'}
                detail = {"figma, sketch, photshop, adobe, adobe xd"}
                />
            </div>
            {/* second card*/}
            <div style={{top:"12rem", left: '-4rem'}}>
                <Card
                emoji = {Glasses}
                heading = {"Developer"}
                detail = {"HTML, CSS, Javascript, React"}
                />
            </div>
            {/* 3rd card */}
            <div style={{top:"19rem", left: "12rem"}}>
                <Card
                emoji = {Humble}
                heading = {"UI/UX"}
                detail = {"do daily 2 qs of dsa 1 easy and 1 medium daily"}
                />
            </div>
            <div className="blur s-blur2" style={{background: "var(--purpule)"}}></div>
        </div>
    </div>
  )
}

export default Services
