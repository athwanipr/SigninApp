import React from 'react';
import axios from 'axios';
import logo from './logo2.jpg';

import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin=async (e)=>{
      e.preventDefault();
      const email = document.querySelector("#exampleInputEmail1").value;
    const password = document.querySelector("#exampleInputPassword1").value;
    console.log(email + " " + password);

    try{
      const response = await axios({
        method:"get",
        url:"http://localhost:8080/login/",
        params:{email}

      });

      console.log(response);

      if(password==response.data.password){
        alert("Welcome User");
        navigate('./Profile');
      }
      else{
        alert("Invalid password")
      }
    } catch(err){
      console.log(err);
    }

    }
  
  return (
    <div className="container text-center">
      <main className="form-signin w-50 m-auto">
      <img className="mb-4 mt-5" src={logo} alt="" width="100" height="100" />
        <form onSubmit={handleLogin}>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
   
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  
  <button type="submit" className="btn btn-primary my-4">Login</button>
  <br />
  <button type="submit" className="btn btn-primary">SignUp</button>
</form>
</main>
    </div>
  )
}
