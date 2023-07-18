import React, { useState } from "react";
import './RobotCheckStyle.css'
const RobotCheck = () =>{
    const images = {
        "one":
    "/dnl_flight_hub_frontend/src/view/component/signup/robot_check/images/dollarSignNextLacre.jpg",
    
    "two":
    "/dnl_flight_hub_frontend/src/view/component/signup/robot_check/images/dollarSignNextLacre.jpg",
    
    "three":
    "/dnl_flight_hub_frontend/src/view/component/signup/robot_check/images/dollarSignNextLacre.jpg",
    
    "four":
    "/dnl_flight_hub_frontend/src/view/component/signup/robot_check/images/dollarSignNextLacre.jpg",
    
    "five":
    "/dnl_flight_hub_frontend/src/view/component/signup/robot_check/images/dollarSignNextLacre.jpg",
    
    "six":
    "/dnl_flight_hub_frontend/src/view/component/signup/robot_check/images/dollarSignNextLacre.jpg"
    }
    const [oneImage, setOne] = useState()

    const imagesToDisplay = () =>{
        setOne(images.one)
    }

    return(
        <div className="outerImageDiv">
            <div className="imageGrid">
                <div className="topDiv">
                    <button className="imageButton">
                    <img className="imageDisplayed" src={oneImage} alt="" /></button>
                </div>

                <div className="bottomDiv">
                    <img src={oneImage} alt="" />
                    <img src={oneImage} alt="" />
                    <img src={oneImage} alt="" />
                </div>
                <div className="buttonDiv">
                    <button className="refresh" onClick={imagesToDisplay}>
                        Refresh</button>
                </div>
            </div>
        </div>
        
    )
}

export default RobotCheck
