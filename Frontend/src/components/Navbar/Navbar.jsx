import React, { useContext, useState } from 'react'
import './Navbar.css'
import {assets} from "../../assets/assets.js";
import { Link, useNavigate } from 'react-router';
import { StoreContext } from '../../context/StoreContext.jsx';

const Navbar = ({setShowLogin}) => {

    const [menu,setMenu] = useState("Menu");
    const  {getTotalCartAmount,token,setToken} = useContext(StoreContext);
    const navigate = useNavigate();

    const logout = ()=>{
      localStorage.removeItem("token");
      setToken("");
      navigate("/");
    }
  return (
    <div className='navbar'>
      <Link to='/'><img src={assets.new_logo} className='logo'/></Link>
      <ul className="navbar-menu">
        
        <Link to="/" onClick={()=>{setMenu("Home")}} className={menu==="Home"?"active":""}>Home</Link>
        <a href='#explore-menu' onClick={()=>setMenu("Menu")} className={menu==="Menu"?"active":""}>Menu</a>
        <a href='#footer' onClick={()=>{setMenu("Contact-us")}} className={menu==="Contact-us"?"active":""}>Contact us</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} />
        <div className="navbar-search-icon">
        <Link to='/cart' ><img src={assets.basket_icon} alt="" className="" /></Link>
            <div className={getTotalCartAmount()===0?"":"dot"}></div>
        </div>
        {!token ? <Link to={"/"} className='btn' onClick={()=>{setShowLogin(true)}}>Sign in</Link>
         :<div className='navbar-profile'>
          <img src={assets.profile_icon} alt="" />
          <ul className="nav-profile-dropdown">
            <li><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
            <hr />
            <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
          </ul>
          </div> }
        
      </div>
    </div>
  )
}

export default Navbar
