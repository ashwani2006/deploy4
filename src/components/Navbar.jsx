import {NavLink} from "react-router-dom"

const Navbar = () => {
  return (
    <div>
         <ul>
            <li><NavLink to={"/"}>Home</NavLink></li>
            <li><NavLink to={"/Register"}>Register</NavLink></li>
            <li><NavLink to={"/Login"}>Login</NavLink></li>
            <li><NavLink to={"/logout"}>Logout</NavLink></li>
         </ul>
    </div>
  )
}

export default Navbar;