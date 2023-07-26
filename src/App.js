import logo from './logo.svg';
import React, { useState } from "react";
import Recaptcha from 'react-recaptcha';
import SignupForm from './view/component/signup/SignUp';
import Dashboard from './view/component/dash_board/DashBoard';

import LoginForm from './view/component/login/Login';
// import RobotCheck from './view/component/signup/robot_check/RobotCheck';


const App = () => {
  const [isVerified, setIsVerified] = useState(false)
  const handleSubscribe = () =>{
    if(isVerified){
      alert('You have successfully subscribed')
    }else{
      alert('please  verify that you are a human')
    }
  }
  return (
    <div>
    {/* <input type='text'/>
    <button className='convert'
    onClick={handleSubscribe}>Subscribe</button>
    <Recaptcha
    sitekey='xxxxxxxxxxxxxxxxxx'
    render='explict'
    onloadCallback={callback}
    /> */}
      <Dashboard/>
      {/* <SignupForm /> */}
      {/* <RobotCheck/> */}
      {/* <LoginForm /> */}
    </div>
  );
};

export default App;

