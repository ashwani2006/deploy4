import React,{useState} from 'react'
import axios from "axios"
import {useNavigate} from "react-router-dom"


const Register = () => {
  const navigate = useNavigate();

  const [value, setValue] = useState({username:"", password:""})


  const handleSubmit = async(e) =>{
    e.preventDefault();

    // check the all feilds are full or not
    if(!value.username || !value.password)  return alert("pls fill the both feilds")

    try {

     await axios.post("http://localhost:3000/api/auth/register", value, {withCredentials:true});
      alert("Account created")
      navigate("/login")

    } catch (error) {
      
      if(error.response?.status === 409) return alert("username already exist");
      else  return alert("error in server side")
 
    }
  }


  return (
    <div>
       <h1>Register form</h1>


        <form action="" onSubmit={handleSubmit}>
            <input type="text" placeholder='username' onChange={(e) =>{setValue({...value, username:e.target.value})}}/>
            <input type="text" placeholder='password' onChange={(e) =>{setValue({...value, password:e.target.value})}}/>
            <button>Submit</button>
        </form>

     
    </div>
  )
}

export default Register;