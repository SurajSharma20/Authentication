import React, { useState } from "react";
import "./login.css";
import axios from "axios";
import {   useNavigate } from "react-router-dom";
import { signin } from "../../api/apiService";
import { useRouter } from "next/navigation";  

function Login() {
 const navigate = useNavigate()
  const [formData, setFormData] = useState({
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
 
  const handleSubmit = async(e) =>{
    e.preventDefault()
   try {
    const responce = await signin(formData )
    if(responce.status === 200){
      setTimeout(() => {
        navigate("/login"); // Navigate to the signing page
      }, 1000);
    }
    // console.log(logInData) 
   } catch (error) {
    console.log(error)  
   }
  }

  return (
    <div className="login">
      <div className="signUp_main_Container login">
        <div className="login_containers">
          <h2 className="heading logInHeading">Login</h2>
          <form onSubmit={handleSubmit} method="POST">
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="input_field logInInputField"
                required
              />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="input_field logInInputField"
                required
              />
            </div>
            <div className="btn">
              <button type="submit" className="button_signup btnLogin">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
