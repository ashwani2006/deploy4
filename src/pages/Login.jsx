import React,{useState} from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const [value, setValue] = useState({username:"", password:""})

  const handleSubmit = async(e) =>{
    e.preventDefault();
        
    try {

       await  axios.post("http://localhost:3000/api/auth/login", value ,{ withCredentials:true })
       

  
       alert('user loggedin')
       navigate("/")

    } catch (error) {

      if(error.response?.status === 404) return alert("user not found")
      else if(error.response?.status === 401) return alert("invalid password ")
      else  return alert("error in login")

    }  
  }

  return (
    <div>
       <h1>Login</h1>

       <form action="" onSubmit={handleSubmit}>
           <input type="text" placeholder='usenrame'  onChange={(e) =>{ setValue({...value , username:e.target.value})}}/>
           <input type="text" placeholder='password'  onChange={(e) =>{ setValue({...value  , password:e.target.value})}}/>
           <button type='submit'>Loggedin</button>
       </form>

       <p>username {value.username}</p>
       <p>password {value.password}</p>
    </div>
  )
}

export default Login;