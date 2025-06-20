import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
      <div className="header-contents">
        <h2>Order your favorite food here</h2>
        <p>Craving something delicious? Order now and let the feast come to you! 
        </p>
        <button onClick={()=>setMenu("Menu")}>View Menu</button>
      </div>
    </div>
  )
}

export default Header
