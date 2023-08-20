import React, { useState } from "react";
import './searchDisplaySection.css'


const SearchDisplaySection = () => {
    const [currentDisplay, setCurrentDisplay]= useState([])
    const [counter, setCounter] = useState(0)


    const topLayer=()=>{
        return <div className="topLayerdiv">
            <div className="topLayerInnerdiv">
                <div className="logoDiv">DNL LOGO</div>
                <div className="loginAndSignUpDiv">
                    <button onClick={appendSearchResult}>Login</button>
                    <button>Create Account</button>
                </div>
            </div>
        </div>
    }
    const appendSearchResult= ()=>{
        currentDisplay.push(valueCounter())
        
    }
    const valueCounter =() =>{

        setCounter(prev => prev + 1)
        return <div>
            <p>this is the </p>
            {counter}
            <p>Time</p>
        </div>
    }

    const middleSectionDisplay=()=>{
        return <div>
            <p>start location</p>
            <p>Destination</p>
        </div>
    }
    const sideSearchbar =()=>{

    }
    const mainSearchResult =() =>{

    }
    const searchResultDisplay=()=>{
        return <div>
            {sideSearchbar()}
            {mainSearchResult()}
        </div>
    }
    const arrDisplay= ()=>{
        const courses = [
            "Full Stack Developement Program",
            "Python Automation Testing Program",
            "UI/UX Program",
          ];
          const arrayDataItems = currentDisplay.map((course) => <li>{course}</li>);
          return <ul>{arrayDataItems}</ul>
    }
    return(
        <div className="outerContainer">
            {topLayer()}
            {middleSectionDisplay()}
            {searchResultDisplay()}
            {arrDisplay()}
        </div>
    )
}

export default  SearchDisplaySection