import React, { useState } from "react";
import './SingUp.css'
import axios from "axios";

const SignupForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [termsChecked, setTermsChecked] = useState(false);
  const [notRobotChecked, setNotRobotChecked] = useState(false);
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 8;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    setErrors({});

    const emailIsValid = validateEmail(email);
    const passwordIsValid = validatePassword(password);

    if (!emailIsValid) {
      setErrors((prevErrors) => ({ ...prevErrors, email: "Invalid email" }));
    }

    if (!passwordIsValid) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "Password must be at least 8 characters",
      }));
    }

    if (!termsChecked) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        terms: "You must agree to the terms and conditions",
      }));
    }

    if (!notRobotChecked) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        notRobot: "Please verify that you are not a robot",
      }));
    }

    if (emailIsValid && passwordIsValid && termsChecked && notRobotChecked) {
      axios
        .post("http://127.0.0.1:8081/customer/signUp", {
          firstName,
          lastName,
          email,
          password,
        })
        .then((response) => {
          console.log(
            {
              firstName,
              lastName,
              email,
              password,
            }
          );
          console.log("Server response:", response.data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };

  return (
    <div className="form-box">
      <h2>Create Account</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />  
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className="check-box">
          <label>
            <input
              type="checkbox"
              checked={termsChecked}
              onChange={(e) => setTermsChecked(e.target.checked)}
            />
            Agree to terms and conditions
          </label>
          {errors.terms && <p>{errors.terms}</p>}
        </div>
        <div className="robot-box">
          <label>
            <input
              type="checkbox"
              checked={notRobotChecked}
              onChange={(e) => setNotRobotChecked(e.target.checked)}
            />
            I am not a robot
          </label>
          {errors.notRobot && <p>{errors.notRobot}</p>}
        </div>
        <button type="submit">Create Account</button>
        <div className="account-link">
        Already have an account? 
      </div>
      Login
      </form>
    </div>
  );
};

export default SignupForm;
