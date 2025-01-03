import React, { useState } from 'react'
import './index.css'
import { GiHamburgerMenu } from "react-icons/gi";
import SideNavbar from '../SideNavbar';



const Navbar = () => {
    const [isSideNavOpen ,SetSideNavOpen] = useState()
    

    const toggleHamburger = () =>{
        SetSideNavOpen(true)
    }


  return (
    <header className='navbar-section'>
        <nav className='small-navbar-cont'>
            <span>
                <GiHamburgerMenu className="small-navbar-hamburger" size="25" color="#4c4e64de" onClick={toggleHamburger}/>
            </span>
            <SideNavbar navOpen={isSideNavOpen} toggleNav={SetSideNavOpen}/>
            <div className='small-navbar-profile'>
                <img className="small-navbar-profile-img" src="https://res.cloudinary.com/dlb0k0ebr/image/upload/v1735737413/keydraft_avatar_ldpase.png" alt="profile img" />
                <p className="small-navbar-profile-text">Dhanraj</p>
            </div>
        </nav>

    </header>
    
  )
}

export default Navbar