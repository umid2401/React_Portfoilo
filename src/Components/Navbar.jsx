import React, { useState } from "react"
import "../Styles/Navbar.scss";

import { Link } from "react-router-dom"
import { FaBars, FaCode, FaInstagram } from "react-icons/fa"
import { ImCross } from "react-icons/im"
import Home from "./Home";


const Navbar = () => {
  const [Mobile, setMobile] = useState(false)
  return (
    
      <div className="navbarmenu">
        <div className='navbar'>
          <div>
          <Link to="/" className='logo'><FaCode /> <h3 >Umid</h3></Link>
          </div>

          <div>
          <ul className={Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}>
           
            <Link to='/about' className='link'>
              <li className="linkn">About</li>
            </Link>
            <Link to='/skills' className='link'>
              <li className="linkn">Skills</li>
            </Link>
            <Link to='/work' className='link'>
              <li className="linkn">Work</li>
            </Link>
            <Link to='/contact' className='link'>
              <li className="linkn">Contact</li>
            </Link>
           
          </ul>
          </div>

          <div>
          <button className='mobile-menu-icon' onClick={() => setMobile(!Mobile)}>
            {Mobile ? <ImCross /> : <FaBars color="#61DAFB" />}
          </button>
          </div>
        </div>

      </div>
      
    


  )

}
export default Navbar;