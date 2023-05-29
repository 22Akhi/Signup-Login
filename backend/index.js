

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config()


const app = express();
app.use(cors());
app.use(express.json({limit : "10mb"}))


const PORT = process.env.PORT || 8080;

//mongodb connection
mongoose.set('strictQuery', false)
console.log(process.env.MONGODB_URL)
mongoose.connect(process.env.MONGODB_URL)
.then (() => console.log("Connected to Database"))
.catch((err)=> console.log(err))

//schema

const userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email:{
        type: String,
        unique: true,
    } ,
    password: String,
    confirmPassword: String,
    image: String
})


//
const userModel = mongoose.model("user", userSchema )
console.log(userModel)

//api 
app.get("/", (req, res) => {
  res.send("Server is running");
});

//api sign up

app.post

app.post("/signup", async (req, res) => {
    console.log(req.body);
    const { email } = req.body;
  
    try {
      const result = await userModel.findOne({ email: email });
      console.log("here1",result);
      if (result) {
        console.log("registered alreay");
        res.send({ message: "Email id is already registered", alert: false });
      } else {
        const data = new userModel(req.body);
        await data.save();
        res.send({ message: "Successfully signed up",  alert: true });
        console.log("registration successful");
      }
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: "An error occurred" });
    }
  });


app.post("/login", async (req, res) => {
    try {
      const { email } = req.body;
      const result = await userModel.findOne({ email: email }).exec();
      
      if (result) {
        const dataSend = {
          _id: result._id,
          firstName: result.firstName,
          lastName: result.lastName,
          email: result.email,
          image: result.image,
        };
  
        console.log(dataSend);
        res.send({
          message: "Login is successful",
          alert: true,
          data: dataSend,
        });
      } else {
        res.send({
          message: "Email is not available, please sign up",
          alert: false,
        });
      }
    } catch (err) {
      // Handle any potential errors
      console.error(err);
      res.status(500).send("Internal Server Error");
    }
  });



app.listen(PORT, () => console.log("Server is running at port: " + PORT));