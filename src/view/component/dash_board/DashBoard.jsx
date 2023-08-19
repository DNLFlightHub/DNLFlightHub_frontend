import React, { useState } from "react";
import './Dashboard.css'


const Dashboard = () => {
    const [currentDisplay, setCurrentDisplay]= useState("EditProfile")

    const rightDashBoardDisplayFunction = ()=>{

        if (currentDisplay === "EditProfile")
                return editProfile()
        else if(currentDisplay === "Contact Us")
                return contactUs()
        else if(currentDisplay === "FeedBack")
                return feedBackSession()
        else if(currentDisplay === "About")
                return about()
        else if(currentDisplay === "ChangePassword")
                return changePassword()
        else if(currentDisplay === "LogOut"){
            console.log("anger");
                return logOut()
        }
    }
    const handleDisplayChange =(event)=>{
        const value = event.target.value
        setCurrentDisplay(value)
    }
    const logOut = () =>{
        
        return <div>
                {/* <div className="quit">
                    <p>Do you really want to logOut</p>
                    <button>Yes</button> <button>No</button>
                </div> */} 
                <p>hi</p>
            </div>
        
    }
    const contactUs =()=>{
        return <div>
            <p>You can contact us via our social media handles</p>
            <div className="socialMediaHandles">
                <div className="facebookHandle"></div>
            </div>
        </div>
    }
    const about= () =>{
        return <div about>
            <div className="aboutTopImageAndText">
                <div className="topAboutImage"></div>
                <h3>We Hand You The Brush,  You colour the Sky</h3>
                <p>With DNL you are the artist we are your paint... the sky is your canvas</p>
            </div>
            <div className="divGrid">
                <div className="aboutDisplay">
                    <div className="aboutDisplayImage"></div>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore incidunt explicabo minima, magnam, doloremque cupiditate hic maxime velit voluptate exercitationem perferendis qui cumque possimus eius earum asperiores eveniet ullam eaque.
                    </p>
                </div>

            <div className="aboutDisplay">
                <div className="aboutDisplayImage"></div>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore incidunt explicabo minima, magnam, doloremque cupiditate hic maxime velit voluptate exercitationem perferendis qui cumque possimus eius earum asperiores eveniet ullam eaque.
                    </p>
                </div>

            <div className="aboutDisplay">
                <div className="aboutDisplayImage"></div>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore incidunt explicabo minima, magnam, doloremque cupiditate hic maxime velit voluptate exercitationem perferendis qui cumque possimus eius earum asperiores eveniet ullam eaque.
                    </p>
                </div>
            
        
            <div className="aboutDisplay">
                <div className="aboutDisplayImage"></div>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore incidunt explicabo minima, magnam, doloremque cupiditate hic maxime velit voluptate exercitationem perferendis qui cumque possimus eius earum asperiores eveniet ullam eaque.
                    </p>
                </div>
        </div>
    </div>
    }
    const feedBackSession= () =>{
        return <div className="feedBackSessionToRender">
            <div className="feedBackForm">
                <h1>Feed<span>Back</span></h1>
                <form action=""><p>
                <label htmlFor="airlineReview" className="airlineReview">Give us your Feed<span>Back</span></label>
                </p>
                <textarea className="feedBackTextArea" name="airlineReview" id="airlineReview" cols="30" rows="10"></textarea><br/>
                <input type="submit" value="Submit"></input>
                </form>
            </div>
            <div className="feedBackSessionSideImage"></div>
        </div>
    }
    const editProfile = ()=>{
        return <div className="editProfileToRender">
                <div className="profileEditform">
                    <p>Do you want to <button onClick={handleDisplayChange} className="ChangePassword" value={'ChangePassword'}>Change Password</button>?</p> 
                    <p>Enter your first name to update</p>
                    <input type="text" className="firstNameInput" placeholder="First Name" />
                    <p>Enter your last name to update</p>
                    <input type="text" className="lastNameInput" placeholder="Last Name" />
                    <p>Enter your email to update</p>
                    <input type="email" className="emailInput" placeholder="Email"/>
                    <button className="updateButton">Update</button> 
                </div>
                <div className="editProfileSideImage"></div>
        </div>
    }
    const changePassword = ()=>{
         return <div className="passwordChangeSession">
                    <p>Change Password<span>?</span></p>
                    <input type="password" className="password" placeholder="password"/>
                    <br />
                    <input type="password" className="password" placeholder="confirmPassword"/>
                    <br />
                    <button className="passwordSubmitButton">submit</button>
         </div>
    }
    
    return(
        <div className="first_div">
            <div className="topDivColor">
            <div className="topNav">
                <div className="logo"><img src="" alt="" /> </div>
                <div className="navBar">
                    <ul>
                        <li>Home</li>
                        <li>Search</li>
                        <li>History</li>
                    </ul>
                </div>
                <div className="rightProfileImage"><img src="" alt="" />ProfilePicture</div>
            </div>
            </div>
           
            <div className="DashBoardCarryingDiv">
                <div className="containerContainingSideRule">
                    <div className="leftDashBoardDiv">
                    <div className="profileImageDiv"><img src="" alt="" /></div>

                    <div className="leftDashBoard">

                        <button id="EditProfile" onClick={handleDisplayChange} value={"EditProfile"} className="leftSideButton">Edit Profile</button>

                        <button id="Contact Us" onClick={handleDisplayChange} value={"Contact Us"} className="leftSideButton">Contact Us</button>

                        <button id="FeedBack" onClick={handleDisplayChange}  value={"FeedBack"} className="leftSideButton">Feed Backs/Review</button>

                        <button id="About" onClick={handleDisplayChange} value={"About"} className="leftSideButton">About</button>

                        <button id="LogOut" onClick={handleDisplayChange} value={"LogOut"} className="leftSideButton">
                            <div className="logoutDivToFlex">
                                <div className="logout"></div>
                                <p>Log out</p>
                            </div>
                        </button>
                    </div>
                     
                </div>
                <div className="sideRule"></div>
                </div>
                <div className="rightDashBoardDiv">
                    {rightDashBoardDisplayFunction()}
                </div>
            </div>  
        </div>
    )
}


export default Dashboard;