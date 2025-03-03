import axios from 'axios'

const Logout = () => {

  const handleLogout = async()=>{
    await axios.post("http://localhost:3000/api/auth/logout",{},  {withCredentials:true})
  }

  return (
    <div>
       <h1>Logedout</h1>

       <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Logout;