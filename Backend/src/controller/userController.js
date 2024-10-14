// import user from "../model/userSchema";

const userModel = require("../model/userSchema");

exports.signup = async (req, res) => {
 if (!req.body) {
    return res.status(400).json({ msg: "Request body is missing" });
  }

  const { userName, email, password } = req.body;

  // Validate input fields
  if (!userName || !email || !password) {
    return res.status(400).json({ msg: "Please provide all required fields" });
  }

  console.log(req.body);

  try {
    // Check if email already exists
    const checkEmail = await userModel.findOne({ email });
    if (checkEmail) {
      return res.status(401).json({ msg: "Email already exists" });
    }

    // Create new user
    const newUser = new userModel({
      userName,
      email,
      password, // Consider hashing the password before saving
    });

    const saveUser = await newUser.save();
    res.status(200).json({ msg: "User created successfully" });
  } catch (error) {
    res.status(500).json({ msg: "Error creating user", error: error.message });
  }
};





// SIGNIN..................

exports.signin = async(req , res) =>{
  const {email , password} = req.body
  if(!req.body){
    console.log("fill the body")
  }
    
  try {
    const checkEmail = await userModel.findOne({email})
    const userPassword = await userModel.findOne({password})
  if(!checkEmail) return res.status(404).json({ msg:"Email Does not exit" })
  if(!userPassword){
    // console.log("password does not match")
    res.status(404).json({msg:"password does not match"})
  }
    res.status(200).json({msg:"log in successfull"})
  } catch (error) {
    console.log("fill the right.....")
  }
}