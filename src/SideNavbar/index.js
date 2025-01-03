import React,{useState}from 'react'
import {Link,useLocation} from "react-router-dom"
import { MdHome } from "react-icons/md";
import { BsDatabaseFillAdd } from "react-icons/bs";
import { MdHelpCenter } from "react-icons/md";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { VscCircleFilled } from "react-icons/vsc";
import './index.css'

const SideNavbar = (props) => {
    const location = useLocation();
    const {navOpen,toggleNav} = props
    const [isDropdownOpen,SetDropdownOpen] = useState(false)
    const [activeNav,setActivenav] = useState("Home")

    const getActiveClass = (path) => {
        return location.pathname === path ? 'active' : '';
      };

    const handleNavClick = (event) => {
        setActivenav(event.target.id);
      };

    const toggleDropdown = () =>{
        SetDropdownOpen(!isDropdownOpen)
    }

    const handleClose = () =>{
        toggleNav(false)
    }

    console.log(activeNav)

  return (
    <nav className={`sm-sidenavbar-cont ${navOpen ? "open" : "closed"}`}>
  <div className='sm-sidenavbar-logocont'>
    <span>
      <img className='sm-sidenavbar-logoicon' src="https://res.cloudinary.com/dlb0k0ebr/image/upload/v1735795391/digitrac_short_logo_xx6xt6.png" alt="logo" />
      <img className='sm-sidenavbar-logoname' src="https://res.cloudinary.com/dlb0k0ebr/image/upload/v1735743061/9652keydraft41_f9jylt.png" alt="logo name"/>
    </span>
    <IoMdClose onClick={handleClose} className='sm-navbar-closebtn' color="#4c4e64de" size="20"/>
    <MdKeyboardDoubleArrowLeft className="sm-navbar-arrow" color="#4c4e64de" size="20" />
  </div>
<ul className='sm-sidenavbar-list'>
        <Link to="/"><li id="Home" className={`sm-sidenavbar-listitem ${getActiveClass('/')}`} onClick={handleNavClick}><MdHome size="24" color={getActiveClass('/') === "active" ? "#ffffff" : "#4c4e64de"}/><p className={`sm-sidenav-linktext ${getActiveClass('/')}-text`}>Home</p></li></Link>
    <li>
      <div className='sm-sidenavbar-listdropdown' onClick={toggleDropdown}><BsDatabaseFillAdd size="24" color="#4c4e64de"/><p className='sm-sidenav-linktext'>Masters</p></div>
      {isDropdownOpen && (
        <ul>
          <Link to="/master/branch"><li id="Branch" className={`sm-sidenavbar-listitem ${getActiveClass('/master/branch')}`} onClick={handleNavClick}><VscCircleFilled color={getActiveClass('/master/branch') === "active" ? "#ffffff" : "#4c4e64de"}/><p className={`sm-sidenav-linktext ${getActiveClass('/master/branch')}-text`}>Branch</p></li></Link>
        </ul>
      )}
    </li>
<Link to="/help"><li id="Help" onClick={handleNavClick} className={`sm-sidenavbar-listitem ${getActiveClass('/help')}`}><MdHelpCenter size="24" color={getActiveClass('/help') === "active" ? "#ffffff" : "#4c4e64de"} /><p className={`sm-sidenav-linktext ${getActiveClass('/help')}-text`}>Help</p></li></Link>
  </ul>

</nav>

     )
}

export default SideNavbar