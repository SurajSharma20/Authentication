// Signup.js
import React, { useState } from "react";
import "./signup.css";
import  { signUp } from "../../api/apiService"
// import { signupUsers } from "../../api/apiService";
import { useNavigate } from "react-router-dom";
// import {useDispatch} from "react-redux"

function Signup() {
  // const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const [successMessage, setSuccessMessage] = useState("");
  const [errors, setErrors] = useState({
    userName: "",
    email: "",
    password: "",
    general: "", // Added for general errors
  });

  const navigate = useNavigate();
  const handleSubmit = async(e) =>{
    e.preventDefault()
    try {
      const sendData =  await signUp(formData)
      console.log(sendData)
      navigate("/login")
      
    } catch (error) {
      console.log(errors)
    }
  }
 

  return (
    <div className="signup">
      <div className="signUp_main_Container">
        <div className="signup_container">
          <h2 className="headings">Sign Up</h2>
          {successMessage && (
            <div className="success-message">{successMessage}</div>
          )}
          {errors.general && (
            <div className="error-message">{errors.general}</div>
          )}
          <form onSubmit={handleSubmit} className="form_container" method="POST">
            <div>
              <label htmlFor="userName" className="label_heading">
                Name:
              </label>
              <input
                type="text"
                id="userName"
                name="userName" // Ensure this matches formData
                value={formData.userName}
                onChange={handleChange}
                className="input_field"
                required
              />
              {errors.userName && (
                <div className="error-message">{errors.userName}</div>
              )}
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="input_field"
                required
              />
              {errors.email && (
                <div className="error-message">{errors.email}</div>
              )}
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="input_field"
                required
              />
              {errors.password && (
                <div className="error-message">{errors.password}</div>
              )}
            </div>
            <div className="btn">
              <button type="submit" className="button_signup">
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
