import { BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Logout from "./pages/Logout"
import Navbar from "./components/Navbar"

const App = () => {
  return (
  
     <BrowserRouter>
      <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/register" element={<Register/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/logout" element={<Logout/>} />
            </Routes>
     </BrowserRouter>
  
  )
}

export default App