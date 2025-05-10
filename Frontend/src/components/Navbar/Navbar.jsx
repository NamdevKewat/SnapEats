import React, { useContext, useState } from 'react'
import './Navbar.css'
import {assets} from "../../assets/assets.js";
import { Link } from 'react-router';
import { StoreContext } from '../../context/StoreContext.jsx';

const Navbar = ({setShowLogin}) => {

    const [menu,setMenu] = useState("Menu");
    const  {getTotalCartAmount} = useContext(StoreContext);

  return (
    <div className='navbar'>
      <Link to='/'><img src={assets.new_logo} className='logo'/></Link>
      <ul className="navbar-menu">
        
        <Link to="/" onClick={()=>{setMenu("Home")}} className={menu==="Home"?"active":""}>Home</Link>
        <a href='#explore-menu' onClick={()=>setMenu("Menu")} className={menu==="Menu"?"active":""}>Menu</a>
        <a href='#app-download' onClick={()=>setMenu("Mobile-app")} className={menu==="Mobile-app"?"active":""}>Mobile-app</a>
        <a href='#footer' onClick={()=>{setMenu("Contact-us")}} className={menu==="Contact-us"?"active":""}>Contact us</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} />
        <div className="navbar-search-icon">
        <Link to='/cart' ><img src={assets.basket_icon} alt="" className="" /></Link>
            <div className={getTotalCartAmount()===0?"":"dot"}></div>
        </div>
        <Link to={"/signup"} className='btn' onClick={()=>{setShowLogin(true)}}>Sign in</Link>
      </div>
    </div>
  )
}

export default Navbar
