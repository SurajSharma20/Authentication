import apiConfig from "./apiConfig";
const BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

// Construct the correct endpoint URL
const URI = BASE_URL + apiConfig.signup.endpoint;
const method = apiConfig.signup.methods; // Ensure this is "POST"

export const signUp = async (userdata) => {
  try {
    const res = await fetch(URI, {
      method, // Use method correctly (should be POST or another method allowing body)
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userdata), // Only allowed with POST, PUT, PATCH, DELETE
    });

    // Handle successful request
    if (res.ok) {
      console.log("Request is Successful");
    } else {
      // Handle non-success responses
      const errorData = await res.json();
      console.error("Request failed with status:", res.status, "and message:", errorData);
    }
  } catch (error) {
    console.error("Error")}}



    // SIGNIN....................................



const signInUrl = BASE_URL + apiConfig.signin.endpoint
const methodSignin = apiConfig.signin.method


export const signin = async(credential) =>{
  try {
    const res = await fetch(signInUrl , {
      method:"POST" , 
      headers : {
        "Content-Type" :"application/json"
      },
      body: JSON.stringify(credential)
    })
    if(res.ok){
      console.log("signin is successfull")
    }else{
      const errorData = await res.json()
      console.log( "Request failed with satauts" , res.status ,   errorData.msg)
    }
  } catch (error) {
    console.log(error.message)
  }
}