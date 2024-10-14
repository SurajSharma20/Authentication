import React from "react";
import Signup from "./page/signUpPage/Signup";
import Login from "./page/logInPage/Login";
import ForgotPassword from "./page/forgotPasswordPage/ForgotPassword";
import Navbar from "./components/navbar/Navbar";
import Home from "./page/Home/Home";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {
  
  const routers = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <Navbar />
          <Signup />
        </div>
      ),
    },
    {
      path: "login",
      element: (
        <div>
          <Navbar />
          <Login />
        </div>
      ),
    },
    {
      path: "forgotpassword", // Corrected path here
      element: (
        <div>
          <Navbar />
          <ForgotPassword />
        </div>
      ),
    },
    {
      path: "home", // Corrected path here
      element: (
        <div>
          <Navbar />
          <Home/>
        </div>
      ),
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={routers} />
    </div>
  );
}

export default App;
