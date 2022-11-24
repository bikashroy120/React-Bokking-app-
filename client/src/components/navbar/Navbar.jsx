import "./navbar.css"
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{color:"#fff",textDecoration:"none"}}><span className="logo">lamabooking</span></Link>
        <div className="navItems">
          <button className="navButton"><Link to="/signup" style={{textDecoration:"none"}}>Register</Link></button>
          <button className="navButton"><Link to="/login" style={{textDecoration:"none"}}>Login</Link></button>
        </div>
      </div>
    </div>
  )
}

export default Navbar