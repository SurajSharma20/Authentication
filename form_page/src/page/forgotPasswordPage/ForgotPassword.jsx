import React, { useState } from "react";
import './forgot.css'

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You'd send `email` to your server here to initiate the password reset process.
    setMessage(
      "If an account with this email exists, you will receive a password reset link shortly."
    );
    console.log("Password reset requested for:", email);
  };

  return (
    <div className="forgotpassword">
    <div className=" signUp_main_Container forgotpassword">
    <div className="forgot_password_containers ">
      <h2 className="heading">Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email" className="labalHeadings">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
            className="input_field"
            required
          />
        </div>
        <div className="btns">
        <button type="submit" className="forgot_btn">Send Reset Link</button>
        </div>
      </form>
      {message && <p>{message}</p>}
    </div>
    </div>
    </div>
  );
}

export default ForgotPassword;

