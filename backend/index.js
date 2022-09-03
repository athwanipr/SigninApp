const mongoose = require('mongoose');
const User = require('./model');
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 8080;

app.listen(PORT,()=>{
    console.log(`Server running at ${PORT}`);
})

app.use(cors());

app.get("/", (req, res) => {
    res.status(200).json({ msg: "welcome" });
  });

  app.get("/login", async (req, res) => {
    const email = req.query.email;
    const user = await User.findOne({ email });
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ error: "User not found" });
    }
  });
  
mongoose.connect('mongodb://localhost:27017/registeredUsers')
.then(()=>{
    console.log("Connection Successful")
})
.catch((err)=>{
 console.log(err);
})

// const user = new User({
//     name:"priyanka",
//     email:"abc@gmail.com",
//     password:"11111111"
// });

// user.save()
// .then(()=>{
//     console.log("details saved");
// })
// .catch(()=>{
//     console.log("user details are not pushed");
// })