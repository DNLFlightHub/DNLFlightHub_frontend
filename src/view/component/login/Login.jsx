import React, { useState } from "react";
import axios from "axios";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 6;
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
        password: "Password must be at least 6 characters",
      }));
    }

    if (emailIsValid && passwordIsValid) {
      axios
        .post("/api/login", {
          email,
          password,
        })
        .then((response) => {
          
          console.log("Server response:", response.data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };

  return (
    <div>
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LoginForm;
